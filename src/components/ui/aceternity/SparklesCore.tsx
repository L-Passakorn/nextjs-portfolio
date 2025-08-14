'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/cn';

export interface SparklesCoreProps {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
  particleSpeed?: number;
}

export const SparklesCore: React.FC<SparklesCoreProps> = ({
  id = 'sparkles',
  className,
  background = 'transparent',
  minSize = 1,
  maxSize = 3,
  particleDensity = 100,
  particleColor = '#ff6b35',
  particleSpeed = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      opacitySpeed: number;
    }> = [];

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    const createParticles = () => {
      particles.length = 0;
      const area = canvas.width * canvas.height;
      const numParticles = Math.floor(area / (10000 / particleDensity));

      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (maxSize - minSize) + minSize,
          speedX: (Math.random() - 0.5) * particleSpeed,
          speedY: (Math.random() - 0.5) * particleSpeed,
          opacity: Math.random(),
          opacitySpeed: (Math.random() - 0.5) * 0.02,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Update opacity
        particle.opacity += particle.opacitySpeed;
        if (particle.opacity <= 0 || particle.opacity >= 1) {
          particle.opacitySpeed *= -1;
        }
        particle.opacity = Math.max(0, Math.min(1, particle.opacity));

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particleColor;
        ctx.shadowBlur = particle.size * 2;
        ctx.shadowColor = particleColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    // Initialize
    resizeCanvas();
    createParticles();
    animate();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [minSize, maxSize, particleDensity, particleColor, particleSpeed]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={{ background }}
    />
  );
};