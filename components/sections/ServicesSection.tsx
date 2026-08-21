'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { services } from '@/lib/data';

export function ServicesSection() {
  return (
    <section className="relative py-32 lg:py-48 px-5 bg-[var(--bg-soft)]" aria-labelledby="services-title">
      <div className="container-x">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-6">
            SERVICES
          </p>
          <h2 id="services-title" className="font-display font-bold uppercase tracking-tightest text-[var(--text)]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            WHAT I
            <br />
            <span className="text-gradient">DO</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.article
              key={service.id}
              className="glass p-8 group relative overflow-hidden card-3d"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center group-hover:bg-[var(--accent)]/20 transition-colors">
                  <span className="font-display font-bold text-2xl text-[var(--accent)]">
                    {service.number}
                  </span>
                </div>
                <motion.div
                  className="w-8 h-8 rounded-xl bg-[var(--surface)] border border-[var(--line)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                >
                  →
                </motion.div>
              </div>
              
              <h3 className="font-display font-bold uppercase tracking-tightest text-[var(--text)] mb-4" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                {service.title}
              </h3>
              <p className="text-[var(--text-soft)] text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.deliverables.slice(0, 3).map((deliverable) => (
                  <span key={deliverable} className="px-3 py-1 text-xs bg-[var(--surface)] border border-[var(--line)] rounded-full text-[var(--text-faint)]">
                    {deliverable}
                  </span>
                ))}
              </div>

              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-[var(--accent)] scale-x-0 origin-left"
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}