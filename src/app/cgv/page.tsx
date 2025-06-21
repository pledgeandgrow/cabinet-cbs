import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente | Cabinet CBS',
  description: 'Conditions générales de vente des services du Cabinet CBS, cabinet d\'expertise fiscale, juridique et sociale au Mali.',
  keywords: 'CGV, conditions générales de vente, cabinet cbs, mali, services fiscaux, services juridiques',
};

export default function CGVPage() {
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
            Conditions Générales de Vente
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Dernière mise à jour : 20 juin 2025
          </p>
        </div>
        
        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              1. Préambule
            </h2>
            <p>
              Les présentes conditions générales de vente (CGV) s&apos;appliquent à toutes les prestations de services conclues par le Cabinet CBS auprès de ses clients, quelles que soient les clauses pouvant figurer sur les documents du client, et notamment ses conditions générales d&apos;achat.
            </p>
            <p>
              Conformément à la réglementation en vigueur, ces conditions générales de vente sont systématiquement communiquées à tout client qui en fait la demande, pour lui permettre de passer commande auprès du Cabinet CBS.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              2. Définitions
            </h2>
            <p>
              Dans les présentes conditions générales de vente, les termes suivants ont la signification suivante :
            </p>
            <ul className="list-disc pl-6">
              <li><strong>Cabinet</strong> : désigne le Cabinet CBS, cabinet d&apos;expertise fiscale, juridique et sociale.</li>
              <li><strong>Client</strong> : désigne toute personne physique ou morale qui contracte avec le Cabinet pour la fourniture de services.</li>
              <li><strong>Services</strong> : désigne les prestations d&apos;assistance fiscale, juridique, sociale et de gestion des ressources humaines proposées par le Cabinet.</li>
              <li><strong>Contrat</strong> : désigne l&apos;ensemble des documents contractuels régissant les relations entre le Cabinet et le Client, comprenant les présentes CGV, le devis ou la proposition commerciale, et tout autre document contractuel spécifique.</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              3. Services proposés
            </h2>
            <p>
              Le Cabinet propose des services d&apos;assistance et de conseil dans les domaines suivants :
            </p>
            <ul className="list-disc pl-6">
              <li>Assistance fiscale</li>
              <li>Assistance juridique</li>
              <li>Assistance sociale</li>
              <li>Gestion des ressources humaines</li>
              <li>Conseil en gestion d&apos;entreprise</li>
              <li>Formation professionnelle</li>
            </ul>
            <p>
              Le contenu précis des services, leur durée et leurs modalités d&apos;exécution sont définis dans la proposition commerciale ou le devis adressé au Client.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              4. Formation du contrat
            </h2>
            <p>
              Le contrat est formé lors de l&apos;acceptation par le Client du devis ou de la proposition commerciale émise par le Cabinet. Cette acceptation peut prendre la forme d&apos;une signature du devis, d&apos;un bon de commande, d&apos;un contrat spécifique ou de tout autre document écrit manifestant clairement l&apos;intention du Client de contracter avec le Cabinet.
            </p>
            <p>
              Toute commande implique l&apos;adhésion sans réserve aux présentes conditions générales de vente qui prévalent sur toutes autres conditions, sauf dérogation formelle et expresse du Cabinet.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              5. Prix et modalités de paiement
            </h2>
            <p>
              Les prix des services sont ceux en vigueur au jour de la passation de la commande. Ils sont libellés en Francs CFA (XOF) et calculés hors taxes. Par voie de conséquence, ils seront majorés du taux de TVA applicable au jour de la commande.
            </p>
            <p>
              Le Cabinet se réserve le droit de modifier ses tarifs à tout moment. Toutefois, il s&apos;engage à facturer les services commandés aux prix indiqués lors de l&apos;enregistrement de la commande.
            </p>
            <p>
              Sauf convention contraire, le paiement du prix s&apos;effectue selon les modalités suivantes :
            </p>
            <ul className="list-disc pl-6">
              <li>Un acompte de 30% du montant total à la signature du contrat</li>
              <li>Le solde à la livraison des prestations ou selon l&apos;échéancier prévu au contrat</li>
            </ul>
            <p>
              Aucun escompte ne sera consenti en cas de paiement anticipé.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              6. Retard de paiement
            </h2>
            <p>
              En cas de défaut de paiement total ou partiel des services à la date convenue, le Client devra verser au Cabinet une pénalité de retard égale à trois fois le taux de l&apos;intérêt légal.
            </p>
            <p>
              Cette pénalité est calculée sur le montant TTC de la somme restant due, et court à compter de la date d&apos;échéance du prix sans qu&apos;aucune mise en demeure préalable ne soit nécessaire.
            </p>
            <p>
              En sus des indemnités de retard, toute somme non payée à sa date d&apos;exigibilité produira de plein droit le paiement d&apos;une indemnité forfaitaire de 40 euros due au titre des frais de recouvrement.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              7. Exécution des services
            </h2>
            <p>
              Le Cabinet s&apos;engage à mettre en œuvre tous les moyens nécessaires à la bonne exécution des services convenus. Les délais d&apos;exécution indiqués dans le devis ou la proposition commerciale sont donnés à titre indicatif et ne constituent pas un engagement ferme du Cabinet.
            </p>
            <p>
              Le Client s&apos;engage à fournir au Cabinet toutes les informations et documents nécessaires à la bonne exécution des services. Tout retard ou défaut de communication de ces éléments par le Client pourra entraîner un report des délais d&apos;exécution sans que la responsabilité du Cabinet puisse être engagée.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              8. Confidentialité
            </h2>
            <p>
              Le Cabinet s&apos;engage à considérer comme confidentielles toutes les informations transmises par le Client dans le cadre de l&apos;exécution des services, et à ne pas les divulguer à des tiers sans l&apos;accord préalable du Client, sauf obligation légale ou judiciaire.
            </p>
            <p>
              Cette obligation de confidentialité survivra à l&apos;expiration ou à la résiliation du contrat pour quelque cause que ce soit.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              9. Propriété intellectuelle
            </h2>
            <p>
              Tous les documents, rapports, études et autres œuvres créés par le Cabinet dans le cadre de l&apos;exécution des services restent la propriété du Cabinet jusqu&apos;au paiement intégral du prix.
            </p>
            <p>
              Après paiement intégral, le Client dispose d&apos;un droit d&apos;utilisation non exclusif, non cessible et non transférable sur ces éléments pour ses besoins propres, à l&apos;exclusion de toute exploitation commerciale.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              10. Responsabilité
            </h2>
            <p>
              La responsabilité du Cabinet ne peut être engagée qu&apos;en cas de faute prouvée et est limitée aux préjudices directs à l&apos;exclusion de tout préjudice indirect, de quelque nature que ce soit.
            </p>
            <p>
              En tout état de cause, la responsabilité du Cabinet est plafonnée au montant des honoraires perçus au titre du contrat concerné.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              11. Droit applicable et juridiction compétente
            </h2>
            <p>
              Les présentes conditions générales de vente sont soumises au droit malien. En cas de litige, les tribunaux de Bamako seront seuls compétents.
            </p>
            <p>
              Pour toute question relative aux présentes CGV, vous pouvez nous contacter à l&apos;adresse email : contact@cabinet-cbs.com
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
