'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft, FiFileText, FiShield, FiBook } from 'react-icons/fi';

export default function MentionsLegalesContent() {
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
            Mentions Légales
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
                  className="flex items-center p-3 rounded-lg transition-all duration-300 bg-violet-50 text-violet-700 font-medium"
                >
                  <FiFileText className="mr-2 text-violet-600" />
                  <span className="text-sm">Mentions Légales</span>
                  <motion.div className="ml-2 w-2 h-2 rounded-full bg-violet-600" />
                </Link>
              </li>
              <li className="flex-1">
                <Link 
                  href="/politique-de-confidentialite"
                  className="flex items-center p-3 rounded-lg transition-all duration-300 hover:bg-gray-50 text-gray-700 hover:text-violet-600"
                >
                  <FiShield className="mr-2 text-gray-500" />
                  <span className="text-sm">Politique de Confidentialité</span>
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
              1. Informations légales
            </h2>
            <p>
              Le site web <strong>cabinet-cbs.com</strong> est édité par :
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Cabinet CBS</li>
              <li>Hamdallaye ACI 2000, Rue 432, Porte 1275</li>
              <li>Bamako, Mali</li>
              <li>Téléphone : +223 20 29 11 89</li>
              <li>Email : contact@cabinet-cbs.com</li>
              <li>RCCM : ML-BKO-2015-A-XXXX</li>
              <li>NIF : XXXXXXXXX</li>
            </ul>
            
            <p>
              Directeur de la publication : [Nom du Directeur]
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500">
              2. Hébergement
            </h2>
            <p>
              Ce site est hébergé par :
            </p>
            <ul className="list-disc pl-6">
              <li>Vercel Inc.</li>
              <li>340 S Lemon Ave #4133</li>
              <li>Walnut, CA 91789</li>
              <li>États-Unis</li>
              <li>https://vercel.com</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500">
              3. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site (structure, textes, logos, images, photographies, vidéos, sons, etc.) est la propriété exclusive du Cabinet CBS ou de ses partenaires. Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit est interdite sans l&apos;autorisation écrite préalable du Cabinet CBS.
            </p>
            <p>
              Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500">
              4. Liens hypertextes
            </h2>
            <p>
              Le site peut contenir des liens hypertextes vers d&apos;autres sites internet ou d&apos;autres ressources disponibles sur Internet. Le Cabinet CBS ne dispose d&apos;aucun moyen pour contrôler les sites en connexion avec son site internet. Il ne répond pas de la disponibilité de tels sites et sources externes, ni ne la garantit.
            </p>
            <p>
              Les utilisateurs, les abonnés et les visiteurs du site ne peuvent pas mettre en place un hyperlien en direction de ce site sans l&apos;autorisation expresse et préalable du Cabinet CBS.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500">
              5. Limitation de responsabilité
            </h2>
            <p>
              Le Cabinet CBS s&apos;efforce de fournir sur son site des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
            <p>
              Toutes les informations indiquées sur le site sont données à titre indicatif, et sont susceptibles d&apos;évoluer. Par ailleurs, les renseignements figurant sur le site ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500">
              6. Droit applicable et juridiction compétente
            </h2>
            <p>
              Les présentes mentions légales sont régies par la loi malienne. En cas de litige, les tribunaux maliens seront seuls compétents.
            </p>
            <p>
              Pour toute question relative aux présentes mentions légales du site, vous pouvez nous contacter à l&apos;adresse email : contact@cabinet-cbs.com
            </p>
          </section>
        </motion.div>
      </div>
    </>
  );
}
