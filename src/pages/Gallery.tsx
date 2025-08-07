import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import heroLobby from '@/assets/hero-lobby.jpg';
import luxuryRoom from '@/assets/luxury-room.jpg';
import indianThali from '@/assets/indian-thali.jpg';
import hotelExterior from '@/assets/hotel-exterior.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      src: heroLobby,
      title: 'Elegant Lobby',
      category: 'lobby'
    },
    {
      id: 2,
      src: luxuryRoom,
      title: 'Luxury Room',
      category: 'rooms'
    },
    {
      id: 3,
      src: indianThali,
      title: 'Indian Thali',
      category: 'food'
    },
    {
      id: 4,
      src: hotelExterior,
      title: 'Hotel Exterior',
      category: 'exterior'
    },
    {
      id: 5,
      src: luxuryRoom,
      title: 'Deluxe Room',
      category: 'rooms'
    },
    {
      id: 6,
      src: heroLobby,
      title: 'Reception Area',
      category: 'lobby'
    },
    {
      id: 7,
      src: indianThali,
      title: 'Chinese Combo',
      category: 'food'
    },
    {
      id: 8,
      src: luxuryRoom,
      title: 'Standard Room',
      category: 'rooms'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'rooms', name: 'Rooms' },
    { id: 'lobby', name: 'Lobby & Common Areas' },
    { id: 'food', name: 'Food & Dining' },
    { id: 'exterior', name: 'Hotel Exterior' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-playfair font-bold text-foreground mb-6 animate-fade-in">
              Hotel <span className="text-gradient-gold">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              Take a visual tour of Kumar Hotel and discover the luxury and comfort 
              that awaits you during your stay.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-primary to-primary-light text-primary-foreground shadow-gold'
                    : 'bg-accent hover:bg-accent/80 text-accent-foreground hover:shadow-elegant'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/80 text-sm capitalize">{item.category}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-lg shadow-luxury"
            />
          </div>
        </div>
      )}

      {/* Hotel Features Showcase */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">
              Experience Kumar Hotel
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every corner of our hotel is designed to provide you with comfort, 
              luxury, and memorable experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Luxurious Rooms',
                description: 'Elegantly designed rooms with modern amenities and comfortable furnishings for a perfect stay.',
                image: luxuryRoom
              },
              {
                title: 'Exquisite Dining',
                description: 'Authentic Indian cuisine and international favorites prepared by our expert chefs.',
                image: indianThali
              },
              {
                title: 'Premium Location',
                description: 'Strategically located in Noida with easy access to business districts and attractions.',
                image: hotelExterior
              }
            ].map((feature, index) => (
              <div key={index} className="card-luxury overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary-light text-secondary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold mb-6">
            Ready to Experience This Luxury?
          </h2>
          <p className="text-xl mb-8 text-secondary-foreground/90">
            Book your stay at Kumar Hotel and experience the comfort and elegance 
            you've seen in our gallery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-luxury bg-primary text-primary-foreground">
              Book Your Stay
            </button>
            <button className="btn-elegant border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              Take a Virtual Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;