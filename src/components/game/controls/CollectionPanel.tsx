import React from 'react';
import { useGame } from '../context/GameContext';
import { NANOPARTICLE_INFO } from '../utils/constants';

const CollectionPanel = () => {
  const { state } = useGame();

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Nanoparticle Collection</h3>
      <div className="space-y-4">
        {Object.entries(state.collectedTypes).map(([type, count]) => (
          <div key={type} className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div 
                  className="w-4 h-4 rounded-full mr-2"
                  style={{ backgroundColor: NANOPARTICLE_INFO[type as keyof typeof NANOPARTICLE_INFO].color }}
                />
                <span className="font-medium capitalize">{type}</span>
              </div>
              <span className="text-[#00ffcc] font-bold">{count}</span>
            </div>
            <p className="text-sm text-gray-600">
              {NANOPARTICLE_INFO[type as keyof typeof NANOPARTICLE_INFO].description}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Target: {NANOPARTICLE_INFO[type as keyof typeof NANOPARTICLE_INFO].target}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPanel;