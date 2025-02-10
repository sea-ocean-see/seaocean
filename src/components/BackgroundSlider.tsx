import React, { useState, useEffect } from 'react';

const backgrounds = [
  {
    url: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&w=1920&h=1080',
    alt: 'CRISPR gene editing research',
    overlay: 'from-[#000]/80 via-[#001a1a]/70 to-[#003333]/60'
  },
  {
    url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1920&h=1080',
    alt: 'Nanotechnology research',
    overlay: 'from-[#001a1a]/80 via-[#003333]/70 to-[#004d4d]/60'
  },
  {
    url: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1920&h=1080',
    alt: 'Microscopy and cell research',
    overlay: 'from-[#003333]/80 via-[#004d4d]/70 to-[#006666]/60'
  },
  {
    url: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1920&h=1080',
    alt: 'Biomedical laboratory research',
    overlay: 'from-[#002626]/80 via-[#003d3d]/70 to-[#005959]/60'
  }
];

const BackgroundSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextIndex((currentIndex + 1) % backgrounds.length);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
      }, 1000); // Transition duration
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-all duration-1000
            ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
            ${index === nextIndex ? 'scale-105' : 'scale-100'}`}
        >
          <img
            src={bg.url}
            alt={bg.alt}
            className="object-cover w-full h-full"
          />
          <div 
            className={`absolute inset-0 bg-gradient-to-br ${bg.overlay}`}
          />
          <div className="absolute inset-0 backdrop-blur-[2px]" />
        </div>
      ))}
    </div>
  );
};

export default BackgroundSlider;