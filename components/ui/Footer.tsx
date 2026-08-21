'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { socialLinks, navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Footer() {
  return (
    <footer className="relative py-16 lg:py-24 px-5 border-t border-[var(--line)]" role="contentinfo">
      <div className="container-x">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="font-display font-bold text-xl tracking-tightest flex items-center gap-2 mb-6" aria-label="Orbital Studio Home">
              <span className="relative w-8 h-8 flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-full h-full text-[var(--accent)]">
                  <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="16" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="16" cy="16" r="2" fill="currentColor" />
                </svg>
              </span>
              ORBITAL
            </Link>
            <p className="text-[var(--text-soft)] text-sm leading-relaxed max-w-xs">
              A creative studio crafting brand identities, digital experiences, 
              and visual systems that move culture forward.
            </p>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            aria-label="Footer navigation"
          >
            <h4 className="font-bold uppercase tracking-wide text-[var(--text)] mb-4">NAVIGATE</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[var(--text-soft)] hover:text-[var(--accent)] transition-colors text-sm tracking-wide uppercase"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold uppercase tracking-wide text-[var(--text)] mb-4">CONNECT</h4>
            <ul className="space-y-3">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[var(--text-soft)] hover:text-[var(--accent)] transition-colors text-sm tracking-wide uppercase group"
                    aria-label={social.name}
                  >
                    <span className="w-5 h-5 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center group-hover:bg-[var(--accent)]/20 transition-colors" />
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold uppercase tracking-wide text-[var(--text)] mb-4">STUDIO</h4>
            <address className="not-italic text-[var(--text-soft)] text-sm leading-relaxed space-y-2">
              <p>Orbital Studio</p>
              <p>Brooklyn, NY</p>
              <p>hello@orbital.studio</p>
              <p className="font-mono text-xs tracking-[0.2em] uppercase mt-4">
                Selective availability — 2025 booking open
              </p>
            </address>
          </motion.div>
        </div>

        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-8 border-t border-[var(--line)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-[var(--text-faint)] text-sm font-mono">
            © {new Date().getFullYear()} Orbital Studio. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-[var(--text-faint)] text-sm">
            <a href="/privacy" className="hover:text-[var(--accent)] transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-[var(--accent)] transition-colors">Terms</a>
            <a href="/accessibility" className="hover:text-[var(--accent)] transition-colors">Accessibility</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}