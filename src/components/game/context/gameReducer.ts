import { GameState, GameAction } from '../types/gameTypes';

export const initialState: GameState = {
  nanoparticles: [],
  score: 0,
  level: 1,
  collectedTypes: {
    magnetic: 0,
    lipid: 0,
    polymer: 0
  }
};

export const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'COLLECT_NANOPARTICLE': {
      const particle = state.nanoparticles.find(np => np.id === action.payload);
      if (!particle || particle.collected) return state;

      return {
        ...state,
        score: state.score + 10,
        nanoparticles: state.nanoparticles.map(np =>
          np.id === action.payload ? { ...np, collected: true } : np
        ),
        collectedTypes: {
          ...state.collectedTypes,
          [particle.type]: state.collectedTypes[particle.type] + 1
        }
      };
    }

    case 'SPAWN_NANOPARTICLE':
      return {
        ...state,
        nanoparticles: [
          ...state.nanoparticles,
          { ...action.payload, id: Date.now(), collected: false }
        ]
      };

    case 'LEVEL_UP':
      return {
        ...state,
        level: action.payload
      };

    default:
      return state;
  }
};