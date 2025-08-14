'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

export interface MovingBorderProps {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderRadius?: string;
  as?: React.ElementType;
  borderClassName?: string;
}

export const MovingBorder: React.FC<MovingBorderProps> = ({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderRadius = '1.75rem',
  as: Component = 'button',
  borderClassName,
  ...otherProps
}) => {
  return (
    <Component
      className={cn(
        'bg-transparent relative text-xl p-[1px] overflow-hidden',
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <motion.div
          className={cn(
            'h-56 w-56 opacity-[0.8] bg-[radial-gradient(circle_farthest-side_at_0_0,var(--primary-500),transparent)]',
            borderClassName
          )}
          style={{
            background: 'conic-gradient(from 0deg, #ff6b35, #f59e0b, #ff6b35)',
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: duration / 1000,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div
        className={cn(
          'relative bg-gray-900 border border-gray-700 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased',
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
};