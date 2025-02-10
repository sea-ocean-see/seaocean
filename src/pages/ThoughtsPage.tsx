import React from 'react';
import { Quote, Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const thoughts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1000&q=80",
    quote: "Parallax between variables become countless when the urge for rare sight of someone comprehend by their image of deception!!",
    date: "April 2024",
    description: "Sometimes we find ourselves lost in the parallax of perception, where truth and illusion dance in an endless waltz..."
  },
  // Add more thoughts here
];

const ThoughtsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <Link 
            to="/"
            className="inline-flex items-center text-[#00ffcc] hover:text-[#00ffcc]/80 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center">
            <Quote className="h-8 w-8 text-[#00ffcc] mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">The Unspoken Words</h1>
          </div>
        </div>

        <div className="space-y-12">
          {thoughts.map((thought) => (
            <article 
              key={thought.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-[500px]">
                <img 
                  src={thought.image}
                  alt={`Thought ${thought.id}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center text-gray-300 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{thought.date}</span>
                  </div>
                  <p className="text-white text-2xl font-medium">
                    {thought.quote}
                  </p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed">
                  {thought.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThoughtsPage;