'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiArrowRight, FiCalendar, FiMessageSquare } from 'react-icons/fi';
import Link from 'next/link';

const ServiceCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-violet-700 to-violet-900 text-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('/pattern-dot.svg')] opacity-5"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <motion.span 
              className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium tracking-wide mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Expertise & Accompagnement
            </motion.span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Besoin d&apos;une assistance personnalisée?
            </h2>
            
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Notre équipe d&apos;experts est prête à vous accompagner dans tous vos projets. 
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins spécifiques.
            </p>
            
            <div className="space-y-5 mb-8">
              <motion.div 
                className="flex items-center group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/10 p-3 rounded-full mr-4 group-hover:bg-white/20 transition-colors duration-300">
                  <FiPhone className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg">+223 76 88 18 76 / 62 68 70 13</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/10 p-3 rounded-full mr-4 group-hover:bg-white/20 transition-colors duration-300">
                  <FiMail className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg">bousid@yahoo.fr</span>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="/contact" className="btn-modern btn-white btn-lg inline-flex items-center">
                Nous contacter
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-violet-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FiCalendar className="mr-3 text-violet-600" />
                Prendre rendez-vous
              </h3>
              
              <div className="space-y-6 mb-6">
                <div className="flex items-start p-4 bg-violet-50 rounded-xl">
                  <FiMessageSquare className="h-6 w-6 text-violet-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Consultation initiale gratuite</h4>
                    <p className="text-gray-600 text-sm">Découvrez comment nous pouvons vous aider lors d&apos;un premier échange sans engagement</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact" className="btn-modern w-full flex justify-center items-center">
                Demander un rendez-vous
              </Link>
              
              <p className="text-gray-500 text-sm mt-6 text-center">
                Nous vous répondrons dans les 24 heures ouvrées
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
