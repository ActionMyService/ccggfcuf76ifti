'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function ServicesPageClient() {
  return (
    <div className="min-h-screen">
      <section className="relative py-32 lg:py-48 px-5" aria-labelledby="services-hero-title">
        <div className="container-x">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-6">
              SERVICES
            </p>
            <h1 id="services-hero-title" className="font-display font-bold uppercase tracking-tightest text-[var(--text)]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              WHAT I
              <br />
              <span className="text-gradient">DO</span>
            </h1>
            <p className="text-lg text-[var(--text-soft)] leading-relaxed font-light mt-6 max-w-2xl mx-auto">
              End-to-end design capabilities. From strategy to production. 
              Every engagement is tailored — no packages, no templates.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 px-5 bg-[var(--bg-soft)]" aria-labelledby="services-list-title">
        <div className="container-x">
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
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.deliverables.slice(0, 4).map((deliverable) => (
                    <span key={deliverable} className="px-3 py-1 text-xs bg-[var(--surface)] border border-[var(--line)] rounded-full text-[var(--text-faint)]">
                      {deliverable}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-[var(--line)]">
                  <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-faint)] mb-2">TOOLS</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.slice(0, 4).map((tool) => (
                      <span key={tool} className="px-3 py-1 text-xs bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-full text-[var(--accent)]">
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
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-5" aria-labelledby="engagement-title">
        <div className="container-x">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 id="engagement-title" className="font-display font-bold uppercase tracking-tightest text-[var(--text)] mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              HOW WE
              <br />
              <span className="text-gradient">ENGAGE</span>
            </h2>
            <p className="text-[var(--text-soft)] leading-relaxed mb-12">
              No retainers. No templates. Every project is a custom engagement 
              scoped to your specific challenge and ambition.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                { title: 'PROJECT-BASED', desc: 'Fixed scope, fixed fee. Clear deliverables, timeline, and success metrics. Ideal for brand identity, packaging, campaigns.' },
                { title: 'STRATEGIC RETAINER', desc: 'Ongoing partnership. Priority access, embedded team model, continuous design system evolution. For scaling brands.' },
                { title: 'CREATIVE DIRECTION', desc: 'High-level oversight. Brand stewardship, agency management, design quality assurance. For in-house teams.' }
              ].map((model, i) => (
                <motion.div
                  key={model.title}
                  className="glass p-6 text-left group"
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <h3 className="font-display font-bold uppercase tracking-tightest text-[var(--text)] mb-3" style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
                    {model.title}
                  </h3>
                  <p className="text-[var(--text-soft)] text-sm leading-relaxed">
                    {model.desc}
                  </p>
                  <motion.div
                    className="mt-4 w-0 h-px bg-[var(--accent)]"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>

            <a
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
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}