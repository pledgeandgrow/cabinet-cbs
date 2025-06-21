'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiFileText, FiBookOpen, FiUsers, FiClipboard } from 'react-icons/fi';
import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="w-12 h-12 bg-primary-light dark:bg-blue-900/30 rounded-full flex items-center justify-center text-primary dark:text-blue-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <FiFileText className="w-6 h-6" />,
      title: "Assistance Fiscale",
      description: "Préparation des déclarations fiscales, accompagnement lors des contrôles fiscaux et conseil en optimisation fiscale.",
      delay: 0.1
    },
    {
      icon: <FiBookOpen className="w-6 h-6" />,
      title: "Assistance Juridique",
      description: "Examen et rédaction de documents juridiques, assistance contractuelle et veille réglementaire.",
      delay: 0.2
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Gestion des RH",
      description: "Établissement des contrats de travail, bulletins de salaires et gestion des inscriptions sociales (INPS, AMO).",
      delay: 0.3
    },
    {
      icon: <FiClipboard className="w-6 h-6" />,
      title: "Externalisation",
      description: "Établissement des états financiers, déclarations fiscales et sociales, et gestion complète de la paie.",
      delay: 0.4
    }
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nos Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Le Cabinet CBS offre une gamme complète de services pour répondre aux besoins spécifiques de votre entreprise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
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
          <Link 
            href="/services" 
            className="inline-flex items-center text-primary dark:text-blue-400 font-medium hover:underline"
          >
            Voir tous nos services
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
