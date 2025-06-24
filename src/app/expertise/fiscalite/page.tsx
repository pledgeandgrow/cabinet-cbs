import React from 'react';
import { Metadata } from 'next';
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout';

export const metadata: Metadata = {
  title: 'Services Fiscaux | Cabinet CBS',
  description: 'Découvrez nos services d\'assistance fiscale au Mali: déclarations fiscales, optimisation fiscale, conseil et accompagnement lors des contrôles fiscaux.',
  keywords: 'fiscalité Mali, conseil fiscal, déclarations fiscales, optimisation fiscale, contrôle fiscal, Cabinet CBS',
};

export default function FiscalitePage() {
  const serviceData = {
    title: "Assistance Fiscale",
    subtitle: "Expertise et conseil en fiscalité malienne et internationale",
    description: "Notre équipe d'experts fiscalistes vous accompagne dans toutes vos obligations fiscales et vous aide à optimiser votre situation fiscale dans le respect de la réglementation en vigueur au Mali.",
    coverImage: "/images/services/fiscalite-cover.jpg",
    icon: "FiFileText",
    benefits: [
      {
        title: "Conformité fiscale assurée",
        description: "Nous veillons au respect de toutes vos obligations fiscales et à la préparation de vos déclarations dans les délais légaux."
      },
      {
        title: "Optimisation fiscale légale",
        description: "Nous identifions les opportunités d'optimisation fiscale dans le cadre légal pour réduire votre charge fiscale."
      },
      {
        title: "Sécurité juridique",
        description: "Notre expertise vous protège contre les risques fiscaux et vous assure une tranquillité d'esprit."
      },
      {
        title: "Veille fiscale permanente",
        description: "Nous vous informons des évolutions législatives et réglementaires impactant votre activité."
      }
    ],
    services: [
      {
        title: "Déclarations fiscales",
        description: "Préparation et dépôt de vos déclarations mensuelles et annuelles d'impôts et taxes (TVA, IS, IR, etc.)",
        icon: "FiFileText"
      },
      {
        title: "Conseil fiscal",
        description: "Conseil en matière d'optimisation fiscale et d'application des conventions fiscales internationales",
        icon: "FiMessageCircle"
      },
      {
        title: "Contrôle fiscal",
        description: "Assistance lors des contrôles fiscaux et rédaction des réponses aux notifications de redressement",
        icon: "FiShield"
      },
      {
        title: "Restructurations",
        description: "Accompagnement fiscal lors des opérations de restructuration (fusion, acquisition, cession)",
        icon: "FiRefreshCw"
      },
      {
        title: "Fiscalité internationale",
        description: "Conseil en matière de fiscalité internationale et de prix de transfert",
        icon: "FiGlobe"
      },
      {
        title: "Contentieux fiscal",
        description: "Représentation et défense de vos intérêts dans le cadre de contentieux fiscaux",
        icon: "FiAlertTriangle"
      }
    ],
    faq: [
      {
        question: "Quelles sont les principales échéances fiscales au Mali ?",
        answer: "Au Mali, les principales échéances fiscales incluent les déclarations mensuelles de TVA (avant le 15 du mois suivant), les acomptes provisionnels d'IS (15 février, 15 mai, 15 août et 15 novembre), la déclaration annuelle de résultats (30 avril) et la déclaration de revenus des personnes physiques (30 avril)."
      },
      {
        question: "Comment optimiser légalement ma fiscalité au Mali ?",
        answer: "L'optimisation fiscale légale au Mali peut passer par plusieurs stratégies : utilisation des dispositifs d'amortissements accélérés, recours aux exonérations prévues par le code des investissements, planification des investissements pour bénéficier des crédits d'impôts, structuration adaptée de votre activité, etc."
      },
      {
        question: "Que faire en cas de contrôle fiscal ?",
        answer: "En cas de contrôle fiscal, il est recommandé de faire appel à un expert comme Cabinet CBS dès la réception de l'avis de vérification. Nous vous accompagnerons tout au long de la procédure : préparation des documents, assistance lors des entretiens avec l'administration fiscale, analyse des propositions de rectification et négociation avec l'administration."
      },
      {
        question: "Comment se prémunir contre les risques fiscaux ?",
        answer: "Pour se prémunir contre les risques fiscaux, il est conseillé de mettre en place une veille fiscale régulière, de documenter soigneusement toutes les opérations importantes, de réaliser des audits fiscaux préventifs et de s'assurer que votre comptabilité est tenue conformément aux normes en vigueur."
      }
    ],
    testimonials: [
      {
        content: "Grâce à l'expertise de Cabinet CBS, nous avons pu régulariser notre situation fiscale et éviter des pénalités importantes. Leur accompagnement lors du contrôle fiscal a été déterminant.",
        author: "Directeur Financier, entreprise industrielle à Bamako"
      },
      {
        content: "L'équipe fiscale du Cabinet CBS nous a permis d'optimiser notre charge fiscale de manière significative tout en respectant scrupuleusement la législation en vigueur.",
        author: "PDG, société d'import-export"
      }
    ],
    cta: {
      title: "Besoin d'une assistance fiscale sur mesure ?",
      description: "Contactez nos experts pour un diagnostic personnalisé de votre situation fiscale.",
      buttonText: "Demander un devis",
      buttonLink: "/contact?subject=devis"
    }
  };

  return <ServiceDetailLayout serviceData={serviceData} />;
}
