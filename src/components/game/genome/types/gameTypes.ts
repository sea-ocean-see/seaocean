export type TowerType = 'crispr' | 'nanobot' | 'antibody' | 'enzyme';
export type EnemyType = 'virus' | 'mutagen' | 'radical';

export interface Tower {
  id: number;
  type: TowerType;
  x: number;
  y: number;
  level: number;
  range: number;
  damage: number;
  cooldown: number;
  currentCooldown: number;
}

export interface Enemy {
  id: number;
  type: EnemyType;
  x: number;
  y: number;
  health: number;
  speed: number;
  path: number;
  progress: number;
}

export interface GameState {
  towers: Tower[];
  enemies: Enemy[];
  resources: number;
  wave: number;
  health: number;
  score: number;
  gameOver: boolean;
  paused: boolean;
}

export type GameAction =
  | { type: 'PLACE_TOWER'; payload: { type: TowerType; x: number; y: number } }
  | { type: 'UPGRADE_TOWER'; payload: { id: number } }
  | { type: 'SPAWN_ENEMY'; payload: Enemy }
  | { type: 'DAMAGE_ENEMY'; payload: { id: number; damage: number } }
  | { type: 'UPDATE_GAME'; payload: { deltaTime: number } }
  | { type: 'START_WAVE' }
  | { type: 'PAUSE_GAME' }
  | { type: 'GAME_OVER' };