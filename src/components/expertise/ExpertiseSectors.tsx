'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiTruck, FiWifi, FiShield, FiDollarSign, FiShoppingBag } from 'react-icons/fi';

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

const sectors = [
  {
    icon: FiWifi,
    title: "Télécommunications",
    description: "Expertise auprès de partenaires d'opérateurs téléphoniques comme Orange Mali et Zamani Télécom."
  },
  {
    icon: FiGlobe,
    title: "Multinationales",
    description: "Accompagnement de filiales de groupes internationaux dans leur conformité locale."
  },
  {
    icon: FiShield,
    title: "Sécurité & Services",
    description: "Assistance aux entreprises spécialisées dans les services de sécurité et de maintenance."
  },
  {
    icon: FiDollarSign,
    title: "Finance",
    description: "Conseil auprès d'institutions financières et de holdings comme COFIPA."
  },
  {
    icon: FiTruck,
    title: "Distribution",
    description: "Support aux entreprises de distribution et de logistique dans plusieurs pays."
  },
  {
    icon: FiShoppingBag,
    title: "Commerce",
    description: "Accompagnement des entreprises commerciales dans leurs obligations fiscales et sociales."
  }
];

const ExpertiseSectors = () => {
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
            Secteurs d&apos;Expertise
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Notre cabinet intervient dans divers secteurs d&apos;activité à travers l&apos;Afrique de l&apos;Ouest
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            
            return (
              <motion.div 
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6"
                variants={itemVariants}
              >
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 dark:bg-blue-900/20 rounded-full mb-4">
                  <Icon className="h-8 w-8 text-primary dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {sector.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {sector.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSectors;
