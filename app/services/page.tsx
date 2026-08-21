import { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our design services — brand identity, packaging, UI/UX, motion graphics, AI creative design, and more. Strategic design for ambitious brands.',
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}