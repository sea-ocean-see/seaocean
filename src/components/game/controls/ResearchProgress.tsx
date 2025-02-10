import React from 'react';
import { useGame } from '../context/GameContext';
import { BookOpen } from 'lucide-react';

const ResearchProgress = () => {
  const { state } = useGame();

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-sm">
      <div className="flex items-center mb-4">
        <BookOpen className="h-5 w-5 text-[#00ffcc] mr-2" />
        <h3 className="text-lg font-semibold">Research Progress</h3>
      </div>
      <div className="space-y-4">
        {Object.entries(state.research).map(([field, progress]) => (
          <div key={field}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-700">{field}</span>
              <span className="text-[#00ffcc] font-medium">{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#00ffcc] to-[#33ccff] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchProgress;