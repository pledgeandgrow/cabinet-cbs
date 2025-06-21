'use client';

import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { IconType } from 'react-icons';
import useRippleEffect from '@/hooks/useRippleEffect';

export type ButtonProps = Omit<HTMLMotionProps<"button">, "size"> & {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  icon?: IconType;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  fullWidth?: boolean;
  rippleColor?: string;
  rippleDuration?: number;
  className?: string;
  children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      icon: Icon,
      iconPosition = 'left',
      isLoading = false,
      fullWidth = false,
      rippleColor,
      rippleDuration,
      className = '',
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    // Use ripple effect hook
    const { createRipple } = useRippleEffect({
      color: rippleColor || (variant === 'primary' ? 'rgba(255, 255, 255, 0.7)' : 'rgba(37, 99, 235, 0.3)'),
      duration: rippleDuration || 600,
    });

    // Base button styles
    const baseStyles = 'relative inline-flex items-center justify-center font-medium rounded-md transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed overflow-hidden';

    // Size styles
    const sizeStyles = {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
    };

    // Variant styles
    const variantStyles = {
      primary: 'bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-700 shadow-sm',
      secondary: 'bg-gray-600 hover:bg-gray-700 text-white dark:bg-gray-700 dark:hover:bg-gray-800 shadow-sm',
      outline: 'border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200',
      ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200',
      link: 'bg-transparent underline-offset-4 hover:underline text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-0 shadow-none',
    };

    // Width style
    const widthStyle = fullWidth ? 'w-full' : '';

    // Combine all styles
    const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyle} ${className}`;

    // Loading spinner
    const LoadingSpinner = () => (
      <svg
        className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );

    return (
      <motion.button
        ref={ref}
        className={buttonStyles}
        disabled={disabled || isLoading}
        onClick={(e) => {
          if (!disabled && !isLoading) {
            createRipple(e);
            props.onClick?.(e);
          }
        }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {isLoading && <LoadingSpinner />}
        
        {Icon && iconPosition === 'left' && !isLoading && (
          <Icon className="mr-2 -ml-1 h-4 w-4" aria-hidden="true" />
        )}
        
        {children}
        
        {Icon && iconPosition === 'right' && !isLoading && (
          <Icon className="ml-2 -mr-1 h-4 w-4" aria-hidden="true" />
        )}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
