import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { gameReducer, initialState } from './gameReducer';
import { GameState, GameAction } from '../types/gameTypes';

interface GameContextType {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  useEffect(() => {
    let frameId: number;
    let lastTime = performance.now();

    const gameLoop = (currentTime: number) => {
      if (!state.paused && !state.gameOver) {
        const deltaTime = (currentTime - lastTime) / 1000;
        dispatch({ type: 'UPDATE_GAME', payload: { deltaTime } });
        lastTime = currentTime;
      }
      frameId = requestAnimationFrame(gameLoop);
    };

    frameId = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(frameId);
  }, [state.paused, state.gameOver]);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};