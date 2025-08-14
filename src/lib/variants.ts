/**
 * Component Variants System
 * Centralized variant definitions using class-variance-authority
 */

import { cva } from 'class-variance-authority';

// Text variants for consistent typography
export const textVariants = cva('', {
  variants: {
    variant: {
      // Hero text - largest, most impactful
      hero: 'font-display font-black text-fluid-6xl leading-tight tracking-tighter text-gradient',
      // Main headings
      h1: 'font-display font-bold text-fluid-5xl leading-tight tracking-tight text-gray-100',
      h2: 'font-display font-bold text-fluid-4xl leading-tight tracking-tight text-gray-100',
      h3: 'font-display font-semibold text-fluid-3xl leading-snug tracking-tight text-gray-100',
      h4: 'font-display font-semibold text-fluid-2xl leading-snug text-gray-100',
      h5: 'font-display font-medium text-fluid-xl leading-snug text-gray-100',
      h6: 'font-display font-medium text-fluid-lg leading-snug text-gray-100',
      // Body text
      body: 'font-body text-fluid-base leading-relaxed text-gray-300',
      bodyLarge: 'font-body text-fluid-lg leading-relaxed text-gray-300',
      bodySmall: 'font-body text-fluid-sm leading-normal text-gray-400',
      // Special text styles
      caption: 'font-body font-medium text-xs uppercase tracking-wider text-gray-400',
      label: 'font-body font-medium text-sm text-gray-200',
      code: 'font-mono text-sm bg-gray-800 px-2 py-1 rounded text-primary-400',
      accent: 'font-accent text-fluid-lg italic text-gray-200',
      // Interactive text
      link: 'font-body text-primary-400 hover:text-primary-300 transition-colors underline-offset-4 hover:underline',
      button: 'font-body font-medium text-sm',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
      justify: 'text-justify',
    },
    color: {
      primary: 'text-gray-100',
      secondary: 'text-gray-300',
      muted: 'text-gray-400',
      accent: 'text-primary-400',
      success: 'text-green-400',
      warning: 'text-yellow-400',
      error: 'text-red-400',
      info: 'text-blue-400',
    },
  },
  defaultVariants: {
    variant: 'body',
    align: 'left',
    color: 'primary',
  },
});

// Container variants for consistent layouts
export const containerVariants = cva('mx-auto px-4 sm:px-6 lg:px-8', {
  variants: {
    size: {
      sm: 'max-w-2xl',
      md: 'max-w-4xl',
      lg: 'max-w-6xl',
      xl: 'max-w-7xl',
      full: 'max-w-full',
      screen: 'max-w-screen-2xl',
    },
    padding: {
      none: 'px-0',
      sm: 'px-4',
      md: 'px-6',
      lg: 'px-8',
      xl: 'px-12',
    },
  },
  defaultVariants: {
    size: 'xl',
    padding: 'lg',
  },
});

// Section variants for page sections
export const sectionVariants = cva('relative', {
  variants: {
    spacing: {
      none: '',
      sm: 'py-12',
      md: 'py-16',
      lg: 'py-20',
      xl: 'py-24',
      '2xl': 'py-32',
    },
    background: {
      transparent: 'bg-transparent',
      primary: 'bg-gray-900',
      secondary: 'bg-gray-800/50',
      gradient: 'bg-gradient-to-b from-gray-900 to-gray-800',
      noise: 'bg-gray-900 bg-noise',
    },
    overflow: {
      visible: 'overflow-visible',
      hidden: 'overflow-hidden',
      auto: 'overflow-auto',
    },
  },
  defaultVariants: {
    spacing: 'lg',
    background: 'transparent',
    overflow: 'visible',
  },
});

// Grid variants for consistent grid layouts
export const gridVariants = cva('grid gap-6', {
  variants: {
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
      6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
      auto: 'grid-cols-[repeat(auto-fit,minmax(280px,1fr))]',
      autoSm: 'grid-cols-[repeat(auto-fit,minmax(200px,1fr))]',
      autoLg: 'grid-cols-[repeat(auto-fit,minmax(350px,1fr))]',
    },
    gap: {
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8',
      xl: 'gap-12',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    },
  },
  defaultVariants: {
    cols: 'auto',
    gap: 'md',
    align: 'stretch',
  },
});

