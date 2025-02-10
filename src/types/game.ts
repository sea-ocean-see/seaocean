export interface Equipment {
  id: string;
  name: string;
  type: string;
  unlocked: boolean;
  level: number;
}

export interface Research {
  'Stem Cell Culture': number;
  'Scaffold Design': number;
  'Drug Delivery': number;
  'Tissue Engineering': number;
}

export interface GameState {
  equipment: Equipment[];
  research: Research;
  cells: {
    x: number;
    y: number;
    type: string;
    health: number;
  }[];
}

export interface GameActions {
  useEquipment: (id: string) => void;
  handleClick: (x: number, y: number) => void;
  upgradeEquipment: (id: string) => void;
}