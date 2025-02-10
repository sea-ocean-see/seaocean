import React from 'react';

interface ExperienceCardProps {
  experience: {
    title: string;
    organization: string;
    institution?: string;
    location?: string;
    period: string;
    achievements: string[];
  };
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-lg transform hover:scale-[1.02] transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold bg-gradient-to-r from-[#00ffcc] to-[#33ccff] bg-clip-text text-transparent">
            {experience.title}
          </h3>
          <p className="text-[#2563eb] font-semibold mt-1">{experience.organization}</p>
          {(experience.institution || experience.location) && (
            <p className="text-[#4b5563]">{experience.institution || experience.location}</p>
          )}
        </div>
        <span className="px-3 py-1 bg-[#00ffcc]/10 text-[#00ffcc] rounded-full text-sm font-medium">
          {experience.period}
        </span>
      </div>
      <ul className="space-y-3">
        {experience.achievements.map((achievement, i) => (
          <li key={i} className="flex items-start space-x-2">
            <span className="h-2 w-2 mt-2 rounded-full bg-gradient-to-r from-[#00ffcc] to-[#33ccff]" />
            <p className="text-gray-700 leading-relaxed hover:text-gray-900 transition-colors">
              {achievement}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;