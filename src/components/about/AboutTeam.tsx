'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiMail } from 'react-icons/fi';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const teamMembers = [
  {
    name: "Dr Bouraïma SIDIBE",
    role: "Gérant",
    bio: "Conseil Fiscal Agréé, inscrit à l'ordre des Conseils Fiscaux du Mali. Coordination et appui à l'ensemble des activités du cabinet.",
    // Replace with actual image when available
    imagePlaceholder: true
  },
  {
    name: "Oumar bibi SIDIBE",
    role: "Chef département juridique et fiscale",
    bio: "Juriste-fiscaliste avec une forte expérience dans l'assistance des sociétés. Coordination de l'ensemble des activités du département juridique et fiscale.",
    imagePlaceholder: true
  },
  {
    name: "Mady Moussa KOITE",
    role: "Chef du département des Ressources Humaines",
    bio: "Expert en GRH, ancien Directeur des Ressources Humaines de la BICIM - BMS. Coordination de l'ensemble des activités du département des ressources humaines et de gestion de la paie.",
    imagePlaceholder: true
  }
];

const AboutTeam = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Notre Équipe
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Une équipe pluridisciplinaire de professionnels expérimentés pour vous accompagner dans tous vos projets.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
              variants={itemVariants}
            >
              <div className="p-6">
                <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-600 mx-auto mb-4">
                  {/* Placeholder for team member image */}
                  {member.imagePlaceholder && (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500 text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-2">
                  {member.name}
                </h3>
                
                <p className="text-blue-600 dark:text-blue-400 text-center mb-4">
                  {member.role}
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                  {member.bio}
                </p>
                
                <div className="flex justify-center space-x-4">
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <FiLinkedin size={20} />
                  </a>
                  
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label={`Email de ${member.name}`}
                  >
                    <FiMail size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeam;
