import React from 'react';
import type { Metadata } from 'next';
import PolitiqueConfidentialiteContent from './PolitiqueConfidentialiteContent';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Cabinet CBS',
  description: 'Politique de confidentialité du Cabinet CBS concernant la collecte et le traitement des données personnelles.',
  keywords: 'politique de confidentialité, protection des données, RGPD, cabinet cbs, mali, données personnelles',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="bg-white overflow-hidden">
      <PolitiqueConfidentialiteContent />
    </main>
  );
}
