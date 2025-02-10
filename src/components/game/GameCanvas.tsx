import React, { useEffect, useRef } from 'react';
import { GameState, GameActions } from '../../types/game';
import { drawGame } from '../../utils/gameRenderer';

interface GameCanvasProps {
  state: GameState;
  actions: GameActions;
}

const GameCanvas: React.FC<GameCanvasProps> = ({ state, actions }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      drawGame(ctx, state);
      requestAnimationFrame(render);
    };

    render();
  }, [state]);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        className="w-full rounded-lg border-2 border-[#00ffcc]/20"
        onClick={(e) => {
          const rect = canvasRef.current?.getBoundingClientRect();
          if (!rect) return;
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          actions.handleClick(x, y);
        }}
      />
    </div>
  );
};

export default GameCanvas;