import React from 'react';
import { useGame } from '../context/GameContext';
import { nanoparticleInfo } from '../utils/nanoparticleInfo';

const NanoparticleInfo = () => {
  const { state } = useGame();

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Collected Nanoparticles</h3>
      <div className="space-y-4">
        {Object.entries(state.collectedTypes).map(([type, count]) => (
          <div key={type} className="bg-gray-50 rounded-lg p-3">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium capitalize">{type}</span>
              <span className="text-[#00ffcc] font-bold">{count}</span>
            </div>
            <div className="text-sm text-gray-600">
              <p className="font-medium mb-1">Best for:</p>
              <ul className="list-disc list-inside">
                {nanoparticleInfo[type as keyof typeof nanoparticleInfo].regions.map((region, i) => (
                  <li key={i}>{region}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NanoparticleInfo;