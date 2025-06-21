'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ContactMap = () => {
  return (
    <section className="py-12 md:py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Notre localisation
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Retrouvez-nous facilement dans le quartier ACI 2000 à Bamako
          </motion.p>
        </div>
        
        <motion.div
          className="rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {/* This is a placeholder for an actual map. In a real implementation, you would use a library like Google Maps or Leaflet */}
          <div className="relative w-full h-96 bg-gray-200 dark:bg-gray-700">
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">
                Carte interactive - Hamdallaye ACI 2000, Rue 432, Porte 1275, Bamako, Mali
              </p>
            </div>
            
            {/* In a real implementation, you would replace this with actual map code */}
            {/* Example with an iframe for Google Maps */}
            {/* 
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA1JzM2LjAiTiA4wrAwOCcwMS4wIlc!5e0!3m2!1sfr!2sfr!4v1624451234567!5m2!1sfr!2sfr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Cabinet CBS location"
            ></iframe>
            */}
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Pour toute assistance pour vous rendre à nos bureaux, n&apos;hésitez pas à nous contacter par téléphone.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;
