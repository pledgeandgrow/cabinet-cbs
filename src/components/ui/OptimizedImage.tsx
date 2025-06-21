'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';

interface OptimizedImageProps extends Omit<ImageProps, 'quality' | 'loading'> {
  lowQuality?: boolean;
  alt: string;
}

/**
 * OptimizedImage component that extends Next.js Image with better defaults
 * for performance optimization
 */
const OptimizedImage = ({
  lowQuality = false,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  alt,
  ...props
}: OptimizedImageProps) => {
  // Set quality based on the lowQuality prop
  const quality = lowQuality ? 60 : 80;
  
  return (
    <Image
      alt={alt} // Explicitly pass alt prop to ensure it's always included
      {...props}
      quality={quality}
      loading={priority ? 'eager' : 'lazy'}
      sizes={sizes}
    />
  );
};

export default OptimizedImage;
