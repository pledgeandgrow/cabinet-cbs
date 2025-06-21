import React from 'react';
import type { Metadata } from 'next';
import { 
  AboutHero, 
  AboutValues, 
  AboutHistory, 
  AboutTeam, 
  AboutCTA 
} from '@/components/about';

export const metadata: Metadata = {
  title: 'À Propos | Cabinet CBS',
  description: 'Découvrez l\'histoire, les valeurs et l\'équipe du Cabinet CBS, cabinet de conseil fiscal, juridique et social basé à Bamako, Mali.',
  keywords: 'cabinet CBS, à propos, histoire, valeurs, équipe, conseil fiscal, Mali, Bamako',
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutValues />
      <AboutHistory />
      <AboutTeam />
      <AboutCTA />
    </main>
  );
}
