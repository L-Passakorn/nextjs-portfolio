'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';

const buttonVariants = cva(
  // Base styles
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group',
  {
    variants: {
      variant: {
        default:
          'bg-primary-500 text-white shadow-lg hover:bg-primary-600 hover:shadow-glow active:scale-95',
        secondary:
          'bg-gray-800 text-gray-100 border border-gray-700 hover:bg-gray-700 hover:border-gray-600 active:scale-95',
        outline:
          'border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white hover:shadow-glow active:scale-95',
        ghost:
          'text-gray-300 hover:bg-gray-800 hover:text-white active:scale-95',
        link: 'text-primary-500 underline-offset-4 hover:underline hover:text-primary-400',
        gradient:
          'bg-gradient-to-r from-primary-500 to-orange-500 text-white shadow-lg hover:shadow-glow hover:from-primary-600 hover:to-orange-600 active:scale-95',
      },
      size: {
        sm: 'h-9 px-3 text-xs',
        default: 'h-11 px-6 py-2',
        lg: 'h-12 px-8 text-base',
        xl: 'h-14 px-10 text-lg',
        icon: 'h-11 w-11',
      },
      animation: {
        none: '',
        pulse: 'animate-pulse-slow',
        bounce: 'hover:animate-bounce-slow',
        glow: 'hover:shadow-glow-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      animation: 'none',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      animation,
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, animation, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {/* Animated background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
        
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        
        <div className={cn('flex items-center gap-2', loading && 'opacity-0')}>
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </div>
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };