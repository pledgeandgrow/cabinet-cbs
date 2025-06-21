'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMapPin, FiPhone, FiMail, FiLinkedin, FiFacebook } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <div className="relative h-20 w-44">
                <Image 
                  src="/logocbs.png" 
                  alt="Cabinet CBS Logo" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Cabinet BOURAIMA SIDIBE, inscrit à l&apos;ordre des conseils fiscaux agréés
              du Mali suivant arrêté N°0826/MEF-SG du 21 Mars 2014.
            </p>
            <p className="text-gray-300 mb-2">
              RCCM: ML-BKO-2015-A-6108
            </p>
            <p className="text-gray-300">
              NIF: 084121301X
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMapPin className="mt-1 mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">
                  Hamdallaye ACI 2000, Rue 432, Porte 1275<br />
                  Bamako, Mali
                </span>
              </li>
              <li className="flex items-center">
                <FiPhone className="mr-3 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">
                  +223 20 29 11 89 / 76 40 41 81
                </span>
              </li>
              <li className="flex items-center">
                <FiMail className="mr-3 text-blue-400 flex-shrink-0" />
                <a 
                  href="mailto:contact@cabinet-cbs.com" 
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  contact@cabinet-cbs.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/expertise"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Expertise
                </Link>
              </li>

              <li>
                <Link 
                  href="/contact"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
            
            {/* Social Media Links */}
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/cabinet-cbs" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://www.facebook.com/cabinetcbsmali" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-8 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Cabinet CBS. Tous droits réservés.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2 mt-4 md:mt-0">
              <Link 
                href="/mentions-legales"
                className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
              >
                Mentions Légales
              </Link>
              <span className="hidden md:inline text-gray-600">|</span>
              <Link 
                href="/cgv"
                className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
              >
                CGV
              </Link>
              <span className="hidden md:inline text-gray-600">|</span>
              <Link 
                href="/politique-de-confidentialite"
                className="text-gray-400 text-sm hover:text-blue-400 transition-colors"
              >
                Politique de Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
