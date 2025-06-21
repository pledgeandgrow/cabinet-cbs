'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

// Schema.org structured data for better SEO
const SchemaOrg = () => {
  const pathname = usePathname();
  const baseUrl = 'https://cabinet-cbs.com';
  const currentUrl = `${baseUrl}${pathname}`;
  
  // Organization schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#organization`,
    name: 'Cabinet CBS',
    alternateName: 'Cabinet BOURAIMA SIDIBE',
    url: baseUrl,
    logo: `${baseUrl}/logocbs.png`,
    image: `${baseUrl}/images/office.jpg`,
    description: 'Cabinet BOURAIMA SIDIBE, conseil fiscal agréé offrant des prestations en matière fiscale, juridique, sociale et en gestion des ressources humaines au Mali et à l\'international.',
    email: 'bousid@yahoo.fr',
    telephone: '+223 76 40 41 10',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hamdallaye ACI 2000, Rue 432, Porte 1275',
      addressLocality: 'Bamako',
      addressRegion: 'Bamako',
      postalCode: 'BP E5467',
      addressCountry: 'ML'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '12.6392',
      longitude: '-8.0029'
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00'
      }
    ],
    sameAs: [
      'https://www.linkedin.com/company/cabinet-cbs',
      'https://www.facebook.com/cabinetcbs'
    ],
    priceRange: '$$'
  };
  
  // Website schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'Cabinet CBS | Conseil Fiscal au Mali',
    description: 'Cabinet BOURAIMA SIDIBE, conseil fiscal agréé offrant des prestations en matière fiscale, juridique, sociale et en gestion des ressources humaines au Mali et à l\'international.',
    publisher: {
      '@id': `${baseUrl}/#organization`
    }
  };
  
  // WebPage schema
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${currentUrl}#webpage`,
    url: currentUrl,
    name: pathname === '/' 
      ? 'Cabinet CBS | Conseil Fiscal au Mali' 
      : `${pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2)} | Cabinet CBS`,
    isPartOf: {
      '@id': `${baseUrl}/#website`
    },
    about: {
      '@id': `${baseUrl}/#organization`
    },
    datePublished: '2025-06-01T00:00:00+00:00',
    dateModified: '2025-06-21T00:00:00+00:00'
  };
  
  // Service schema for services page
  const serviceSchema = pathname === '/services' ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${baseUrl}/services#service`,
    name: 'Services de Conseil Fiscal et Juridique',
    provider: {
      '@id': `${baseUrl}/#organization`
    },
    serviceType: ['Conseil Fiscal', 'Conseil Juridique', 'Conseil Social', 'Gestion RH'],
    areaServed: {
      '@type': 'Country',
      name: 'Mali'
    },
    description: 'Services de conseil fiscal, juridique, social et en gestion des ressources humaines pour les entreprises au Mali et à l\'international.'
  } : null;
  
  // Contact page schema
  const contactPageSchema = pathname === '/contact' ? {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': `${baseUrl}/contact#contactpage`,
    name: 'Contact | Cabinet CBS',
    url: `${baseUrl}/contact`,
    description: 'Contactez le Cabinet CBS pour vos besoins en conseil fiscal, juridique et social au Mali.',
    mainEntity: {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`
    }
  } : null;
  
  // Combine all schemas
  const schemas = [
    organizationSchema,
    websiteSchema,
    webPageSchema
  ];
  
  // Add conditional schemas
  if (serviceSchema) schemas.push(serviceSchema);
  if (contactPageSchema) schemas.push(contactPageSchema);
  
  return (
    <>
      {schemas.map((schema, index) => (
        <script 
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export default SchemaOrg;
