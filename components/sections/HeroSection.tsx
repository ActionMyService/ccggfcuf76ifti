'use client';

import { motion } from 'framer-motion';
import { Hero3D } from '@/components/three/Hero3D';
import { cn } from '@/lib/utils';

export function HeroSection() {
  return (
    <section className="relative min-h-screen" aria-labelledby="hero-title">
      <Hero3D className="absolute inset-0 z-0" />
      
      <div className="relative z-10 flex h-screen flex-col items-center justify-center px-5">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-6">
            ORBITAL STUDIO
          </p>
          
          <h1 id="hero-title" className="font-display font-bold uppercase tracking-tightest leading-[0.9] text-[var(--text)] mb-8" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}>
            I CREATE
            <br />
            <span className="text-gradient">VISUAL</span>
            <br />
            IMPACT.
          </h1>
          
          <p className="text-lg text-[var(--text-soft)] max-w-xl mx-auto mb-12 font-light leading-relaxed">
            A creative studio crafting brand identities, digital experiences, 
            and visual systems that move culture forward.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="/work"
              className="btn-magnetic group relative px-8 py-4 rounded-xl bg-[var(--accent)] text-white font-medium tracking-wide uppercase text-sm overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-cursor-label="VIEW WORK"
            >
              <span className="relative z-10">VIEW PORTFOLIO</span>
              <motion.div
                className="absolute inset-0 bg-white/10 scale-x-0 origin-left"
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            
            <motion.a
              href="/contact"
              className="btn-magnetic group relative px-8 py-4 rounded-xl border-2 border-[var(--line)] text-[var(--text)] font-medium tracking-wide uppercase text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-cursor-label="START PROJECT"
            >
              START A PROJECT
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[var(--text-faint)] font-mono text-xs"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <motion.div
            className="w-px h-20 bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent animate-pulse"
          />
          <span className="tracking-[0.2em] uppercase">SCROLL</span>
        </motion.div>
      </div>
    </section>
  );
}