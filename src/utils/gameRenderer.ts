import { GameState } from '../types/game';

export const drawGame = (ctx: CanvasRenderingContext2D, state: GameState) => {
  // Clear canvas
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // Draw grid
  ctx.strokeStyle = '#e5e7eb';
  for (let i = 0; i < ctx.canvas.width; i += 20) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, ctx.canvas.height);
    ctx.stroke();
  }
  for (let i = 0; i < ctx.canvas.height; i += 20) {
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(ctx.canvas.width, i);
    ctx.stroke();
  }

  // Draw cells
  state.cells.forEach(cell => {
    ctx.beginPath();
    ctx.fillStyle = cell.type === 'stem' ? '#00ffcc' : '#33ccff';
    ctx.arc(cell.x, cell.y, 5, 0, Math.PI * 2);
    ctx.fill();

    // Draw health bar
    ctx.fillStyle = '#ef4444';
    ctx.fillRect(cell.x - 10, cell.y - 15, 20, 3);
    ctx.fillStyle = '#22c55e';
    ctx.fillRect(cell.x - 10, cell.y - 15, (cell.health / 100) * 20, 3);
  });
};