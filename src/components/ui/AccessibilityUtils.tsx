'use client';

import React, { useEffect } from 'react';

// This component adds various accessibility enhancements to the site
export const AccessibilityEnhancements = () => {
  useEffect(() => {
    // Add role="img" and aria-label to all SVG elements without them
    const svgs = document.querySelectorAll('svg:not([role])');
    svgs.forEach(svg => {
      svg.setAttribute('role', 'img');
      if (!svg.getAttribute('aria-hidden') && !svg.getAttribute('aria-label')) {
        svg.setAttribute('aria-hidden', 'true');
      }
    });

    // Ensure all buttons have accessible names
    const buttons = document.querySelectorAll('button:not([aria-label]):not(:has(*))');
    buttons.forEach(button => {
      if (!button.textContent?.trim()) {
        console.warn('Button without accessible name found:', button);
      }
    });

    // Ensure all form inputs have associated labels
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      const id = input.getAttribute('id');
      if (id) {
        const hasLabel = document.querySelector(`label[for="${id}"]`);
        if (!hasLabel && !input.getAttribute('aria-label')) {
          console.warn('Input without associated label found:', input);
        }
      } else if (!input.getAttribute('aria-label')) {
        console.warn('Input without id or aria-label found:', input);
      }
    });
  }, []);

  return null; // This component doesn't render anything
};

// This component provides a way to announce messages to screen readers
export const ScreenReaderAnnouncement = ({ 
  message, 
  politeness = 'polite' 
}: { 
  message: string; 
  politeness?: 'polite' | 'assertive' 
}) => {
  return (
    <div 
      role="status" 
      aria-live={politeness} 
      aria-atomic="true" 
      className="sr-only"
    >
      {message}
    </div>
  );
};

export default AccessibilityEnhancements;
