'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiNavigation } from 'react-icons/fi';

const ContactMap = () => {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-40 -left-40 w-80 h-80 bg-violet-50 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-violet-50 rounded-full opacity-70 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <motion.div
            className="inline-flex items-center justify-center mb-4 bg-violet-100 text-violet-700 px-4 py-2 rounded-full"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FiMapPin className="mr-2" />
            <span className="font-medium">Localisation</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Notre localisation
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Retrouvez-nous facilement dans le quartier ACI 2000 à Bamako
          </motion.p>
        </div>
        
        <motion.div
          className="rounded-xl overflow-hidden shadow-xl border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* Carte interactive avec style moderne */}
          <div className="relative w-full h-96 bg-gradient-to-br from-violet-50 to-gray-100">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-violet-600 text-white flex items-center justify-center mb-4 shadow-lg">
                <FiMapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Cabinet CBS
              </h3>
              <p className="text-gray-600 mb-6">
                Hamdallaye ACI 2000, Rue 432, Porte 1275, Bamako, Mali
              </p>
              
              <a 
                href="https://goo.gl/maps/VOTRE_LIEN_GOOGLE_MAPS" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modern btn-icon-right inline-flex items-center"
              >
                Ouvrir dans Google Maps
                <FiNavigation className="ml-2" />
              </a>
            </div>
            
            {/* En production, remplacez ce placeholder par une vraie carte Google Maps */}
            {/* 
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA1JzM2LjAiTiA4wrAwOCcwMS4wIlc!5e0!3m2!1sfr!2sfr!4v1624451234567!5m2!1sfr!2sfr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Cabinet CBS location"
              className="filter grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
            */}
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-8 text-center max-w-2xl mx-auto bg-violet-50 p-6 rounded-xl border border-violet-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700">
            <span className="font-semibold text-violet-700">Besoin d&apos;aide pour nous trouver ?</span> N&apos;hésitez pas à nous contacter par téléphone au <a href="tel:+22376881876" className="text-violet-700 font-semibold hover:underline">+223 76 88 18 76</a> pour toute assistance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;
