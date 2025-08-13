import { useState } from 'react';
import { Calendar, Users, Phone, Mail, User, CreditCard, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import RazorpayPayment from '@/components/RazorpayPayment';

const Book = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: '',
    guests: '',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Submitted!",
      description: "We'll confirm your reservation within 24 hours. You can also talk to Jesika for instant assistance.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Calculate pricing based on room type and dates
  const getRoomPrice = (roomType: string): number => {
    switch (roomType) {
      case 'standard': return 999;
      case 'deluxe': return 1499;
      case 'luxury': return 1999;
      default: return 0;
    }
  };

  const calculateTotal = (): { totalAmount: number; numberOfNights: number; advanceAmount: number } => {
    if (!formData.checkIn || !formData.checkOut || !formData.roomType) {
      return { totalAmount: 0, numberOfNights: 0, advanceAmount: 0 };
    }

    const checkIn = new Date(formData.checkIn);
    const checkOut = new Date(formData.checkOut);
    const timeDiff = checkOut.getTime() - checkIn.getTime();
    const numberOfNights = Math.ceil(timeDiff / (1000 * 3600 * 24));
    
    if (numberOfNights <= 0) {
      return { totalAmount: 0, numberOfNights: 0, advanceAmount: 0 };
    }

    const roomPrice = getRoomPrice(formData.roomType);
    const totalAmount = roomPrice * numberOfNights;
    const advanceAmount = Math.round(totalAmount / 2); // 50% advance

    return { totalAmount, numberOfNights, advanceAmount };
  };

  const { totalAmount, numberOfNights, advanceAmount } = calculateTotal();

  // Check if form is valid for payment
  const isFormValid = formData.name && formData.email && formData.phone && 
                     formData.checkIn && formData.checkOut && formData.roomType && 
                     formData.guests && totalAmount > 0;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-playfair font-bold text-foreground mb-6 animate-fade-in">
              Book Your <span className="text-gradient-gold">Perfect Stay</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              Reserve your room at Kumar Hotel and experience luxury hospitality. 
              Complete the form below or ask Jesika for instant booking assistance.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="card-luxury p-8">
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-8">
                  Reservation Details
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>Full Name *</span>
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter your full name"
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>Email Address *</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="Enter your email"
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>Phone Number *</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 9917132288"
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="guests" className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>Number of Guests *</span>
                      </Label>
                      <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                        <SelectTrigger className="border-border focus:border-primary">
                          <SelectValue placeholder="Select guests" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                          <SelectItem value="3">3 Guests</SelectItem>
                          <SelectItem value="4">4 Guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Booking Dates */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="checkin" className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>Check-in Date *</span>
                      </Label>
                      <Input
                        id="checkin"
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => handleInputChange('checkIn', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="checkout" className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>Check-out Date *</span>
                      </Label>
                      <Input
                        id="checkout"
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => handleInputChange('checkOut', e.target.value)}
                        min={formData.checkIn || new Date().toISOString().split('T')[0]}
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Room Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="roomtype">Room Type *</Label>
                    <Select value={formData.roomType} onValueChange={(value) => handleInputChange('roomType', value)}>
                      <SelectTrigger className="border-border focus:border-primary">
                        <SelectValue placeholder="Select room type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard Room - ₹999/night</SelectItem>
                        <SelectItem value="deluxe">Deluxe Room - ₹1,499/night</SelectItem>
                        <SelectItem value="luxury">Luxury Suite - ₹1,999/night</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-2">
                    <Label htmlFor="requests">Special Requests</Label>
                    <Textarea
                      id="requests"
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      placeholder="Any special requirements or requests..."
                      className="border-border focus:border-primary"
                      rows={4}
                    />
                  </div>

                  {isFormValid && totalAmount > 0 ? (
                    <div className="space-y-4">
                      {/* Payment Summary */}
                      <div className="bg-accent/20 p-4 rounded-lg border border-border">
                        <div className="flex items-center space-x-2 mb-3">
                          <Info className="w-4 h-4 text-primary" />
                          <span className="font-semibold text-foreground">Payment Summary</span>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Room: {formData.roomType.charAt(0).toUpperCase() + formData.roomType.slice(1)}</span>
                            <span>₹{getRoomPrice(formData.roomType)}/night</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Duration: {numberOfNights} {numberOfNights === 1 ? 'night' : 'nights'}</span>
                            <span></span>
                          </div>
                          <div className="flex justify-between font-semibold border-t pt-2">
                            <span>Total Amount:</span>
                            <span>₹{totalAmount}</span>
                          </div>
                          <div className="flex justify-between text-primary font-semibold">
                            <span>Advance Payment (50%):</span>
                            <span>₹{advanceAmount}</span>
                          </div>
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>Remaining at Check-in:</span>
                            <span>₹{totalAmount - advanceAmount}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <RazorpayPayment
                          paymentData={{
                            name: formData.name,
                            email: formData.email,
                            phone: formData.phone,
                            roomType: formData.roomType,
                            checkIn: formData.checkIn,
                            checkOut: formData.checkOut,
                            guests: formData.guests,
                            specialRequests: formData.specialRequests,
                            totalAmount,
                            advanceAmount
                          }}
                          onSuccess={() => {
                            toast({
                              title: "Booking Confirmed!",
                              description: `🎉 Congratulations ${formData.name}, your booking is confirmed!`,
                            });
                          }}
                          onError={(error) => {
                            toast({
                              title: "Payment Failed",
                              description: error || "Unable to process payment. Please try again.",
                              variant: "destructive",
                            });
                          }}
                        />

                        <RazorpayPayment
                          paymentType="gift"
                          amountOverride={10}
                          label="Send a Gift 🎁 ₹10"
                          paymentData={{
                            name: formData.name,
                            email: formData.email,
                            phone: formData.phone,
                            roomType: formData.roomType,
                            checkIn: formData.checkIn,
                            checkOut: formData.checkOut,
                            guests: formData.guests,
                            specialRequests: formData.specialRequests,
                            totalAmount,
                            advanceAmount
                          }}
                          onSuccess={() => {
                            toast({
                              title: "Thank You!",
                              description: `Thank you, ${formData.name}, for your kind gift to Kumar Hotel 💛`,
                            });
                          }}
                          onError={(error) => {
                            toast({
                              title: "Gift Not Completed",
                              description: error || "We couldn’t process your gift this time. Please try again.",
                              variant: "destructive",
                            });
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <Info className="w-6 h-6 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground text-sm">
                        Please fill all required fields to proceed with payment
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Booking Summary & Contact */}
            <div className="space-y-8">
              {/* Room Pricing */}
              <div className="card-luxury p-6">
                <h3 className="text-xl font-playfair font-semibold mb-6">Room Pricing</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <div>
                      <div className="font-medium">Standard Room</div>
                      <div className="text-sm text-muted-foreground">Queen bed, Free WiFi, AC</div>
                    </div>
                    <div className="text-primary font-semibold">₹999</div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <div>
                      <div className="font-medium">Deluxe Room</div>
                      <div className="text-sm text-muted-foreground">King bed, City view, Mini bar</div>
                    </div>
                    <div className="text-primary font-semibold">₹1,499</div>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <div className="font-medium">Luxury Suite</div>
                      <div className="text-sm text-muted-foreground">Separate living area, Premium</div>
                    </div>
                    <div className="text-primary font-semibold">₹1,999</div>
                  </div>
                </div>
              </div>

              {/* Contact Options */}
              <div className="card-luxury p-6">
                <h3 className="text-xl font-playfair font-semibold mb-6">Need Immediate Help?</h3>
                <div className="space-y-4">
                  <button className="w-full btn-royal text-left">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-semibold">Call Directly</div>
                        <div className="text-sm text-secondary-foreground/80">+91 9917132288</div>
                      </div>
                    </div>
                  </button>

                  <button 
                    onClick={() => {
                      const convaiWidget = document.querySelector('elevenlabs-convai');
                      if (convaiWidget && convaiWidget.shadowRoot) {
                        const button = convaiWidget.shadowRoot.querySelector('button');
                        if (button) button.click();
                      }
                    }}
                    className="w-full btn-elegant text-left"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-sm">J</span>
                      </div>
                      <div>
                        <div className="font-semibold">Ask Jesika</div>
                        <div className="text-sm text-muted-foreground">AI Assistant for instant help</div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Policies Reminder */}
              <div className="card-luxury p-6">
                <h3 className="text-xl font-playfair font-semibold mb-4">Important Notes</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2"></div>
                    Check-in: 12:00 PM, Check-out: 11:00 AM
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2"></div>
                    ID verification required at check-in
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2"></div>
                    50% refund for cancellations 24 hrs prior
                  </li>
                  <li className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2"></div>
                    Advance booking confirmation required
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Book;