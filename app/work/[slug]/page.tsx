import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data';
import ProjectDetailClient from './ProjectDetailClient';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find(p => p.slug === resolvedParams.slug);
  
  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | ORBITAL STUDIO`,
      description: project.description,
      type: 'article',
      images: project.heroImage ? [{ url: project.heroImage }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | ORBITAL STUDIO`,
      description: project.description,
      images: project.heroImage ? [project.heroImage] : [],
    },
  };
}

export async function generateStaticParams() {
  return projects.map(project => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = projects.find(p => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}