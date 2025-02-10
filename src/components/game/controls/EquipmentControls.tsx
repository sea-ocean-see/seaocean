import React from 'react';
import { useGame } from '../context/GameContext';
import { Microscope, Printer, Box, Activity } from 'lucide-react';

const EquipmentControls = () => {
  const { state, dispatch } = useGame();

  const equipmentList = [
    { id: 'microscope', name: 'Microscope', icon: Microscope },
    { id: 'bioprinter', name: '3D Bioprinter', icon: Printer },
    { id: 'incubator', name: 'Cell Incubator', icon: Box },
    { id: 'analyzer', name: 'Particle Analyzer', icon: Activity }
  ];

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Lab Equipment</h3>
      <div className="grid grid-cols-2 gap-3">
        {equipmentList.map(({ id, name, icon: Icon }) => {
          const equipment = state.equipment[id as keyof typeof state.equipment];
          const canUpgrade = state.resources >= 50;

          return (
            <div key={id} className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center mb-2">
                <Icon className="h-5 w-5 text-[#00ffcc] mr-2" />
                <span className="text-sm font-medium">{name}</span>
              </div>
              <div className="text-xs text-gray-600 mb-2">
                Level: {equipment.level}
              </div>
              <button
                onClick={() => dispatch({ 
                  type: 'UPGRADE_EQUIPMENT', 
                  payload: id as keyof typeof state.equipment 
                })}
                disabled={!equipment.unlocked || !canUpgrade}
                className={`w-full py-1 px-2 rounded text-xs font-medium ${
                  equipment.unlocked && canUpgrade
                    ? 'bg-[#00ffcc] text-white hover:bg-[#00ffcc]/90'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Upgrade (50)
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EquipmentControls;