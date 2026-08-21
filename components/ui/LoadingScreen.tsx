'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [shouldUnmount, setShouldUnmount] = useState(false);

  useEffect(() => {
    let progressValue = 0;
    const interval = setInterval(() => {
      progressValue += Math.random() * 15 + 5;
      if (progressValue >= 100) {
        progressValue = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(() => setShouldUnmount(true), 800);
        }, 300);
      }
      setProgress(Math.min(progressValue, 100));
    }, 120);

    return () => clearInterval(interval);
  }, []);

  if (shouldUnmount) return null;

  return (
    <motion.div
      className={cn(
        'fixed inset-0 z-[10000] flex items-center justify-center',
        'bg-[var(--bg)] transition-opacity duration-700'
      )}
      initial={{ opacity: 1 }}
      animate={{ opacity: isComplete ? 0 : 1 }}
      exit={{ opacity: 0 }}
      style={{ pointerEvents: isComplete ? 'none' : 'auto' }}
    >
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="hero-3d-typo" style={{ perspective: '1000px' }}>
          <motion.div
            className="font-display uppercase tracking-[-0.04em] leading-[0.95]"
            style={{ fontSize: 'clamp(4rem, 18vw, 14rem)' }}
            initial={{ rotateX: 90, opacity: 0, filter: 'blur(20px)' }}
            animate={{ rotateX: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            GRAPHIC
          </motion.div>
          <motion.div
            className="font-display uppercase tracking-[-0.04em] leading-[0.95]"
            style={{ fontSize: 'clamp(4rem, 18vw, 14rem)' }}
            initial={{ rotateX: -90, opacity: 0, filter: 'blur(20px)' }}
            animate={{ rotateX: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          >
            DESIGN
          </motion.div>
        </div>

        <motion.div
          className="relative w-[300px] max-w-[80vw]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="relative h-1.5 bg-[var(--line)] rounded-full overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full bg-[var(--accent)]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          </div>
          <motion.div
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs font-mono tabular-nums text-[var(--text-faint)]"
          >
            {progress.toFixed(0)}%
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-center gap-3 text-xs text-[var(--text-faint)] font-mono tracking-[0.2em] uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <span className="relative h-1 w-1 rounded-full bg-[var(--accent)] animate-pulse" />
          <span>INITIALIZING 3D ENGINE</span>
          <span className="relative h-1 w-1 rounded-full bg-[var(--accent)] animate-pulse" style={{ animationDelay: '0.3s' }} />
          <span>LOADING ASSETS</span>
          <span className="relative h-1 w-1 rounded-full bg-[var(--accent)] animate-pulse" style={{ animationDelay: '0.6s' }} />
          <span>CALIBRATING</span>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs text-[var(--text-faint)] font-mono"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <kbd className="px-2 py-1 bg-[var(--surface)] border border-[var(--line)] rounded">P</kbd>
        <span>PREFERS REDUCED MOTION</span>
        <kbd className="px-2 py-1 bg-[var(--surface)] border border-[var(--line)] rounded">D</kbd>
        <span>DISABLE 3D</span>
      </motion.div>
    </motion.div>
  );
}