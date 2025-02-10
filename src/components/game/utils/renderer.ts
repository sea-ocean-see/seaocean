import { GameState } from '../types/gameTypes';

export const renderBoard = (ctx: CanvasRenderingContext2D, state: GameState) => {
  // Clear canvas
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // Draw grid
  drawGrid(ctx);
  
  // Draw cells
  state.cells.forEach(cell => {
    drawCell(ctx, cell);
  });
};

const drawGrid = (ctx: CanvasRenderingContext2D) => {
  ctx.strokeStyle = '#e5e7eb';
  ctx.lineWidth = 0.5;

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
};

const drawCell = (ctx: CanvasRenderingContext2D, cell: GameState['cells'][0]) => {
  // Draw cell body
  ctx.beginPath();
  ctx.fillStyle = cell.type === 'stem' ? '#00ffcc' : '#33ccff';
  ctx.arc(cell.x, cell.y, 5, 0, Math.PI * 2);
  ctx.fill();

  // Draw health bar
  const barWidth = 20;
  const barHeight = 3;
  const barX = cell.x - barWidth / 2;
  const barY = cell.y - 12;

  // Background
  ctx.fillStyle = '#ef4444';
  ctx.fillRect(barX, barY, barWidth, barHeight);

  // Health
  ctx.fillStyle = '#22c55e';
  ctx.fillRect(barX, barY, (cell.health / 100) * barWidth, barHeight);
};