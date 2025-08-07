import { Calendar, Users, Award, Heart } from 'lucide-react';
import hotelExterior from '@/assets/hotel-exterior.jpg';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-playfair font-bold text-foreground mb-6 animate-fade-in">
              About <span className="text-gradient-gold">Kumar Hotel</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              Discover the story behind one of Noida's most beloved luxury hotels, 
              where tradition meets modern comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-playfair font-bold text-foreground">
                Our Story Since 2018
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Kumar Hotel was founded in 2018 by Mr. Ashwani Kumar with a vision to create 
                a hospitality experience that combines luxury with the warmth of Indian tradition. 
                What started as a dream has grown into one of Noida's most respected hotels.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Located in the prime area near MG Road, Sector 17, our hotel has welcomed 
                thousands of guests from around the world, each leaving with memories of 
                exceptional service and comfort that defines the Kumar Hotel experience.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we continue to uphold the same values that Mr. Kumar instilled from day one: 
                uncompromising quality, genuine hospitality, and attention to every detail that 
                makes your stay truly special.
              </p>
            </div>
            <div className="relative">
              <img
                src={hotelExterior}
                alt="Kumar Hotel Exterior"
                className="w-full h-96 object-cover rounded-xl shadow-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-dark/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">
              Meet Our Founder
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="card-luxury p-12 text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-8 shadow-luxury">
                <img
                  src="/lovable-uploads/29e88301-1cc2-4e59-a728-99f9f30d8861.png"
                  alt="Mr. Ashwani Kumar - Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-3xl font-playfair font-bold text-foreground mb-4">
                Mr. Ashwani Kumar
              </h3>
              <p className="text-xl text-primary font-semibold mb-6">Founder & Owner</p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                "My vision has always been simple: to create a place where every guest feels like family. 
                At Kumar Hotel, we don't just provide accommodation; we create experiences that last a lifetime. 
                Since 2018, this principle has guided everything we do."
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Established Kumar Hotel in 2018</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4" />
                  <span>Passionate about hospitality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">
              Our Mission & Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Everything we do is guided by our commitment to excellence and genuine care for our guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Comfort',
                description: 'Creating a home away from home where every guest feels valued and cared for.'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: 'Maintaining the highest standards in service, amenities, and hospitality.'
              },
              {
                icon: Users,
                title: 'Service',
                description: 'Providing personalized attention that exceeds expectations every time.'
              }
            ].map((value, index) => (
              <div key={index} className="card-luxury p-8 text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-playfair font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Facts */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-playfair font-bold text-foreground mb-8">
                Prime Location in Noida
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Strategic Location</h3>
                  <p className="text-muted-foreground">
                    Located near MG Road in Sector 17, Kumar Hotel offers easy access to 
                    Noida's business district, shopping centers, and major attractions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Easy Connectivity</h3>
                  <p className="text-muted-foreground">
                    Well-connected to Delhi NCR with metro stations, major highways, 
                    and the airport within comfortable reach.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Local Attractions</h3>
                  <p className="text-muted-foreground">
                    Close to DLF Mall, Worlds of Wonder, and various corporate offices, 
                    making it perfect for both business and leisure travelers.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '2018', label: 'Established' },
                { number: '1000+', label: 'Happy Guests' },
                { number: '24/7', label: 'Service' },
                { number: '3', label: 'Room Types' }
              ].map((stat, index) => (
                <div key={index} className="card-luxury p-6 text-center">
                  <div className="text-3xl font-playfair font-bold text-gradient-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;