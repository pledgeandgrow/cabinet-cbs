'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiPhoneCall, FiMail, FiCalendar } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

const CallToAction = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  
  const benefits = [
    "Expertise fiscale reconnue",
    "Conseil personnalisé",
    "Réactivité garantie",
    "Solutions sur mesure"
  ];

  const contactOptions = [
    {
      icon: <FiPhoneCall className="w-5 h-5 text-white" />,
      text: "+223 76 88 18 76",
      label: "Par téléphone"
    },
    {
      icon: <FiMail className="w-5 h-5 text-white" />,
      text: "contact@cabinet-cbs.com",
      label: "Par email"
    },
    {
      icon: <FiCalendar className="w-5 h-5 text-white" />,
      text: "Prendre rendez-vous",
      label: "En personne"
    }
  ];
  
  return (
    <section className="bg-gradient-to-br from-violet-700 via-violet-600 to-violet-800 py-20 md:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full opacity-5 blur-3xl translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-violet-400 rounded-full opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-white/10 backdrop-blur-sm p-1 rounded-full inline-flex items-center mb-6">
              <span className="bg-white text-violet-700 text-xs font-semibold px-3 py-1 rounded-full">Cabinet fiscal agréé</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Prêt à <span className="relative inline-block">
                optimiser
                <motion.span
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute bottom-2 left-0 h-3 bg-violet-300/30 -z-10"
                />
              </span> votre situation fiscale et juridique ?
            </h2>
            
            <p className="text-lg md:text-xl text-violet-100 max-w-2xl leading-relaxed mb-8">
              Notre cabinet d&apos;expertise vous accompagne dans la gestion complète de vos obligations fiscales, juridiques et sociales pour sécuriser votre activité et optimiser votre développement.
            </p>

            {/* Benefits list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="flex items-center"
                >
                  <FiCheckCircle className="text-violet-300 mr-3 flex-shrink-0" />
                  <span className="text-white">{benefit}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Contact options */}
            <div className="flex flex-wrap gap-4 mb-8">
              {contactOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg flex items-center"
                >
                  <div className="w-8 h-8 bg-violet-500/30 rounded-full flex items-center justify-center mr-3">
                    {option.icon}
                  </div>
                  <div>
                    <p className="text-xs text-violet-200">{option.label}</p>
                    <p className="text-white font-medium">{option.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA Button déplacé dans l'élément visuel */}
          </motion.div>
          
          {/* Visual element */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-violet-400 rounded-2xl transform rotate-3 scale-105 opacity-20" />
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden p-8 border border-white/20">
              <div className="absolute top-0 right-0 w-20 h-20 bg-violet-400 rounded-full filter blur-xl opacity-30 transform translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-violet-100/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-6">
                  <Image 
                    src="/logocbs.png" 
                    alt="Cabinet CBS Logo" 
                    width={60} 
                    height={60} 
                    className="object-contain"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  Expertise reconnue
                </h3>
                
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg mb-4 w-full">
                  <p className="text-violet-100 font-medium">
                    Plus de 10 ans d&apos;expérience au service des entreprises et administrations
                  </p>
                </div>
                
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-lg w-full mb-6">
                  <p className="text-violet-100 font-medium">
                    Une équipe de spécialistes à votre écoute
                  </p>
                </div>
                
                <div className="mt-2 w-full h-1 bg-gradient-to-r from-transparent via-violet-300/30 to-transparent mb-6" />
                
                {/* CTA Button */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="w-full"
                >
                  <Link 
                    href="/contact" 
                    className="btn-modern btn-white btn-icon-right group w-full flex items-center justify-center"
                  >
                    Discuter de votre projet
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
