'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="relative bg-white pt-16 pb-0 md:pt-28 md:pb-0 overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Ligne de dégradé en haut */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-100 via-violet-300 to-violet-100"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-50 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-violet-50 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-100 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.span 
            className="inline-block px-4 py-1.5 bg-violet-100 text-violet-800 rounded-full text-sm font-medium tracking-wide mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Nous sommes à votre écoute
          </motion.span>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contactez-nous
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Nous sommes à votre disposition pour répondre à vos questions et vous accompagner dans vos démarches fiscales, juridiques et sociales.
          </motion.p>
          
          {/* <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="#contact-form" className="btn-modern btn-lg">
              Envoyer un message
            </Link>
            <Link href="tel:+22320000000" className="btn-modern btn-outline btn-lg">
              Nous appeler
            </Link>
          </motion.div> */}
          
          {/* <motion.div 
            className="flex flex-wrap justify-center gap-8 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center mr-3">
                <FiPhone className="text-violet-600" />
              </div>
              <span className="text-gray-700">+223 20 00 00 00</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center mr-3">
                <FiMail className="text-violet-600" />
              </div>
              <span className="text-gray-700">contact@cabinet-cbs.com</span>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center mr-3">
                <FiMapPin className="text-violet-600" />
              </div>
              <span className="text-gray-700">Hamdallaye ACI 2000, Bamako</span>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
