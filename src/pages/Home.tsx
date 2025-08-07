import { Link } from 'react-router-dom';
import { Star, Users, Calendar, Award } from 'lucide-react';
import heroLobby from '@/assets/hero-lobby.jpg';
import luxuryRoom from '@/assets/luxury-room.jpg';
import indianThali from '@/assets/indian-thali.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroLobby})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark/90 to-primary-dark/70"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 animate-fade-in">
            Welcome to <span className="text-gradient-gold">Kumar Hotel</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 animate-slide-up">
            Where Luxury Meets Comfort Since 2018
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto animate-slide-up">
            Experience premium hospitality in the heart of Noida. Owned by Mr. Ashwani Kumar, 
            we offer world-class amenities and unforgettable service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Link to="/book" className="btn-luxury">
              Book Your Stay
            </Link>
            <Link to="/rooms" className="btn-elegant">
              Explore Rooms
            </Link>
          </div>
        </div>
        
        {/* Floating scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
              Why Choose Kumar Hotel?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of luxury, comfort, and exceptional service that has made us a preferred choice since 2018.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: 'Premium Quality',
                description: 'Luxury amenities and world-class service standards'
              },
              {
                icon: Users,
                title: 'Expert Staff',
                description: 'Trained hospitality professionals for your comfort'
              },
              {
                icon: Calendar,
                title: 'Easy Booking',
                description: 'Simple reservation process with instant confirmation'
              },
              {
                icon: Award,
                title: 'Award Winning',
                description: 'Recognized for excellence in hospitality since 2018'
              }
            ].map((feature, index) => (
              <div key={index} className="card-luxury p-8 text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
              Luxurious Accommodations
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose from our carefully designed rooms, each offering comfort and elegance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Standard Room',
                price: '₹999',
                image: luxuryRoom,
                features: ['Free WiFi', 'AC', 'TV', 'Breakfast']
              },
              {
                name: 'Deluxe Room',
                price: '₹1,499',
                image: luxuryRoom,
                features: ['All Standard Features', 'Mini Bar', 'City View', 'Room Service']
              },
              {
                name: 'Luxury Suite',
                price: '₹1,999',
                image: luxuryRoom,
                features: ['All Deluxe Features', 'Living Area', 'Premium Location', 'Concierge']
              }
            ].map((room, index) => (
              <div key={index} className="card-luxury overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold">
                    {room.price}/night
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-playfair font-semibold mb-4">{room.name}</h3>
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/book" className="btn-royal w-full text-center block">
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Preview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">
                Authentic Indian Cuisine
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Savor the rich flavors of traditional Indian cuisine prepared fresh daily by our expert chefs. 
                From aromatic thalis to regional specialties, every meal is a culinary journey.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-medium">Indian Thali</span>
                  <span className="text-primary font-semibold">₹199</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-medium">Chinese Combo</span>
                  <span className="text-primary font-semibold">₹249</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-medium">South Indian Plate</span>
                  <span className="text-primary font-semibold">₹179</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-medium">Breakfast Special</span>
                  <span className="text-primary font-semibold">₹99</span>
                </div>
              </div>
              <Link to="/menu" className="btn-luxury">
                View Full Menu
              </Link>
            </div>
            <div className="relative">
              <img
                src={indianThali}
                alt="Indian Thali"
                className="w-full h-96 object-cover rounded-xl shadow-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/30 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary-light text-secondary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold mb-6">
            Ready for Your Perfect Stay?
          </h2>
          <p className="text-xl mb-8 text-secondary-foreground/90">
            Book now or talk to Jesika, our AI assistant, for personalized recommendations and instant booking assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="btn-luxury bg-primary text-primary-foreground">
              Book Your Room
            </Link>
            <a href="tel:+919917132288" className="btn-elegant border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              Call +91 9917132288
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;