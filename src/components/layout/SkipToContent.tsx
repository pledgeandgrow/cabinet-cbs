'use client';

import React from 'react';

const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-white dark:bg-gray-900 text-primary dark:text-blue-400 px-4 py-2 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-400"
    >
      Aller au contenu principal
    </a>
  );
};

export default SkipToContent;
