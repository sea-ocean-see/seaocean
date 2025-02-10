import React from 'react';
import { Award, GraduationCap, Trophy, Medal, Star, Globe, Scroll } from 'lucide-react';
import SectionBackground from './SectionBackground';
import { backgrounds } from '../utils/backgroundData';

const Awards = () => {
  const awards = [
    {
      title: "First Place - Student Research Conference",
      organization: "Southeast Missouri State University",
      description: "Earned first-place honors for presenting cutting-edge research on biological scaffolds and their regenerative applications. Demonstrated expertise in scientific communication, innovative research methodologies, and data visualization during a highly competitive academic event.",
      icon: Trophy,
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Jane Stephens Honors Program",
      organization: "Southeast Missouri State University",
      description: "Selected to join this prestigious program, reserved for students who maintain a minimum 3.50 GPA, reflecting academic excellence and intellectual curiosity. Engaged in interdisciplinary courses and independent projects, broadening academic horizons and developing critical thinking skills.",
      icon: GraduationCap,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Undergraduate Research Grant",
      organization: "$500 Research Support",
      description: "Awarded a $500 research grant to support a senior honors project focused on developing biological scaffolds for regenerative medicine. Utilized the funds to acquire materials and equipment, contributing to significant advancements in scaffold design and functionality.",
      icon: Award,
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Dr. Robert Haunt Memorial Scholarship",
      organization: "Biomedical Engineering Department",
      description: "Sole recipient of this distinguished scholarship, awarded annually to one Biomedical Engineering student for exceptional academic achievements and dedication to advancing the field. Recognized for sustained excellence and contribution to research initiatives.",
      icon: Medal,
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Presidential List",
      organization: "Academic Achievement",
      description: "Achieved this esteemed recognition multiple times by maintaining a perfect 4.00 GPA during rigorous semesters. This honor reflects unwavering commitment to academic mastery and excellence across a diverse range of challenging coursework.",
      icon: Star,
      image: "https://images.unsplash.com/photo-1535982330050-f1c2fb79ff78?auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "International Excellence Scholarship",
      organization: "Global Recognition",
      description: "Earned this competitive scholarship for outstanding academic performance and leadership potential as an international student. Recognized for contributing to a dynamic academic community and maintaining a high standard of scholarly achievement.",
      icon: Globe,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&h=400"
    },
    {
      title: "Nano-Bio Engineering Training Certificate",
      organization: "Specialized Certification",
      description: "Completed specialized training in nanotechnology and bioengineering applications, equipping with advanced skills in the synthesis, characterization, and application of nanomaterials in biomedical research. Demonstrated a commitment to staying at the forefront of emerging interdisciplinary technologies.",
      icon: Scroll,
      image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&w=800&h=400"
    }
  ];

  return (
    <SectionBackground {...backgrounds.awards}>
      <section id="awards" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <Award className="h-8 w-8 text-[#00ffcc] mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Scholarships & Awards</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <img 
                    src={award.image} 
                    alt={award.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <award.icon className="h-6 w-6 mb-2" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{award.title}</h3>
                  <p className="text-[#00ffcc] font-medium mb-3">{award.organization}</p>
                  <p className="text-gray-700 text-sm">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
};

export default Awards;