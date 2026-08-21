'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/lib/data';
import { projects } from '@/lib/data';
import { cn } from '@/lib/utils';

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const currentIndex = projects.findIndex(p => p.slug === project.slug);
  const nextProject = project.nextProject 
    ? projects.find(p => p.slug === project.nextProject)
    : projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center px-5" aria-labelledby="project-title">
        <div className="container-x">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[var(--text-soft)] hover:text-[var(--accent)] transition-colors font-mono text-xs tracking-[0.2em] uppercase mb-8"
            >
              ← BACK TO WORK
            </Link>
            
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-4">
              {project.category}
            </p>
            <h1 id="project-title" className="font-display font-bold uppercase tracking-tightest text-[var(--text)] mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              {project.title}
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-center">
              <div className="glass p-4">
                <p className="font-display font-bold text-[var(--text)] text-2xl">{project.year}</p>
                <p className="text-[var(--text-soft)] text-xs tracking-wide uppercase">YEAR</p>
              </div>
              <div className="glass p-4">
                <p className="font-display font-bold text-[var(--text)] text-2xl">{project.client}</p>
                <p className="text-[var(--text-soft)] text-xs tracking-wide uppercase">CLIENT</p>
              </div>
              <div className="glass p-4">
                <p className="font-display font-bold text-[var(--text)] text-2xl">{project.role.split(',')[0]}</p>
                <p className="text-[var(--text-soft)] text-xs tracking-wide uppercase">ROLE</p>
              </div>
              <div className="glass p-4">
                <p className="font-display font-bold text-[var(--text)] text-2xl">{project.tools.length}</p>
                <p className="text-[var(--text-soft)] text-xs tracking-wide uppercase">TOOLS</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 px-5" aria-labelledby="overview-title">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 id="overview-title" className="font-display font-bold uppercase tracking-tightest text-[var(--text)] mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                OVERVIEW
              </h2>
              <p className="text-[var(--text-soft)] leading-relaxed text-lg font-light mb-8">
                {project.description}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold uppercase tracking-wide text-[var(--text)] mb-3">TOOLS</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="px-3 py-1 text-xs bg-[var(--surface)] border border-[var(--line)] rounded-full text-[var(--text-faint)]">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold uppercase tracking-wide text-[var(--text)] mb-3">SERVICES</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Brand Identity', 'Art Direction', 'Design Systems'].map((service) => (
                      <span key={service} className="px-3 py-1 text-xs bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-full text-[var(--accent)]">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="font-display font-bold uppercase tracking-tightest text-[var(--text)] mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                THE CHALLENGE
              </h2>
              <div className="glass p-8">
                <p className="text-[var(--text-soft)] leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-5 bg-[var(--bg-soft)]" aria-labelledby="solution-title">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 id="solution-title" className="font-display font-bold uppercase tracking-tightest text-[var(--text)] mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                CREATIVE DIRECTION
              </h2>
              <div className="glass p-8">
                <p className="text-[var(--text-soft)] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="font-display font-bold uppercase tracking-tightest text-[var(--text)] mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                DESIGN PROCESS
              </h2>
              <div className="space-y-4">
                {project.process.map((step, i) => (
                  <motion.div
                    key={i}
                    className="glass p-6 group relative overflow-hidden"
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-display font-bold text-[var(--accent)] text-xl tracking-tightest shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-[var(--text-soft)] leading-relaxed">
                        {step}
                      </p>
                    </div>
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-[var(--accent)] scale-x-0 origin-left"
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-5" aria-labelledby="gallery-title">
        <div className="container-x">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 id="gallery-title" className="font-display font-bold uppercase tracking-tightest text-[var(--text)]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              VISUAL SYSTEM
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((image, i) => (
              <motion.div
                key={i}
                className="aspect-[4/3] relative overflow-hidden rounded-xl bg-[var(--bg-soft)] group"
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center text-[var(--text-faint)] font-mono text-xs tracking-[0.2em] uppercase">
                  {project.title.toUpperCase()} — {i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-5 bg-[var(--bg-soft)]" aria-labelledby="results-title">
        <div className="container-x">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 id="results-title" className="font-display font-bold uppercase tracking-tightest text-[var(--text)] mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              RESULTS
            </h2>
            <div className="glass p-8 md:p-12">
              <p className="text-[var(--text-soft)] leading-relaxed text-lg">
                {project.result}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {nextProject && (
        <section className="relative py-24 px-5" aria-labelledby="next-title">
          <div className="container-x">
            <motion.div
              className="glass p-8 md:p-12 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-2">
                    NEXT PROJECT
                  </p>
                  <h2 id="next-title" className="font-display font-bold uppercase tracking-tightest text-[var(--text)]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                    {nextProject.title}
                  </h2>
                </div>
                <Link
                  href={`/work/${nextProject.slug}`}
                  className="btn-magnetic group relative px-6 py-3 rounded-xl bg-[var(--accent)] text-white font-medium tracking-wide uppercase text-sm overflow-hidden"
                  data-cursor-label="VIEW PROJECT"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    VIEW CASE STUDY
                    <motion.span
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      →
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/10 scale-x-0 origin-left"
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </div>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-[var(--accent)] scale-x-0 origin-left group-hover:scale-x-100"
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}