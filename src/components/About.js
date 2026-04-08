"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="container" style={{ position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>About Dennis Albert</h2>
        <div className="glass" style={{ padding: '3rem', gap: '3rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent)' }}>Mastering the Digital Space</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
              We are a team spearheaded by Dennis Albert, obsessed with pushing the boundaries of what is possible on the web. By leveraging modern frameworks, 3D libraries, and responsive designs, we make sure your brand stands out.
            </p>
            <p style={{ fontSize: '1.1rem' }}>
              Whenever you look for "website development near me," you aren't just looking for a coder. You are looking for a visionary partner.
            </p>
          </div>
          <div style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '100%', height: '300px', background: 'url("https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80") center/cover', borderRadius: '16px' }} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
