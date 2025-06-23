'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiSend, FiUser, FiMessageSquare } from 'react-icons/fi';

const Contact = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <section className="bg-gradient-to-b from-white to-violet-50 py-20 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-violet-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-800 font-medium text-sm mb-3">
            Discutons de votre projet
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-violet-700">Contactez</span>-nous
          </h2>
          
          <div className="w-24 h-1 bg-violet-600 mx-auto rounded-full mb-8" />
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Besoin d&apos;une assistance fiscale, juridique ou sociale ? Notre équipe d&apos;experts est à votre disposition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-violet-100 transform hover:translate-y-[-5px] transition-all duration-300"
          >
            <div className="flex flex-col space-y-8">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-700 rounded-2xl mx-auto flex items-center justify-center text-white mb-4 transform rotate-3">
                  <FiMapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Notre Adresse</h3>
                <div className="w-12 h-1 bg-violet-200 mx-auto rounded-full" />
              </div>
              
              <div className="bg-violet-50 p-5 rounded-xl text-center">
                <p className="text-gray-700 font-medium">
                  Avenue de la CAN, Rue 400, Porte 264<br />
                  Bamako, Mali
                </p>
              </div>
              
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-700 rounded-2xl mx-auto flex items-center justify-center text-white mb-4 transform -rotate-3">
                  <FiPhone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Téléphone</h3>
                <div className="w-12 h-1 bg-violet-200 mx-auto rounded-full" />
              </div>
              
              <div className="bg-violet-50 p-5 rounded-xl text-center">
                <p className="text-gray-700 font-medium">
                  +223 76 88 18 76<br />
                  +223 62 68 70 13
                </p>
              </div>
              
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-700 rounded-2xl mx-auto flex items-center justify-center text-white mb-4 transform rotate-3">
                  <FiMail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Email</h3>
                <div className="w-12 h-1 bg-violet-200 mx-auto rounded-full" />
              </div>
              
              <div className="bg-violet-50 p-5 rounded-xl text-center">
                <p className="text-gray-700 font-medium">
                  bousid@yahoo.fr
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-violet-100 lg:col-span-2 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-violet-100 rounded-full filter blur-xl opacity-60 transform translate-x-20 -translate-y-20" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-violet-100 rounded-full filter blur-xl opacity-60 transform -translate-x-20 translate-y-20" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FiMessageSquare className="mr-3 text-violet-600" />
                Envoyez-nous un message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiUser className="text-violet-500" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full pl-10 pr-4 py-3 border-2 border-violet-100 rounded-lg shadow-sm focus:ring-2 focus:ring-violet-200 focus:border-violet-500 transition-all duration-300"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="text-violet-500" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full pl-10 pr-4 py-3 border-2 border-violet-100 rounded-lg shadow-sm focus:ring-2 focus:ring-violet-200 focus:border-violet-500 transition-all duration-300"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border-2 border-violet-100 rounded-lg shadow-sm focus:ring-2 focus:ring-violet-200 focus:border-violet-500 transition-all duration-300"
                    placeholder="Sujet de votre message"
                  />
                </div>
                
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-violet-100 rounded-lg shadow-sm focus:ring-2 focus:ring-violet-200 focus:border-violet-500 transition-all duration-300"
                    placeholder="Votre message..."
                  />
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button 
                    type="submit" 
                    className="btn-modern btn-lg btn-icon-right w-full"
                  >
                    Envoyer le message
                    <FiSend />
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
        
        {/* Map or additional info section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-4">
            Nous sommes disponibles du lundi au vendredi de 8h à 17h
          </p>
          <div className="w-32 h-1 bg-violet-200 mx-auto rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
