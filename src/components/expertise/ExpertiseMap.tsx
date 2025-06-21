'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';

const countries = [
  {
    name: "Mali",
    clients: 4,
    position: { top: "40%", left: "30%" },
    highlight: true
  },
  {
    name: "Niger",
    clients: 1,
    position: { top: "42%", left: "45%" }
  },
  {
    name: "Sénégal",
    clients: 1,
    position: { top: "38%", left: "15%" }
  },
  {
    name: "Côte d'Ivoire",
    clients: 1,
    position: { top: "50%", left: "25%" }
  }
];

const ExpertiseMap = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Notre Présence
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Cabinet CBS accompagne ses clients dans plusieurs pays d&apos;Afrique de l&apos;Ouest
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map visualization */}
          <motion.div 
            className="relative h-[400px] md:h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 m-4 bg-blue-50 dark:bg-gray-700 rounded-lg overflow-hidden">
              {/* Simplified West Africa map outline - this is a placeholder */}
              <div className="absolute inset-0 border-2 border-dashed border-gray-300 dark:border-gray-600 m-8 rounded-lg">
                {/* This is where a real map would go */}
                <div className="absolute top-0 left-0 w-full h-full text-center flex items-center justify-center text-gray-400 dark:text-gray-500 text-sm">
                  Carte d&apos;Afrique de l&apos;Ouest
                </div>
                
                {/* Country markers */}
                {countries.map((country, index) => (
                  <motion.div
                    key={index}
                    className="absolute"
                    style={{ top: country.position.top, left: country.position.left }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className={`flex flex-col items-center ${country.highlight ? 'scale-110' : ''}`}>
                      <div className={`p-1 rounded-full ${country.highlight ? 'bg-primary dark:bg-blue-600' : 'bg-blue-400 dark:bg-blue-500'}`}>
                        <FiMapPin className={`h-5 w-5 ${country.highlight ? 'text-white' : 'text-white'}`} />
                      </div>
                      <div className="mt-1 px-2 py-1 bg-white dark:bg-gray-800 rounded-md shadow-sm">
                        <p className="text-xs font-medium text-gray-900 dark:text-white">{country.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{country.clients} client{country.clients > 1 ? 's' : ''}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Country statistics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Présence Internationale
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Cabinet CBS a développé une expertise transfrontalière permettant d&apos;accompagner ses clients dans plusieurs pays d&apos;Afrique de l&apos;Ouest, avec une connaissance approfondie des spécificités fiscales et juridiques locales.
            </p>
            
            <div className="space-y-4">
              {countries.map((country, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                >
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full mr-3 ${country.highlight ? 'bg-primary/10 dark:bg-blue-900/20' : 'bg-gray-100 dark:bg-gray-700'}`}>
                      <FiMapPin className={`h-5 w-5 ${country.highlight ? 'text-primary dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'}`} />
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">{country.name}</span>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{country.clients} client{country.clients > 1 ? 's' : ''}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseMap;
