'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiAward, FiUsers, FiTrendingUp, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

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
    <section id="about-values" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-violet-50 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-violet-50 rounded-full opacity-70 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            className="inline-block px-4 py-1.5 bg-violet-100 text-violet-800 rounded-full text-sm font-medium tracking-wide mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Notre Expertise
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-violet-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Nos Domaines d&apos;Expertise
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            La pertinence de notre équipe est établie par notre formation académique, notre expérience et notre connaissance approfondie des domaines d&apos;intervention
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            
            return (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-50 hover:shadow-violet-200/50 hover:border-violet-100 transition-all duration-300 transform hover:-translate-y-1 group"
                variants={itemVariants}
              >
                <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-violet-500 to-violet-700 rounded-xl mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-violet-700 transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {value.description}
                </p>
                
                <div className="h-0 overflow-hidden group-hover:h-8 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <Link href="/services" className="inline-flex items-center text-violet-600 font-medium hover:text-violet-800 transition-colors">
                    En savoir plus <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/services" className="btn-modern btn-lg inline-flex items-center">
            Découvrir nos services
            <FiArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutValues;
