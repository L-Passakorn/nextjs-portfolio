'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/cn';

export interface HoverEffectItem {
  title: string;
  description: string;
  link?: string;
  icon?: React.ReactNode;
}

export interface HoverEffectProps {
  items: HoverEffectItem[];
  className?: string;
}

export const HoverEffect: React.FC<HoverEffectProps> = ({
  items,
  className,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-r from-primary-500/20 to-orange-500/20 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex items-center gap-4 mb-4">
              {item.icon && (
                <div className="text-primary-400 text-2xl">{item.icon}</div>
              )}
              <CardTitle>{item.title}</CardTitle>
            </div>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <div
      className={cn(
        'rounded-2xl h-full w-full p-6 overflow-hidden bg-gray-900/50 border border-gray-700 group-hover:border-gray-600 relative z-20 transition-all duration-300',
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <h4 className={cn('text-gray-100 font-bold tracking-wide', className)}>
      {children}
    </h4>
  );
};

export const CardDescription: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <p
      className={cn(
        'text-gray-400 tracking-wide leading-relaxed text-sm',
        className
      )}
    >
      {children}
    </p>
  );
};