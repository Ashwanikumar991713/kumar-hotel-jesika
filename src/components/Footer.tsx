import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-playfair font-bold">K</span>
              </div>
              <div>
                <h3 className="text-xl font-playfair font-bold">Kumar Hotel</h3>
                <p className="text-sm text-secondary-foreground/80">Since 2018</p>
              </div>
            </div>
            <p className="text-secondary-foreground/90 text-sm leading-relaxed">
              Experience luxury and comfort at Kumar Hotel. Owned by Mr. Ashwani Kumar, 
              we provide premium hospitality services in the heart of Noida.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Rooms', 'Food & Menu', 'Gallery', 'Book Now', 'Contact'].map((item, index) => (
                <Link
                  key={index}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '').replace('&', '')}`}
                  className="block text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-primary" />
                <div className="text-sm text-secondary-foreground/80">
                  <p>Near MG Road, Sector 17</p>
                  <p>Noida, Uttar Pradesh, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:+919917132288"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  +91 9917132288
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <a
                  href="mailto:ashwani.kumar991713@gmail.com"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  ashwani.kumar991713@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Hotel Policies */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Hotel Policies</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-primary" />
                <div className="text-sm text-secondary-foreground/80">
                  <p>Check-in: 12:00 PM</p>
                  <p>Check-out: 11:00 AM</p>
                </div>
              </div>
              <div className="text-sm text-secondary-foreground/80 space-y-1">
                <p>• Advance booking required</p>
                <p>• ID verification mandatory</p>
                <p>• No smoking in rooms</p>
                <p>• Pets not allowed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-secondary-foreground/70">
              © 2024 Kumar Hotel. All rights reserved. Designed with luxury in mind.
            </p>
            <div className="flex items-center space-x-4 text-sm text-secondary-foreground/70">
              <span>Hosted on Hostinger VPS</span>
              <span>•</span>
              <span>Ask Jesika for instant help</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;