import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Loader2 } from 'lucide-react';

interface PaymentData {
  name: string;
  email: string;
  phone: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  specialRequests?: string;
  totalAmount: number;
  advanceAmount: number;
}

interface RazorpayPaymentProps {
  paymentData: PaymentData;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const RazorpayPayment = ({ paymentData, onSuccess, onError }: RazorpayPaymentProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const sendWebhookData = async (paymentDetails: any) => {
    try {
      const webhookData = {
        customer_name: paymentData.name,
        customer_email: paymentData.email,
        customer_phone: paymentData.phone,
        room_type: paymentData.roomType,
        check_in: paymentData.checkIn,
        check_out: paymentData.checkOut,
        guests: paymentData.guests,
        special_requests: paymentData.specialRequests || '',
        total_price: paymentData.totalAmount,
        paid_amount: paymentData.advanceAmount,
        payment_status: 'paid',
        razorpay_payment_id: paymentDetails.razorpay_payment_id,
        razorpay_order_id: paymentDetails.razorpay_order_id,
        razorpay_signature: paymentDetails.razorpay_signature,
        booking_date: new Date().toISOString(),
        payment_type: 'advance'
      };

      await fetch('https://n8n.srv907955.hstgr.cloud/webhook-test/09675abe-1b05-4a53-b3e1-e1c56cde6c95', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData),
      });
    } catch (error) {
      console.error('Webhook error:', error);
    }
  };

  const handlePayment = async () => {
    setIsLoading(true);

    try {
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error('Razorpay SDK failed to load');
      }

      // Create order ID (in production, this should come from your backend)
      const orderId = `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      const options = {
        key: 'rzp_live_iPfvysNSuplCpH',
        amount: paymentData.advanceAmount * 100, // Amount in paise
        currency: 'INR',
        name: 'Kumar Hotel',
        description: `Room Booking Advance - ${paymentData.roomType}`,
        order_id: orderId,
        prefill: {
          name: paymentData.name,
          email: paymentData.email,
          contact: paymentData.phone,
        },
        theme: {
          color: '#D4AF37',
        },
        handler: async function (response: any) {
          try {
            // Send data to webhook
            await sendWebhookData(response);
            
            toast({
              title: "Payment Successful!",
              description: `Advance payment of ₹${paymentData.advanceAmount} completed successfully. Your booking is confirmed!`,
            });
            
            onSuccess?.();
          } catch (error) {
            console.error('Payment processing error:', error);
            toast({
              title: "Payment Successful",
              description: "Payment completed but there was an issue with booking confirmation. Please contact us.",
              variant: "destructive",
            });
          }
        },
        modal: {
          ondismiss: function() {
            toast({
              title: "Payment Cancelled",
              description: "Payment was cancelled. Your booking is not confirmed.",
              variant: "destructive",
            });
            setIsLoading(false);
          }
        },
        notes: {
          room_type: paymentData.roomType,
          check_in: paymentData.checkIn,
          check_out: paymentData.checkOut,
          guests: paymentData.guests,
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.on('payment.failed', function (response: any) {
        toast({
          title: "Payment Failed",
          description: response.error.description || "Payment failed. Please try again.",
          variant: "destructive",
        });
        onError?.(response.error.description);
        setIsLoading(false);
      });

      razorpay.open();
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Error",
        description: "Unable to process payment. Please try again.",
        variant: "destructive",
      });
      onError?.(error instanceof Error ? error.message : 'Payment failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handlePayment}
      disabled={isLoading}
      className="btn-luxury w-full"
      size="lg"
    >
      {isLoading ? (
        <>
          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          <CreditCard className="w-5 h-5 mr-2" />
          Pay Advance ₹{paymentData.advanceAmount}
        </>
      )}
    </Button>
  );
};

export default RazorpayPayment;