'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/cn';

export interface BackgroundBeamsProps {
  className?: string;
  children?: React.ReactNode;
}

export const BackgroundBeams: React.FC<BackgroundBeamsProps> = ({
  className,
  children,
}) => {
  const beamsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const beams = beamsRef.current;
    if (!beams) return;

    const createBeam = () => {
      const beam = document.createElement('div');
      beam.className = 'absolute bg-gradient-to-t from-primary-500/20 to-transparent';
      beam.style.width = '2px';
      beam.style.height = '200px';
      beam.style.left = Math.random() * 100 + '%';
      beam.style.top = '100%';
      beam.style.animation = 'beam-animation 3s linear infinite';
      beam.style.animationDelay = Math.random() * 3 + 's';
      
      beams.appendChild(beam);

      setTimeout(() => {
        if (beams.contains(beam)) {
          beams.removeChild(beam);
        }
      }, 3000);
    };

    const interval = setInterval(createBeam, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div
        ref={beamsRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)',
        }}
      />
      <style jsx>{`
        @keyframes beam-animation {
          0% {
            transform: translateY(0) scaleY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-200px) scaleY(1);
            opacity: 0;
          }
        }
      `}</style>
      {children}
    </div>
  );
};