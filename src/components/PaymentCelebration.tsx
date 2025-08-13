import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PaymentCelebrationProps {
  open: boolean;
  title: string;
  message: string;
  onClose: () => void;
  duration?: number; // milliseconds
}

const PaymentCelebration = ({ open, title, message, onClose, duration = 4000 }: PaymentCelebrationProps) => {
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(onClose, duration);
    return () => clearTimeout(t);
  }, [open, duration, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <Card className="w-[92%] max-w-md shadow-2xl border-border bg-card/95">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-playfair text-foreground">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center text-base text-muted-foreground">
            {message}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentCelebration;
