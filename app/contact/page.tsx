import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a project with Orbital Studio. Selective availability for 2025. Tell us about your challenge and let\'s discuss how design can move your brand forward.',
};

export default function ContactPage() {
  return <ContactPageClient />;
}