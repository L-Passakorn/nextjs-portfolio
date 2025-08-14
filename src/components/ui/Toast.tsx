'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/cn';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
  duration?: number;
  onClose: (id: string) => void;
}

const toastIcons = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
};

const toastStyles = {
  success: 'border-green-500/50 bg-green-500/10 text-green-400',
  error: 'border-red-500/50 bg-red-500/10 text-red-400',
  warning: 'border-yellow-500/50 bg-yellow-500/10 text-yellow-400',
  info: 'border-blue-500/50 bg-blue-500/10 text-blue-400',
};

const Toast: React.FC<ToastProps> = ({
  id,
  type,
  title,
  description,
  duration = 5000,
  onClose,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const Icon = toastIcons[type];

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => onClose(id), 300);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, id, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(id), 300);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 300, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 300, scale: 0.8 }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 300,
          }}
          className={cn(
            'relative flex items-start gap-3 p-4 rounded-lg border backdrop-blur-sm shadow-lg max-w-sm w-full',
            toastStyles[type]
          )}
        >
          {/* Icon */}
          <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-100">{title}</p>
            {description && (
              <p className="mt-1 text-sm text-gray-300">{description}</p>
            )}
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="flex-shrink-0 text-gray-400 hover:text-gray-100 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Progress bar */}
          {duration > 0 && (
            <motion.div
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: duration / 1000, ease: 'linear' }}
              className="absolute bottom-0 left-0 h-1 bg-current opacity-30 rounded-b-lg"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Toast container component
export interface ToastContainerProps {
  toasts: ToastProps[];
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

const positionClasses = {
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
};

const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  position = 'top-right',
}) => {
  return (
    <div
      className={cn(
        'fixed z-[100] flex flex-col gap-2 pointer-events-none',
        positionClasses[position]
      )}
    >
      <AnimatePresence>
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <Toast {...toast} />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export { Toast, ToastContainer };