'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar } from 'react-icons/fi';

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
    <section className="py-16 md:py-28 bg-gradient-to-b from-white to-violet-50 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-0 w-64 h-64 bg-violet-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-violet-100 rounded-full opacity-70 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.span 
            className="inline-block px-4 py-1.5 bg-violet-100 text-violet-800 rounded-full text-sm font-medium tracking-wide mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Notre Parcours
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-violet-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Notre Histoire
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Une équipe soudée avec une connaissance intime et de longue date de la fiscalité, du droit des affaires, de la GRH et de la législation du travail au Mali
          </motion.p>
        </div>
        
        <div className="relative">
          {/* Ligne verticale de la timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-violet-300 via-violet-400 to-violet-300 rounded-full"></div>
          
          <div className="space-y-20">
            {timelineItems.map((item, index) => (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                {/* Point de la timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-violet-700 border-4 border-white shadow-lg z-20 flex items-center justify-center">
                  <FiCalendar className="text-white" />
                </div>
                
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Année */}
                  <div className={`md:w-1/2 mb-6 md:mb-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} text-center md:text-right ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                    <span className="inline-block px-6 py-3 bg-gradient-to-r from-violet-600 to-violet-700 text-white font-bold rounded-full shadow-md">
                      {item.year}
                    </span>
                  </div>
                  
                  {/* Contenu */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-violet-100 hover:shadow-violet-200/50 transition-shadow duration-300 transform hover:-translate-y-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 text-violet-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
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
