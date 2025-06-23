import React from 'react';
import type { Metadata } from 'next';
import CGVContent from './CGVContent';

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente | Cabinet CBS',
  description: 'Conditions générales de vente des services du Cabinet CBS, cabinet d&apos;expertise fiscale, juridique et sociale au Mali.',
  keywords: 'CGV, conditions générales de vente, cabinet cbs, mali, services fiscaux, services juridiques',
};

export default function CGVPage() {
  return (
    <main className="bg-white overflow-hidden">
      <CGVContent />
    </main>
  );
}
