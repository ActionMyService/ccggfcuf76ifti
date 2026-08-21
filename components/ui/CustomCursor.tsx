'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface CursorState {
  x: number;
  y: number;
  scale: number;
  label: string;
  visible: boolean;
  isHovering: boolean;
  isClicking: boolean;
}

export function CustomCursor() {
  const [state, setState] = useState<CursorState>({
    x: 0,
    y: 0,
    scale: 1,
    label: '',
    visible: false,
    isHovering: false,
    isClicking: false
  });

  const rafRef = useRef<number | null>(null);
  const targetRef = useRef<CursorState>({ ...state });
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.current = mediaQuery.matches;

    const handleChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
      if (!state.visible) {
        setState((s) => ({ ...s, visible: true }));
      }
    };

    const handleMouseDown = () => {
      targetRef.current.isClicking = true;
      targetRef.current.scale = 0.8;
    };

    const handleMouseUp = () => {
      targetRef.current.isClicking = false;
      targetRef.current.scale = state.isHovering ? 1.5 : 1;
    };

    const handleMouseLeave = () => {
      setState((s) => ({ ...s, visible: false }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [state.visible, state.isHovering]);

  useEffect(() => {
    if (prefersReducedMotion.current) {
      setState((s) => ({ ...s, x: targetRef.current.x, y: targetRef.current.y, scale: targetRef.current.scale }));
      return;
    }

    const tick = () => {
      const current = state;
      const target = targetRef.current;

      const newX = lerp(current.x, target.x, 0.18);
      const newY = lerp(current.y, target.y, 0.18);
      const newScale = lerp(current.scale, target.scale, 0.22);

      setState((s) => ({ ...s, x: newX, y: newY, scale: newScale }));

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [state.x, state.y, state.scale]);

  useEffect(() => {
    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a, button, [data-cursor-hover], .project-card, .service-card, .btn-magnetic');
      
      if (link) {
        const label = link.getAttribute('data-cursor-label') || '';
        targetRef.current.isHovering = true;
        targetRef.current.scale = 1.5;
        targetRef.current.label = label;
      }
    };

    const handleLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a, button, [data-cursor-hover], .project-card, .service-card, .btn-magnetic');
      
      if (link) {
        targetRef.current.isHovering = false;
        targetRef.current.scale = 1;
        targetRef.current.label = '';
      }
    };

    document.addEventListener('mouseover', handleHover);
    document.addEventListener('mouseout', handleLeave);

    return () => {
      document.removeEventListener('mouseover', handleHover);
      document.removeEventListener('mouseout', handleLeave);
    };
  }, []);

  if (!state.visible || prefersReducedMotion.current) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference select-none"
      style={{
        transform: `translate(${state.x}px, ${state.y}px) translate(-50%, -50%) scale(${state.scale})`,
        willChange: 'transform'
      }}
      animate={{ rotate: state.isClicking ? 45 : 0 }}
      transition={{ duration: 0.15 }}
    >
      <div className="relative w-6 h-6">
        <div
          className="absolute inset-0 border border-current rounded-full transition-opacity duration-200"
          style={{ opacity: state.isHovering ? 0 : 1 }}
        />
        <div
          className="absolute inset-0 bg-current rounded-full transition-all duration-200"
          style={{
            opacity: state.isHovering ? 1 : 0,
            transform: `scale(${state.isHovering ? 1 : 0})`
          }}
        />
        {state.label && state.isHovering && (
          <motion.span
            className="absolute left-full top-1/2 -translate-y-1/2 ml-3 whitespace-nowrap text-xs font-medium tracking-wide"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
          >
            {state.label}
          </motion.span>
        )}
      </div>
    </motion.div>
  );
}

function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}