import React from 'react';
import { Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const UnspokenWords = () => {
  return (
    <section id="thoughts" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center">
            <Quote className="h-8 w-8 text-[#00ffcc] mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">The Unspoken Words</h2>
          </div>
          <Link 
            to="/thoughts"
            className="flex items-center text-[#00ffcc] hover:text-[#00ffcc]/80 transition-colors"
          >
            View All
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </div>
        
        {/* Preview of latest thoughts */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
            <Link to="/thoughts">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1000&q=80"
                  alt="Latest thought"
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-lg font-medium">
                    Parallax between variables become countless...
                  </p>
                  <p className="text-gray-300 text-sm mt-2">April 2024</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnspokenWords;