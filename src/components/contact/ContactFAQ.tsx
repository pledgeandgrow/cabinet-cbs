'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

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
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            className="inline-flex items-center px-3 py-1 rounded-full bg-violet-100 text-violet-800 text-sm font-medium mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="w-2 h-2 rounded-full bg-violet-500 mr-2"></span>
            FAQ
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Questions fréquentes
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-violet-500 to-violet-700 mx-auto mb-8 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p
            className="max-w-2xl mx-auto text-lg text-gray-600 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Retrouvez les réponses aux questions les plus fréquentes sur nos services.
          </motion.p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:border-violet-200 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button 
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-20 focus:ring-offset-2 rounded-t-2xl"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-violet-700">{faq.question}</h3>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-violet-100 transition-all duration-300 ${openIndex === index ? 'bg-violet-600' : ''}`}>
                  <FiChevronDown 
                    className={`h-5 w-5 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180 text-white' : 'text-violet-600'}`} 
                  />
                </div>
              </button>
              
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
                id={`faq-answer-${index}`}
              >
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
