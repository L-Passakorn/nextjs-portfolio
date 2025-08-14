/**
 * UI Components Index
 * Centralized exports for all UI components
 */

// Core UI Components
export { Button, buttonVariants, type ButtonProps } from './Button';
export { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  cardVariants,
  type CardProps 
} from './Card';
export { Modal, type ModalProps } from './Modal';
export { Toast, ToastContainer, type ToastProps, type ToastContainerProps, type ToastType } from './Toast';

// Typography Component (if exists)
export { default as TypographyShowcase } from './TypographyShowcase';

// Aceternity UI Components
export * from './aceternity';

// Showcase Components
export { DesignSystemShowcase } from './DesignSystemShowcase';
export { AceternityShowcase } from './AceternityShowcase';

// Re-export utility functions
export { cn } from '@/lib/cn';
export { designTokens } from '@/lib/design-tokens';
export { variants } from '@/lib/variants';