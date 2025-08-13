import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { CreditCard, Gift, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import party from 'party-js';
import PaymentCelebration from './PaymentCelebration';

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
  paymentType?: 'booking' | 'gift';
  amountOverride?: number;
  label?: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}


declare global {
  interface Window {
    Razorpay: any;
    fbq: any;
  }
}

const RazorpayPayment = ({ paymentData, paymentType = 'booking', amountOverride, label, onSuccess, onError }: RazorpayPaymentProps) => {
const [isLoading, setIsLoading] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [successTitle, setSuccessTitle] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const { toast } = useToast();

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      // Check if Razorpay is already loaded
      if (window.Razorpay) {
        console.log('Razorpay already loaded');
        resolve(true);
        return;
      }

      // Check if script already exists
      const existingScript = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
      if (existingScript) {
        console.log('Razorpay script already exists, waiting for load');
        existingScript.addEventListener('load', () => {
          console.log('Existing Razorpay script loaded');
          resolve(true);
        });
        existingScript.addEventListener('error', () => {
          console.error('Existing Razorpay script failed to load');
          resolve(false);
        });
        return;
      }

      console.log('Loading Razorpay script');
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        console.log('Razorpay script loaded successfully');
        resolve(true);
      };
      script.onerror = () => {
        console.error('Failed to load Razorpay script');
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const sendWebhookData = async (paymentDetails: any, paymentTypeToSend: 'booking' | 'gift', paidAmount: number) => {
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
        paid_amount: paidAmount,
        payment_status: 'paid',
        razorpay_payment_id: paymentDetails.razorpay_payment_id,
        razorpay_order_id: paymentDetails.razorpay_order_id,
        razorpay_signature: paymentDetails.razorpay_signature,
        booking_date: new Date().toISOString(),
        payment_type: paymentTypeToSend,
      };

      await fetch('https://n8n.srv907955.hstgr.cloud/webhook-test/kumarhotel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(webhookData),
      });
    } catch (error) {
      console.error('Webhook error:', error);
    }
  };
  const handlePayment = async () => {
    console.log('Starting payment process...');
    setIsLoading(true);

    try {
      console.log('Loading Razorpay script...');
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error('Razorpay SDK failed to load');
      }

      console.log('Razorpay script loaded, checking window.Razorpay...');
      if (!window.Razorpay) {
        throw new Error('Razorpay is not available on window object');
      }

      // Compute amount with a safe minimum for gifts (₹10)
      const baseAmount = amountOverride ?? (paymentType === 'gift' ? 10 : paymentData.advanceAmount);
      const paidAmount = paymentType === 'gift' ? Math.max(baseAmount, 10) : baseAmount;

      console.log('Payment data:', {
        amount: paidAmount,
        name: paymentData.name,
        email: paymentData.email,
        phone: paymentData.phone,
      });

      const descriptionText = paymentType === 'gift'
        ? 'Gift Payment - Thank you'
        : `Room Booking Advance - ${paymentData.roomType}`;

      const options = {
        key: 'rzp_live_iPfvysNSuplCpH', // Your actual live key
        amount: paidAmount * 100, // Amount in paise
        currency: 'INR',
        name: 'Kumar Hotel',
        description: descriptionText,
        prefill: {
          name: paymentData.name,
          email: paymentData.email,
        },
        readonly: {
          contact: true,
        },
        retry: {
          enabled: true,
          max_count: 1,
        },
        theme: {
          color: '#D4AF37',
        },
        handler: async function (response: any) {
          console.log('Payment successful:', response);
          
          // Track Meta Pixel Purchase event
          if (window.fbq) {
            window.fbq('track', 'Purchase', {
              value: paidAmount,
              currency: 'INR',
              content_name: paymentType === 'gift' ? 'Gift to Kumar Hotel' : `${paymentData.roomType} - Room Booking`,
              content_category: paymentType === 'gift' ? 'Gift' : 'Hotel Booking'
            });
          }
          
          try {
            // Send data to webhook
            await sendWebhookData(response, paymentType, paidAmount);

            // Celebration
            confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
            try { party.confetti(document.body); party.sparkles?.(document.body); } catch {}
            
            const isGift = paymentType === 'gift';
            setSuccessTitle(isGift ? `Thank you, ${paymentData.name}!` : `🎉 Congratulations ${paymentData.name}!`);
            setSuccessMessage(
              isGift
                ? `Thank you, ${paymentData.name}, for your kind gift to Kumar Hotel 💛`
                : `Your advance payment of ₹${paidAmount} is successful. Your booking is confirmed!`
            );
            setShowCelebration(true);
            
            toast({
              title: isGift ? 'Gift Received!' : 'Payment Successful!',
              description: isGift
                ? `Gift payment of ₹${paidAmount} completed successfully.`
                : `Advance payment of ₹${paidAmount} completed successfully. Your booking is confirmed!`,
            });
            
            onSuccess?.();
          } catch (error) {
            console.error('Payment processing error:', error);
            toast({
              title: paymentType === 'gift' ? 'Gift Processed, but…' : 'Payment Successful',
              description: paymentType === 'gift'
                ? 'Gift completed but there was an issue recording details. Please contact us.'
                : 'Payment completed but there was an issue with booking confirmation. Please contact us.',
              variant: 'destructive',
            });
          }
          setIsLoading(false);
        },
        modal: {
          ondismiss: function() {
            console.log('Payment modal dismissed');
            toast({
              title: paymentType === 'gift' ? 'Gift Cancelled' : 'Payment Cancelled',
              description: paymentType === 'gift'
                ? 'Gift payment was cancelled. You can try again anytime.'
                : 'Payment was cancelled. Your booking is not confirmed.',
              variant: 'destructive',
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

      console.log('Creating Razorpay instance with options:', options);
      const razorpay = new window.Razorpay(options);
      
      razorpay.on('payment.failed', function (response: any) {
        console.error('Payment failed:', response);
        toast({
          title: "Payment Failed",
          description: response.error.description || "Payment failed. Please try again.",
          variant: "destructive",
        });
        onError?.(response.error.description);
        setIsLoading(false);
      });

      console.log('Opening Razorpay checkout...');
      razorpay.open();
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Error",
        description: "Unable to process payment. Please try again.",
        variant: "destructive",
      });
      onError?.(error instanceof Error ? error.message : 'Payment failed');
      setIsLoading(false);
    }
  };

  return (
    <>
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
            {paymentType === 'gift' ? (
              <Gift className="w-5 h-5 mr-2" />
            ) : (
              <CreditCard className="w-5 h-5 mr-2" />
            )}
            {label ? (
              <span>{label}</span>
            ) : (
              <span>Pay Advance ₹{paymentData.advanceAmount}</span>
            )}
          </>
        )}
      </Button>

      <PaymentCelebration
        open={showCelebration}
        title={successTitle}
        message={successMessage}
        onClose={() => setShowCelebration(false)}
      />
    </>
  );
};

export default RazorpayPayment;