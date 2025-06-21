'use client';

import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative bg-white dark:bg-gray-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              À Propos de Cabinet CBS
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Cabinet BOURAIMA SIDIBE, inscrit à l&apos;ordre des conseils fiscaux agréés
              du Mali suivant arrêté N°0826/MEF-SG du 21 Mars 2014.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Notre cabinet est composé d&apos;une équipe soudée, intégrée et structurée possédant un haut niveau de 
              savoir-faire dans le domaine de la fiscalité, du droit des affaires, de la législation du travail 
              et des ressources humaines.
            </p>
            
            <div className="flex flex-col space-y-2 mb-6">
              <div className="flex items-center space-x-4">
                <div className="h-1 w-20 bg-primary dark:bg-blue-400"></div>
                <p className="font-semibold text-primary dark:text-blue-400">
                  RCCM: ML-BKO-2015-A-6108
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="h-1 w-20 bg-primary dark:bg-blue-400"></div>
                <p className="font-semibold text-primary dark:text-blue-400">
                  NIF: 084121301X
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Replace with actual office image when available */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-blue-700/80 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <h3 className="text-2xl font-bold mb-4">Notre Mission</h3>
                <p className="text-lg mb-4">
                  Offrir des services de conseil fiscal, juridique et social de la plus haute qualité 
                  grâce à notre connaissance intime et de longue date de la fiscalité, du droit des affaires, 
                  de la GRH et de la législation du travail au Mali.
                </p>
                <p className="text-lg">
                  Notre équipe pluridisciplinaire intervient auprès des grandes sociétés nationales et 
                  internationales pour garantir leur conformité et optimiser leur gestion.
                </p>
              </div>
            </div>
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

export default AboutHero;
