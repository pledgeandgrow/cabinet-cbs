'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { ThemeToggle } from '@/components/theme/theme-toggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    // Initialize on load
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  // Close menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  // Navbar classes based on scroll state
  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled 
      ? 'bg-white dark:bg-gray-900 shadow-md py-2 border-b border-gray-100 dark:border-gray-800' 
      : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm py-3'
  }`;
  
  return (
    <>
      {/* Spacer div removed - spacing now handled by page components */}
      
      <nav className={navbarClasses} aria-label="Navigation principale">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo and brand name */}
            <Link 
              href="/" 
              className="flex items-center"
              aria-label="Cabinet CBS - Accueil"
            >
              <div className="relative h-20 w-48 md:h-24 md:w-56">
                <Image 
                  src="/logocbs.png" 
                  alt="Cabinet CBS Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            
            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                href="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive('/') 
                    ? 'text-primary dark:text-blue-400 font-semibold' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400'
                }`}
                aria-current={isActive('/') ? 'page' : undefined}
              >
                Accueil
                {isActive('/') && (
                  <motion.div 
                    className="absolute bottom-0 left-0 h-0.5 bg-primary dark:bg-blue-400 w-full"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
              
              <Link 
                href="/services"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive('/services') 
                    ? 'text-primary dark:text-blue-400 font-semibold' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400'
                }`}
                aria-current={isActive('/services') ? 'page' : undefined}
              >
                Services
                {isActive('/services') && (
                  <motion.div 
                    className="absolute bottom-0 left-0 h-0.5 bg-primary dark:bg-blue-400 w-full"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
              
              <Link 
                href="/expertise"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive('/expertise') 
                    ? 'text-primary dark:text-blue-400 font-semibold' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400'
                }`}
                aria-current={isActive('/expertise') ? 'page' : undefined}
              >
                Expertise
                {isActive('/expertise') && (
                  <motion.div 
                    className="absolute bottom-0 left-0 h-0.5 bg-primary dark:bg-blue-400 w-full"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
              
              <Link 
                href="/a-propos"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive('/a-propos') 
                    ? 'text-primary dark:text-blue-400 font-semibold' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400'
                }`}
                aria-current={isActive('/a-propos') ? 'page' : undefined}
              >
                À propos
                {isActive('/a-propos') && (
                  <motion.div 
                    className="absolute bottom-0 left-0 h-0.5 bg-primary dark:bg-blue-400 w-full"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
              
              <Link 
                href="/contact"
                className="ml-4 px-4 py-2 rounded-md bg-primary hover:bg-primary-dark text-white font-medium text-sm transition-colors duration-200"
                aria-current={isActive('/contact') ? 'page' : undefined}
              >
                Contact
              </Link>
            </div>
            
            {/* Theme toggle (desktop) */}
            <div className="hidden md:flex items-center">
              <ThemeToggle />
            </div>
            
            {/* Mobile menu button */}
            <div className="flex md:hidden items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-500 transition-colors"
                aria-label="Toggle mobile menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">{isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
                {isOpen ? (
                  <FiX className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <FiMenu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link 
                  href="/"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive('/') 
                      ? 'bg-primary-light dark:bg-blue-900/30 text-primary dark:text-blue-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  aria-current={isActive('/') ? 'page' : undefined}
                >
                  Accueil
                </Link>
                
                <Link 
                  href="/services"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive('/services') 
                      ? 'bg-primary-light dark:bg-blue-900/30 text-primary dark:text-blue-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  aria-current={isActive('/services') ? 'page' : undefined}
                >
                  Services
                </Link>
                
                <Link 
                  href="/expertise"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive('/expertise') 
                      ? 'bg-primary-light dark:bg-blue-900/30 text-primary dark:text-blue-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  aria-current={isActive('/expertise') ? 'page' : undefined}
                >
                  Expertise
                </Link>
                
                <Link 
                  href="/a-propos"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive('/a-propos') 
                      ? 'bg-primary-light dark:bg-blue-900/30 text-primary dark:text-blue-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  aria-current={isActive('/a-propos') ? 'page' : undefined}
                >
                  À propos
                </Link>
                
                <Link 
                  href="/contact"
                  className="block px-3 py-2 rounded-md text-base font-medium bg-primary hover:bg-primary-dark text-white"
                  aria-current={isActive('/contact') ? 'page' : undefined}
                >
                  Contact
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
