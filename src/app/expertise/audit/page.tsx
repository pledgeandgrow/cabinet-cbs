import React from 'react';
import { Metadata } from 'next';
import ServiceDetailLayout from '@/components/services/ServiceDetailLayout';

export const metadata: Metadata = {
  title: 'Services d\'Audit | Cabinet CBS',
  description: 'Services d\'audit financier, comptable et organisationnel au Mali: audit légal, audit contractuel, due diligence et conseil en amélioration des processus.',
  keywords: 'audit Mali, audit financier, audit comptable, due diligence, commissariat aux comptes, Cabinet CBS',
};

export default function AuditPage() {
  const serviceData = {
    title: "Audit & Conseil",
    subtitle: "Expertise en audit financier et conseil en organisation",
    description: "Notre équipe d'auditeurs expérimentés réalise des missions d'audit et de conseil pour vous aider à fiabiliser vos informations financières et optimiser vos processus internes.",
    coverImage: "/images/services/audit-cover.jpg",
    icon: "FiDatabase",
    benefits: [
      {
        title: "Fiabilité des informations",
        description: "Nos audits garantissent la fiabilité de vos informations financières et comptables pour une meilleure prise de décision."
      },
      {
        title: "Conformité réglementaire",
        description: "Nous vérifions la conformité de vos pratiques avec les normes comptables et la réglementation en vigueur."
      },
      {
        title: "Amélioration continue",
        description: "Nos recommandations vous permettent d'optimiser vos processus et d'améliorer votre performance globale."
      },
      {
        title: "Gestion des risques",
        description: "Nous identifions et évaluons les risques potentiels pour vous aider à mettre en place des mesures préventives adaptées."
      }
    ],
    services: [
      {
        title: "Audit légal",
        description: "Missions de commissariat aux comptes, certification des états financiers annuels conformément aux normes en vigueur",
        icon: "FiCheckCircle"
      },
      {
        title: "Audit contractuel",
        description: "Audits financiers et comptables à la demande, revue limitée des comptes intermédiaires",
        icon: "FiFileText"
      },
      {
        title: "Due diligence",
        description: "Audit d'acquisition, évaluation financière et analyse des risques dans le cadre d'opérations de fusion-acquisition",
        icon: "FiSearch"
      },
      {
        title: "Audit organisationnel",
        description: "Analyse et optimisation des processus internes, amélioration des systèmes d'information",
        icon: "FiLayers"
      },
      {
        title: "Audit fiscal et social",
        description: "Vérification de la conformité fiscale et sociale, identification des risques et opportunités d'optimisation",
        icon: "FiShield"
      },
      {
        title: "Audit de fraude",
        description: "Détection et prévention des fraudes, mise en place de procédures de contrôle interne",
        icon: "FiAlertTriangle"
      }
    ],
    faq: [
      {
        question: "Quelle est la différence entre un audit légal et un audit contractuel ?",
        answer: "L'audit légal (ou commissariat aux comptes) est une mission obligatoire pour certaines entreprises, imposée par la loi, qui vise à certifier la régularité, la sincérité et l'image fidèle des comptes annuels. L'audit contractuel, quant à lui, est réalisé à la demande de l'entreprise ou d'un tiers (banque, investisseur) pour répondre à un besoin spécifique d'information ou de sécurisation des données financières, sans obligation légale."
      },
      {
        question: "Quelles entreprises sont soumises à l'obligation d'audit légal au Mali ?",
        answer: "Au Mali, selon l'Acte Uniforme OHADA, sont soumises à l'obligation d'avoir un commissaire aux comptes : les Sociétés Anonymes (SA), les Sociétés à Responsabilité Limitée (SARL) dépassant certains seuils (chiffre d'affaires, total bilan, nombre d'employés), les Groupements d'Intérêt Économique (GIE), et certaines entités spécifiques comme les banques, les compagnies d'assurance et les entreprises publiques."
      },
      {
        question: "Comment se déroule une mission d'audit financier ?",
        answer: "Une mission d'audit financier se déroule généralement en plusieurs phases : planification (prise de connaissance de l'entité, évaluation des risques), phase préliminaire (revue des procédures et du contrôle interne), phase finale (contrôle des comptes annuels, vérifications spécifiques), et conclusion (rapport d'audit avec opinion sur les comptes). La durée varie selon la taille et la complexité de l'entreprise, généralement de quelques jours à plusieurs semaines."
      },
      {
        question: "Quels sont les avantages d'un audit organisationnel pour mon entreprise ?",
        answer: "Un audit organisationnel présente plusieurs avantages : identification des inefficacités et goulots d'étranglement dans vos processus, optimisation de l'allocation des ressources, amélioration de la productivité, réduction des coûts opérationnels, clarification des rôles et responsabilités, amélioration de la communication interne, et recommandations concrètes pour une meilleure performance globale de votre organisation."
      }
    ],
    testimonials: [
      {
        content: "L'audit réalisé par le Cabinet CBS nous a permis d'identifier des faiblesses importantes dans notre contrôle interne et d'y remédier efficacement. Un travail rigoureux et des recommandations pertinentes.",
        author: "Directeur Administratif et Financier, entreprise industrielle"
      },
      {
        content: "Grâce à l'audit organisationnel du Cabinet CBS, nous avons pu optimiser nos processus et réaliser d'importantes économies. Leur approche pragmatique et leurs conseils avisés ont été déterminants.",
        author: "Gérant, entreprise de services"
      }
    ],
    cta: {
      title: "Besoin d'un audit pour sécuriser votre activité ?",
      description: "Nos experts-auditeurs sont à votre disposition pour une mission adaptée à vos besoins spécifiques.",
      buttonText: "Demander un devis",
      buttonLink: "/contact?subject=devis"
    }
  };

  return <ServiceDetailLayout serviceData={serviceData} />;
}
