'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { FiCheckCircle } from 'react-icons/fi';

const About = () => {
  const expertise = [
    "Expert en fiscalité",
    "Spécialiste en droit des affaires",
    "Spécialiste en ressources humaines et sécurité sociale",
    "Expert en audit et passation des marchés publics",
    "Personnel d'appui technique et administratif"
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image or illustration */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden h-80 md:h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 opacity-90 dark:opacity-80" />
            <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Notre Mission</h3>
              <p className="mb-6">
                Être le conseil privilégié des entreprises, des sociétés et administrations publiques en matière fiscale, juridique, sociale et en gestion des ressources humaines.
              </p>
              <p>
                Intervenant auprès des clients sur des dossiers ad hoc ou dans le cadre des contrats d&apos;assistance permanente, le cabinet répond aux besoins et questions spécifiques des entreprises.
              </p>
            </div>
          </motion.div>
          
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              À Propos du Cabinet CBS
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Le Cabinet CBS « Cabinet BOURAIMA SIDIBE » est un cabinet de conseil fiscal offrant ses prestations sur le plan national et international. Les offres de CBS permettent d&apos;assister efficacement les clients dans les diverses opérations affectant la vie de leurs entreprises, notamment en matière juridique et fiscale.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              En outre, CBS est en étroite relation avec des membres d&apos;autres professions permettant d&apos;avoir une approche plus complète des dossiers si nécessaire (notaires, experts comptables, huissiers).
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Notre Équipe
            </h3>
            
            <ul className="space-y-2 mb-8">
              {expertise.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center text-gray-600 dark:text-gray-300"
                >
                  <FiCheckCircle className="text-primary dark:text-blue-400 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <Button>
              En savoir plus
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
