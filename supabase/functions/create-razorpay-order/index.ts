import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface OrderRequest {
  amount: number;
  currency?: string;
  receipt?: string;
  notes?: any;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { amount, currency = 'INR', receipt, notes }: OrderRequest = await req.json();

    console.log('Creating Razorpay order:', { amount, currency, receipt, notes });

    // Get Razorpay credentials from environment
    const keyId = 'rzp_test_R5M6EHWTJ7qGHZ';
    const keySecret = Deno.env.get('RAZORPAY_SECRET_KEY');

    console.log('Key ID:', keyId);
    console.log('Secret key available:', keySecret ? 'Yes' : 'No');

    if (!keySecret) {
      console.error('Razorpay secret key not found in environment variables');
      console.error('Available env vars:', Object.keys(Deno.env.toObject()));
      return new Response(
        JSON.stringify({ error: 'Razorpay configuration missing' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Create Basic Auth header
    const auth = btoa(`${keyId}:${keySecret}`);

    // Create order with Razorpay API
    const orderData = {
      amount: amount * 100, // Convert to paise
      currency,
      receipt: receipt || `order_${Date.now()}`,
      notes: notes || {}
    };

    console.log('Sending order data to Razorpay:', orderData);

    const response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    const responseText = await response.text();
    console.log('Razorpay response:', response.status, responseText);

    if (!response.ok) {
      console.error('Razorpay API error:', response.status, responseText);
      return new Response(
        JSON.stringify({ error: 'Failed to create order', details: responseText }),
        { 
          status: response.status, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const order = JSON.parse(responseText);
    console.log('Order created successfully:', order.id);

    return new Response(
      JSON.stringify({
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
        keyId: keyId
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Edge function error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});