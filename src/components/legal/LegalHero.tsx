'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';

interface LegalHeroProps {
  title: string;
  lastUpdated: string;
}

const LegalHero = ({ title, lastUpdated }: LegalHeroProps) => {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-50 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-50 rounded-full opacity-70 blur-3xl"></div>
      </div>
      
      {/* Ligne de séparation en dégradé */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-violet-400"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="mb-6 inline-flex items-center text-gray-600 hover:text-violet-600 transition-colors duration-300"
          >
            <FiArrowLeft className="mr-2" /> Retour à l&apos;accueil
          </Link>
        </motion.div>
        
        <motion.h1 
          className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {title}
        </motion.h1>
        
        <motion.p 
          className="text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Dernière mise à jour : {lastUpdated}
        </motion.p>
      </div>
    </section>
  );
};

export default LegalHero;
