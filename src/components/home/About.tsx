'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiUsers, FiTarget, FiAward, FiArrowRight } from 'react-icons/fi';

const About = () => {
  const expertise = [
    "Expert en fiscalité",
    "Spécialiste en droit des affaires",
    "Spécialiste en ressources humaines et sécurité sociale",
    "Expert en audit et passation des marchés publics",
    "Personnel d'appui technique et administratif"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-gradient-to-b from-white to-violet-50 py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-violet-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />
        
        {/* Section title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-800 font-medium text-sm mb-3">
            Notre histoire
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            À Propos du <span className="text-violet-700">Cabinet CBS</span>
          </h2>
          <div className="w-24 h-1 bg-violet-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Mission and values */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-violet-100">
              {/* Top decorative gradient */}
              <div className="h-2 bg-gradient-to-r from-violet-500 to-violet-700" />
              
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center mr-4">
                    <FiTarget className="w-6 h-6 text-violet-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Notre Mission</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Être le conseil privilégié des entreprises, des sociétés et administrations publiques en matière fiscale, juridique, sociale et en gestion des ressources humaines.
                </p>
                
                <div className="p-6 bg-violet-50 rounded-xl mb-8">
                  <p className="italic text-gray-700">
                    &quot;Intervenant auprès des clients sur des dossiers ad hoc ou dans le cadre des contrats d&apos;assistance permanente, le cabinet répond aux besoins et questions spécifiques des entreprises.&quot;
                  </p>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center mr-4">
                    <FiAward className="w-6 h-6 text-violet-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Nos Valeurs</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {['Professionnalisme', 'Intégrité', 'Confidentialité', 'Excellence'].map((value, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="bg-white border border-violet-100 rounded-lg p-3 text-center shadow-sm"
                    >
                      <span className="text-gray-800 font-medium">{value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right column - About text and team */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Le Cabinet CBS « Cabinet BOURAIMA SIDIBE » est un cabinet de conseil fiscal offrant ses prestations sur le plan national et international. Les offres de CBS permettent d&apos;assister efficacement les clients dans les diverses opérations affectant la vie de leurs entreprises, notamment en matière juridique et fiscale.
              </p>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                En outre, CBS est en étroite relation avec des membres d&apos;autres professions permettant d&apos;avoir une approche plus complète des dossiers si nécessaire (notaires, experts comptables, huissiers).
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center mr-4">
                  <FiUsers className="w-6 h-6 text-violet-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Notre Équipe</h3>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md mb-8 border border-violet-100">
                <ul className="space-y-4">
                  {expertise.map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-700"
                    >
                      <FiCheckCircle className="text-violet-600 mr-3 flex-shrink-0 w-5 h-5" />
                      <span className="font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex justify-center sm:justify-start"
            >
              <a
                href="/about"
                className="btn-modern btn-icon-right mt-6"
              >
                En savoir plus
                <FiArrowRight />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
