import React from 'react';
import IconCard from './IconCard';
import Header from './Header';
import { icons } from './icons';

const DesignSystem = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a2f2f] to-[#1d3535] p-8">
      <div className="max-w-6xl mx-auto">
        <Header />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {icons.map((icon, index) => (
            <IconCard key={index} {...icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignSystem;