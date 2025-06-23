'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft, FiFileText, FiShield, FiBook } from 'react-icons/fi';

export default function CGVContent() {
  return (
    <main className="bg-white overflow-hidden">
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
            Conditions Générales de Vente
          </motion.h1>
          
          <motion.p 
            className="text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Dernière mise à jour : 23 juin 2025
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
                  className="flex items-center p-3 rounded-lg transition-all duration-300 hover:bg-gray-50 text-gray-700 hover:text-violet-600"
                >
                  <FiShield className="mr-2 text-gray-500" />
                  <span className="text-sm">Politique de Confidentialité</span>
                </Link>
              </li>
              <li className="flex-1">
                <Link 
                  href="/cgv"
                  className="flex items-center p-3 rounded-lg transition-all duration-300 bg-violet-50 text-violet-700 font-medium"
                >
                  <FiBook className="mr-2 text-violet-600" />
                  <span className="text-sm">Conditions Générales de Vente</span>
                  <motion.div className="ml-2 w-2 h-2 rounded-full bg-violet-600" />
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
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500">
              1. Préambule
            </h2>
            <p>
              Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre le Cabinet CBS, ci-après dénommé « le Prestataire », et toute personne physique ou morale, ci-après dénommée « le Client », souhaitant bénéficier des services proposés par le Prestataire.
            </p>
            <p>
              Toute commande de prestations implique l&apos;acceptation sans réserve par le Client et son adhésion pleine et entière aux présentes conditions générales de vente qui prévalent sur tout autre document du Client.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500">
              2. Services proposés
            </h2>
            <p>
              Le Cabinet CBS propose des prestations de conseil et d&apos;expertise dans les domaines suivants :
            </p>
            <ul className="list-disc pl-6">
              <li>Expertise comptable et fiscale</li>
              <li>Conseil juridique</li>
              <li>Accompagnement social et ressources humaines</li>
              <li>Audit et contrôle de gestion</li>
              <li>Formation professionnelle</li>
            </ul>
            <p>
              Le détail des prestations, leur contenu et leurs modalités d&apos;exécution sont précisés dans les propositions commerciales ou devis adressés au Client.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500">
              3. Devis et commandes
            </h2>
            <p>
              Les prestations font l&apos;objet d&apos;un devis préalable, valable pour une durée de 30 jours à compter de sa date d&apos;émission. La commande est considérée comme ferme et définitive dès réception par le Prestataire du devis signé par le Client, accompagné de l&apos;acompte éventuellement prévu.
            </p>
            <p>
              Toute modification de la commande demandée par le Client ne sera prise en compte que si elle est notifiée par écrit et acceptée par le Prestataire. Elle pourra faire l&apos;objet d&apos;une facturation complémentaire.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500">
              4. Tarifs et conditions de paiement
            </h2>
            <p>
              Les prix des prestations sont exprimés en Francs CFA (XOF) et sont soumis à la TVA au taux en vigueur. Les tarifs applicables sont ceux en vigueur au jour de la passation de la commande.
            </p>
            <p>
              Sauf stipulation contraire dans le devis ou la proposition commerciale, les conditions de paiement sont les suivantes :
            </p>
            <ul className="list-disc pl-6">
              <li>Un acompte de 30% du montant total à la commande</li>
              <li>Le solde à la livraison de la prestation ou selon l&apos;échéancier prévu au contrat</li>
            </ul>
            <p>
              Les factures sont payables à réception, sans escompte. Tout retard de paiement entraînera l&apos;application de pénalités de retard au taux de 1,5% par mois, ainsi qu&apos;une indemnité forfaitaire pour frais de recouvrement de 40 000 XOF.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500">
              5. Délais d&apos;exécution
            </h2>
            <p>
              Les délais d&apos;exécution sont donnés à titre indicatif et ne constituent pas un engagement ferme du Prestataire. Tout retard ne pourra donner lieu à dommages et intérêts, pénalités ou annulation de la commande.
            </p>
            <p>
              Le Prestataire s&apos;engage néanmoins à informer le Client de tout retard prévisible dans l&apos;exécution des prestations et à mettre en œuvre les moyens nécessaires pour respecter au mieux les délais annoncés.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500">
              6. Obligations du Client
            </h2>
            <p>
              Le Client s&apos;engage à :
            </p>
            <ul className="list-disc pl-6">
              <li>Fournir au Prestataire tous les documents, informations et éléments nécessaires à la bonne exécution des prestations</li>
              <li>Désigner un interlocuteur privilégié pour faciliter les échanges avec le Prestataire</li>
              <li>Collaborer activement avec le Prestataire</li>
              <li>Régler les factures conformément aux conditions de paiement convenues</li>
            </ul>
            <p>
              Tout retard ou manquement du Client dans la transmission des informations nécessaires à l&apos;exécution des prestations dégage la responsabilité du Prestataire quant au respect des délais d&apos;exécution prévus.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500">
              7. Confidentialité
            </h2>
            <p>
              Le Prestataire s&apos;engage à considérer comme confidentielles toutes les informations transmises par le Client dans le cadre de l&apos;exécution des prestations et à ne pas les divulguer à des tiers sans l&apos;accord préalable du Client.
            </p>
            <p>
              Cette obligation de confidentialité ne s&apos;applique pas aux informations qui sont déjà dans le domaine public ou qui doivent être divulguées en vertu d&apos;une obligation légale ou réglementaire.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500">
              8. Propriété intellectuelle
            </h2>
            <p>
              Sauf stipulation contraire expressément convenue, le Prestataire conserve la propriété intellectuelle des méthodes, outils et savoir-faire utilisés pour l&apos;exécution des prestations.
            </p>
            <p>
              Le Client dispose d&apos;un droit d&apos;utilisation des livrables fournis par le Prestataire pour ses besoins propres, à l&apos;exclusion de toute exploitation commerciale ou transmission à des tiers sans l&apos;accord préalable du Prestataire.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500">
              9. Responsabilité
            </h2>
            <p>
              Le Prestataire s&apos;engage à exécuter les prestations avec diligence et conformément aux règles de l&apos;art et aux normes professionnelles applicables. Sa responsabilité est limitée aux dommages directs résultant d&apos;une faute prouvée dans l&apos;exécution des prestations.
            </p>
            <p>
              En tout état de cause, la responsabilité du Prestataire est limitée au montant des honoraires perçus au titre de la prestation concernée.
            </p>
            <p>
              Le Prestataire ne saurait être tenu responsable des conséquences d&apos;une utilisation des livrables non conforme à leur destination ou des décisions prises par le Client sur la base des prestations fournies.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500">
              10. Force majeure
            </h2>
            <p>
              La responsabilité du Prestataire ne pourra pas être engagée en cas d&apos;inexécution ou de retard dans l&apos;exécution de l&apos;une de ses obligations résultant d&apos;un cas de force majeure, tel que défini par la jurisprudence des tribunaux maliens.
            </p>
            <p>
              Sont notamment considérés comme cas de force majeure : les catastrophes naturelles, les grèves, les émeutes, les guerres, les épidémies, les interruptions des télécommunications, les défaillances des réseaux électriques ou informatiques.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500">
              11. Résiliation
            </h2>
            <p>
              En cas de manquement par l&apos;une des parties à l&apos;une de ses obligations contractuelles, l&apos;autre partie pourra résilier le contrat après mise en demeure adressée par lettre recommandée avec accusé de réception restée sans effet pendant un délai de 30 jours.
            </p>
            <p>
              En cas de résiliation imputable au Client, les sommes déjà versées resteront acquises au Prestataire et les prestations déjà réalisées seront facturées intégralement.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-violet-500">
              12. Droit applicable et juridiction compétente
            </h2>
            <p>
              Les présentes conditions générales de vente sont soumises au droit malien. Tout litige relatif à leur interprétation ou à leur exécution relèvera, à défaut d&apos;accord amiable, de la compétence exclusive des tribunaux de Bamako.
            </p>
            <p className="mt-6">
              Pour toute question relative à ces conditions générales de vente, veuillez nous contacter à :
            </p>
            <p className="mt-2">
              Cabinet CBS<br />
              Hamdallaye ACI 2000, Rue 432, Porte 1275<br />
              Bamako, Mali<br />
              Email : contact@cabinet-cbs.com<br />
              Téléphone : +223 20 29 11 89
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
}
