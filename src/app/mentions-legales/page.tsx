import React from 'react';
import type { Metadata } from 'next';
import MentionsLegalesContent from './MentionsLegalesContent';

export const metadata: Metadata = {
  title: 'Mentions Légales | Cabinet CBS',
  description: 'Mentions légales du Cabinet CBS, cabinet d&apos;expertise fiscale, juridique et sociale au Mali.',
  keywords: 'mentions légales, cabinet cbs, mali, conditions légales, informations légales',
};

export default function MentionsLegalesPage() {
  return (
    <main className="bg-white overflow-hidden">
      <MentionsLegalesContent />
    </main>
  );
}
