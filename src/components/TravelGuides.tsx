import React from 'react';
import { Compass, Users, Shield, Heart } from 'lucide-react';

const guides = [
  {
    icon: <Compass className="h-8 w-8" />,
    title: 'Planning Your Trip',
    content: 'Learn how to create the perfect itinerary, from choosing destinations to booking accommodations. Our comprehensive guide covers everything from budget planning to travel insurance.'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Safety First',
    content: 'Essential safety tips for international travel, including health precautions, emergency contacts, and how to stay safe in unfamiliar destinations.'
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Cultural Etiquette',
    content: 'Respect local customs and traditions with our cultural guide. Learn about dress codes, tipping practices, and social norms in different countries.'
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Solo Travel Tips',
    content: 'Embrace the freedom of solo adventures with confidence. Discover the best practices for safe and enjoyable solo travel experiences.'
  }
];

const TravelGuides = () => {
  return (
    <section id="guides" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Travel Guides & Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice and insider tips to make your travels smooth, safe, and unforgettable
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-teal-50 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-600 text-white rounded-lg mr-4">
                  {guide.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {guide.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {guide.content}
              </p>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Adventure?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered amazing destinations with our expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Travel Guide
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelGuides;