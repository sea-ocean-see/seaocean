import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1a2f2f]/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-[#00ffcc]">Sagar Kandel</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {['intro', 'experience', 'projects', 'publications', 'awards', 'leadership', 'skills', 'links', 'game'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-300 hover:text-[#00ffcc] px-3 py-2 rounded-md text-sm font-medium capitalize transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-[#00ffcc]" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;