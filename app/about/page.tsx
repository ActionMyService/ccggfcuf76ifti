import { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Orbital Studio — our philosophy, process, and the thinking behind the work. 8+ years crafting brands that move culture forward.',
};

export default function AboutPage() {
  return <AboutPageClient />;
}