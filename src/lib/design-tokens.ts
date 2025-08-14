/**
 * Design Tokens for the Portfolio Website
 * Centralized design system configuration
 */

export const designTokens = {
  // Color Palette
  colors: {
    primary: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#ff6b35', // Main brand color
      600: '#e55a2b',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
      950: '#431407',
    },
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#0a0a0a', // Main background
      950: '#030712',
    },
    semantic: {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    },
  },

  // Typography Scale
  typography: {
    fontFamilies: {
      display: ['Poppins', 'system-ui', 'sans-serif'],
      body: ['Space Grotesk', 'system-ui', 'sans-serif'],
      accent: ['Playfair Display', 'Georgia', 'serif'],
      mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
    },
    fontSizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
      '7xl': '4.5rem',  // 72px
      '8xl': '6rem',    // 96px
      '9xl': '8rem',    // 128px
    },
    fluidSizes: {
      sm: 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
      base: 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
      lg: 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
      xl: 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
      '2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
      '3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem)',
      '4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)',
      '5xl': 'clamp(3rem, 2.5rem + 2.5vw, 4rem)',
      '6xl': 'clamp(3.75rem, 3rem + 3.75vw, 5rem)',
    },
    fontWeights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeights: {
      tight: 1.1,
      snug: 1.2,
      normal: 1.5,
      relaxed: 1.6,
      loose: 1.8,
    },
    letterSpacing: {
      tighter: '-0.03em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },

  // Spacing Scale
  spacing: {
    px: '1px',
    0: '0',
    0.5: '0.125rem',  // 2px
    1: '0.25rem',     // 4px
    1.5: '0.375rem',  // 6px
    2: '0.5rem',      // 8px
    2.5: '0.625rem',  // 10px
    3: '0.75rem',     // 12px
    3.5: '0.875rem',  // 14px
    4: '1rem',        // 16px
    5: '1.25rem',     // 20px
    6: '1.5rem',      // 24px
    7: '1.75rem',     // 28px
    8: '2rem',        // 32px
    9: '2.25rem',     // 36px
    10: '2.5rem',     // 40px
    11: '2.75rem',    // 44px
    12: '3rem',       // 48px
    14: '3.5rem',     // 56px
    16: '4rem',       // 64px
    20: '5rem',       // 80px
    24: '6rem',       // 96px
    28: '7rem',       // 112px
    32: '8rem',       // 128px
    36: '9rem',       // 144px
    40: '10rem',      // 160px
    44: '11rem',      // 176px
    48: '12rem',      // 192px
    52: '13rem',      // 208px
    56: '14rem',      // 224px
    60: '15rem',      // 240px
    64: '16rem',      // 256px
    72: '18rem',      // 288px
    80: '20rem',      // 320px
    96: '24rem',      // 384px
  },

  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    default: '0.25rem', // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
    full: '9999px',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    glow: '0 0 20px rgba(255, 107, 53, 0.3)',
    glowLg: '0 0 40px rgba(255, 107, 53, 0.4)',
    glowXl: '0 0 60px rgba(255, 107, 53, 0.5)',
  },

  // Animation Configuration
  animation: {
    durations: {
      fast: '150ms',
      normal: '300ms',
      slow: '600ms',
      slower: '1000ms',
    },
    easings: {
      linear: 'linear',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      backOut: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      backInOut: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
    },
    stagger: {
      fast: 50,    // 50ms
      normal: 100, // 100ms
      slow: 200,   // 200ms
    },
  },

  // Breakpoints
  breakpoints: {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    '3xl': '1600px',
    '4xl': '1920px',
  },

  // Z-Index Scale
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1020,
    banner: 1030,
    overlay: 1040,
    modal: 1050,
    popover: 1060,
    skipLink: 1070,
    toast: 1080,
    tooltip: 1090,
  },

  // Component Variants
  components: {
    button: {
      sizes: {
        sm: {
          height: '2.25rem', // 36px
          padding: '0 0.75rem',
          fontSize: '0.875rem',
        },
        md: {
          height: '2.75rem', // 44px
          padding: '0 1.5rem',
          fontSize: '1rem',
        },
        lg: {
          height: '3rem', // 48px
          padding: '0 2rem',
          fontSize: '1.125rem',
        },
        xl: {
          height: '3.5rem', // 56px
          padding: '0 2.5rem',
          fontSize: '1.25rem',
        },
      },
    },
    card: {
      sizes: {
        sm: { padding: '1rem' },
        md: { padding: '1.5rem' },
        lg: { padding: '2rem' },
        xl: { padding: '2.5rem' },
      },
    },
  },

  // Layout
  layout: {
    maxWidths: {
      xs: '20rem',    // 320px
      sm: '24rem',    // 384px
      md: '28rem',    // 448px
      lg: '32rem',    // 512px
      xl: '36rem',    // 576px
      '2xl': '42rem', // 672px
      '3xl': '48rem', // 768px
      '4xl': '56rem', // 896px
      '5xl': '64rem', // 1024px
      '6xl': '72rem', // 1152px
      '7xl': '80rem', // 1280px
      full: '100%',
      screen: '100vw',
    },
    containers: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
} as const;

// Type definitions for design tokens
export type ColorScale = typeof designTokens.colors.primary;
export type FontSize = keyof typeof designTokens.typography.fontSizes;
export type Spacing = keyof typeof designTokens.spacing;
export type BorderRadius = keyof typeof designTokens.borderRadius;
export type Shadow = keyof typeof designTokens.shadows;
export type Breakpoint = keyof typeof designTokens.breakpoints;
export type ZIndex = keyof typeof designTokens.zIndex;