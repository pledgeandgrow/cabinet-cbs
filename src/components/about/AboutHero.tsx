'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

const AboutHero = () => {
  return (
    <section className="relative bg-white py-16 md:py-28 overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-100 via-violet-300 to-violet-100"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-50 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-50 rounded-full opacity-70 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block px-4 py-1.5 bg-violet-100 text-violet-800 rounded-full text-sm font-medium tracking-wide mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Notre Cabinet
            </motion.span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-violet-600 mb-6">
              À Propos de Cabinet CBS
            </h1>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Cabinet BOURAIMA SIDIBE, inscrit à l&apos;ordre des conseils fiscaux agréés
              du Mali suivant arrêté N°0826/MEF-SG du 21 Mars 2014.
            </p>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Notre cabinet est composé d&apos;une équipe soudée, intégrée et structurée possédant un haut niveau de 
              savoir-faire dans le domaine de la fiscalité, du droit des affaires, de la législation du travail 
              et des ressources humaines.
            </p>
            
            <div className="flex flex-col space-y-4 mb-8">
              <motion.div 
                className="flex items-center space-x-4 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="h-1 w-20 bg-gradient-to-r from-violet-400 to-violet-600 group-hover:w-24 transition-all duration-300"></div>
                <p className="font-semibold text-violet-700 group-hover:text-violet-800 transition-colors duration-300">
                  RCCM: ML-BKO-2015-A-6108
                </p>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-4 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="h-1 w-20 bg-gradient-to-r from-violet-400 to-violet-600 group-hover:w-24 transition-all duration-300"></div>
                <p className="font-semibold text-violet-700 group-hover:text-violet-800 transition-colors duration-300">
                  NIF: 084121301X
                </p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link href="/contact" className="btn-modern btn-outline inline-flex items-center">
                Nous contacter
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-violet-100"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Remplacer par une image réelle quand disponible */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-violet-900 flex items-center justify-center">
              <div className="text-center text-white p-8 max-w-lg">
                <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6">
                  <FiCheckCircle className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Notre Mission</h3>
                
                <p className="text-lg mb-6 leading-relaxed">
                  Offrir des services de conseil fiscal, juridique et social de la plus haute qualité 
                  grâce à notre connaissance intime et de longue date de la fiscalité, du droit des affaires, 
                  de la GRH et de la législation du travail au Mali.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Notre équipe pluridisciplinaire intervient auprès des grandes sociétés nationales et 
                  internationales pour garantir leur conformité et optimiser leur gestion.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
