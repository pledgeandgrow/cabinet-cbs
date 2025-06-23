'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft, FiFileText, FiShield, FiBook } from 'react-icons/fi';

export default function PolitiqueConfidentialiteContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-50 rounded-full opacity-70 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-50 rounded-full opacity-70 blur-3xl"></div>
        </div>
        
        {/* Ligne de séparation en dégradé */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-violet-400"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="mb-6 inline-flex items-center text-gray-600 hover:text-violet-600 transition-colors duration-300"
            >
              <FiArrowLeft className="mr-2" /> Retour à l&apos;accueil
            </Link>
          </motion.div>
          
          <motion.h1 
            className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Politique de Confidentialité
          </motion.h1>
          
          <motion.p 
            className="text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Dernière mise à jour : 21 juin 2025
          </motion.p>
        </div>
      </section>
      
      {/* Navigation légale */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
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
              <li className="flex-1">
                <Link 
                  href="/mentions-legales"
                  className="flex items-center p-3 rounded-lg transition-all duration-300 hover:bg-gray-50 text-gray-700 hover:text-violet-600"
                >
                  <FiFileText className="mr-2 text-gray-500" />
                  <span className="text-sm">Mentions Légales</span>
                </Link>
              </li>
              <li className="flex-1">
                <Link 
                  href="/politique-de-confidentialite"
                  className="flex items-center p-3 rounded-lg transition-all duration-300 bg-violet-50 text-violet-700 font-medium"
                >
                  <FiShield className="mr-2 text-violet-600" />
                  <span className="text-sm">Politique de Confidentialité</span>
                  <motion.div className="ml-2 w-2 h-2 rounded-full bg-violet-600" />
                </Link>
              </li>
              <li className="flex-1">
                <Link 
                  href="/cgv"
                  className="flex items-center p-3 rounded-lg transition-all duration-300 hover:bg-gray-50 text-gray-700 hover:text-violet-600"
                >
                  <FiBook className="mr-2 text-gray-500" />
                  <span className="text-sm">Conditions Générales de Vente</span>
                </Link>
              </li>
            </ul>
          </nav>
        </motion.div>
        
        <motion.div 
          className="prose max-w-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500">
              1. Collecte des données personnelles
            </h2>
            <p>
              Le Cabinet CBS peut collecter les données personnelles suivantes :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Nom, prénom, adresse email, numéro de téléphone</li>
              <li>Informations professionnelles (entreprise, fonction)</li>
              <li>Données de connexion et d&apos;utilisation du site</li>
              <li>Informations fiscales et comptables dans le cadre de nos prestations</li>
            </ul>
            <p>
              Ces données sont collectées lorsque vous :
            </p>
            <ul className="list-disc pl-6">
              <li>Remplissez un formulaire de contact</li>
              <li>Souscrivez à notre newsletter</li>
              <li>Demandez un devis ou souscrivez à nos services</li>
              <li>Naviguez sur notre site (cookies et traceurs)</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500">
              2. Utilisation des données
            </h2>
            <p>
              Les données personnelles collectées sont utilisées pour :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Répondre à vos demandes et gérer notre relation client</li>
              <li>Vous fournir les services demandés</li>
              <li>Vous informer sur nos services et actualités</li>
              <li>Améliorer notre site et nos services</li>
              <li>Respecter nos obligations légales et réglementaires</li>
            </ul>
            <p>
              Le Cabinet CBS s&apos;engage à ne pas vendre, louer ou céder vos données personnelles à des tiers sans votre consentement, sauf obligation légale.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500">
              3. Conservation des données
            </h2>
            <p>
              Vos données personnelles sont conservées pour une durée limitée :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Données de contact : 3 ans à compter du dernier contact</li>
              <li>Données clients : durée de la relation contractuelle + 5 ans à des fins de preuve</li>
              <li>Données de connexion : 13 mois maximum</li>
              <li>Données comptables : 10 ans conformément aux obligations légales</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500">
              4. Sécurité et confidentialité
            </h2>
            <p>
              Le Cabinet CBS met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre toute perte, accès non autorisé, divulgation, altération ou destruction.
            </p>
            <p>
              Seul le personnel autorisé du Cabinet CBS, soumis à une obligation de confidentialité, peut accéder à vos données dans le cadre de leurs fonctions.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500">
              5. Vos droits
            </h2>
            <p>
              Conformément à la réglementation en vigueur, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Droit d&apos;accès à vos données personnelles</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l&apos;effacement de vos données</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d&apos;opposition au traitement</li>
              <li>Droit de définir des directives relatives au sort de vos données après votre décès</li>
            </ul>
            <p>
              Pour exercer ces droits, vous pouvez nous contacter par email à privacy@cabinet-cbs.com ou par courrier à l&apos;adresse du Cabinet CBS.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500">
              6. Cookies et traceurs
            </h2>
            <p>
              Notre site utilise des cookies et autres traceurs pour améliorer votre expérience de navigation, réaliser des statistiques de visites et vous proposer des contenus adaptés.
            </p>
            <p>
              Vous pouvez configurer votre navigateur pour refuser les cookies ou être alerté lors de leur utilisation. Le refus des cookies peut limiter certaines fonctionnalités du site.
            </p>
            <p className="mt-4">
              Pour toute question concernant notre politique de confidentialité, veuillez nous contacter à privacy@cabinet-cbs.com.
            </p>
          </section>
        </motion.div>
      </div>
    </>
  );
}
