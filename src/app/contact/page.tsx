import React from 'react';
import type { Metadata } from 'next';
import { 
  ContactHero, 
  ContactForm, 
  ContactInfo,
  ContactMap,
  ContactFAQ
} from '@/components/contact';

export const metadata: Metadata = {
  title: 'Contact | Cabinet CBS',
  description: 'Contactez le Cabinet CBS pour toute question concernant nos services d\'assistance fiscale, juridique et sociale au Mali et en Afrique de l\'Ouest.',
  keywords: 'contact, cabinet cbs, assistance fiscale, conseil juridique, bamako, mali, afrique de l\'ouest',
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ContactForm />
        <ContactInfo />
      </div>
      <ContactMap />
      <ContactFAQ />
    </main>
  );
}
