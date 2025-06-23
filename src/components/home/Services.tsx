'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiBookOpen, FiUsers, FiClipboard, FiArrowRight } from 'react-icons/fi';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  index: number;
}

const ServiceCard = ({ icon, title, description, delay, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-violet-50 relative overflow-hidden group"
    >
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-violet-50 transform rotate-45 translate-x-8 -translate-y-8 group-hover:bg-violet-100 transition-colors duration-300" />
      
      {/* Number indicator */}
      <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center text-xs font-bold">
        {index + 1}
      </div>
      
      <div className="w-16 h-16 bg-violet-100 rounded-lg flex items-center justify-center text-violet-700 mb-6 transform transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      
      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
      
      <div className="flex items-center text-violet-600 font-medium text-sm opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <span>En savoir plus</span>
        <FiArrowRight className="ml-2" />
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <FiFileText className="w-8 h-8" />,
      title: "Assistance Fiscale",
      description: "Préparation des déclarations fiscales, accompagnement lors des contrôles fiscaux et conseil en optimisation fiscale.",
      delay: 0.1
    },
    {
      icon: <FiBookOpen className="w-8 h-8" />,
      title: "Assistance Juridique",
      description: "Examen et rédaction de documents juridiques, assistance contractuelle et veille réglementaire.",
      delay: 0.2
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Gestion des RH",
      description: "Établissement des contrats de travail, bulletins de salaires et gestion des inscriptions sociales (INPS, AMO).",
      delay: 0.3
    },
    {
      icon: <FiClipboard className="w-8 h-8" />,
      title: "Externalisation",
      description: "Établissement des états financiers, déclarations fiscales et sociales, et gestion complète de la paie.",
      delay: 0.4
    }
  ];

  return (
    <section className="bg-gradient-to-br from-white via-violet-50/30 to-white py-20 md:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-40 left-0 w-72 h-72 bg-violet-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-800 font-medium text-sm mb-3">
            Ce que nous proposons
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nos <span className="text-violet-700">Services</span>
          </h2>
          
          <div className="w-24 h-1 bg-violet-600 mx-auto rounded-full mb-8" />
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Le Cabinet CBS offre une gamme complète de services pour répondre aux besoins spécifiques de votre entreprise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="/services" 
            className="btn-modern btn-icon-right"
          >
            Voir tous nos services
            <FiArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
