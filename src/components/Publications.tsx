import React from 'react';
import { BookOpen } from 'lucide-react';

const Publications = () => {
  const publications = [
    {
      type: "Poster Presentation",
      title: "Design and Development of Modular Cell Delivery Probes",
      authors: "Kandel, S., & Casey, G. R.",
      venue: "ACS Midwest Regional Meeting, Omaha, NE",
      year: "2024"
    },
    {
      type: "Poster Presentation",
      title: "Boron Nitride Nanotube-based Multifunctional Nanocarriers for Biomedical Application",
      authors: "Nanayakkara, M. B. N., Kandel, S., McGill, A., Dietrich, N., & Ghosh, S.",
      venue: "NASA MOSGC Annual Conference, Rolla, MO",
      year: "2024"
    },
    {
      type: "Poster Presentation",
      title: "BNNT, MNP Biocompatibility for HUVECs Cells for Regenerative Application",
      authors: "Kandel, S., Nanayakkara, M., & Ghosh, S.",
      venue: "SEMO Student Research Conference, Cape Girardeau, MO",
      year: "2024"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-12">
          <BookOpen className="h-8 w-8 text-[#00ffcc] mr-4" />
          <h2 className="text-3xl font-bold text-gray-900">Publications & Presentations</h2>
        </div>
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
              <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-[#00ffcc]/10 text-[#00ffcc] mb-4">
                {pub.type}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{pub.title}</h3>
              <p className="text-gray-700 italic mb-2">{pub.authors}</p>
              <p className="text-gray-600 mb-2">{pub.venue}</p>
              <p className="text-[#00ffcc] font-medium">{pub.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;