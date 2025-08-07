import { Clock, Utensils, ChefHat, Star } from 'lucide-react';
import indianThali from '@/assets/indian-thali.jpg';

const Menu = () => {
  const menuCategories = [
    {
      title: 'Traditional Indian',
      description: 'Authentic flavors from across India, prepared with traditional recipes',
      items: [
        {
          name: 'Indian Thali',
          price: 199,
          description: 'Complete meal with dal, sabzi, rice, roti, raita, and dessert',
          popular: true
        },
        {
          name: 'South Indian Plate',
          price: 179,
          description: 'Dosa, idli, sambar, coconut chutney, and filter coffee',
          popular: false
        },
        {
          name: 'Punjabi Special',
          price: 229,
          description: 'Butter chicken, naan, dal makhani, and basmati rice',
          popular: true
        },
        {
          name: 'Rajasthani Thali',
          price: 219,
          description: 'Dal baati churma, gatte ki sabzi, and traditional sweets',
          popular: false
        }
      ]
    },
    {
      title: 'Chinese Cuisine',
      description: 'Indo-Chinese favorites with authentic flavors and fresh ingredients',
      items: [
        {
          name: 'Chinese Combo',
          price: 249,
          description: 'Fried rice, manchurian, spring rolls, and sweet & sour sauce',
          popular: true
        },
        {
          name: 'Hakka Noodles Special',
          price: 199,
          description: 'Stir-fried noodles with vegetables and choice of chicken or paneer',
          popular: false
        },
        {
          name: 'Szechuan Platter',
          price: 279,
          description: 'Spicy szechuan chicken, fried rice, and soup',
          popular: false
        }
      ]
    },
    {
      title: 'Breakfast Specials',
      description: 'Start your day with our hearty and nutritious breakfast options',
      items: [
        {
          name: 'Aloo Paratha with Tea',
          price: 99,
          description: 'Stuffed potato paratha with butter, curd, pickle, and masala tea',
          popular: true
        },
        {
          name: 'Poha & Coffee',
          price: 89,
          description: 'Traditional poha with onions, curry leaves, and hot coffee',
          popular: false
        },
        {
          name: 'English Breakfast',
          price: 149,
          description: 'Eggs, toast, sausage, baked beans, and fresh juice',
          popular: false
        },
        {
          name: 'Continental Breakfast',
          price: 129,
          description: 'Cereal, fruits, yogurt, toast, and choice of beverage',
          popular: false
        }
      ]
    },
    {
      title: 'Beverages',
      description: 'Refreshing drinks to complement your meal',
      items: [
        {
          name: 'Masala Tea',
          price: 25,
          description: 'Traditional Indian tea with aromatic spices',
          popular: true
        },
        {
          name: 'Filter Coffee',
          price: 35,
          description: 'South Indian style filter coffee',
          popular: true
        },
        {
          name: 'Fresh Lime Water',
          price: 40,
          description: 'Refreshing lime water with mint',
          popular: false
        },
        {
          name: 'Lassi',
          price: 60,
          description: 'Sweet or salted traditional yogurt drink',
          popular: true
        }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${indianThali})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark/90 to-primary-dark/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-playfair font-bold text-white mb-6 animate-fade-in">
            Delicious <span className="text-gradient-gold">Food & Menu</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
            Experience authentic Indian cuisine prepared fresh daily by our expert chefs. 
            Every dish tells a story of tradition and flavor.
          </p>
        </div>
      </section>

      {/* Menu Introduction */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-foreground mb-6">
              Culinary Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
              Our kitchen serves a delightful array of traditional Indian dishes alongside 
              popular Indo-Chinese favorites. All food is prepared fresh daily using 
              the finest ingredients and authentic recipes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  icon: ChefHat,
                  title: 'Expert Chefs',
                  description: 'Experienced culinary professionals'
                },
                {
                  icon: Utensils,
                  title: 'Fresh Ingredients',
                  description: 'Quality ingredients sourced daily'
                },
                {
                  icon: Clock,
                  title: 'Quick Service',
                  description: 'Hot meals served promptly'
                },
                {
                  icon: Star,
                  title: 'Authentic Taste',
                  description: 'Traditional recipes and flavors'
                }
              ].map((feature, index) => (
                <div key={index} className="card-luxury p-6 text-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {menuCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="card-luxury p-8">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-playfair font-bold text-foreground mb-4">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className="bg-accent/20 rounded-lg p-6 hover:bg-accent/30 transition-colors group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {item.name}
                          </h4>
                          {item.popular && (
                            <span className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground text-xs px-2 py-1 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <div className="text-2xl font-bold text-gradient-gold">
                          ₹{item.price}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Notes */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-luxury p-8 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-playfair font-semibold mb-4">Meal Timings</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Breakfast: 7:00 AM - 10:30 AM</p>
                <p>Lunch: 12:00 PM - 3:30 PM</p>
                <p>Dinner: 7:00 PM - 10:30 PM</p>
                <p>Room Service: 24/7 Available</p>
              </div>
            </div>

            <div className="card-luxury p-8 text-center">
              <Utensils className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-playfair font-semibold mb-4">Special Dietary</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Vegetarian options available</p>
                <p>Jain food on request</p>
                <p>Low-spice preparations</p>
                <p>Custom orders welcome</p>
              </div>
            </div>

            <div className="card-luxury p-8 text-center">
              <Star className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-playfair font-semibold mb-4">Quality Promise</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Fresh ingredients daily</p>
                <p>Hygienic preparation</p>
                <p>No artificial preservatives</p>
                <p>100% satisfaction guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-secondary-light text-secondary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold mb-6">
            Hungry? Let Jesika Help!
          </h2>
          <p className="text-xl mb-8 text-secondary-foreground/90">
            Ask our AI assistant Jesika about menu details, special dietary requirements, 
            or to place an order for room service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-luxury bg-primary text-primary-foreground">
              Talk to Jesika
            </button>
            <a href="tel:+919917132288" className="btn-elegant border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              Call for Orders
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;