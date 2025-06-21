'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
  {
    question: "Quels sont vos délais de réponse ?",
    answer: "Nous nous engageons à répondre à toutes les demandes dans un délai de 24 à 48 heures ouvrables. Pour les questions urgentes, nous vous recommandons de nous contacter directement par téléphone."
  },
  {
    question: "Comment se déroule la première consultation ?",
    answer: "La première consultation peut se faire en personne dans nos bureaux, par téléphone ou par visioconférence selon votre préférence. Nous discuterons de vos besoins spécifiques, évaluerons votre situation et vous proposerons des solutions adaptées."
  },
  {
    question: "Travaillez-vous avec des entreprises internationales ?",
    answer: "Oui, nous accompagnons régulièrement des entreprises internationales dans leurs obligations fiscales, juridiques et sociales au Mali et dans la région. Nous avons l'expérience des problématiques transfrontalières et des spécificités locales."
  },
  {
    question: "Proposez-vous des forfaits pour un suivi régulier ?",
    answer: "Oui, nous proposons différentes formules d'accompagnement régulier adaptées à la taille et aux besoins de votre entreprise. Contactez-nous pour obtenir une proposition personnalisée."
  },
  {
    question: "Dans quelles langues pouvez-vous communiquer ?",
    answer: "Notre équipe peut vous accompagner en français et en anglais pour faciliter les échanges avec nos clients internationaux."
  }
];

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className="py-12 md:py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Questions fréquentes
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Retrouvez les réponses aux questions les plus courantes
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center p-4 rounded-lg text-left ${
                  openIndex === index 
                    ? 'bg-primary text-white dark:bg-blue-600' 
                    : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'
                } transition-colors duration-200`}
              >
                <span className="font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <FiChevronUp className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <FiChevronDown className="h-5 w-5 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-b-lg shadow-sm border-t-0 border border-gray-100 dark:border-gray-700"
                >
                  <p className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
