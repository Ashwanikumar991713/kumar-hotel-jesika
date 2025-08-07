import { Link } from 'react-router-dom';
import { Wifi, Tv, Car, Coffee, Users, Bed, Bath, Wind } from 'lucide-react';
import luxuryRoom from '@/assets/luxury-room.jpg';

const Rooms = () => {
  const rooms = [
    {
      name: 'Standard Room',
      price: 999,
      image: luxuryRoom,
      description: 'Comfortable and well-appointed room perfect for business travelers and short stays.',
      features: [
        { icon: Wifi, text: 'Free WiFi' },
        { icon: Wind, text: 'Air Conditioning' },
        { icon: Tv, text: 'LED TV' },
        { icon: Coffee, text: 'Complimentary Breakfast' },
        { icon: Bed, text: 'Queen Size Bed' },
        { icon: Bath, text: 'Private Bathroom' }
      ],
      amenities: ['24/7 Room Service', 'Daily Housekeeping', 'In-room Safe', 'Work Desk']
    },
    {
      name: 'Deluxe Room',
      price: 1499,
      image: luxuryRoom,
      description: 'Spacious room with premium amenities and stunning city views for a memorable stay.',
      features: [
        { icon: Wifi, text: 'High-Speed WiFi' },
        { icon: Wind, text: 'Premium AC' },
        { icon: Tv, text: 'Smart TV' },
        { icon: Coffee, text: 'Mini Bar' },
        { icon: Bed, text: 'King Size Bed' },
        { icon: Users, text: 'City View' }
      ],
      amenities: ['All Standard Features', 'Mini Refrigerator', 'Premium Toiletries', 'Balcony Access', 'Express Laundry']
    },
    {
      name: 'Luxury Suite',
      price: 1999,
      image: luxuryRoom,
      description: 'Our premium offering with separate living area and exclusive amenities for the ultimate experience.',
      features: [
        { icon: Wifi, text: 'Premium WiFi' },
        { icon: Wind, text: 'Climate Control' },
        { icon: Tv, text: 'Premium Entertainment' },
        { icon: Coffee, text: 'Premium Bar' },
        { icon: Bed, text: 'Luxury Bedding' },
        { icon: Users, text: 'Separate Living Area' }
      ],
      amenities: ['All Deluxe Features', 'Personal Concierge', 'Priority Check-in/out', 'Premium Location', 'Complimentary Upgrades']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-playfair font-bold text-foreground mb-6 animate-fade-in">
              Our <span className="text-gradient-gold">Luxury Rooms</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              Choose from our carefully designed accommodations, each offering the perfect blend 
              of comfort, elegance, and modern amenities.
            </p>
          </div>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {rooms.map((room, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="card-luxury p-8 h-full">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-3xl font-playfair font-bold text-foreground">
                        {room.name}
                      </h2>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-gradient-gold">₹{room.price}</div>
                        <div className="text-sm text-muted-foreground">per night</div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      {room.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {room.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center flex-shrink-0">
                            <feature.icon className="w-4 h-4 text-primary-foreground" />
                          </div>
                          <span className="text-sm font-medium">{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Amenities */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4">Room Amenities</h3>
                      <ul className="space-y-2">
                        {room.amenities.map((amenity, idx) => (
                          <li key={idx} className="text-muted-foreground flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            {amenity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/book" className="btn-luxury flex-1 text-center">
                        Book Now
                      </Link>
                      <button className="btn-elegant flex-1">
                        Ask Jesika
                      </button>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative group">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-96 object-cover rounded-xl shadow-luxury group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/30 to-transparent rounded-xl"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4">
                        <h3 className="font-semibold text-foreground mb-2">{room.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Perfect for both business and leisure travelers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">
              Hotel Policies
            </h2>
            <p className="text-lg text-muted-foreground">
              Please review our policies to ensure a smooth and comfortable stay
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Check-in & Check-out',
                items: ['Check-in: 12:00 PM', 'Check-out: 11:00 AM', 'Early check-in subject to availability']
              },
              {
                title: 'Booking & Payment',
                items: ['Advance booking required', 'Payment on arrival accepted', 'Credit cards accepted']
              },
              {
                title: 'Cancellation Policy',
                items: ['50% refund if cancelled 24 hrs prior', 'No refund for same-day cancellation', 'Free modification within 24 hrs']
              },
              {
                title: 'General Policies',
                items: ['ID verification mandatory', 'No smoking in rooms', 'Pets not allowed', 'Quiet hours: 10 PM - 7 AM']
              }
            ].map((policy, index) => (
              <div key={index} className="card-luxury p-6">
                <h3 className="text-lg font-playfair font-semibold text-foreground mb-4">
                  {policy.title}
                </h3>
                <ul className="space-y-2">
                  {policy.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary-light text-secondary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold mb-6">
            Ready to Book Your Perfect Room?
          </h2>
          <p className="text-xl mb-8 text-secondary-foreground/90">
            Contact us directly or use our AI assistant Jesika for instant booking assistance and room availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="btn-luxury bg-primary text-primary-foreground">
              Book Online
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

export default Rooms;