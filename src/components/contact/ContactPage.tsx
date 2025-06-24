'use client';

import React from 'react';
import { 
  ContactHero, 
  ContactForm, 
  ContactInfo,
  ContactMap,
  ContactFAQ
} from '@/components/contact';

export default function ContactPageContent() {
  return (
    <main className="overflow-hidden">
      <ContactHero />
      
      {/* Section formulaire et informations de contact */}
      <div className="pt-0 pb-16 md:pt-0 md:pb-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Contactez-nous
            </motion.h2> */}
            {/* <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-violet-500 to-violet-700 mx-auto mb-6 rounded-full"
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 96, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            <motion.p
              className="max-w-2xl mx-auto text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Nous sommes à votre écoute pour répondre à toutes vos questions
            </motion.p> */}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
      
      <ContactMap />
      <ContactFAQ />
    </main>
  );
}
