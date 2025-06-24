import React from 'react';
import { Metadata } from 'next';
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout';

export const metadata: Metadata = {
  title: 'Gestion des Ressources Humaines | Cabinet CBS',
  description: 'Services de gestion des ressources humaines au Mali: paie, contrats de travail, déclarations sociales, conseil en droit social et accompagnement RH.',
  keywords: 'ressources humaines Mali, gestion paie, contrats travail, droit social, INPS, AMO, Cabinet CBS',
};

export default function RessourcesHumainesPage() {
  const serviceData = {
    title: "Ressources Humaines",
    subtitle: "Expertise en gestion sociale et administration du personnel",
    description: "Notre équipe spécialisée en ressources humaines vous accompagne dans la gestion administrative de votre personnel et vous conseille en matière de droit social malien pour optimiser votre politique RH.",
    coverImage: "/images/services/rh-cover.jpg",
    icon: "FiUsers",
    benefits: [
      {
        title: "Conformité sociale",
        description: "Nous assurons la conformité de vos pratiques RH avec la législation sociale malienne en constante évolution."
      },
      {
        title: "Gain de temps",
        description: "L'externalisation de votre gestion administrative du personnel vous permet de vous concentrer sur votre cœur de métier."
      },
      {
        title: "Réduction des risques",
        description: "Notre expertise vous protège contre les risques sociaux et contentieux avec vos salariés."
      },
      {
        title: "Optimisation des coûts",
        description: "Nous vous aidons à optimiser votre masse salariale tout en maintenant un climat social favorable."
      }
    ],
    services: [
      {
        title: "Gestion de la paie",
        description: "Établissement des bulletins de salaire, calcul des charges sociales et fiscales, déclarations sociales",
        icon: "FiCreditCard"
      },
      {
        title: "Administration du personnel",
        description: "Rédaction des contrats de travail, avenants, attestations et documents obligatoires",
        icon: "FiFileText"
      },
      {
        title: "Déclarations sociales",
        description: "Inscription des salariés à l'INPS et à l'AMO, déclarations et paiement des cotisations sociales",
        icon: "FiClipboard"
      },
      {
        title: "Conseil en droit social",
        description: "Conseil sur l'application de la législation sociale malienne, gestion des procédures disciplinaires",
        icon: "FiShield"
      },
      {
        title: "Audit social",
        description: "Audit de conformité sociale, diagnostic des risques et recommandations d'amélioration",
        icon: "FiSearch"
      },
      {
        title: "Relations sociales",
        description: "Accompagnement dans les relations avec les représentants du personnel et l'inspection du travail",
        icon: "FiMessageCircle"
      }
    ],
    faq: [
      {
        question: "Quelles sont les principales obligations sociales d'un employeur au Mali ?",
        answer: "Au Mali, un employeur doit principalement : établir des contrats de travail écrits, déclarer ses salariés à l'INPS et à l'AMO, verser les cotisations sociales dans les délais, respecter la réglementation sur le temps de travail et les congés, mettre en place les instances représentatives du personnel selon la taille de l'entreprise, et assurer la sécurité et la santé au travail."
      },
      {
        question: "Comment calculer les cotisations sociales au Mali ?",
        answer: "Les cotisations sociales au Mali comprennent principalement les cotisations INPS (régime de retraite et prestations familiales) et AMO (assurance maladie). La part employeur représente environ 17,4% du salaire brut pour l'INPS et 3,5% pour l'AMO, tandis que la part salariale est de 3,6% pour l'INPS et 3% pour l'AMO. Le calcul précis dépend de la convention collective applicable et du plafond de cotisation en vigueur."
      },
      {
        question: "Quelles sont les procédures à suivre pour un licenciement au Mali ?",
        answer: "Un licenciement au Mali doit respecter une procédure précise : convocation à un entretien préalable avec mention du motif envisagé, tenue de l'entretien en présence d'un représentant du personnel si possible, notification écrite du licenciement avec motifs précis, respect du préavis légal ou conventionnel, calcul et versement des indemnités de licenciement et de congés payés. Les motifs doivent être réels et sérieux, sous peine de licenciement abusif."
      },
      {
        question: "Comment externaliser la gestion de sa paie au Mali ?",
        answer: "Pour externaliser votre paie au Mali avec Cabinet CBS, nous mettons en place un processus simple : signature d'un contrat de prestation définissant le périmètre d'intervention, collecte des informations nécessaires (conventions collectives, accords d'entreprise, données des salariés), paramétrage de notre logiciel, mise en place d'un calendrier mensuel pour la transmission des variables de paie, et production des bulletins et déclarations sociales. Un interlocuteur dédié assure le suivi permanent de votre dossier."
      }
    ],
    testimonials: [
      {
        content: "L'externalisation de notre paie auprès du Cabinet CBS nous a permis de gagner un temps précieux et d'être parfaitement en règle avec la législation sociale malienne.",
        author: "DRH, entreprise de distribution"
      },
      {
        content: "Grâce aux conseils avisés du Cabinet CBS, nous avons pu résoudre un contentieux social complexe et améliorer nos procédures RH pour éviter de futurs litiges.",
        author: "Gérant, PME secteur services"
      }
    ],
    cta: {
      title: "Besoin d'optimiser votre gestion RH ?",
      description: "Nos experts en ressources humaines sont à votre écoute pour vous proposer des solutions adaptées à votre entreprise.",
      buttonText: "Demander un devis",
      buttonLink: "/contact?subject=devis"
    }
  };

  return <ServiceDetailLayout serviceData={serviceData} />;
}
