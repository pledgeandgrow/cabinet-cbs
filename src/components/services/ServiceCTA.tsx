'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { FiMail, FiPhone } from 'react-icons/fi';
import Link from 'next/link';

const ServiceCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-blue-600 dark:bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Besoin d&apos;une assistance personnalisée?
            </h2>
            <p className="text-lg text-white mb-6">
              Notre équipe d&apos;experts est prête à vous accompagner dans tous vos projets. 
              Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins spécifiques.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <FiPhone className="h-5 w-5 mr-3 text-white dark:text-blue-200" />
                <span>+223 76 88 18 76 / 62 68 70 13</span>
              </div>
              <div className="flex items-center">
                <FiMail className="h-5 w-5 mr-3 text-white dark:text-blue-200" />
                <span>bousid@yahoo.fr</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Prendre rendez-vous
              </h3>
              
              <Link href="/contact">
                <Button 
                  variant="primary"
                  size="lg"
                  className="w-full shadow-md"
                >
                  Contactez-nous
                </Button>
              </Link>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-4 text-center">
                Nous vous répondrons dans les plus brefs délais
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
