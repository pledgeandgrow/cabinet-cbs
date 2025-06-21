'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare, FiClipboard, FiCheckCircle, FiUsers } from 'react-icons/fi';

const processSteps = [
  {
    icon: FiMessageSquare,
    title: "Consultation",
    description: "Nous commençons par une consultation approfondie pour comprendre vos besoins spécifiques en matière fiscale, juridique et sociale."
  },
  {
    icon: FiClipboard,
    title: "Analyse",
    description: "Notre équipe d'experts analyse votre situation, examine vos documents et élabore une stratégie personnalisée adaptée à votre cas."
  },
  {
    icon: FiCheckCircle,
    title: "Mise en œuvre",
    description: "Nous mettons en place les solutions recommandées : déclarations fiscales, contrats de travail, bulletins de salaire, inscriptions sociales, etc."
  },
  {
    icon: FiUsers,
    title: "Accompagnement",
    description: "Nous vous accompagnons dans la durée avec un suivi rigoureux, une veille réglementaire et une assistance lors des contrôles administratifs."
  }
];

const ServiceProcess = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Notre Processus
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comment nous travaillons avec vous pour assurer votre succès
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <motion.div 
                  key={index}
                  className="relative z-10 flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <div className="bg-primary dark:bg-blue-600 rounded-full p-4 mb-4 shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-2 rounded-lg w-full">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Step number */}
                  <div className="absolute -top-3 -right-3 bg-primary-light dark:bg-blue-900 text-primary dark:text-blue-400 rounded-full w-8 h-8 flex items-center justify-center font-bold border-2 border-white dark:border-gray-800">
                    {index + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;
