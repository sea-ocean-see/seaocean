export type NanoparticleType = 'magnetic' | 'lipid' | 'polymer';

export interface Nanoparticle {
  id: number;
  type: NanoparticleType;
  x: number;
  y: number;
  collected: boolean;
}

export interface GameState {
  nanoparticles: Nanoparticle[];
  score: number;
  level: number;
  collectedTypes: Record<NanoparticleType, number>;
}

export type GameAction =
  | { type: 'COLLECT_NANOPARTICLE'; payload: number }
  | { type: 'SPAWN_NANOPARTICLE'; payload: Omit<Nanoparticle, 'id' | 'collected'> }
  | { type: 'LEVEL_UP'; payload: number };