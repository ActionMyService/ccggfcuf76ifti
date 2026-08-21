'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { projects } from '@/lib/data';

export function WorkSection() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section className="relative py-32 lg:py-48 px-5" aria-labelledby="work-title">
      <div className="container-x">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-6">
            SELECTED WORK
          </p>
          <h2 id="work-title" className="font-display font-bold uppercase tracking-tightest text-[var(--text)]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            PROJECTS THAT
            <br />
            <span className="text-gradient">MATTER</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {featuredProjects.map((project, i) => (
            <motion.article
              key={project.slug}
              className="group relative glass p-6 overflow-hidden card-3d"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }}
            >
              <div className="aspect-[3/4] relative overflow-hidden rounded-xl mb-6 bg-[var(--bg-soft)]">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center text-[var(--text-faint)] font-mono text-xs tracking-[0.2em] uppercase">
                  {project.category.toUpperCase()}
                </div>
              </div>
              
              <div className="space-y-3">
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--accent)]">
                  {project.category}
                </p>
                <h3 className="font-display font-bold uppercase tracking-tightest text-[var(--text)] group-hover:text-[var(--accent)] transition-colors" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                  {project.title}
                </h3>
                <p className="text-[var(--text-soft)] text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tools.slice(0, 4).map((tool) => (
                    <span key={tool} className="px-3 py-1 text-xs bg-[var(--surface)] border border-[var(--line)] rounded-full text-[var(--text-faint)]">
                      {tool}
                    </span>
                  ))}
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
                aria-label={`View ${project.title} project`}
              />
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/work"
            className="btn-magnetic inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-[var(--line)] text-[var(--text)] font-medium tracking-wide uppercase text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            data-cursor-label="VIEW ALL WORK"
          >
            VIEW ALL PROJECTS
            <motion.span
              className="w-5 h-5 flex items-center justify-center"
              whileHover={{ x: 4 }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}