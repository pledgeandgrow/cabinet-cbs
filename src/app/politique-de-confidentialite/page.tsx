import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Cabinet CBS',
  description: 'Politique de confidentialité du Cabinet CBS concernant la collecte et le traitement des données personnelles.',
  keywords: 'politique de confidentialité, protection des données, RGPD, cabinet cbs, mali, données personnelles',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-8">
          <Link
            href="/"
            className="mb-6 inline-flex items-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400"
          >
            <FiArrowLeft className="mr-2" /> Retour à l&apos;accueil
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Politique de Confidentialité
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Dernière mise à jour : 20 juin 2025
          </p>
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              1. Introduction
            </h2>
            <p>
              Le Cabinet CBS s&apos;engage à protéger la vie privée des utilisateurs de son site web et de ses clients. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations personnelles lorsque vous visitez notre site web ou utilisez nos services.
            </p>
            <p>
              En utilisant notre site web ou en nous fournissant vos informations personnelles, vous acceptez les pratiques décrites dans cette politique de confidentialité.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              2. Informations que nous collectons
            </h2>
            <p>
              Nous pouvons collecter les types d&apos;informations suivants :
            </p>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
              2.1 Informations que vous nous fournissez
            </h3>
            <ul className="list-disc pl-6">
              <li>Informations d&apos;identification (nom, prénom, adresse email, numéro de téléphone)</li>
              <li>Informations professionnelles (nom de l&apos;entreprise, poste, secteur d&apos;activité)</li>
              <li>Contenu des messages que vous nous envoyez via notre formulaire de contact</li>
              <li>Informations fournies lors de la souscription à nos services</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
              2.2 Informations collectées automatiquement
            </h3>
            <ul className="list-disc pl-6">
              <li>Données de navigation (adresse IP, type de navigateur, pages visitées, durée de la visite)</li>
              <li>Cookies et technologies similaires</li>
              <li>Informations sur l&apos;appareil utilisé pour accéder à notre site</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              3. Utilisation des informations
            </h2>
            <p>
              Nous utilisons les informations collectées pour les finalités suivantes :
            </p>
            <ul className="list-disc pl-6">
              <li>Fournir, maintenir et améliorer nos services</li>
              <li>Répondre à vos demandes et communiquer avec vous</li>
              <li>Personnaliser votre expérience sur notre site</li>
              <li>Vous envoyer des informations sur nos services, actualités et événements (avec votre consentement)</li>
              <li>Analyser l&apos;utilisation de notre site pour améliorer son fonctionnement</li>
              <li>Détecter et prévenir les activités frauduleuses ou non autorisées</li>
              <li>Se conformer aux obligations légales</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              4. Partage des informations
            </h2>
            <p>
              Nous ne vendons pas vos informations personnelles à des tiers. Nous pouvons partager vos informations dans les circonstances suivantes :
            </p>
            <ul className="list-disc pl-6">
              <li>Avec des prestataires de services qui nous aident à fournir nos services (hébergement, analyse de données, etc.)</li>
              <li>Si nécessaire pour se conformer à une obligation légale, une décision de justice ou une demande gouvernementale</li>
              <li>Pour protéger nos droits, notre propriété ou notre sécurité, ou ceux de nos utilisateurs ou du public</li>
              <li>Dans le cadre d&apos;une fusion, acquisition ou vente d&apos;actifs impliquant notre cabinet</li>
              <li>Avec votre consentement ou selon vos instructions</li>
            </ul>
            <p>
              Les tiers avec lesquels nous partageons vos informations sont tenus de les utiliser uniquement pour les finalités spécifiques pour lesquelles elles ont été partagées et de les protéger conformément à cette politique de confidentialité et à la législation applicable.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              5. Cookies et technologies similaires
            </h2>
            <p>
              Notre site utilise des cookies et des technologies similaires pour collecter des informations sur votre navigation et vos préférences. Les cookies sont de petits fichiers texte stockés sur votre appareil qui nous permettent de reconnaître votre navigateur et de vous offrir certaines fonctionnalités.
            </p>
            <p>
              Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour être averti lorsqu&apos;un cookie est envoyé. Toutefois, certaines fonctionnalités de notre site peuvent ne pas fonctionner correctement si vous désactivez les cookies.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              6. Sécurité des données
            </h2>
            <p>
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos informations personnelles contre la perte, l&apos;accès non autorisé, la divulgation, l&apos;altération ou la destruction. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n&apos;est totalement sécurisée, et nous ne pouvons garantir une sécurité absolue.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              7. Conservation des données
            </h2>
            <p>
              Nous conservons vos informations personnelles aussi longtemps que nécessaire pour atteindre les finalités décrites dans cette politique de confidentialité, sauf si une période de conservation plus longue est requise ou permise par la loi.
            </p>
            <p>
              Les critères utilisés pour déterminer nos périodes de conservation comprennent :
            </p>
            <ul className="list-disc pl-6">
              <li>La durée pendant laquelle nous entretenons une relation continue avec vous</li>
              <li>Nos obligations légales</li>
              <li>Les délais de prescription applicables</li>
              <li>Les litiges ou enquêtes potentiels</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              8. Vos droits
            </h2>
            <p>
              Selon la législation applicable, vous pouvez avoir les droits suivants concernant vos informations personnelles :
            </p>
            <ul className="list-disc pl-6">
              <li>Droit d&apos;accès : vous pouvez demander une copie des informations personnelles que nous détenons à votre sujet</li>
              <li>Droit de rectification : vous pouvez demander la correction des informations inexactes ou incomplètes</li>
              <li>Droit à l&apos;effacement : vous pouvez demander la suppression de vos informations personnelles dans certaines circonstances</li>
              <li>Droit à la limitation du traitement : vous pouvez demander la limitation du traitement de vos informations personnelles dans certaines circonstances</li>
              <li>Droit à la portabilité des données : vous pouvez demander le transfert de vos informations personnelles à un autre organisme</li>
              <li>Droit d&apos;opposition : vous pouvez vous opposer au traitement de vos informations personnelles dans certaines circonstances</li>
            </ul>
            <p>
              Pour exercer ces droits, veuillez nous contacter à l&apos;adresse email : contact@cabinet-cbs.com
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              9. Modifications de la politique de confidentialité
            </h2>
            <p>
              Nous pouvons modifier cette politique de confidentialité de temps à autre. La version la plus récente sera toujours disponible sur notre site web avec la date de la dernière mise à jour. Nous vous encourageons à consulter régulièrement cette politique pour rester informé de nos pratiques en matière de protection des données.
            </p>
            <p>
              En continuant à utiliser notre site ou nos services après la publication des modifications, vous acceptez la politique de confidentialité révisée.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              10. Contact
            </h2>
            <p>
              Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité ou le traitement de vos informations personnelles, veuillez nous contacter à :
            </p>
            <p className="mt-2">
              Cabinet CBS<br />
              Hamdallaye ACI 2000, Rue 432, Porte 1275<br />
              Bamako, Mali<br />
              Email : contact@cabinet-cbs.com<br />
              Téléphone : +223 20 29 11 89
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
