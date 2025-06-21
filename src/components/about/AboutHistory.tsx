'use client';

import React from 'react';
import { motion } from 'framer-motion';

const timelineItems = [
  {
    year: "2014",
    title: "Création du Cabinet CBS",
    description: "Fondation du Cabinet BOURAIMA SIDIBE, inscrit à l'ordre des conseils fiscaux agréés du Mali suivant arrêté N°0826/MEF-SG du 21 Mars 2014."
  },
  {
    year: "2015",
    title: "Enregistrement officiel",
    description: "Enregistrement au Registre du Commerce et du Crédit Mobilier (RCCM) sous le numéro ML-BKO-2015-A-6108 et obtention du NIF 084121301X."
  },
  {
    year: "2017",
    title: "Développement de l'équipe",
    description: "Constitution d'une équipe pluridisciplinaire composée d'experts en fiscalité, droit des affaires et gestion des ressources humaines."
  },
  {
    year: "2020",
    title: "Nouveaux bureaux",
    description: "Installation dans nos locaux actuels à Hamdallaye ACI 2000 pour mieux servir notre clientèle grandissante."
  },
  {
    year: "2023",
    title: "Expansion des services",
    description: "Renforcement de notre expertise en audit, conseil fiscal, social et juridique auprès des grandes sociétés nationales et internationales."
  }
];

const AboutHistory = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Notre Histoire
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Une équipe soudée avec une connaissance intime et de longue date de la fiscalité, du droit des affaires, de la GRH et de la législation du travail au Mali
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30 dark:bg-blue-900/50"></div>
          
          <div className="space-y-16">
            {timelineItems.map((item, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary dark:bg-blue-600 border-4 border-white dark:border-gray-900 z-10"></div>
                
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Year */}
                  <div className={`md:w-1/2 mb-4 md:mb-0 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} text-center md:text-right ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                    <span className="inline-block px-4 py-2 bg-primary dark:bg-blue-600 text-white font-bold rounded-full">
                      {item.year}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHistory;
