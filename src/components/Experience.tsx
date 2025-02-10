import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';
import SectionBackground from './SectionBackground';
import { backgrounds } from '../utils/backgroundData';
import { researchExperience, teachingExperience } from '../data/experienceData';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  return (
    <SectionBackground {...backgrounds.experience}>
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <Briefcase className="h-8 w-8 text-[#00ffcc] mr-4" />
            <h2 className="text-3xl font-bold text-gray-900">Research Experience</h2>
          </div>
          <div className="space-y-12">
            {researchExperience.map((exp, index) => (
              <ExperienceCard key={index} experience={exp} />
            ))}
          </div>

          <div className="mt-16">
            <div className="flex items-center mb-12">
              <GraduationCap className="h-8 w-8 text-[#00ffcc] mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">Teaching Experience</h2>
            </div>
            <div className="space-y-12">
              {teachingExperience.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
};

export default Experience;