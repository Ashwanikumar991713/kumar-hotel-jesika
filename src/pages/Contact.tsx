import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours. For urgent inquiries, please call us directly.",
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-playfair font-bold text-foreground mb-6 animate-fade-in">
              Get in <span className="text-gradient-gold">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              We're here to help make your stay at Kumar Hotel exceptional. 
              Contact us for reservations, inquiries, or speak with Jesika for instant assistance.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Cards */}
              <div className="card-luxury p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-muted-foreground text-sm">Call us anytime</p>
                  </div>
                </div>
                <a 
                  href="tel:+919917132288" 
                  className="text-primary hover:text-primary-dark font-semibold text-lg transition-colors"
                >
                  +91 9917132288
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Available 24/7 for bookings and assistance
                </p>
              </div>

              <div className="card-luxury p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-muted-foreground text-sm">Send us a message</p>
                  </div>
                </div>
                <a 
                  href="mailto:ashwani.kumar991713@gmail.com" 
                  className="text-primary hover:text-primary-dark font-semibold transition-colors break-all"
                >
                  ashwani.kumar991713@gmail.com
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  We respond within 4-6 hours
                </p>
              </div>

              <div className="card-luxury p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Address</h3>
                    <p className="text-muted-foreground text-sm">Visit us</p>
                  </div>
                </div>
                <address className="not-italic text-foreground">
                  Near MG Road, Sector 17<br />
                  Noida, Uttar Pradesh<br />
                  India
                </address>
                <p className="text-sm text-muted-foreground mt-2">
                  Prime location with easy metro access
                </p>
              </div>

              <div className="card-luxury p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">AI Assistant</h3>
                    <p className="text-muted-foreground text-sm">Instant help</p>
                  </div>
                </div>
                <button className="text-primary hover:text-primary-dark font-semibold transition-colors">
                  Talk to Jesika
                </button>
                <p className="text-sm text-muted-foreground mt-2">
                  Get instant answers about rooms, menu, and bookings
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-luxury p-8">
                <h2 className="text-3xl font-playfair font-bold text-foreground mb-8">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">Name *</Label>
                      <Input
                        id="contact-name"
                        placeholder="Your full name"
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Email *</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Phone</Label>
                      <Input
                        id="contact-phone"
                        type="tel"
                        placeholder="+91 9917132288"
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-subject">Subject *</Label>
                      <Input
                        id="contact-subject"
                        placeholder="What is this regarding?"
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Tell us how we can help you..."
                      required
                      className="border-border focus:border-primary min-h-32"
                      rows={6}
                    />
                  </div>

                  <Button type="submit" className="btn-luxury w-full md:w-auto">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours & FAQ */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Business Hours */}
            <div className="card-luxury p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-playfair font-bold">Business Hours</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium">Reception Desk</span>
                  <span className="text-primary font-semibold">24/7</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium">Restaurant</span>
                  <span className="text-muted-foreground">7:00 AM - 10:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium">Room Service</span>
                  <span className="text-primary font-semibold">24/7</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium">Check-in</span>
                  <span className="text-muted-foreground">12:00 PM onwards</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium">Check-out</span>
                  <span className="text-muted-foreground">Until 11:00 AM</span>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="card-luxury p-8">
              <h2 className="text-2xl font-playfair font-bold mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Do you provide airport pickup service?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Yes, we can arrange airport transfers on request. Please contact us in advance to book this service.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Is parking available at the hotel?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Yes, we provide free parking for our guests. Valet parking is also available upon request.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Can I cancel my booking?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Yes, you can cancel up to 24 hours before check-in for a 50% refund. Same-day cancellations are non-refundable.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    How can I speak with Jesika?
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Click the floating voice button on any page or ask our reception staff to connect you with our AI assistant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
              Find Us on the Map
            </h2>
            <p className="text-lg text-muted-foreground">
              Conveniently located in the heart of Noida with easy access to major attractions
            </p>
          </div>
          
          <div className="card-luxury p-2 overflow-hidden">
            <div className="bg-accent/20 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p className="text-muted-foreground mb-4">
                  Near MG Road, Sector 17, Noida, Uttar Pradesh
                </p>
                <Button className="btn-royal">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;