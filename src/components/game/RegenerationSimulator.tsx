import React from 'react';
import GameBoard from './board/GameBoard';
import ControlPanel from './controls/ControlPanel';
import { GameProvider } from './context/GameContext';

const RegenerationSimulator = () => {
  return (
    <GameProvider>
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="grid lg:grid-cols-3 gap-6 p-6">
          <div className="lg:col-span-2">
            <GameBoard />
          </div>
          <div>
            <ControlPanel />
          </div>
        </div>
      </div>
    </GameProvider>
  );
};

export default RegenerationSimulator;