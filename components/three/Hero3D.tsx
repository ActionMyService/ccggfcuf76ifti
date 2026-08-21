// @ts-nocheck
'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface Hero3DProps {
  className?: string;
}

function HeroScene() {
  const { mouse } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const posterRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Group[]>([]);
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
    
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.02;
      groupRef.current.rotation.x = Math.sin(time * 0.3) * 0.05;
    }

    if (posterRef.current) {
      const targetX = mouse.x * 0.15;
      const targetY = -mouse.y * 0.15;
      posterRef.current.rotation.y = THREE.MathUtils.lerp(posterRef.current.rotation.y, targetX, 0.05);
      posterRef.current.rotation.x = THREE.MathUtils.lerp(posterRef.current.rotation.x, targetY, 0.05);
    }

    ringsRef.current.forEach((ring, i) => {
      if (ring) {
        ring.rotation.z += delta * (0.02 + i * 0.01);
        ring.rotation.x = Math.sin(time + i) * 0.1;
      }
    });

    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.005;
      particlesRef.current.rotation.x += delta * 0.003;
    }
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 7]} intensity={1.2} castShadow />
      <directionalLight position={[-5, 5, -5]} intensity={0.5} />
      <pointLight position={[0, 3, 5]} intensity={0.8} color="#4f7cff" distance={20} decay={2} />

      <mesh ref={posterRef} position={[0, 0, 0]} castShadow receiveShadow>
        <planeGeometry args={[4, 5.6, 10, 10]} />
        <meshPhysicalMaterial
          color="#1a1a2e"
          metalness={0.1}
          roughness={0.3}
          clearcoat={0.5}
          clearcoatRoughness={0.1}
          side={2}
        />
      </mesh>

      <mesh position={[0, 0, -0.02]} scale={1.02}>
        <planeGeometry args={[4, 5.6, 10, 10]} />
        <meshBasicMaterial
          color="#0a0a0f"
          transparent
          opacity={0.3}
          side={1}
        />
      </mesh>

      {[0, 1, 2].map((i) => (
        <group key={i} ref={(el) => { ringsRef.current[i] = el as THREE.Group; }}>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -3 - i * 1.5]}>
            <ringGeometry args={[2.5, 3.5, 64]} />
            <meshBasicMaterial
              color="#4f7cff"
              transparent
              opacity={0.08 - i * 0.02}
              side={2}
              wireframe
            />
          </mesh>
        </group>
      ))}

      <points ref={particlesRef} position={[0, 0, -2]}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[new Float32Array(800 * 3), 3]} count={800} itemSize={3} />
          <bufferAttribute attach="attributes-size" args={[new Float32Array(800), 1]} count={800} itemSize={1} />
          <bufferAttribute attach="attributes-alpha" args={[new Float32Array(800), 1]} count={800} itemSize={1} />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          sizeAttenuation
          transparent
          vertexColors
          opacity={0.6}
          color="#4f7cff"
        />
      </points>

      <Html
        transform
        wrapperClass="pointer-events-none"
        style={{ transformStyle: 'preserve-3d' }}
        position={[0, 0, 2.2]}
      >
        <div className="text-center" style={{ width: '320px' }}>
          <div className="font-display font-bold uppercase tracking-tightest text-white leading-[0.95]" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', textShadow: '0 4px 32px rgba(0,0,0,0.5)' }}>
            GRAPHIC
          </div>
          <div className="font-display font-bold uppercase tracking-tightest text-white leading-[0.95]" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', textShadow: '0 4px 32px rgba(0,0,0,0.5)' }}>
            DESIGN
          </div>
        </div>
      </Html>
    </group>
  );
}

function FloatingShapes() {
  const shapesRef = useRef<THREE.Group>(null);
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
    if (prefersReducedMotion.current || !shapesRef.current) return;
    const time = state.clock.getElapsedTime();
    shapesRef.current.children.forEach((child, i) => {
      if (child instanceof THREE.Mesh) {
        child.rotation.x += delta * (0.1 + i * 0.05);
        child.rotation.y += delta * (0.07 + i * 0.03);
        child.position.y += Math.sin(time * 0.5 + i) * delta * 0.5;
      }
    });
  });

  return (
    <group ref={shapesRef} position={[-6, 2, -4]}>
      <mesh position={[-1, 0, -1]} castShadow receiveShadow>
        <icosahedronGeometry args={[0.6, 1]} />
        <meshPhysicalMaterial
          color="#4f7cff"
          metalness={0.2}
          roughness={0.3}
          clearcoat={0.8}
          clearcoatRoughness={0.1}
          transparent
          opacity={0.9}
          transmission={0.1}
          thickness={0.5}
        />
      </mesh>
      <mesh position={[1, 0, 0.5]} castShadow receiveShadow>
        <octahedronGeometry args={[0.5, 1]} />
        <meshPhysicalMaterial
          color="#1a1a2e"
          metalness={0.2}
          roughness={0.3}
          clearcoat={0.8}
          clearcoatRoughness={0.1}
          transparent
          opacity={0.9}
          transmission={0.1}
          thickness={0.5}
        />
      </mesh>
      <mesh position={[-1, 1.5, -1]} castShadow receiveShadow>
        <tetrahedronGeometry args={[0.55, 1]} />
        <meshPhysicalMaterial
          color="#4f7cff"
          metalness={0.2}
          roughness={0.3}
          clearcoat={0.8}
          clearcoatRoughness={0.1}
          transparent
          opacity={0.9}
          transmission={0.1}
          thickness={0.5}
        />
      </mesh>
      <mesh position={[1, 1.5, 0.5]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 0.5, 0.5, 2, 2, 2]} />
        <meshPhysicalMaterial
          color="#1a1a2e"
          metalness={0.2}
          roughness={0.3}
          clearcoat={0.8}
          clearcoatRoughness={0.1}
          transparent
          opacity={0.9}
          transmission={0.1}
          thickness={0.5}
        />
      </mesh>
    </group>
  );
}

export function Hero3D({ className }: Hero3DProps) {
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
      <div className={className} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="text-center">
          <div className="font-display font-bold uppercase tracking-tightest text-[var(--text)] leading-[0.95]" style={{ fontSize: 'clamp(4rem, 12vw, 12rem)' }}>
            GRAPHIC
          </div>
          <div className="font-display font-bold uppercase tracking-tightest text-[var(--text)] leading-[0.95]" style={{ fontSize: 'clamp(4rem, 12vw, 12rem)' }}>
            DESIGN
          </div>
        </div>
      </div>
    );
  }

  if (prefersReducedMotion) {
    return (
      <div className={className} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="text-center">
          <div className="font-display font-bold uppercase tracking-tightest text-[var(--text)] leading-[0.95]" style={{ fontSize: 'clamp(4rem, 12vw, 12rem)' }}>
            GRAPHIC
          </div>
          <div className="font-display font-bold uppercase tracking-tightest text-[var(--text)] leading-[0.95]" style={{ fontSize: 'clamp(4rem, 12vw, 12rem)' }}>
            DESIGN
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className} style={{ width: '100%', height: '100vh', minHeight: '100vh' }}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 45 }}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false }}
        style={{ touchAction: 'none' }}
      >
        <color attach="background" args={['#0a0a0b']} />
        <fog attach="fog" args={['#0a0a0b', 5, 35]} />
        
        <HeroScene />
        <FloatingShapes />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          enableDamping={true}
          dampingFactor={0.05}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}