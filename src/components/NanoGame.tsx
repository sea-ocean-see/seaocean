import React from 'react';
import { FlaskConical } from 'lucide-react';
import { GameProvider } from './game/context/GameContext';
import GameBoard from './game/board/GameBoard';
import CollectionPanel from './game/controls/CollectionPanel';

const NanoGame = () => {
  return (
    <section id="game" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <FlaskConical className="h-8 w-8 text-[#00ffcc] mr-4" />
          <h2 className="text-3xl font-bold text-gray-900">Nanoparticle Collector</h2>
        </div>
        <p className="text-gray-600 mb-8">
          Click to collect different types of nanoparticles and learn about their applications in medicine!
        </p>
        
        <GameProvider>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <GameBoard />
            </div>
            <div>
              <CollectionPanel />
            </div>
          </div>
        </GameProvider>
      </div>
    </section>
  );
};

export default NanoGame;