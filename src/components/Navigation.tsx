import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Food & Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Book Now', path: '/book' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-playfair font-bold text-xl">K</span>
            </div>
            <div>
              <h1 className="text-2xl font-playfair font-bold text-gradient-gold">Kumar Hotel</h1>
              <p className="text-sm text-muted-foreground">Luxury & Comfort</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative py-2 px-4 text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                } after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-primary-light after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-full ${
                  isActive(item.path) ? 'after:w-full' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+919917132288"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 9917132288</span>
            </a>
            <button className="btn-luxury text-sm py-2">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 pt-2 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 px-4 text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-primary bg-accent rounded-lg'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <a
                  href="tel:+919917132288"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 9917132288</span>
                </a>
                <a
                  href="mailto:ashwani.kumar991713@gmail.com"
                  className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>ashwani.kumar991713@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;