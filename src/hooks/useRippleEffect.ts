import { useCallback } from 'react';

interface RippleOptions {
  color?: string;
  duration?: number;
}

export const useRippleEffect = (options: RippleOptions = {}) => {
  const { 
    color = 'rgba(255, 255, 255, 0.7)', 
    duration = 600 
  } = options;

  const createRipple = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const element = event.currentTarget;
    
    // Get element position
    const rect = element.getBoundingClientRect();
    
    // Calculate ripple size and position
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    // Create ripple element
    const ripple = document.createElement('span');
    
    // Style the ripple
    ripple.style.position = 'absolute';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.borderRadius = '50%';
    ripple.style.backgroundColor = color;
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = `ripple ${duration}ms linear`;
    ripple.style.pointerEvents = 'none';
    
    // Add relative positioning to the element if it doesn't have it
    const computedPosition = window.getComputedStyle(element).getPropertyValue('position');
    if (computedPosition === 'static') {
      element.style.position = 'relative';
    }
    
    // Add overflow hidden to contain the ripple
    element.style.overflow = 'hidden';
    
    // Append ripple to element
    element.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
      if (ripple && ripple.parentNode) {
        ripple.parentNode.removeChild(ripple);
      }
    }, duration);
  }, [color, duration]);

  return { createRipple };
};

export default useRippleEffect;
