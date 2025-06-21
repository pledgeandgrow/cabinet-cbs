'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui';
import Link from 'next/link';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  
  // Cookie preferences state
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true, // Always required
    analytics: false,
    marketing: false
  });
  
  useEffect(() => {
    // Check if user has already made a choice
    try {
      const consentGiven = localStorage.getItem('cookie-consent');
      
      if (!consentGiven) {
        // Show banner after a short delay
        const timer = setTimeout(() => {
          setShowBanner(true);
        }, 1000);
        
        return () => clearTimeout(timer);
      } else {
        // Parse saved preferences
        try {
          const savedPreferences = JSON.parse(consentGiven);
          if (savedPreferences && typeof savedPreferences === 'object') {
            setCookiePreferences(savedPreferences);
          } else {
            // Invalid format, reset preferences
            throw new Error('Invalid cookie preferences format');
          }
        } catch (e) {
          console.error('Error parsing saved cookie preferences', e);
          // Reset localStorage if parsing fails
          localStorage.removeItem('cookie-consent');
          setShowBanner(true);
        }
      }
    } catch (e) {
      // Handle case where localStorage is not available (e.g., incognito mode)
      console.error('Error accessing localStorage', e);
    }
  }, []);
  
  const saveToLocalStorage = (preferences: typeof cookiePreferences) => {
    try {
      localStorage.setItem('cookie-consent', JSON.stringify(preferences));
      return true;
    } catch (e) {
      console.error('Error saving cookie preferences to localStorage', e);
      return false;
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    
    setCookiePreferences(allAccepted);
    saveToLocalStorage(allAccepted);
    setShowBanner(false);
  };
  
  const handleRejectNonEssential = () => {
    const essentialOnly = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    
    setCookiePreferences(essentialOnly);
    saveToLocalStorage(essentialOnly);
    setShowBanner(false);
  };
  
  const handleSavePreferences = () => {
    saveToLocalStorage(cookiePreferences);
    setShowPreferences(false);
    setShowBanner(false);
  };
  
  const handlePreferenceChange = (key: keyof typeof cookiePreferences) => {
    setCookiePreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700"
          aria-labelledby="cookie-consent-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="max-w-7xl mx-auto p-4 sm:p-6">
            {!showPreferences ? (
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h2 id="cookie-consent-title" className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Respect de votre vie privée
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    Nous utilisons des cookies pour améliorer votre expérience sur notre site, personnaliser le contenu et les publicités, 
                    fournir des fonctionnalités de médias sociaux et analyser notre trafic. 
                    Cliquez sur &quot;Accepter tout&quot; pour consentir à l&apos;utilisation de tous les cookies ou &quot;Personnaliser&quot; pour choisir vos préférences.
                  </p>
                  <div className="mt-2">
                    <Link 
                      href="/mentions-legales" 
                      className="text-primary dark:text-blue-400 hover:underline text-sm"
                    >
                      En savoir plus sur notre politique de confidentialité
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
                  <Button 
                    onClick={() => setShowPreferences(true)}
                    variant="outline"
                    className="whitespace-nowrap"
                  >
                    Personnaliser
                  </Button>
                  <Button 
                    onClick={handleRejectNonEssential}
                    variant="secondary"
                    className="whitespace-nowrap"
                  >
                    Refuser
                  </Button>
                  <Button 
                    onClick={handleAcceptAll}
                    variant="primary"
                    className="whitespace-nowrap"
                  >
                    Accepter tout
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 id="cookie-preferences-title" className="text-lg font-semibold text-gray-900 dark:text-white">
                    Préférences de cookies
                  </h2>
                  <button 
                    onClick={() => setShowPreferences(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    aria-label="Retour"
                  >
                    &times;
                  </button>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Cookies nécessaires</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Ces cookies sont indispensables au fonctionnement du site.
                      </p>
                    </div>
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        checked={cookiePreferences.necessary} 
                        disabled
                        className="sr-only"
                        id="necessary-cookies"
                      />
                      <label 
                        htmlFor="necessary-cookies"
                        className="flex items-center h-6 w-11 rounded-full bg-primary cursor-not-allowed"
                      >
                        <span className="h-4 w-4 ml-1 bg-white rounded-full"></span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Cookies analytiques</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Ces cookies nous permettent d&apos;analyser l&apos;utilisation du site pour en améliorer les performances.
                      </p>
                    </div>
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        checked={cookiePreferences.analytics} 
                        onChange={() => handlePreferenceChange('analytics')}
                        className="sr-only"
                        id="analytics-cookies"
                      />
                      <label 
                        htmlFor="analytics-cookies"
                        className={`flex items-center h-6 w-11 rounded-full transition-colors cursor-pointer ${
                          cookiePreferences.analytics ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      >
                        <span 
                          className={`h-4 w-4 rounded-full bg-white transition-transform ${
                            cookiePreferences.analytics ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        ></span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">Cookies marketing</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Ces cookies sont utilisés pour vous proposer des publicités pertinentes.
                      </p>
                    </div>
                    <div className="relative">
                      <input 
                        type="checkbox" 
                        checked={cookiePreferences.marketing} 
                        onChange={() => handlePreferenceChange('marketing')}
                        className="sr-only"
                        id="marketing-cookies"
                      />
                      <label 
                        htmlFor="marketing-cookies"
                        className={`flex items-center h-6 w-11 rounded-full transition-colors cursor-pointer ${
                          cookiePreferences.marketing ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                      >
                        <span 
                          className={`h-4 w-4 rounded-full bg-white transition-transform ${
                            cookiePreferences.marketing ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        ></span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end gap-3">
                  <Button 
                    onClick={handleRejectNonEssential}
                    variant="secondary"
                  >
                    Refuser tout
                  </Button>
                  <Button 
                    onClick={handleSavePreferences}
                    variant="primary"
                  >
                    Enregistrer les préférences
                  </Button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
