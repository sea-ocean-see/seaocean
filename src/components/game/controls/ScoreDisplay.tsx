import React from 'react';
import { Trophy } from 'lucide-react';
import { useGame } from '../context/GameContext';

const ScoreDisplay = () => {
  const { state } = useGame();

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Trophy className="h-5 w-5 text-[#00ffcc] mr-2" />
          <h3 className="text-lg font-semibold">Score</h3>
        </div>
        <span className="text-xl font-bold text-[#00ffcc]">{state.score}</span>
      </div>
      <div className="mt-2">
        <p className="text-sm text-gray-600">Level {state.level}</p>
      </div>
    </div>
  );
};

export default ScoreDisplay;