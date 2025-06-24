import React from 'react';
import { Metadata } from 'next';
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout';

export const metadata: Metadata = {
  title: 'Droit des Affaires | Cabinet CBS',
  description: 'Services juridiques spécialisés en droit des affaires au Mali: création d\'entreprise, contrats commerciaux, droit des sociétés et accompagnement juridique.',
  keywords: 'droit des affaires Mali, création entreprise, contrats commerciaux, droit des sociétés, conseil juridique, Cabinet CBS',
};

export default function DroitAffairesPage() {
  const serviceData = {
    title: "Droit des Affaires",
    subtitle: "Expertise juridique pour sécuriser vos activités commerciales",
    description: "Notre équipe d'avocats et juristes spécialisés en droit des affaires vous accompagne dans tous vos projets d'entreprise et sécurise vos relations commerciales au Mali et à l'international.",
    coverImage: "/images/services/droit-affaires-cover.jpg",
    icon: "FiShield",
    benefits: [
      {
        title: "Sécurité juridique",
        description: "Nous sécurisons vos opérations commerciales et vos relations avec vos partenaires grâce à des contrats solides et adaptés."
      },
      {
        title: "Conformité réglementaire",
        description: "Nous veillons au respect des réglementations en vigueur pour éviter tout risque juridique dans vos activités."
      },
      {
        title: "Protection des intérêts",
        description: "Notre expertise vous permet de défendre efficacement vos intérêts dans toutes vos négociations et litiges."
      },
      {
        title: "Accompagnement stratégique",
        description: "Nous vous conseillons sur les meilleures structures juridiques et stratégies pour développer votre activité."
      }
    ],
    services: [
      {
        title: "Création d'entreprise",
        description: "Accompagnement dans toutes les étapes de création de votre entreprise: choix de la forme juridique, rédaction des statuts, formalités administratives",
        icon: "FiBriefcase"
      },
      {
        title: "Droit des sociétés",
        description: "Conseil en matière de gouvernance, modifications statutaires, pactes d'actionnaires et opérations sur capital",
        icon: "FiUsers"
      },
      {
        title: "Contrats commerciaux",
        description: "Rédaction, négociation et révision de tous types de contrats commerciaux: distribution, franchise, partenariat, prestation de services",
        icon: "FiFileText"
      },
      {
        title: "Droit du travail",
        description: "Conseil en droit social, rédaction de contrats de travail et règlement intérieur, gestion des litiges sociaux",
        icon: "FiUserCheck"
      },
      {
        title: "Propriété intellectuelle",
        description: "Protection de vos marques, brevets et droits d'auteur, lutte contre la contrefaçon",
        icon: "FiLock"
      },
      {
        title: "Contentieux commercial",
        description: "Représentation et défense de vos intérêts dans le cadre de litiges commerciaux",
        icon: "FiAlertTriangle"
      }
    ],
    faq: [
      {
        question: "Quelle est la meilleure forme juridique pour mon entreprise au Mali ?",
        answer: "Le choix de la forme juridique dépend de nombreux facteurs: nature de l'activité, nombre d'associés, capital disponible, régime fiscal souhaité, etc. Au Mali, les formes les plus courantes sont la SARL (adaptée aux PME), la SA (pour les structures importantes) et l'entreprise individuelle (pour les entrepreneurs solo). Notre équipe vous conseillera sur la structure la plus adaptée à votre projet."
      },
      {
        question: "Comment protéger ma marque au Mali et en Afrique de l'Ouest ?",
        answer: "Pour protéger votre marque au Mali et dans la région OAPI (Organisation Africaine de la Propriété Intellectuelle), il convient de déposer votre marque auprès de l'OAPI qui couvre 17 pays africains. Nous vous accompagnons dans les recherches d'antériorité, la constitution du dossier et le suivi de la procédure d'enregistrement."
      },
      {
        question: "Quelles sont les principales clauses à vérifier dans un contrat commercial ?",
        answer: "Dans un contrat commercial, il est essentiel de vérifier: la définition précise des obligations de chaque partie, les conditions de paiement, les clauses de responsabilité et limitation de responsabilité, les garanties, les conditions de résiliation, les clauses de confidentialité, la loi applicable et le mode de règlement des litiges. Notre équipe juridique analyse vos contrats pour identifier et négocier les clauses potentiellement risquées."
      },
      {
        question: "Comment gérer un litige commercial au Mali ?",
        answer: "La gestion d'un litige commercial au Mali peut suivre plusieurs voies: la négociation amiable, la médiation, l'arbitrage ou le recours aux tribunaux. Nous privilégions généralement les modes alternatifs de règlement des conflits avant d'envisager une procédure judiciaire, plus longue et coûteuse. Notre équipe vous accompagne à chaque étape pour défendre au mieux vos intérêts."
      }
    ],
    testimonials: [
      {
        content: "L'équipe juridique du Cabinet CBS nous a accompagnés dans notre implantation au Mali avec un grand professionnalisme. Leurs conseils nous ont permis d'éviter de nombreux écueils juridiques.",
        author: "Directeur Général, entreprise internationale"
      },
      {
        content: "Grâce à l'expertise du Cabinet CBS, nous avons pu sécuriser nos relations contractuelles avec nos partenaires et fournisseurs. Un accompagnement juridique de qualité.",
        author: "Responsable juridique, entreprise de télécommunications"
      }
    ],
    cta: {
      title: "Besoin d'un accompagnement juridique pour votre entreprise ?",
      description: "Nos juristes experts sont à votre disposition pour sécuriser vos activités commerciales.",
      buttonText: "Demander un devis",
      buttonLink: "/contact?subject=devis"
    }
  };

  return <ServiceDetailLayout serviceData={serviceData} />;
}
