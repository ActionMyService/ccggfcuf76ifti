'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/data';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.classList.toggle('dark', initial === 'dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'py-4 bg-[var(--surface-strong)]/80 backdrop-blur-xl border-b border-[var(--line)] shadow-[var(--shadow)]'
            : 'py-6 bg-transparent'
        )}
        role="banner"
      >
        <nav className="container-x flex items-center justify-between" aria-label="Main navigation">
          <Link
            href="/"
            className="font-display font-bold text-xl tracking-tightest flex items-center gap-2"
            aria-label="Orbital Studio Home"
          >
            <span className="relative w-8 h-8 flex items-center justify-center">
              <motion.svg
                viewBox="0 0 32 32"
                className="w-full h-full text-[var(--accent)]"
                animate={{ rotate: [0, 0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="16" cy="16" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="16" cy="16" r="2" fill="currentColor" />
              </motion.svg>
            </span>
            ORBITAL
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative text-sm font-medium tracking-wide uppercase transition-colors',
                  'hover:text-[var(--accent)]',
                  pathname === link.href ? 'text-[var(--accent)]' : 'text-[var(--text-soft)]'
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    className="absolute bottom-[-6px] left-0 right-0 h-0.5 bg-[var(--accent)] rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="relative p-2 rounded-xl bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] transition-all"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              aria-pressed={theme === 'dark'}
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, scale: 0, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 90, scale: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="w-5 h-5 text-[var(--text)]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, scale: 0, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    exit={{ rotate: 90, scale: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="w-5 h-5 text-[var(--text)]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 rounded-xl bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] transition-all"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="w-5 h-5 text-[var(--text)]" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[60] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <motion.div
              className="absolute inset-0 bg-[var(--bg)]/98 backdrop-blur-xl"
              initial={{ scale: 1.02 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
            <div className="relative z-10 flex h-full flex-col items-center justify-center gap-8 px-6 text-center">
              <button
                onClick={() => setMobileOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-[var(--surface)] border border-[var(--line)] hover:border-[var(--accent)] transition-all"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-[var(--text)]" />
              </button>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="font-display font-bold uppercase tracking-tightest"
                style={{ fontSize: 'clamp(3rem, 12vw, 6rem)' }}
              >
                MENU
              </motion.div>

              <nav className="flex flex-col items-center gap-6" aria-label="Mobile navigation">
                {navLinks.map((link, i) => (
                  <motion.link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'font-display font-medium uppercase tracking-tight',
                      'hover:text-[var(--accent)] transition-colors',
                      pathname === link.href ? 'text-[var(--accent)]' : 'text-[var(--text)]'
                    )}
                    style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
                  >
                    {link.label}
                  </motion.link>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="flex items-center gap-6 text-[var(--text-soft)]"
              >
                <a
                  href="https://instagram.com/orbitalstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors"
                  aria-label="Instagram"
                >
                  <Sparkles className="w-6 h-6" />
                </a>
                <a
                  href="https://behance.net/orbitalstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors"
                  aria-label="Behance"
                >
                  <Sparkles className="w-6 h-6" />
                </a>
                <a
                  href="https://dribbble.com/orbitalstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors"
                  aria-label="Dribbble"
                >
                  <Sparkles className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/company/orbitalstudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--accent)] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Sparkles className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}