// Flex variants for consistent flex layouts
export const flexVariants = cva('flex', {
  variants: {
    direction: {
      row: 'flex-row',
      col: 'flex-col',
      rowReverse: 'flex-row-reverse',
      colReverse: 'flex-col-reverse',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
      baseline: 'items-baseline',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly',
    },
    wrap: {
      nowrap: 'flex-nowrap',
      wrap: 'flex-wrap',
      wrapReverse: 'flex-wrap-reverse',
    },
    gap: {
      none: 'gap-0',
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    },
  },
  defaultVariants: {
    direction: 'row',
    align: 'center',
    justify: 'start',
    wrap: 'nowrap',
    gap: 'md',
  },
});

// Animation variants for consistent animations
export const animationVariants = cva('', {
  variants: {
    type: {
      none: '',
      fadeIn: 'animate-fade-in',
      slideUp: 'animate-slide-up',
      slideDown: 'animate-slide-down',
      slideLeft: 'animate-slide-left',
      slideRight: 'animate-slide-right',
      scaleIn: 'animate-scale-in',
      float: 'animate-float',
      pulse: 'animate-pulse-slow',
      bounce: 'animate-bounce-slow',
      spin: 'animate-spin-slow',
      gradient: 'animate-gradient-xy',
    },
    delay: {
      none: '',
      100: 'animate-stagger-1',
      200: 'animate-stagger-2',
      300: 'animate-stagger-3',
      400: 'animate-stagger-4',
      500: 'animate-stagger-5',
      600: 'animate-stagger-6',
    },
    duration: {
      fast: 'duration-200',
      normal: 'duration-300',
      slow: 'duration-500',
      slower: 'duration-700',
    },
    hover: {
      none: '',
      lift: 'hover-lift',
      scale: 'hover-scale',
      glow: 'hover-glow',
    },
  },
  defaultVariants: {
    type: 'none',
    delay: 'none',
    duration: 'normal',
    hover: 'none',
  },
});

// Badge variants for status indicators
export const badgeVariants = cva(
  'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-gray-800 text-gray-300 border border-gray-700',
        primary: 'bg-primary-500/20 text-primary-400 border border-primary-500/30',
        success: 'bg-green-500/20 text-green-400 border border-green-500/30',
        warning: 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30',
        error: 'bg-red-500/20 text-red-400 border border-red-500/30',
        info: 'bg-blue-500/20 text-blue-400 border border-blue-500/30',
        outline: 'border border-gray-600 text-gray-300 hover:bg-gray-800',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-2.5 py-0.5 text-xs',
        lg: 'px-3 py-1 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

// Input variants for form elements
export const inputVariants = cva(
  'w-full rounded-lg border bg-transparent px-3 py-2 text-sm transition-colors placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'border-gray-700 focus:border-primary-500 focus:ring-primary-500/20',
        error: 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
        success: 'border-green-500 focus:border-green-500 focus:ring-green-500/20',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-3 text-sm',
        lg: 'h-12 px-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

// Loading variants for skeleton states
export const loadingVariants = cva('animate-pulse', {
  variants: {
    variant: {
      skeleton: 'bg-gray-800 rounded',
      shimmer: 'skeleton rounded',
      pulse: 'pulse-loading',
      dots: 'loading-dots',
    },
    size: {
      sm: 'h-4',
      md: 'h-6',
      lg: 'h-8',
      xl: 'h-12',
      text: 'h-4 w-3/4',
      title: 'h-8 w-1/2',
      avatar: 'h-12 w-12 rounded-full',
      card: 'h-48 w-full',
    },
  },
  defaultVariants: {
    variant: 'skeleton',
    size: 'md',
  },
});

// Export all variants
export const variants = {
  text: textVariants,
  container: containerVariants,
  section: sectionVariants,
  grid: gridVariants,
  flex: flexVariants,
  animation: animationVariants,
  badge: badgeVariants,
  input: inputVariants,
  loading: loadingVariants,
} as const;