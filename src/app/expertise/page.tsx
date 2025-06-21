import React from 'react';
import type { Metadata } from 'next';
import { 
  ExpertiseHero, 
  ExperienceList, 
  ExpertiseSectors,
  ExpertiseMap,
  ExpertiseCTA 
} from '@/components/expertise';

export const metadata: Metadata = {
  title: 'Notre Expertise | Cabinet CBS',
  description: 'Découvrez les expériences et l\'expertise du Cabinet CBS en matière d\'assistance fiscale, juridique et sociale auprès de clients au Mali et en Afrique de l\'Ouest.',
  keywords: 'expertise fiscale, conseil juridique, assistance sociale, Mali, Afrique de l\'Ouest, Cabinet CBS, expérience professionnelle',
};

export default function ExpertisePage() {
  return (
    <main>
      <ExpertiseHero />
      <ExperienceList />
      <ExpertiseSectors />
      <ExpertiseMap />
      <ExpertiseCTA />
    </main>
  );
}
