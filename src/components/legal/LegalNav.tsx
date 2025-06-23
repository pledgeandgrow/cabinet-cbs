'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiFileText, FiShield, FiBook } from 'react-icons/fi';

const legalPages = [
  {
    path: '/mentions-legales',
    name: 'Mentions Légales',
    icon: FiFileText
  },
  {
    path: '/politique-de-confidentialite',
    name: 'Politique de Confidentialité',
    icon: FiShield
  },
  {
    path: '/cgv',
    name: 'Conditions Générales de Vente',
    icon: FiBook
  }
];

const LegalNav = () => {
  const pathname = usePathname();

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md border border-gray-100 mb-8 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-4 bg-gradient-to-r from-violet-600 to-violet-700 text-white">
        <h2 className="text-lg font-semibold">Pages légales</h2>
      </div>
      <nav className="p-2">
        <ul className="flex flex-col sm:flex-row">
          {legalPages.map((page) => {
            const isActive = pathname === page.path;
            const Icon = page.icon;
            
            return (
              <li key={page.path} className="flex-1">
                <Link 
                  href={page.path}
                  className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? 'bg-violet-50 text-violet-700 font-medium' 
                      : 'hover:bg-gray-50 text-gray-700 hover:text-violet-600'
                  }`}
                >
                  <Icon className={`mr-2 ${isActive ? 'text-violet-600' : 'text-gray-500'}`} />
                  <span className="text-sm">{page.name}</span>
                  {isActive && (
                    <motion.div 
                      className="ml-2 w-2 h-2 rounded-full bg-violet-600"
                      layoutId="legalNavIndicator"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.div>
  );
};

export default LegalNav;
