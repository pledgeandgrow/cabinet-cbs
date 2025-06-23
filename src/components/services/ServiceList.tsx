'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiFileText, FiUsers, FiShield, FiDatabase, FiArrowRight } from 'react-icons/fi';
import { IconType } from 'react-icons';
import Link from 'next/link';

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const listItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: custom * 0.1 }
  })
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
      className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 hover:border-violet-200 transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
      variants={itemVariants}
    >
      {/* Élément décoratif en arrière-plan */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-violet-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      
      <div className="relative z-10">
        <div className="flex items-center mb-6">
          <div className="bg-gradient-to-br from-violet-100 to-violet-50 p-4 rounded-xl mr-4 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-110">
            <Icon className="h-7 w-7 text-violet-600" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-violet-600">{title}</h3>
        </div>
        
        <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>
        
        <ul className="space-y-4">
          {services.map((service, index) => (
            <motion.li 
              key={index} 
              className="flex items-start group/item"
              variants={listItemVariants}
              custom={index}
            >
              <div className="bg-violet-100 rounded-full p-1 mr-3 flex-shrink-0 group-hover/item:bg-violet-200 transition-colors duration-300">
                <FiCheckCircle className="h-4 w-4 text-violet-600" />
              </div>
              <span className="text-gray-700">{service}</span>
            </motion.li>
          ))}
        </ul>
        
        <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link href="/contact" className="text-violet-600 font-medium flex items-center hover:text-violet-800 transition-colors">
            En savoir plus <FiArrowRight className="ml-2" />
          </Link>
        </div>
      </div>
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
    <section id="services-detail" className="py-16 md:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-violet-50/70 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-violet-100/50 blur-3xl"></div>
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
            Expertise & Solutions
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-violet-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Nos Prestations
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Découvrez notre gamme complète de services professionnels adaptés à vos besoins spécifiques.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
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
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/contact" className="btn-modern btn-lg inline-flex items-center">
            Demander un devis personnalisé
            <FiArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceList;
