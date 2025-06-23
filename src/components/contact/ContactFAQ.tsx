'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiHelpCircle } from 'react-icons/fi';

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
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-violet-50 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-violet-50 rounded-full opacity-70 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center justify-center mb-4 bg-violet-100 text-violet-700 px-4 py-2 rounded-full"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FiHelpCircle className="mr-2" />
            <span className="font-medium">FAQ</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Questions fréquentes
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
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
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex justify-between items-center p-5 rounded-xl text-left shadow-sm border ${openIndex === index 
                  ? 'bg-gradient-to-r from-violet-600 to-violet-700 text-white border-violet-500' 
                  : 'bg-white text-gray-800 hover:bg-violet-50 border-gray-100 hover:border-violet-200'
                } transition-all duration-300`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <span className="ml-4 flex-shrink-0 w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  {openIndex === index ? (
                    <FiChevronUp className="h-5 w-5" />
                  ) : (
                    <FiChevronDown className="h-5 w-5" />
                  )}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white p-6 rounded-b-xl shadow-sm border-t-0 border border-gray-100 border-t-transparent"
                  >
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
