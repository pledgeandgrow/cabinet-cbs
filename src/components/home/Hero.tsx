'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-y-0 right-0 w-1/2 bg-blue-50 dark:bg-blue-950/20" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-primary dark:text-blue-400">Cabinet CBS</span>
              <br />
              Votre Conseil Fiscal de Confiance
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Expertise fiscale, juridique et sociale pour les entreprises et administrations publiques au Mali et à l&apos;international.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg"
                icon={FiArrowRight}
                iconPosition="right"
              >
                Découvrir nos services
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
              >
                Nous contacter
              </Button>
            </div>
          </motion.div>
          
          {/* Image or illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-64 md:h-auto"
          >
            <div className="absolute inset-0 bg-primary/10 dark:bg-blue-900/20 rounded-2xl" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <h3 className="text-xl font-semibold text-primary dark:text-blue-400 mb-2">
                  Conseil fiscal agréé
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Arrêté N°0826/MEF-SG du 21 Mars 2014
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  NIF: 084121301X
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
