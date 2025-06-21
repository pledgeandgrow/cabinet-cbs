import React from 'react';
import type { Metadata } from 'next';
import { 
  ServiceHero, 
  ServiceList, 
  ServiceProcess, 
  ServiceCTA 
} from '@/components/services';

export const metadata: Metadata = {
  title: 'Nos Services | Cabinet CBS',
  description: 'Découvrez les services professionnels du Cabinet CBS: assistance fiscale, juridique, sociale et gestion des ressources humaines pour votre entreprise au Mali.',
  keywords: 'services fiscaux, conseil juridique, gestion RH, comptabilité, Mali, Bamako, Cabinet CBS',
};

export default function ServicesPage() {
  return (
    <main>
      <ServiceHero />
      <ServiceList />
      <ServiceProcess />
      <ServiceCTA />
    </main>
  );
}
