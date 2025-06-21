'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiFileText, FiUsers, FiShield, FiDatabase } from 'react-icons/fi';
import { IconType } from 'react-icons';

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

// Define interfaces for props
interface ServiceCategoryProps {
  title: string;
  description: string;
  icon: IconType;
  services: string[];
}

// Service category component
const ServiceCategory = ({ title, description, icon: Icon, services }: ServiceCategoryProps) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8 border border-gray-100 dark:border-gray-700"
      variants={itemVariants}
    >
      <div className="flex items-center mb-4">
        <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4 shadow-sm">
          <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      
      <ul className="space-y-3">
        {services.map((service, index) => (
          <li key={index} className="flex items-start">
            <FiCheckCircle className="h-5 w-5 text-primary dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
            <span className="text-gray-700 dark:text-gray-200">{service}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const ServiceList = () => {
  const serviceCategories = [
    {
      title: "Assistance Fiscale",
      description: "Nous vous accompagnons dans toutes vos obligations fiscales et optimisons votre situation.",
      icon: FiFileText,
      services: [
        "Préparation des déclarations mensuelles d'impôts et taxes",
        "Calcul et vérification des impôts (ITS-TL, IRF, I/BIC)",
        "Dépôt des déclarations dans les délais légaux",
        "Assistance lors des contrôles fiscaux",
        "Rédaction des réponses aux notifications de redressement",
        "Enregistrement des conventions et contrats de bail",
        "Obtention du quitus fiscal",
        "Veille sur les évolutions législatives et réglementaires"
      ]
    },
    {
      title: "Assistance Juridique",
      description: "Notre expertise juridique vous aide à sécuriser vos activités et transactions.",
      icon: FiShield,
      services: [
        "Examen de documents juridiques et contractuels",
        "Rédaction d'actes judiciaires et extra-judiciaires",
        "Assistance dans les démarches contractuelles et contentieuses",
        "Assistance dans les négociations avec des tiers",
        "Obtention des visas de l'inspection du travail",
        "Veille juridique sur les nouveaux textes législatifs"
      ]
    },
    {
      title: "Gestion des Ressources Humaines",
      description: "Nous prenons en charge la gestion administrative de votre personnel.",
      icon: FiUsers,
      services: [
        "Établissement des contrats de travail",
        "Établissement des bulletins de salaires",
        "Inscription des salariés à l'INPS et à l'AMO",
        "Déclarations et paiement des cotisations sociales",
        "Assistance lors des contrôles de l'inspection du travail",
        "Conseil sur la protection sociale et l'AMO"
      ]
    },
    {
      title: "Externalisation Comptable",
      description: "Confiez-nous votre comptabilité pour vous concentrer sur votre cœur de métier.",
      icon: FiDatabase,
      services: [
        "Tenue de la comptabilité",
        "Établissement des états financiers",
        "Déclarations fiscales et sociales",
        "Gestion complète de la paie",
        "Reporting financier",
        "Assistance au commissariat aux comptes"
      ]
    }
  ];

  return (
    <section id="services-detail" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nos Prestations
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services professionnels adaptés à vos besoins spécifiques.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {serviceCategories.map((category, index) => (
            <ServiceCategory 
              key={index}
              title={category.title}
              description={category.description}
              icon={category.icon}
              services={category.services}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceList;
