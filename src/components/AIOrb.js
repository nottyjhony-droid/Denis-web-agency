"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';

function AnimatedOrb() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere visible args={[1, 100, 200]} scale={1.2} ref={meshRef}>
      <MeshDistortMaterial
        color="#111111"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0}
      />
    </Sphere>
  );
}

export default function AIOrb() {
  return (
    <Canvas style={{ width: '100%', height: '100%', background: 'transparent' }} camera={{ position: [0, 0, 3] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <directionalLight position={[-1, -2, -3]} intensity={0.5} color="#ec4899" />
      <AnimatedOrb />
    </Canvas>
  );
}
