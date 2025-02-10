import React, { useRef, useEffect } from 'react';
import { useGame } from './context/GameContext';
import { renderGame } from './utils/renderer';
import { TowerType } from './types/gameTypes';

const GameBoard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { state, dispatch } = useGame();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    renderGame(ctx, state);
  }, [state]);

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Example tower placement
    dispatch({
      type: 'PLACE_TOWER',
      payload: { type: 'crispr' as TowerType, x, y }
    });
  };

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      onClick={handleClick}
      className="w-full rounded-lg border-2 border-[#00ffcc]/20"
    />
  );
};

export default GameBoard;