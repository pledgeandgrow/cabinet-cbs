import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Mentions Légales | Cabinet CBS',
  description: 'Mentions légales du Cabinet CBS, cabinet d\'expertise fiscale, juridique et sociale au Mali.',
  keywords: 'mentions légales, cabinet cbs, mali, conditions légales, informations légales',
};

export default function MentionsLegalesPage() {
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
            Mentions Légales
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Dernière mise à jour : 21 juin 2025
          </p>
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              6. Droit applicable et juridiction compétente
            </h2>
            <p>
              Les présentes mentions légales sont régies par la loi malienne. En cas de litige, les tribunaux maliens seront seuls compétents.
            </p>
            <p>
              Pour toute question relative aux présentes mentions légales du site, vous pouvez nous contacter à l&apos;adresse email : contact@cabinet-cbs.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
