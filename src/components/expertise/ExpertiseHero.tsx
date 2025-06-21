'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ExpertiseHero = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Notre Expertise
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Découvrez nos expériences d&apos;assistance fiscale, sociale, juridique et en gestion des ressources humaines auprès de nos clients au Mali et dans la région.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center"
          >
            <a 
              href="#experiences"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-200"
            >
              Voir nos expériences
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-primary/10 dark:bg-blue-900/20"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-primary/10 dark:bg-blue-900/20"></div>
      </div>
    </section>
  );
};

export default ExpertiseHero;
