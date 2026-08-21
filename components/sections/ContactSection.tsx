'use client';

import { motion } from 'framer-motion';
import { Contact3D } from '@/components/three/Contact3D';
import { socialLinks } from '@/lib/data';

export function ContactSection() {
  return (
    <section className="relative min-h-[80vh]" aria-labelledby="contact-title">
      <div className="relative z-10 h-[60vh] min-h-[400px]">
        <Contact3D className="w-full h-full" />
      </div>

      <div className="relative z-20 -mt-20 lg:-mt-32 px-5 pb-20">
        <div className="container-x">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-6">
              CONTACT
            </p>
            <h2 id="contact-title" className="font-display font-bold uppercase tracking-tightest text-[var(--text)] mb-8" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              READY TO BUILD
              <br />
              <span className="text-gradient">SOMETHING</span>
              <br />
              UNFORGETTABLE?
            </h2>
            <p className="text-lg text-[var(--text-soft)] leading-relaxed font-light mb-12">
              Select projects only. I take on 3–4 major engagements per year. 
              Tell me about yours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="/contact"
                className="btn-magnetic group relative px-8 py-4 rounded-xl bg-[var(--accent)] text-white font-medium tracking-wide uppercase text-sm overflow-hidden"
                data-cursor-label="START PROJECT"
              >
                <span className="relative z-10">START A PROJECT</span>
                <motion.div
                  className="absolute inset-0 bg-white/10 scale-x-0 origin-left"
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
              
              <a
                href="/work"
                className="btn-magnetic group relative px-8 py-4 rounded-xl border-2 border-[var(--line)] text-[var(--text)] font-medium tracking-wide uppercase text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
                data-cursor-label="VIEW WORK"
              >
                VIEW MY WORK
              </a>
            </div>

            <div className="flex items-center justify-center gap-8 text-[var(--text-soft)] font-mono text-xs tracking-[0.2em] uppercase">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <span className="w-5 h-5" />
                  {social.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}