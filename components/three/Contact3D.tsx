// @ts-nocheck
'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

export function Contact3D({ className }: { className?: string }) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (!mounted) {
    return (
      <div className={className} style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="text-center">
          <div className="font-display font-bold uppercase tracking-tightest text-[var(--text)] leading-[0.95]" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
            LET'S CREATE
          </div>
          <div className="font-display font-bold uppercase tracking-tightest text-[var(--text)] leading-[0.95]" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
            SOMETHING
          </div>
          <div className="font-display font-bold uppercase tracking-tightest text-[var(--text)] leading-[0.95]" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
            ICONIC.
          </div>
        </div>
      </div>
    );
  }

  if (prefersReducedMotion) {
    return (
      <div className={className} style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="text-center">
          <div className="font-display font-bold uppercase tracking-tightest text-[var(--text)] leading-[0.95]" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
            LET'S CREATE
          </div>
          <div className="font-display font-bold uppercase tracking-tightest text-[var(--text)] leading-[0.95]" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
            SOMETHING
          </div>
          <div className="font-display font-bold uppercase tracking-tightest text-[var(--text)] leading-[0.95]" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
            ICONIC.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className} style={{ width: '100%', height: '60vh', minHeight: '400px' }}>
      <Canvas
        camera={{ position: [0, 0, 15], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ touchAction: 'none' }}
      >
        {/* @ts-ignore - JSX intrinsic elements for Three.js */}
        <color attach="background" args={['#0a0a0b']} />
        {/* @ts-ignore - JSX intrinsic elements for Three.js */}
        <fog attach="fog" args={['#0a0a0b', 10, 40]} />
        
        <ContactScene />
        
        <Html
          transform
          wrapperClass="pointer-events-none"
          position={[0, 0, 3]}
        >
          <div className="text-center" style={{ width: '400px' }}>
            <div className="font-display font-bold uppercase tracking-tightest text-white leading-[0.95]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', textShadow: '0 4px 32px rgba(0,0,0,0.5)' }}>
              LET'S CREATE
            </div>
            <div className="font-display font-bold uppercase tracking-tightest text-white leading-[0.95]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', textShadow: '0 4px 32px rgba(0,0,0,0.5)' }}>
              SOMETHING
            </div>
            <div className="font-display font-bold uppercase tracking-tightest text-white leading-[0.95]" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', textShadow: '0 4px 32px rgba(0,0,0,0.5)' }}>
              ICONIC.
            </div>
          </div>
        </Html>
      </Canvas>
    </div>
  );
}

function ContactScene() {
  const torusRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
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

  useFrame((state, delta) => {
    if (prefersReducedMotion.current) return;
    const time = state.clock.getElapsedTime();
    
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.1;
      torusRef.current.rotation.y += delta * 0.05;
    }
    
    if (sphereRef.current) {
      sphereRef.current.rotation.y += delta * 0.03;
      sphereRef.current.position.y = Math.sin(time * 0.5) * 0.3;
    }
    
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.002;
      particlesRef.current.rotation.x += delta * 0.001;
    }
  });

  // @ts-ignore - JSX intrinsic elements for Three.js
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 7]} intensity={1} castShadow />
      <pointLight position={[0, 5, 5]} intensity={1} color="#4f7cff" distance={30} decay={2} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#ff6b4f" distance={30} decay={2} />

      <mesh ref={torusRef} position={[-3, 0, -2]} castShadow receiveShadow>
        <torusGeometry args={[1.5, 0.4, 16, 32]} />
        <meshPhysicalMaterial
          color="#4f7cff"
          metalness={0.3}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={0.3}
          thickness={0.5}
        />
      </mesh>
      <mesh ref={sphereRef} position={[3, 0, -1]} castShadow receiveShadow>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhysicalMaterial
          color="#1a1a2e"
          metalness={0.1}
          roughness={0.3}
          clearcoat={1}
          clearcoatRoughness={0.1}
          transmission={0.5}
          thickness={1}
          ior={1.5}
        />
      </mesh>
      <points ref={particlesRef} position={[0, 0, -5]}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[new Float32Array(1000 * 3), 3]} count={1000} itemSize={3} />
          <bufferAttribute attach="attributes-size" args={[new Float32Array(1000), 1]} count={1000} itemSize={1} />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          sizeAttenuation
          transparent
          opacity={0.4}
          color="#4f7cff"
        />
      </points>
    </>
  );
}