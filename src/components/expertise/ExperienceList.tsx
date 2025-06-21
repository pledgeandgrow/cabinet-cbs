'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiMapPin, FiCalendar } from 'react-icons/fi';

// Define the client experiences based on the provided information
const clientExperiences = [
  {
    id: 1,
    client: "FATOUMATA DISTRIBUTION",
    location: "Mali",
    partnership: "partenaire Orange Mali",
    services: ["Assistance fiscale", "Assistance sociale", "Assistance juridique", "Gestion des ressources humaines"],
    startDate: "Janvier 2014",
    ongoing: true
  },
  {
    id: 2,
    client: "FATOUMATA DISTRIBUTION Niger",
    location: "Niger",
    partnership: "partenaire Zamani Télécom",
    services: ["Assistance fiscale", "Assistance sociale", "Assistance juridique", "Gestion des ressources humaines"],
    startDate: "Janvier 2021",
    ongoing: true
  },
  {
    id: 3,
    client: "Yélén Télécom",
    location: "Mali",
    partnership: "partenaire Orange Mali",
    services: ["Assistance fiscale", "Assistance sociale", "Assistance juridique", "Gestion des ressources humaines"],
    startDate: "Mars 2018",
    ongoing: true
  },
  {
    id: 4,
    client: "CBRE-EXCELERATE SENEGAL",
    location: "Sénégal",
    services: ["Assistance fiscale", "Assistance sociale", "Assistance juridique"],
    startDate: "Janvier 2019",
    ongoing: true
  },
  {
    id: 5,
    client: "CBRE-EXCELERATE COTE D'IVOIRE",
    location: "Côte d'Ivoire",
    services: ["Assistance fiscale", "Assistance sociale", "Assistance juridique"],
    startDate: "Juillet 2020",
    ongoing: true
  },
  {
    id: 6,
    client: "BIA Mali SA",
    location: "Mali",
    partnership: "filiale du groupe BIA basé en Belgique",
    services: ["Assistance fiscale", "Assistance sociale", "Assistance juridique"],
    startDate: "Octobre 2018",
    ongoing: true
  },
  {
    id: 7,
    client: "Camusat Mali SA",
    location: "Mali",
    partnership: "filiale du groupe Camusat basé en France",
    services: ["Assistance fiscale", "Assistance sociale", "Assistance juridique"],
    startDate: "Février 2018",
    ongoing: true
  },
  {
    id: 8,
    client: "Compagnie de Financement et de Participation (COFIPA)",
    location: "Mali",
    partnership: "Holding",
    services: ["Assistance fiscale", "Assistance sociale", "Assistance juridique"],
    startDate: "Juin 2016",
    ongoing: true
  }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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

const ExperienceList = () => {
  const [filter, setFilter] = useState<string>('all');
  
  // Filter experiences based on selected country
  const filteredExperiences = filter === 'all' 
    ? clientExperiences 
    : clientExperiences.filter(exp => exp.location.toLowerCase() === filter.toLowerCase());
  
  // Get unique countries for filter
  const countries = Array.from(new Set(clientExperiences.map(exp => exp.location)));
  
  return (
    <section id="experiences" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nos Expériences
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Quelques expériences du Cabinet CBS dans le cadre de la mission d&apos;assistances
          </p>
          
          {/* Country filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-primary text-white dark:bg-blue-600' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Tous les pays
            </button>
            
            {countries.map((country, index) => (
              <button
                key={index}
                onClick={() => setFilter(country)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === country 
                    ? 'bg-primary text-white dark:bg-blue-600' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {country}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredExperiences.map((experience) => (
            <motion.div
              key={experience.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              variants={itemVariants}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {experience.client}
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    {experience.ongoing ? 'En cours' : 'Terminé'}
                  </span>
                </div>
                
                {experience.partnership && (
                  <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                    {experience.partnership}
                  </p>
                )}
                
                <div className="flex items-center mb-3 text-gray-500 dark:text-gray-400">
                  <FiMapPin className="mr-2" />
                  <span>{experience.location}</span>
                </div>
                
                <div className="flex items-center mb-4 text-gray-500 dark:text-gray-400">
                  <FiCalendar className="mr-2" />
                  <span>Depuis {experience.startDate}</span>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Services fournis:
                  </h4>
                  <ul className="space-y-1">
                    {experience.services.map((service, index) => (
                      <li key={index} className="flex items-start">
                        <FiCheckCircle className="h-5 w-5 text-primary dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {filteredExperiences.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              Aucune expérience trouvée pour ce pays.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceList;
