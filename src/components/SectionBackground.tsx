import React from 'react';

interface SectionBackgroundProps {
  type: 'video' | 'image';
  url: string;
  opacity?: number;
  children: React.ReactNode;
}

const SectionBackground: React.FC<SectionBackgroundProps> = ({ type, url, opacity = 0.2, children }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {type === 'video' ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
          >
            <source src={url} type="video/mp4" />
          </video>
        ) : (
          <img
            src={url}
            alt="Background"
            className="object-cover w-full h-full"
          />
        )}
        <div className={`absolute inset-0 bg-white`} style={{ opacity }} />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SectionBackground;