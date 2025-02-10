import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconCardProps {
  Icon: LucideIcon;
  label: string;
}

const IconCard: React.FC<IconCardProps> = ({ Icon, label }) => {
  return (
    <div className="group relative p-6 bg-[rgba(0,255,204,0.1)] rounded-2xl transition-all duration-300 hover:bg-[rgba(0,255,204,0.15)] hover:scale-105">
      <div className="absolute inset-0 rounded-2xl bg-[#00ffcc] opacity-0 blur-xl group-hover:opacity-10 transition-opacity"></div>
      <Icon className="w-8 h-8 text-[#00ffcc] mb-2" />
      <span className="text-[#00ffcc] text-sm font-medium">{label}</span>
    </div>
  );
}

export default IconCard;