'use client';

import React, { Suspense } from 'react';
import { ContactPage } from '@/components/contact';

export default function ClientContactPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Chargement du formulaire de contact...</div>}>
      <ContactPage />
    </Suspense>
  );
}
