'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Contact3D } from '@/components/three/Contact3D';
import { socialLinks } from '@/lib/data';

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus('success');
    setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
    
    setTimeout(() => setStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[70vh] min-h-[500px]" aria-labelledby="contact-hero-title">
        <div className="relative z-10 h-full">
          <Contact3D className="w-full h-full" />
        </div>

        <div className="relative z-20 absolute inset-0 flex items-center justify-center px-5">
          <div className="container-x">
            <motion.div
              className="max-w-2xl text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-[var(--accent)] mb-6">
                CONTACT
              </p>
              <h1 id="contact-hero-title" className="font-display font-bold uppercase tracking-tightest text-white mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
                READY TO BUILD
                <br />
                <span className="text-gradient">SOMETHING</span>
                <br />
                UNFORGETTABLE?
              </h1>
              <p className="text-lg text-white/70 leading-relaxed font-light">
                Selective projects only. I take on 3–4 major engagements per year. 
                Tell me about yours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-5 bg-[var(--bg)]" aria-labelledby="form-title">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 id="form-title" className="font-display font-bold uppercase tracking-tightest text-[var(--text)] mb-8" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                START A
                <br />
                PROJECT
              </h2>
              <p className="text-[var(--text-soft)] leading-relaxed mb-12">
                The more context you share, the better I can assess fit and 
                prepare for our first conversation. All inquiries are confidential.
              </p>

              <div className="space-y-6 text-[var(--text-soft)]">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--text)]">EMAIL</p>
                    <a href="mailto:hello@orbital.studio" className="hover:text-[var(--accent)] transition-colors">hello@orbital.studio</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--text)]">STUDIO</p>
                    <p>Brooklyn, NY</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--text)]">AVAILABILITY</p>
                    <p>2025 booking open — 3 slots remaining</p>
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
              <form onSubmit={handleSubmit} className="glass p-8 space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-soft)] mb-2">
                      NAME
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--line)] rounded-xl text-[var(--text)] placeholder-[var(--text-faint)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-soft)] mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--line)] rounded-xl text-[var(--text)] placeholder-[var(--text-faint)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-soft)] mb-2">
                      PROJECT TYPE
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--line)] rounded-xl text-[var(--text)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all appearance-none"
                    >
                      <option value="">Select project type</option>
                      <option value="brand-identity">Brand Identity</option>
                      <option value="packaging">Packaging Design</option>
                      <option value="campaign">Creative Campaign</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="motion">Motion Graphics</option>
                      <option value="typography">Typography</option>
                      <option value="social">Social Media Design</option>
                      <option value="ai-creative">AI Creative Design</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-soft)] mb-2">
                      BUDGET RANGE
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--line)] rounded-xl text-[var(--text)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all appearance-none"
                    >
                      <option value="">Select budget range</option>
                      <option value="25-50">$25K – $50K</option>
                      <option value="50-100">$50K – $100K</option>
                      <option value="100-250">$100K – $250K</option>
                      <option value="250+">$250K+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-xs tracking-[0.2em] uppercase text-[var(--text-soft)] mb-2">
                    PROJECT DETAILS
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--line)] rounded-xl text-[var(--text)] placeholder-[var(--text-faint)] focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all resize-none"
                    placeholder="Tell me about your challenge, timeline, goals, and anything else relevant..."
                  />
                </div>

                {status === 'success' && (
                  <motion.div
                    className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Message sent successfully. I'll respond within 24 hours.
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Something went wrong. Please try again or email directly.
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-magnetic w-full py-4 rounded-xl bg-[var(--accent)] text-white font-medium tracking-wide uppercase text-sm overflow-hidden relative disabled:opacity-50 disabled:cursor-not-allowed"
                  data-cursor-label="SEND REQUEST"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {status === 'submitting' ? (
                      <>
                        <motion.span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        SENDING...
                      </>
                    ) : (
                      'SEND PROJECT REQUEST'
                    )}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/10 scale-x-0 origin-left"
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-5 bg-[var(--bg-soft)]" aria-labelledby="connect-title">
        <div className="container-x">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 id="connect-title" className="font-display font-bold uppercase tracking-tightest text-[var(--text)] mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              OR CONNECT
              <br />
              DIRECTLY
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magnetic group flex items-center gap-2 px-5 py-3 rounded-xl border border-[var(--line)] text-[var(--text-soft)] font-mono text-xs tracking-[0.2em] uppercase hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
                  data-cursor-label={social.name.toUpperCase()}
                >
                  <span className="w-4 h-4 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center group-hover:bg-[var(--accent)]/20 transition-colors" />
                  {social.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}