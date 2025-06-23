'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiLinkedin, FiFacebook, FiTwitter, FiInstagram, FiSend, FiArrowRight, FiChevronUp } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'inscription à la newsletter
    console.log('Email soumis:', email);
    setEmail('');
    // Ici vous pourriez ajouter une notification de succès
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 transition-all duration-300 border-t border-violet-900/30 overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-violet-400 to-violet-600"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center mb-6">
              <div className="relative h-20 w-44 mr-4 group">
                <Image 
                  src="/logocbs.png" 
                  alt="Cabinet CBS Logo" 
                  fill
                  className="object-contain transition-all duration-300 group-hover:scale-105"
                />
              </div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-200">
                Cabinet<span className="text-white">CBS</span>
              </h2>
            </div>
            
            <p className="text-gray-300 mb-4 leading-relaxed max-w-lg">
              Cabinet BOURAIMA SIDIBE, inscrit à l&apos;ordre des conseils fiscaux agréés
              du Mali suivant arrêté N°0826/MEF-SG du 21 Mars 2014.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700/50">
                <p className="text-gray-300 text-sm">
                  <span className="text-violet-400 font-medium">RCCM:</span> ML-BKO-2015-A-6108
                </p>
              </div>
              <div className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-700/50">
                <p className="text-gray-300 text-sm">
                  <span className="text-violet-400 font-medium">NIF:</span> 084121301X
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-5 relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-300">Contact</span>
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-violet-500"></span>
            </h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start group"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="p-2 bg-violet-900/30 rounded-lg mr-3 group-hover:bg-violet-800/50 transition-colors">
                  <FiMapPin className="text-violet-400 flex-shrink-0" />
                </div>
                <span className="text-gray-300 group-hover:text-gray-100 transition-colors">
                  Hamdallaye ACI 2000, Rue 432, Porte 1275<br />
                  Bamako, Mali
                </span>
              </motion.li>
              <motion.li 
                className="flex items-center group"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="p-2 bg-violet-900/30 rounded-lg mr-3 group-hover:bg-violet-800/50 transition-colors">
                  <FiPhone className="text-violet-400 flex-shrink-0" />
                </div>
                <span className="text-gray-300 group-hover:text-gray-100 transition-colors">
                  +223 20 29 11 89 / 76 40 41 81
                </span>
              </motion.li>
              <motion.li 
                className="flex items-center group"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="p-2 bg-violet-900/30 rounded-lg mr-3 group-hover:bg-violet-800/50 transition-colors">
                  <FiMail className="text-violet-400 flex-shrink-0" />
                </div>
                <a 
                  href="mailto:contact@cabinet-cbs.com" 
                  className="text-gray-300 group-hover:text-violet-300 transition-colors"
                >
                  contact@cabinet-cbs.com
                </a>
              </motion.li>
            </ul>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-5 relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-300">Liens Rapides</span>
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-violet-500"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/services", label: "Services" },
                { href: "/expertise", label: "Expertise" },
                { href: "/a-propos", label: "À propos" },
                { href: "/contact", label: "Contact" }
              ].map((link) => (
                <motion.li 
                  key={link.href}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-violet-300 transition-colors flex items-center"
                  >
                    <FiArrowRight className="mr-2 text-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="text-sm font-medium text-gray-400 mb-3">Suivez-nous</h4>
              <div className="flex space-x-3">
                {[
                  { icon: FiLinkedin, href: "https://www.linkedin.com/company/cabinet-cbs", label: "LinkedIn" },
                  { icon: FiFacebook, href: "https://www.facebook.com/cabinetcbsmali", label: "Facebook" },
                  { icon: FiTwitter, href: "#", label: "Twitter" },
                  { icon: FiInstagram, href: "#", label: "Instagram" }
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a 
                      key={social.label}
                      href={social.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-violet-900/30 rounded-lg text-gray-300 hover:bg-violet-700/50 hover:text-white transition-all"
                      aria-label={social.label}
                      whileHover={{ y: -3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold mb-5 relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-300">Newsletter</span>
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-violet-500"></span>
            </h3>
            <p className="text-gray-300 mb-4">
              Inscrivez-vous pour recevoir nos dernières actualités et conseils fiscaux.
            </p>
            
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                required
                className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
              />
              <button 
                type="submit" 
                className="btn-modern btn-sm absolute right-1.5 top-1.5 !py-1.5 !px-3 flex items-center justify-center"
                aria-label="S'inscrire à la newsletter"
              >
                <FiSend className="mr-1" />
                <span>OK</span>
              </button>
            </form>
            
            <p className="text-gray-400 text-xs mt-3">
              En vous inscrivant, vous acceptez notre{" "}
              <Link href="/politique-de-confidentialite" className="text-violet-400 hover:underline">
                politique de confidentialité
              </Link>
            </p>
          </motion.div>
        </div>

        {/* Back to top button */}
        <div className="flex justify-center mt-12 mb-4">
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-violet-900/30 hover:bg-violet-700/50 text-violet-400 hover:text-white transition-colors"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Retour en haut de page"
          >
            <FiChevronUp />
          </motion.button>
        </div>
        
        {/* Copyright & Legal */}
        <div className="border-t border-violet-900/30 mt-8 pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p 
                className="text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                &copy; {currentYear} Cabinet CBS. Tous droits réservés.
              </motion.p>
              
              <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 mt-4 md:mt-0">
                {[
                  { href: "/mentions-legales", label: "Mentions Légales" },
                  { href: "/cgv", label: "CGV" },
                  { href: "/politique-de-confidentialite", label: "Politique de Confidentialité" }
                ].map((link, i) => (
                  <motion.div 
                    key={link.href}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                  >
                    <Link 
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-violet-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
