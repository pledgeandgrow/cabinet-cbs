'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi';

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const values = [
  {
    icon: FiShield,
    title: "Expertise Fiscale",
    description: "Notre connaissance intime et de longue date de la fiscalité malienne nous permet d'offrir un conseil fiscal de qualité supérieure, adapté aux réalités locales."
  },
  {
    icon: FiAward,
    title: "Compétence Juridique",
    description: "Notre expertise en droit des affaires et notre expérience dans l'assistance des sociétés garantissent un accompagnement juridique solide et fiable."
  },
  {
    icon: FiUsers,
    title: "Gestion des RH",
    description: "Notre maîtrise de la législation du travail et notre expérience en gestion des ressources humaines permettent d'optimiser la gestion du personnel de nos clients."
  },
  {
    icon: FiTrendingUp,
    title: "Professionnalisme",
    description: "Notre équipe soudée, intégrée et structurée possède un haut niveau de savoir-faire et s'engage à fournir des services de qualité supérieure."
  }
];

const AboutValues = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-primary dark:text-blue-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Nos Domaines d&apos;Expertise
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            La pertinence de notre équipe est établie par notre formation académique, notre expérience et notre connaissance approfondie des domaines d&apos;intervention
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            
            return (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md dark:shadow-gray-900/30"
                variants={itemVariants}
              >
                <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-primary dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutValues;
