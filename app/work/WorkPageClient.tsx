'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/lib/data';
import { cn } from '@/lib/utils';

interface WorkPageClientProps {
  projects: Project[];
}

export default function WorkPageClient({ projects }: WorkPageClientProps) {
  return (
    <div className="min-h-screen">
      <section className="relative py-32 lg:py-48 px-5" aria-labelledby="work-title">
        <div className="container-x">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-6">
              SELECTED WORK
            </p>
            <h1 id="work-title" className="font-display font-bold uppercase tracking-tightest text-[var(--text)]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              PROJECTS THAT
              <br />
              <span className="text-gradient">MATTER</span>
            </h1>
            <p className="text-lg text-[var(--text-soft)] leading-relaxed font-light mt-6 max-w-2xl mx-auto">
              A curated selection of brand identities, packaging systems, campaigns, 
              and digital experiences. Each project represents a partnership — 
              strategy made visible, craft pushed to its edge.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.article
                key={project.slug}
                className="group relative glass p-6 overflow-hidden card-3d"
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-xl mb-6 bg-[var(--bg-soft)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--text-faint)] font-mono text-xs tracking-[0.2em] uppercase">
                    {project.category.toUpperCase()}
                  </div>
                  {project.featured && (
                    <motion.div
                      className="absolute top-4 right-4 px-3 py-1 bg-[var(--accent)] text-white text-xs font-medium tracking-wide uppercase rounded-full"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, duration: 0.4, type: 'spring' }}
                    >
                      FEATURED
                    </motion.div>
                  )}
                </div>
                
                <div className="space-y-3">
                  <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--accent)]">
                    {project.category}
                  </p>
                  <h3 className="font-display font-bold uppercase tracking-tightest text-[var(--text)] group-hover:text-[var(--accent)] transition-colors" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-soft)] text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tools.slice(0, 5).map((tool) => (
                      <span key={tool} className="px-3 py-1 text-xs bg-[var(--surface)] border border-[var(--line)] rounded-full text-[var(--text-faint)]">
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-[var(--line)] mt-4">
                    <span className="font-mono text-xs text-[var(--text-faint)]">
                      {project.year}
                    </span>
                    <span className="text-[var(--text-faint)] text-sm">
                      {project.client}
                    </span>
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-[var(--accent)] scale-x-0 origin-left"
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />

                <Link
                  href={`/work/${project.slug}`}
                  className="absolute inset-0 z-10"
                  aria-label={`View ${project.title} case study`}
                />
              </motion.article>
            ))}
          </div>

          <motion.div
            className="text-center mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-[var(--text-soft)] mb-6">
              Looking for something specific? 
              <br />
              <span className="font-medium text-[var(--text)]">Let's talk about your project.</span>
            </p>
            <Link
              href="/contact"
              className="btn-magnetic inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--accent)] text-white font-medium tracking-wide uppercase text-sm overflow-hidden"
              data-cursor-label="START PROJECT"
            >
              <span className="relative z-10">START A PROJECT</span>
              <motion.div
                className="absolute inset-0 bg-white/10 scale-x-0 origin-left"
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}