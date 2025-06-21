import { Metadata } from 'next';
import { Hero, Services, About, Contact } from '@/components/home';

export const metadata: Metadata = {
  title: 'Cabinet CBS | Conseil Fiscal au Mali',
  description: 'Cabinet BOURAIMA SIDIBE, conseil fiscal agréé offrant des prestations en matière fiscale, juridique, sociale et en gestion des ressources humaines au Mali et à l\'international.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
    </>
  );
}
