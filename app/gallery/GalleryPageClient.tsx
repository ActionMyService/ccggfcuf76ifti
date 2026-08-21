'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const galleryItems = [
  { id: 1, title: 'TYPOGRAPHY STUDY 01', category: 'Typography', year: '2024', color: 'from-blue-500 to-cyan-500' },
  { id: 2, title: 'POSTER SERIES: NOISE', category: 'Poster Design', year: '2024', color: 'from-purple-500 to-pink-500' },
  { id: 3, title: 'BRAND EXPLORATION: FLUX', category: 'Brand Identity', year: '2023', color: 'from-orange-500 to-red-500' },
  { id: 4, title: 'AI GENERATIVE SERIES', category: 'AI Art Direction', year: '2024', color: 'from-green-500 to-teal-500' },
  { id: 5, title: 'EXPERIMENTAL LAYOUTS', category: 'Editorial', year: '2023', color: 'from-amber-500 to-orange-500' },
  { id: 6, title: 'MOTION TYPE SPECIMEN', category: 'Motion Graphics', year: '2024', color: 'from-indigo-500 to-purple-500' },
  { id: 7, title: 'PACKAGING CONCEPTS', category: 'Packaging', year: '2023', color: 'from-rose-500 to-pink-500' },
  { id: 8, title: 'UI EXPLORATIONS', category: 'UI Design', year: '2024', color: 'from-sky-500 to-blue-500' },
  { id: 9, title: 'ENVIRONMENTAL GRAPHICS', category: 'Environmental', year: '2023', color: 'from-emerald-500 to-teal-500' },
  { id: 10, title: 'ICON SYSTEM DESIGN', category: 'Iconography', year: '2024', color: 'from-violet-500 to-fuchsia-500' },
  { id: 11, title: 'DATA VISUALIZATION', category: 'Information Design', year: '2023', color: 'from-cyan-500 to-blue-500' },
  { id: 12, title: 'BOOK COVER SERIES', category: 'Editorial', year: '2024', color: 'from-amber-500 to-yellow-500' },
];

export default function GalleryPageClient() {
  return (
    <div className="min-h-screen">
      <section className="relative py-32 lg:py-48 px-5" aria-labelledby="gallery-hero-title">
        <div className="container-x">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-6">
              GALLERY
            </p>
            <h1 id="gallery-hero-title" className="font-display font-bold uppercase tracking-tightest text-[var(--text)]" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              CREATIVE
              <br />
              <span className="text-gradient">EXPLORATION</span>
            </h1>
            <p className="text-lg text-[var(--text-soft)] leading-relaxed font-light mt-6 max-w-2xl mx-auto">
              A curated collection of experimental work, personal studies, 
              and visual research. Not client work — pure creative inquiry.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 px-5" aria-labelledby="gallery-grid-title">
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {galleryItems.map((item, i) => (
              <motion.article
                key={item.id}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-[var(--bg-soft)] glass"
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                whileHover={{ scale: 1.02, y: -4, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${item.color.replace('from-', '').replace('to-', '')})` }} />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <p className="font-mono text-xs tracking-[0.2em] uppercase mb-2 opacity-80">
                    {item.category}
                  </p>
                  <h3 className="font-display font-bold uppercase tracking-tightest mb-2" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs tracking-[0.2em] uppercase opacity-60">
                    {item.year}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between text-white/70 z-10">
                  <span className="font-mono text-xs tracking-[0.2em] uppercase">
                    {item.category}
                  </span>
                  <span className="font-mono text-xs">
                    {item.year}
                  </span>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-px bg-white/20 scale-x-0 origin-left"
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.article>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-[var(--text-soft)] mb-6">
              This gallery updates quarterly with new experiments. 
              <br />
              <span className="font-medium text-[var(--text)]">Follow the process on Instagram.</span>
            </p>
            <a
              href="https://instagram.com/orbitalstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-magnetic inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-[var(--line)] text-[var(--text)] font-medium tracking-wide uppercase text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
              data-cursor-label="FOLLOW @ORBITALSTUDIO"
            >
              FOLLOW @ORBITALSTUDIO
              <motion.span
                className="w-5 h-5 flex items-center justify-center"
                whileHover={{ x: 4 }}
              >
                →
              </motion.span>
            </a>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 px-5 bg-[var(--bg-soft)]" aria-labelledby="process-title">
        <div className="container-x">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 id="process-title" className="font-display font-bold uppercase tracking-tightest text-[var(--text)] mb-8" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
              THE VALUE OF
              <br />
              <span className="text-gradient">PLAY</span>
            </h2>
            <p className="text-[var(--text-soft)] leading-relaxed mb-12">
              Client work demands solutions. Personal work demands questions. 
              This gallery is where I ask the questions that make the solutions better.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { title: 'RISK-FREE EXPERIMENTATION', desc: 'No brief, no budget, no stakeholder approval. Pure creative freedom.' },
                { title: 'SKILL EXPANSION', desc: 'New tools, techniques, and mediums explored without commercial pressure.' },
                { title: 'FUTURE CLIENT WORK', desc: 'Experiments often become the foundation for commissioned projects.' }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="glass p-6 group"
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <h3 className="font-bold uppercase tracking-wide text-[var(--text)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[var(--text-soft)] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                  <motion.div
                    className="mt-4 w-0 h-px bg-[var(--accent)]"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}