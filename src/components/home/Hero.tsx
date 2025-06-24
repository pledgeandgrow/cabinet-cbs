'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import Image from 'next/image';

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative bg-gradient-to-br from-white to-violet-50 overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {/* Ligne de dégradé en haut */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-100 via-violet-300 to-violet-100"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-violet-100 rounded-full filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-violet-300 rounded-full filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1 rounded-full bg-violet-100 text-violet-800 font-medium text-sm mb-6"
            >
              Cabinet de conseil fiscal agréé
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-violet-700">Cabinet CBS</span>
              <br />
              <span className="relative">
                Votre Conseil Fiscal
                <motion.span
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.8, ease: "easeInOut" }}
                  className="absolute bottom-1 left-0 h-3 bg-violet-200 -z-10"
                />
              </span> de Confiance
            </h1>
            
            <motion.p 
              variants={fadeIn}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Expertise fiscale, juridique et sociale pour les entreprises et administrations publiques au Mali et à l&apos;international.
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <a 
                href="/contact" 
                className="btn-modern btn-lg btn-icon-right"
              >
                Contactez-nous
                <FiArrowRight />
              </a>
              <a 
                href="#services" 
                className="btn-modern btn-lg btn-white"
                onClick={(e) => {
                  e.preventDefault();
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Nos services
              </a>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {['Expertise fiscale', 'Conseil juridique', 'Gestion sociale'].map((item, i) => (
                <div key={i} className="flex items-center text-gray-600">
                  <FiCheck className="text-violet-600 mr-2" />
                  <span>{item}</span>
                  {i < 2 && <span className="mx-2 text-gray-300 hidden sm:inline">•</span>}
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Image or illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-violet-400 rounded-2xl transform rotate-3 scale-105 opacity-10" />
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden p-8 border border-violet-100">
              <div className="absolute top-0 right-0 w-20 h-20 bg-violet-100 rounded-full filter blur-xl opacity-60 transform translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-violet-100 rounded-full flex items-center justify-center mb-6">
                  <Image 
                    src="/logocbs.png" 
                    alt="Cabinet CBS Logo" 
                    width={60} 
                    height={60} 
                    className="object-contain"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-violet-800 mb-4">
                  Conseil fiscal agréé
                </h3>
                
                <div className="p-4 bg-violet-50 rounded-lg mb-4 w-full">
                  <p className="text-gray-700 font-medium">
                    Plus de 10 ans d&apos;expérience au service des entreprises et administrations
                  </p>
                </div>
                
                <div className="p-4 bg-violet-50 rounded-lg w-full">
                  <p className="text-gray-700 font-medium">
                  Une équipe de spécialistes à votre écoute
                  </p>
                </div>
                
                <div className="mt-6 w-full h-1 bg-gradient-to-r from-transparent via-violet-300 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
