'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiMessageSquare, FiClipboard, FiCheckCircle, FiUsers, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const ServiceProcess = () => {
  return (
    <section className="py-16 md:py-28 bg-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-100 via-violet-300 to-violet-100"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-50 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-50 rounded-full opacity-70 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.span 
            className="inline-block px-4 py-1.5 bg-violet-100 text-violet-800 rounded-full text-sm font-medium tracking-wide mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Méthodologie
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-violet-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Notre Processus
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comment nous travaillons avec vous pour assurer votre succès
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Ligne de connexion */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-violet-100 via-violet-300 to-violet-100 transform -translate-y-1/2 z-0"></div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <motion.div 
                  key={index}
                  className="relative z-10 flex flex-col items-center text-center group"
                  variants={itemVariants}
                >
                  <div className="bg-gradient-to-br from-violet-600 to-violet-800 rounded-xl p-5 mb-6 shadow-lg group-hover:shadow-violet-200/50 transition-all duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl w-full shadow-md border border-gray-50 group-hover:shadow-lg group-hover:border-violet-100 transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-violet-700 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Numéro d'étape */}
                  <div className="absolute -top-3 -right-3 bg-white text-violet-700 rounded-full w-10 h-10 flex items-center justify-center font-bold border-2 border-violet-100 shadow-md z-20 group-hover:bg-violet-700 group-hover:text-white group-hover:border-white transition-all duration-300">
                    {index + 1}
                  </div>
                  
                  {/* Flèche de connexion (sauf pour le dernier élément) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:flex absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
                      <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <FiArrowRight className="h-5 w-5 text-violet-600" />
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/contact" className="btn-modern btn-outline btn-lg inline-flex items-center">
            Démarrer une consultation
            <FiArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceProcess;
