import React, { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">WanderGuide</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#hero" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#destinations" className="text-gray-700 hover:text-blue-600 transition-colors">Destinations</a>
            <a href="#guides" className="text-gray-700 hover:text-blue-600 transition-colors">Travel Guides</a>
            <a href="#videos" className="text-gray-700 hover:text-blue-600 transition-colors">Videos</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
              <a href="#hero" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</a>
              <a href="#destinations" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Destinations</a>
              <a href="#guides" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Travel Guides</a>
              <a href="#videos" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Videos</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;