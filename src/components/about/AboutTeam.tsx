'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiMail, FiPhone, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

// Animation variants pour le conteneur
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

// Animation variants pour les éléments individuels
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

// Transition intégrée directement dans les variants

const teamMembers = [
  {
    name: "Bouraima SIDIBE",
    role: "Fondateur & Directeur Général",
    bio: "Expert-comptable et fiscaliste avec plus de 15 ans d'expérience dans le conseil fiscal et la gestion d'entreprise.",
    image: "/images/team/placeholder.jpg",
    linkedin: "#",
    email: "contact@cabinet-cbs.com"
  },
  {
    name: "Aminata DIALLO",
    role: "Directrice Juridique",
    bio: "Spécialiste en droit des affaires avec une expertise particulière dans les contrats commerciaux et le droit des sociétés.",
    image: "/images/team/placeholder.jpg",
    linkedin: "#",
    email: "juridique@cabinet-cbs.com"
  },
  {
    name: "Moussa TRAORE",
    role: "Responsable Audit",
    bio: "Auditeur certifié avec une expérience significative dans l'audit financier et la conformité réglementaire.",
    image: "/images/team/placeholder.jpg",
    linkedin: "#",
    email: "audit@cabinet-cbs.com"
  },
  {
    name: "Fatoumata KEITA",
    role: "Responsable RH",
    bio: "Spécialiste en gestion des ressources humaines et en droit du travail avec une approche centrée sur le développement du capital humain.",
    image: "/images/team/placeholder.jpg",
    linkedin: "#",
    email: "rh@cabinet-cbs.com"
  }
];

const AboutTeam = () => {
  return (
    <section className="py-16 md:py-28 bg-gradient-to-b from-white to-violet-50 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-40 left-0 w-72 h-72 bg-violet-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-violet-100 rounded-full opacity-60 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-50 rounded-full opacity-50 blur-3xl"></div>
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
            Notre Personnel
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-violet-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Notre Équipe
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Une équipe pluridisciplinaire de professionnels expérimentés pour vous accompagner dans tous vos projets.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-lg border border-gray-50 overflow-hidden hover:shadow-violet-200/50 hover:border-violet-100 transition-all duration-300 transform hover:-translate-y-1 group"
              variants={itemVariants}
            >
              {/* Image avec effet de survol */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-violet-100 to-violet-50">
                <div className="absolute inset-0 flex items-center justify-center">
                  {member.image ? (
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      width={200} 
                      height={200} 
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-violet-700 transition-colors duration-300">
                  {member.name}
                </h3>
                
                <p className="text-violet-600 font-medium mb-4">
                  {member.role}
                </p>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex space-x-4">
                  <a 
                    href={member.linkedin} 
                    className="p-2 bg-violet-50 rounded-full text-violet-600 hover:bg-violet-600 hover:text-white transition-all duration-300"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <FiLinkedin size={18} />
                  </a>
                  
                  <a 
                    href={`mailto:${member.email}`} 
                    className="p-2 bg-violet-50 rounded-full text-violet-600 hover:bg-violet-600 hover:text-white transition-all duration-300"
                    aria-label={`Email de ${member.name}`}
                  >
                    <FiMail size={18} />
                  </a>
                  
                  <a 
                    href="tel:+22320000000" 
                    className="p-2 bg-violet-50 rounded-full text-violet-600 hover:bg-violet-600 hover:text-white transition-all duration-300"
                    aria-label={`Téléphone de ${member.name}`}
                  >
                    <FiPhone size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a href="/contact" className="btn-modern btn-lg inline-flex items-center">
            Contacter notre équipe
            <FiArrowRight className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeam;
