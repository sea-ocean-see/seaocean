import React, { useRef, useEffect } from 'react';
import { useGame } from '../context/GameContext';
import { NANOPARTICLE_INFO, SPAWN_INTERVAL, PARTICLE_SIZE, CLICK_RADIUS } from '../utils/constants';
import { NanoparticleType } from '../types/gameTypes';

const GameBoard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { state, dispatch } = useGame();

  // Render game board
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    state.nanoparticles.forEach(np => {
      if (np.collected) return;
      
      ctx.beginPath();
      ctx.fillStyle = NANOPARTICLE_INFO[np.type].color;
      ctx.arc(np.x, np.y, PARTICLE_SIZE, 0, Math.PI * 2);
      ctx.fill();
    });
  }, [state.nanoparticles]);

  // Spawn nanoparticles
  useEffect(() => {
    const types: NanoparticleType[] = ['magnetic', 'lipid', 'polymer'];
    
    const spawnInterval = setInterval(() => {
      const randomType = types[Math.floor(Math.random() * types.length)];
      
      dispatch({
        type: 'SPAWN_NANOPARTICLE',
        payload: {
          type: randomType,
          x: Math.random() * 560 + 20,
          y: Math.random() * 360 + 20
        }
      });
    }, SPAWN_INTERVAL);

    return () => clearInterval(spawnInterval);
  }, [dispatch]);

  const handleClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    state.nanoparticles.forEach(np => {
      if (np.collected) return;
      
      const distance = Math.sqrt(Math.pow(x - np.x, 2) + Math.pow(y - np.y, 2));
      if (distance < CLICK_RADIUS) {
        dispatch({ type: 'COLLECT_NANOPARTICLE', payload: np.id });
      }
    });
  };

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        onClick={handleClick}
        className="w-full rounded-lg border-2 border-[#00ffcc]/20 bg-gray-50"
      />
      <div className="absolute top-4 left-4 bg-white/80 rounded px-3 py-1 text-sm">
        Level {state.level} | Score: {state.score}
      </div>
    </div>
  );
};

export default GameBoard;