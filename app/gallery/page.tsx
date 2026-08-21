import { Metadata } from 'next';
import GalleryPageClient from './GalleryPageClient';

export const metadata: Metadata = {
  title: 'Creative Gallery',
  description: 'Explore experimental work, typography studies, poster designs, and visual experiments. A curated gallery of creative exploration.',
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}