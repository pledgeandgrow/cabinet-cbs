'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

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
    <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Nos coordonnées
              </h2>
              
              <div className="space-y-6">
                {contactDetails.map((item, index) => {
                  const Icon = item.icon;
                  
                  return (
                    <motion.div 
                      key={index}
                      className="flex"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 dark:bg-blue-900/20 text-primary dark:text-blue-400">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <div className="mt-2 text-base text-gray-600 dark:text-gray-300">
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
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  Suivez-nous
                </h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400"
                    aria-label="Facebook"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 0h-20c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h11.08v-9.2h-3.08v-3.6h3.08v-2.68c0-3.18 1.94-4.92 4.78-4.92.94 0 1.86.06 2.72.22v3.12h-1.84c-1.44 0-1.72.7-1.72 1.7v2.26h3.6l-.48 3.6h-3.12v9.4h6.08c1.1 0 2-.9 2-2v-20c0-1.1-.9-2-2-2z"/>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-blue-400"
                    aria-label="Twitter"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
