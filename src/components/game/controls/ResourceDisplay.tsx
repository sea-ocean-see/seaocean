import React from 'react';
import { Database } from 'lucide-react';
import { useGame } from '../context/GameContext';

const ResourceDisplay = () => {
  const { state } = useGame();

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Database className="h-5 w-5 text-[#00ffcc] mr-2" />
          <h3 className="text-lg font-semibold">Resources</h3>
        </div>
        <span className="text-xl font-bold text-[#00ffcc]">{state.resources}</span>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-600">Used for creating cells and upgrades</p>
      </div>
    </div>
  );
};

export default ResourceDisplay;