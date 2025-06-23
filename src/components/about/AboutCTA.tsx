'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const AboutCTA = () => {
  return (
    <section className="py-16 md:py-28 relative overflow-hidden">
      {/* Arrière-plan dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-violet-800 opacity-95"></div>
      
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <motion.span 
              className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-medium tracking-wide mb-4"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Prêts à vous accompagner
            </motion.span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Une équipe d&apos;experts à votre service
            </h2>
            
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Besoin d&apos;un accompagnement fiscal, juridique ou en ressources humaines ? 
              Notre équipe pluridisciplinaire est composée d&apos;experts reconnus dans leur domaine, 
              prêts à mettre leur expérience et leur savoir-faire à votre service.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <FiMapPin className="text-white" />
                </div>
                <span className="text-white">Hamdallaye ACI 2000, Bamako, Mali</span>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <FiPhone className="text-white" />
                </div>
                <span className="text-white">+223 20 00 00 00</span>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4">
                  <FiMail className="text-white" />
                </div>
                <span className="text-white">contact@cabinet-cbs.com</span>
              </div>
            </div>
            
            <Link href="/contact" className="btn-modern btn-lg inline-flex items-center bg-white text-violet-700 hover:text-violet-800">
              Contactez-nous
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
          
          <motion.div
            className="lg:ml-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-100 rounded-full opacity-70 blur-xl -mr-16 -mt-16"></div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10">Prendre rendez-vous</h3>
              
              <p className="text-gray-600 mb-8 relative z-10">
                Remplissez le formulaire de contact ou appelez-nous directement pour organiser une consultation avec nos experts.
              </p>
              
              <div className="space-y-4 mb-6 relative z-10">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center mr-4">
                    <FiPhone className="text-violet-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Appelez-nous</p>
                    <p className="font-medium text-gray-900">+223 20 00 00 00</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center mr-4">
                    <FiMail className="text-violet-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Écrivez-nous</p>
                    <p className="font-medium text-gray-900">contact@cabinet-cbs.com</p>
                  </div>
                </div>
              </div>
              
              <Link href="/contact" className="btn-modern btn-outline w-full justify-center">
                Formulaire de contact
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
