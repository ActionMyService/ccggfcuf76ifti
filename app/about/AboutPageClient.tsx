'use client';

import { motion } from 'framer-motion';
import { stats, processSteps, skills } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function AboutPageClient() {
  return (
    <div className="min-h-screen">
      <section className="relative py-32 lg:py-48 px-5" aria-labelledby="about-hero-title">
        <div className="container-x">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-6">
              ABOUT
            </p>
            <h1 id="about-hero-title" className="font-display font-bold uppercase tracking-tightest text-[var(--text)] mb-8" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              DESIGN IS NOT
              <br />
              <span className="text-gradient">DECORATION.</span>
              <br />
              IT IS
              <br />
              COMMUNICATION.
            </h1>
            <p className="text-lg text-[var(--text-soft)] leading-relaxed font-light max-w-2xl mx-auto">
              Orbital Studio is a creative practice founded on the belief that 
              design solves problems. We build brand identities, digital experiences, 
              and visual systems that communicate with clarity and move culture forward.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 px-5 bg-[var(--bg-soft)]" aria-labelledby="stats-title">
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="glass p-8 text-center group"
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <p className="font-display font-bold text-[var(--text)] mb-2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                  {stat.value}
                </p>
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-soft)]">
                  {stat.label}
                </p>
                <motion.div
                  className="mx-auto mt-6 w-px h-0 bg-[var(--accent)]"
                  whileHover={{ height: 40 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-5" aria-labelledby="philosophy-title">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 id="philosophy-title" className="font-display font-bold uppercase tracking-tightest text-[var(--text)] mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                PHILOSOPHY
              </h2>
              <div className="space-y-6 text-[var(--text-soft)] leading-relaxed">
                <p className="text-lg font-light">
                  Most studios sell aesthetics. We sell outcomes.
                </p>
                <p>
                  Every project begins with a question: what change are we designing for? 
                  The answer shapes everything — strategy, visual language, motion behavior, 
                  technical architecture. We don't decorate problems. We solve them.
                </p>
                <p>
                  Our work lives at the intersection of brand strategy, systems thinking, 
                  and craft obsession. A logo is not a mark — it's a variable in a system. 
                  A website is not pages — it's a conversation. A package is not a box — 
                  it's a moment of truth between brand and human.
                </p>
                <p className="font-medium text-[var(--text)]">
                  Strategy made visible. Craft pushed to its edge.
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
                APPROACH
              </h2>
              <div className="space-y-4">
                {[
                  'Research before rendering',
                  'Systems over assets',
                  'Motion as meaning',
                  'Accessibility as default',
                  'Code as craft',
                  'Long-term partnership'
                ].map((principle, i) => (
                  <motion.div
                    key={i}
                    className="glass p-6 group relative overflow-hidden flex items-center gap-4"
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <span className="font-display font-bold text-[var(--accent)] text-2xl tracking-tightest shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-[var(--text-soft)] leading-relaxed">
                      {principle}
                    </p>
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

      <section className="relative py-24 px-5 bg-[var(--bg-soft)]" aria-labelledby="process-title">
        <div className="container-x">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-4">
              PROCESS
            </p>
            <h2 id="process-title" className="font-display font-bold uppercase tracking-tightest text-[var(--text)]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              FROM IDEA
              <br />
              TO IMPACT
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[var(--line)]" />
            
            <div className="space-y-12">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="relative flex lg:flex-row flex-col items-center gap-8"
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 flex-shrink-0 z-10">
                    <span className="font-display font-bold text-[var(--accent)] text-xl">
                      {step.number}
                    </span>
                  </div>
                  
                  <div className={`glass p-6 w-full lg:w-1/2 ${i % 2 === 0 ? 'lg:mr-auto text-right' : 'lg:ml-auto'}`}>
                    <h3 className="font-display font-bold uppercase tracking-tightest text-[var(--text)] mb-2" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
                      {step.title}
                    </h3>
                    <p className="text-[var(--text-soft)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-5" aria-labelledby="skills-title">
        <div className="container-x">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-4">
              EXPERTISE
            </p>
            <h2 id="skills-title" className="font-display font-bold uppercase tracking-tightest text-[var(--text)]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              TOOLS OF
              <br />
              THE CRAFT
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.id}
                className="glass p-4 group relative overflow-hidden"
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-[var(--text)] text-sm">{skill.name}</span>
                  <span className="font-mono text-xs text-[var(--accent)]">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-[var(--surface)] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[var(--accent)] rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: skill.level / 100 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 1, delay: i * 0.05 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-[var(--accent)] scale-x-0 origin-left"
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-5 bg-[var(--bg-soft)]" aria-labelledby="cta-title">
        <div className="container-x">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 id="cta-title" className="font-display font-bold uppercase tracking-tightest text-[var(--text)] mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              READY TO START?
            </h2>
            <p className="text-[var(--text-soft)] leading-relaxed mb-8">
              Selective availability for 2025. Let's discuss your project.
            </p>
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