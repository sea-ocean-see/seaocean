import React from 'react';
import { FlaskConical } from 'lucide-react';
import GameBoard from './genome/GameBoard';
import ControlPanel from './genome/controls/ControlPanel';
import { GameProvider } from './genome/context/GameContext';
import TutorialOverlay from './genome/overlays/TutorialOverlay';

const GenomeGuardian = () => {
  return (
    <section id="game" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <FlaskConical className="h-8 w-8 text-[#00ffcc] mr-4" />
          <h2 className="text-3xl font-bold text-gray-900">Genome Guardian</h2>
        </div>
        <GameProvider>
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-6 p-6">
              <div className="lg:col-span-2">
                <GameBoard />
                <TutorialOverlay />
              </div>
              <div>
                <ControlPanel />
              </div>
            </div>
          </div>
        </GameProvider>
      </div>
    </section>
  );
};

export default GenomeGuardian;