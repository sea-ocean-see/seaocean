import React from 'react';
import ScoreDisplay from './ScoreDisplay';
import NanoparticleInfo from './NanoparticleInfo';

const ControlPanel = () => {
  return (
    <div className="space-y-6">
      <ScoreDisplay />
      <NanoparticleInfo />
    </div>
  );
};

export default ControlPanel;