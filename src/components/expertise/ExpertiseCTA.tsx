'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { FiArrowRight } from 'react-icons/fi';

const ExpertiseCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-primary dark:bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Besoin d&apos;une expertise similaire ?
            </h2>
            <p className="text-lg text-white/90 mb-6">
              Que vous soyez une entreprise locale ou internationale, notre équipe d&apos;experts peut vous accompagner dans vos obligations fiscales, juridiques et sociales au Mali et dans la région.
            </p>
          </motion.div>
          
          <motion.div
            className="flex flex-col space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="light"
              size="lg"
              href="/services"
              className="w-full md:w-auto"
            >
              Découvrir nos services
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              href="/contact"
              className="w-full md:w-auto text-white border-white hover:bg-white/10"
            >
              Nous contacter <FiArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseCTA;
