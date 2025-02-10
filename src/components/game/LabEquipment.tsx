import React from 'react';
import { Equipment } from '../../types/game';
import { MicroscopeIcon, TestTubeIcon, Dna } from 'lucide-react';

interface LabEquipmentProps {
  equipment: Equipment[];
  onUse: (id: string) => void;
}

const LabEquipment: React.FC<LabEquipmentProps> = ({ equipment, onUse }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'microscope': return MicroscopeIcon;
      case 'bioprinter': return TestTubeIcon;
      default: return Dna;
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Lab Equipment</h3>
      <div className="grid grid-cols-2 gap-3">
        {equipment.map((item) => {
          const Icon = getIcon(item.type);
          return (
            <button
              key={item.id}
              onClick={() => onUse(item.id)}
              className={`p-3 rounded-lg flex flex-col items-center ${
                item.unlocked 
                  ? 'bg-white hover:bg-[#00ffcc]/10' 
                  : 'bg-gray-200 cursor-not-allowed'
              }`}
              disabled={!item.unlocked}
            >
              <Icon className="h-6 w-6 mb-2 text-[#00ffcc]" />
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LabEquipment;