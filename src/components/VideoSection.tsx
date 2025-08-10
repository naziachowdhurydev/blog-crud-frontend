import React from 'react';
import { Play } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Top 10 Hidden Gems in Europe',
    thumbnail: 'https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&w=600',
    embedId: 'dQw4w9WgXcQ', // This is a placeholder - replace with actual YouTube video IDs
    description: 'Discover Europe\'s best-kept secrets'
  },
  {
    id: 2,
    title: 'Ultimate Asia Travel Guide',
    thumbnail: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=600',
    embedId: 'dQw4w9WgXcQ', // This is a placeholder - replace with actual YouTube video IDs
    description: 'Everything you need to know about traveling in Asia'
  },
  {
    id: 3,
    title: 'Budget Travel Hacks',
    thumbnail: 'https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=600',
    embedId: 'dQw4w9WgXcQ', // This is a placeholder - replace with actual YouTube video IDs
    description: 'Travel more while spending less'
  }
];

const VideoSection = () => {
  return (
    <section id="videos" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Travel Videos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get inspired by our travel documentaries and guides from around the world
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                  <div className="p-4 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors">
                    <Play className="h-8 w-8 text-white fill-current" />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-400">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-gray-800 rounded-xl p-8">
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <iframe
              className="w-full h-64 md:h-96 rounded-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Featured Travel Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Featured: Around the World in 80 Days</h3>
            <p className="text-gray-400">Join us on an epic journey across continents and cultures</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;