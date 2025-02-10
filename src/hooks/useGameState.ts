import { useState, useCallback } from 'react';
import { GameState, GameActions } from '../types/game';
import { initialGameState } from '../data/gameData';

export const useGameState = () => {
  const [state, setState] = useState<GameState>(initialGameState);

  const actions: GameActions = {
    useEquipment: useCallback((id: string) => {
      setState(prev => {
        // Equipment usage logic
        const equipment = prev.equipment.find(e => e.id === id);
        if (!equipment || !equipment.unlocked) return prev;

        // Update research progress based on equipment
        const research = { ...prev.research };
        switch (equipment.type) {
          case 'microscope':
            research['Stem Cell Culture'] += 5 * equipment.level;
            break;
          case 'bioprinter':
            research['Scaffold Design'] += 5 * equipment.level;
            break;
          // Add more equipment types
        }

        return {
          ...prev,
          research: Object.fromEntries(
            Object.entries(research).map(([key, value]) => [key, Math.min(value, 100)])
          )
        };
      });
    }, []),

    handleClick: useCallback((x: number, y: number) => {
      setState(prev => ({
        ...prev,
        cells: [...prev.cells, { x, y, type: 'stem', health: 100 }]
      }));
    }, []),

    upgradeEquipment: useCallback((id: string) => {
      setState(prev => ({
        ...prev,
        equipment: prev.equipment.map(e =>
          e.id === id ? { ...e, level: e.level + 1 } : e
        )
      }));
    }, [])
  };

  return { state, actions };
};

export default useGameState;