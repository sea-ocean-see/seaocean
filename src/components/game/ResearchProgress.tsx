import React from 'react';
import { Research } from '../../types/game';

interface ResearchProgressProps {
  progress: Research;
}

const ResearchProgress: React.FC<ResearchProgressProps> = ({ progress }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Research Progress</h3>
      <div className="space-y-4">
        {Object.entries(progress).map(([key, value]) => (
          <div key={key}>
            <div className="flex justify-between text-sm mb-1">
              <span>{key}</span>
              <span>{Math.round(value)}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#00ffcc] to-[#33ccff]"
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchProgress;