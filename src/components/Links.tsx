import React from 'react';
import { Link, Linkedin, Mail, Instagram } from 'lucide-react';

const Links = () => {
  return (
    <section id="links" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-12">
          <Link className="h-8 w-8 text-[#00ffcc] mr-4" />
          <h2 className="text-3xl font-bold text-gray-900">Important Links</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <a
            href="https://www.linkedin.com/in/kandelsagar/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-6 bg-gray-50 rounded-lg hover:bg-[#00ffcc]/10 transition-colors"
          >
            <Linkedin className="h-8 w-8 text-[#00ffcc] mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">LinkedIn</h3>
              <p className="text-gray-600">Connect professionally</p>
            </div>
          </a>
          <a
            href="https://www.instagram.com/kandel_sagar_/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-6 bg-gray-50 rounded-lg hover:bg-[#00ffcc]/10 transition-colors"
          >
            <Instagram className="h-8 w-8 text-[#00ffcc] mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Instagram</h3>
              <p className="text-gray-600">Follow my journey</p>
            </div>
          </a>
          <a
            href="mailto:Kandelsagar194@gmail.com"
            className="flex items-center p-6 bg-gray-50 rounded-lg hover:bg-[#00ffcc]/10 transition-colors"
          >
            <Mail className="h-8 w-8 text-[#00ffcc] mr-4" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Email</h3>
              <p className="text-gray-600">Get in touch</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Links;