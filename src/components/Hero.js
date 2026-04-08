"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section style={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative', padding: 0 }}>
      <div className="container" style={{ zIndex: 10, position: 'relative', display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ flex: 1 }}
        >
          <h1 style={{ fontSize: '4rem', marginBottom: '1rem', lineHeight: 1.1 }}>
            Build Your Digital <br/><span style={{ color: 'var(--accent)' }}>Masterpiece</span>
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px' }}>
            Hi, I'm Dennis Albert. We specialize in premium, realistic 3D and dynamic web experiences. Looking for top-tier website development near me? You've found the right team.
          </p>
          <a href="#contact" className="btn-primary">Start Your Project</a>
        </motion.div>
      </div>
      
      <div style={{ position: 'absolute', top: 0, right: 0, width: '55%', height: '100%', zIndex: 1 }}>
        <Canvas>
          <ambientLight intensity={0.8} />
          <directionalLight position={[3, 2, 1]} intensity={2} />
          <Sphere visible args={[1, 100, 200]} scale={2.5}>
            <MeshDistortMaterial 
              color="#3b82f6" 
              attach="material" 
              distort={0.5} 
              speed={1.5} 
              roughness={0.2}
              metalness={0.8}
            />
          </Sphere>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>
    </section>
  );
}
