'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiLinkedin, FiFacebook, FiTwitter } from 'react-icons/fi';

const contactDetails = [
  {
    icon: FiMapPin,
    title: 'Adresse',
    details: [
      'Avenue de la CAN',
      'Rue 400, Porte 264',
      'Bamako, Mali'
    ]
  },
  {
    icon: FiPhone,
    title: 'Téléphone',
    details: [
      '+223 76 88 18 76',
      '+223 62 68 70 13'
    ]
  },
  {
    icon: FiMail,
    title: 'Email',
    details: [
      'bousid@yahoo.fr',
      'contact@cabinet-cbs.com'
    ]
  },
  {
    icon: FiClock,
    title: 'Heures d\'ouverture',
    details: [
      'Lundi - Vendredi: 8h00 - 17h00',
      'Samedi: 9h00 - 13h00',
      'Dimanche: Fermé'
    ]
  }
];

const ContactInfo = () => {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-50 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-50 rounded-full opacity-70 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="p-8 md:p-10">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center mr-4">
                  <FiMapPin className="h-6 w-6 text-violet-600" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500">
                  Nos coordonnées
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contactDetails.map((item, index) => {
                  const Icon = item.icon;
                  
                  return (
                    <motion.div 
                      key={index}
                      className="flex bg-gray-50 p-6 rounded-xl border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-violet-200"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-violet-500 to-violet-700 text-white shadow-lg">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <div className="mt-2 text-base text-gray-600">
                          {item.details.map((detail, i) => (
                            <p key={i} className="mb-1">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              
              <motion.div 
                className="mt-10 p-6 rounded-xl bg-gradient-to-br from-violet-50 to-violet-100 border border-violet-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-violet-800 mb-4 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-violet-200 flex items-center justify-center mr-3">
                    <FiLinkedin className="h-4 w-4 text-violet-700" />
                  </span>
                  Suivez-nous
                </h3>
                
                <p className="text-gray-600 mb-5">
                  Restez informés de nos actualités et services en nous suivant sur les réseaux sociaux.
                </p>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:bg-violet-600 hover:text-white text-violet-600 border border-violet-200"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin className="h-5 w-5" />
                  </a>
                  
                  <a 
                    href="https://facebook.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:bg-violet-600 hover:text-white text-violet-600 border border-violet-200"
                    aria-label="Facebook"
                  >
                    <FiFacebook className="h-5 w-5" />
                  </a>
                  
                  <a 
                    href="https://twitter.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 hover:bg-violet-600 hover:text-white text-violet-600 border border-violet-200"
                    aria-label="Twitter"
                  >
                    <FiTwitter className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
