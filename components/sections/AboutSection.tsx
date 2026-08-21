'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { stats, processSteps } from '@/lib/data';

export function AboutSection() {
  return (
    <section className="relative py-32 lg:py-48 px-5" aria-labelledby="about-title">
      <div className="container-x">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-6">
            ABOUT
          </p>
          <h2 id="about-title" className="font-display font-bold uppercase tracking-tightest text-[var(--text)] mb-8" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            DESIGN IS NOT
            <br />
            <span className="text-gradient">DECORATION.</span>
            <br />
            IT IS COMMUNICATION.
          </h2>
          <p className="text-lg text-[var(--text-soft)] leading-relaxed font-light">
            Every pixel serves a purpose. Every interaction tells a story. 
            I build visual systems that clarify, persuade, and endure — 
            not just decorate.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="glass p-8 text-center group"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="font-display font-bold text-[var(--text)] mb-2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                {stat.value}
              </div>
              <div className="text-sm text-[var(--text-soft)] tracking-wide uppercase font-medium">
                {stat.label}
              </div>
              <motion.div
                className="w-full h-px bg-[var(--line)] mt-6 overflow-hidden"
                whileHover={{ scaleX: 1 }}
                initial={{ scaleX: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="h-full bg-[var(--accent)]" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display font-bold uppercase tracking-tightest text-[var(--text)] mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              CREATIVE PHILOSOPHY
            </h3>
            <div className="space-y-6 text-[var(--text-soft)] leading-relaxed">
              <p>
                I believe the best design is invisible — it gets out of the way 
                and lets the message breathe. My process starts with listening, 
                not drawing. Strategy before aesthetics. Systems before assets.
              </p>
              <p>
                Over 8 years, I've shaped identities for climate tech startups, 
                luxury spirits brands, global energy campaigns, and healthcare 
                platforms. The common thread? Clarity of purpose expressed 
                through exceptional craft.
              </p>
              <p>
                I don't just deliver files. I deliver thinking made visible — 
                design systems that scale, motion languages that guide, 
                brands that behave consistently across every touchpoint.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-display font-bold uppercase tracking-tightest text-[var(--text)] mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              PROCESS
            </h3>
            <div className="space-y-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="glass p-6 group relative overflow-hidden"
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="flex items-start gap-4">
                    <span className="font-display font-bold text-[var(--accent)] text-2xl tracking-tightest shrink-0">
                      {step.number}
                    </span>
                    <div>
                      <h4 className="font-bold text-[var(--text)] mb-2 tracking-wide uppercase">
                        {step.title}
                      </h4>
                      <p className="text-[var(--text-soft)] text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
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
  );
}