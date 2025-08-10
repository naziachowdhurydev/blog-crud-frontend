import React from 'react';
import { MapPin, Clock, Star } from 'lucide-react';

const destinations = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Tokyo, Japan',
    description: 'A fascinating blend of traditional culture and cutting-edge technology',
    duration: '7-10 days',
    rating: 4.9,
    price: 'From $1,200'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Machu Picchu, Peru',
    description: 'Ancient Incan citadel set high in the Andes Mountains',
    duration: '5-7 days',
    rating: 4.8,
    price: 'From $800'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Maldives',
    description: 'Tropical paradise with crystal clear waters and luxury resorts',
    duration: '4-6 days',
    rating: 4.9,
    price: 'From $2,000'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Iceland',
    description: 'Land of fire and ice with stunning natural landscapes',
    duration: '8-10 days',
    rating: 4.7,
    price: 'From $1,500'
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Dubai, UAE',
    description: 'Modern metropolis with luxury shopping and architecture',
    duration: '4-6 days',
    rating: 4.6,
    price: 'From $1,000'
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/358457/pexels-photo-358457.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Paris, France',
    description: 'The City of Light with iconic landmarks and romance',
    duration: '5-7 days',
    rating: 4.8,
    price: 'From $900'
  }
];

const DestinationCards = () => {
  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the world's most breathtaking destinations, handpicked for unforgettable experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold">{destination.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {destination.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {destination.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{destination.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>Guided Tour</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    {destination.price}
                  </span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationCards;