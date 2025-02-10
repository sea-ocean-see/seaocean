import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';
import BackgroundSlider from './BackgroundSlider';

const Introduction = () => {
  return (
    <section id="intro" className="relative min-h-screen flex items-center justify-center">
      <BackgroundSlider />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <img
          src="src\images\profilephoto.png"
          alt="Sagar Kandel"
          className="w-32 h-32 rounded-full mx-auto mb-8 object-cover shadow-lg border-2 border-white/50"
        />
        <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">Sagar Kandel </h1>
        <p className="text-2xl text-gray-200 mb-8 drop-shadow-md">Full-time Student & Part-time Researcher</p>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto drop-shadow-md">
        Welcome! I'm Sagar Kandel, a dedicated student and aspiring researcher with a strong passion for nanotechnology and its applications in genetic engineering, drug delivery, and regenerative medicine. My work primarily focuses on exploring how nanoparticles interact with different line of human cells, aiming to develop innovative biomedical solutions. From culturing HUVEC cells to synthesizing and testing nanoparticles, I am constantly seeking ways to bridge the gap between bioengineering and translational medicine.
        </p>
        <div className="flex justify-center space-x-6">
          <a 
            href="https://www.linkedin.com/in/kandelsagar/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-indigo-300 transition-colors p-2"
          >
            <Linkedin className="h-7 w-7" />
          </a>
          <a 
            href="mailto:Kandelsagar194@gmail.com" 
            className="text-white hover:text-indigo-300 transition-colors p-2"
          >
            <FileText className="h-7 w-7" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Introduction;