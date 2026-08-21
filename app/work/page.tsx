import { Metadata } from 'next';
import { projects } from '@/lib/data';
import WorkPageClient from './WorkPageClient';

export const metadata: Metadata = {
  title: 'Selected Work',
  description: 'Explore selected projects — brand identities, packaging, campaigns, typography, and digital experiences crafted with precision and purpose.',
};

export default function WorkPage() {
  return <WorkPageClient projects={projects} />;
}