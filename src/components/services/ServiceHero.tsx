'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';

const ServiceHero = () => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 md:py-28 overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {/* Ligne de dégradé en haut */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-100 via-violet-300 to-violet-100"></div>
        <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-violet-100/70 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-violet-50/80 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-b from-violet-50/20 to-transparent opacity-60"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-1.5 bg-violet-100 text-violet-800 rounded-full text-sm font-medium tracking-wide mb-4">
              Expertise & Accompagnement
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-violet-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Nos Services
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Cabinet CBS vous offre une gamme complète de prestations en assistance fiscale, juridique, sociale et en gestion des ressources humaines. Notre équipe d&apos;experts vous accompagne dans toutes vos démarches administratives, fiscales et juridiques au Mali et en Afrique de l&apos;Ouest.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#services-detail" 
              className="btn-modern btn-lg btn-icon-right group"
              onClick={(e) => {
                e.preventDefault();
                const servicesSection = document.getElementById('services-detail');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Découvrir nos prestations
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <Link href="/contact?subject=devis" className="btn-modern btn-outline btn-lg">
              Nous contacter
            </Link>
          </motion.div>
        </div>
        
        {/* Indicateur de défilement */}
        {/* <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="text-sm text-gray-500 mb-2">Découvrir</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-violet-500 to-transparent animate-pulse"></div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default ServiceHero;
