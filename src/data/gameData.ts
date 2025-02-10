import { GameState } from '../types/game';

export const initialGameState: GameState = {
  equipment: [
    {
      id: 'microscope',
      name: 'Microscope',
      type: 'microscope',
      unlocked: true,
      level: 1
    },
    {
      id: 'bioprinter',
      name: '3D Bioprinter',
      type: 'bioprinter',
      unlocked: false,
      level: 0
    },
    {
      id: 'incubator',
      name: 'Cell Incubator',
      type: 'incubator',
      unlocked: false,
      level: 0
    },
    {
      id: 'analyzer',
      name: 'Particle Analyzer',
      type: 'analyzer',
      unlocked: false,
      level: 0
    }
  ],
  research: {
    'Stem Cell Culture': 0,
    'Scaffold Design': 0,
    'Drug Delivery': 0,
    'Tissue Engineering': 0
  },
  cells: []
};