import React from 'react';
import { Quote } from 'lucide-react';

const RandomThoughts = () => {
  const thoughts = [
    {
      image: "src\images\thought1.jpg",
      quote: "Parallax between variables become countless when the urge for rare sight of someone comprehend by their image of deception!!",
      date: "April 2024"
    }
    // Add more thoughts here
  ];

  return (
    <section id="thoughts" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-12">
          <Quote className="h-8 w-8 text-[#00ffcc] mr-4" />
          <h2 className="text-3xl font-bold text-gray-900">Random Thoughts</h2>
        </div>
        <div className="grid gap-8">
          {thoughts.map((thought, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative">
                <img 
                  src={thought.image} 
                  alt={`Thought ${index + 1}`}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-6">
                  <p className="text-white text-xl font-medium text-center">
                    {thought.quote}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-500 text-sm">{thought.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RandomThoughts;