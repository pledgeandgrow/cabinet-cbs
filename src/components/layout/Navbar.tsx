'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiFileText, FiBookOpen, FiUsers, FiPieChart, FiBriefcase, FiArrowRight } from 'react-icons/fi';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const pathname = usePathname();
  
  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setExpertiseOpen(false);
  }, [pathname]);
  
  // Check if current path matches given href
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  // Menu items data for DRY code
  const menuItems = [
    { href: '/', label: 'Accueil' },
    { href: '/services', label: 'Services' },
    { 
      href: '/expertise', 
      label: 'Expertise',
      isDropdown: true,
      dropdownItems: [
        { href: '/expertise/fiscalite', label: 'Fiscalité' },
        { href: '/expertise/droit-des-affaires', label: 'Droit des affaires' },
        { href: '/expertise/ressources-humaines', label: 'Ressources humaines' },
        { href: '/expertise/audit', label: 'Audit' }
      ]
    },
    { href: '/a-propos', label: 'À propos' }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-700 ease-in-out ${
          scrolled 
            ? 'py-2 bg-white shadow-md' 
            : 'py-4 bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-2 group"
              aria-label="Cabinet CBS - Accueil"
            >
              <div className="relative h-14 w-36 md:h-16 md:w-40 transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/logocbs.png" 
                  alt="Cabinet CBS Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              {/* <div className="hidden md:block">
                <span className="text-gray-800 font-bold text-lg">Cabinet<span className="text-violet-600">CBS</span></span>
              </div> */}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {menuItems.map((item) => (
                !item.isDropdown ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? 'text-violet-600'
                        : 'text-gray-700 hover:text-violet-600 hover:bg-violet-50'
                    }`}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="navbar-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-600"
                        transition={{ type: 'spring', stiffness: 300, damping: 30, duration: 0.8 }}
                      />
                    )}
                  </Link>
                ) : (
                  <div key={item.href} className="relative">
                    <button
                      onClick={() => setExpertiseOpen(!expertiseOpen)}
                      className={`flex items-center cursor-pointer px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-all duration-200 ${
                        isActive(item.href) || item.label === 'Expertise'
                          ? 'text-violet-600'
                          : 'text-gray-700 hover:text-violet-600 hover:bg-violet-50'
                      }`}
                      aria-expanded={expertiseOpen}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <FiChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-500 ease-in-out ${
                          expertiseOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isActive(item.href) && (
                      <motion.div
                        layoutId="navbar-underline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-600"
                        transition={{ type: 'spring', stiffness: 300, damping: 30, duration: 0.8 }}
                      />
                    )}
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {expertiseOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                          className="absolute left-0 mt-3 w-64 origin-top-left rounded-xl bg-white shadow-xl ring-1 ring-violet-100 focus:outline-none z-50 overflow-hidden"
                        >
                          {/* Barre supérieure décorative avec dégradé */}
                          <div className="h-1 w-full bg-gradient-to-r from-violet-600 to-violet-400"></div>
                          
                          {/* Titre du menu déroulant */}
                          <div className="px-4 py-3 border-b border-gray-100">
                            <h3 className="text-sm font-medium text-violet-600">Nos domaines d&apos;expertise</h3>
                          </div>
                          
                          <div className="py-2">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                className={`group flex items-center px-4 py-3 text-sm transition-all duration-200 ${
                                  isActive(dropdownItem.href)
                                    ? 'bg-violet-50 text-violet-700'
                                    : 'text-gray-700 hover:bg-violet-50/50 hover:text-violet-700'
                                }`}
                              >
                                {/* Icône basée sur le label (vous pouvez personnaliser selon vos besoins) */}
                                <span className={`mr-3 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md ${isActive(dropdownItem.href) ? 'bg-violet-100 text-violet-600' : 'bg-gray-50 text-gray-500 group-hover:bg-violet-100 group-hover:text-violet-600'} transition-colors duration-200`}>
                                  {dropdownItem.label.includes('Fiscal') && <FiFileText className="h-4 w-4" />}
                                  {dropdownItem.label.includes('Juridique') && <FiBookOpen className="h-4 w-4" />}
                                  {dropdownItem.label.includes('Social') && <FiUsers className="h-4 w-4" />}
                                  {dropdownItem.label.includes('Comptable') && <FiPieChart className="h-4 w-4" />}
                                  {!dropdownItem.label.includes('Fiscal') && !dropdownItem.label.includes('Juridique') && !dropdownItem.label.includes('Social') && !dropdownItem.label.includes('Comptable') && <FiBriefcase className="h-4 w-4" />}
                                </span>
                                <span>{dropdownItem.label}</span>
                                
                                {/* Indicateur de page active */}
                                {isActive(dropdownItem.href) && (
                                  <span className="ml-auto">
                                    <motion.div 
                                      layoutId="dropdown-active-indicator"
                                      className="h-2 w-2 rounded-full bg-violet-500"
                                    />
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                          
                          {/* Pied de menu avec appel à l'action */}
                          <div className="bg-gray-50 px-4 py-3 border-t border-gray-100">
                            <Link 
                              href="/contact?subject=devis" 
                              className="flex items-center justify-center text-xs text-violet-600 hover:text-violet-800 transition-colors duration-200"
                            >
                              <FiArrowRight className="mr-1 h-3 w-3" />
                              Demander un devis
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              ))}
              
              {/* Contact Button */}
              <motion.a
                href="/contact"
                className="btn-modern ml-2 px-4 py-1.5 !text-white"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
              >
                Nous contacter
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-violet-600 hover:bg-violet-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500"
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only">Ouvrir le menu principal</span>
                <div className="w-6 h-5 relative flex flex-col justify-between">
                  <span 
                    className={`block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
                      mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                    }`}
                  />
                  <span 
                    className={`block h-0.5 bg-current transition-opacity duration-400 ${
                      mobileMenuOpen ? 'opacity-0 w-0' : 'opacity-100 w-6'
                    }`}
                  />
                  <span 
                    className={`block h-0.5 w-6 bg-current transform transition duration-500 ease-in-out ${
                      mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                    }`}
                  />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[72px] z-40 md:hidden bg-white shadow-lg border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {menuItems.map((item, idx) => (
                !item.isDropdown ? (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  >
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 rounded-md text-base font-medium ${
                        isActive(item.href)
                          ? 'bg-violet-50 text-violet-600'
                          : 'text-gray-700 hover:bg-violet-50 hover:text-violet-600'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08, duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                  >
                    <button
                      onClick={() => setExpertiseOpen(!expertiseOpen)}
                      className={`flex items-center justify-between w-full px-4 py-3 rounded-md text-base font-medium ${
                        isActive(item.href)
                          ? 'bg-violet-50 text-violet-600'
                          : 'text-gray-700 hover:bg-violet-50 hover:text-violet-600'
                      }`}
                    >
                      {item.label}
                      <FiChevronDown
                        className={`ml-1 h-4 w-4 transition-transform duration-500 ease-in-out ${
                          expertiseOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    
                    <AnimatePresence>
                      {expertiseOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, scale: 0.98 }}
                          animate={{ opacity: 1, height: 'auto', scale: 1 }}
                          exit={{ opacity: 0, height: 0, scale: 0.98 }}
                          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                          className="ml-4 pl-2 border-l-2 border-violet-200"
                        >
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className={`block px-4 py-2 text-sm font-medium ${
                                isActive(dropdownItem.href)
                                  ? 'text-violet-600'
                                  : 'text-gray-600 hover:text-violet-600'
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              ))}
              
              {/* Mobile Contact Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: menuItems.length * 0.05, duration: 0.2 }}
                className="pt-2"
              >
                <motion.a
                  href="/contact"
                  className="btn-modern w-full"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  Nous contacter
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Spacer to prevent content from hiding behind fixed navbar */}
      {/* <div className={`h-20 ${scrolled ? 'md:h-20' : 'md:h-24'}`} /> */}
    </>
  );
};

export default Navbar;
