export const NANOPARTICLE_INFO = {
  magnetic: {
    color: '#FF6B6B',
    description: 'Used for targeted drug delivery and MRI imaging',
    target: 'Blood vessels & Tumors'
  },
  lipid: {
    color: '#4ECDC4',
    description: 'Perfect for gene therapy and vaccine delivery',
    target: 'Cell membranes & Liver'
  },
  polymer: {
    color: '#96CEB4',
    description: 'Ideal for controlled drug release and tissue repair',
    target: 'Skin & Joints'
  }
} as const;

export const SPAWN_INTERVAL = 2000; // ms
export const PARTICLE_SIZE = 15;
export const CLICK_RADIUS = 20;