'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';

const AboutCTA = () => {
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
              Une équipe d&apos;experts à votre service
            </h2>
            <p className="text-lg text-white/90 mb-6">
              Besoin d&apos;un accompagnement fiscal, juridique ou en ressources humaines ? 
              Notre équipe pluridisciplinaire est composée d&apos;experts reconnus dans leur domaine, 
              prêts à mettre leur expérience et leur savoir-faire à votre service.
            </p>
          </motion.div>
          
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="light"
              size="lg"
              href="/contact"
              className="min-w-[200px]"
            >
              Contactez-nous
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;
