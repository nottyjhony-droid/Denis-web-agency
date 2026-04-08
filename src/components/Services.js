"use client";

import { motion } from 'framer-motion';
import { Code, Layout, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: <Layout size={40} color="var(--accent)" />,
    title: 'UI/UX Design',
    description: 'We craft beautiful, modern interfaces using principles like Glassmorphism and dark mode to wow your users.'
  },
  {
    icon: <Code size={40} color="var(--accent)" />,
    title: '3D Web Development',
    description: 'Interactive and realistic 3D elements using Three.js and Framer Motion that bring your website to life.'
  },
  {
    icon: <TrendingUp size={40} color="var(--accent)" />,
    title: 'SEO Optimization',
    description: 'Dominate search results. When clients search for website development near me, your brand will appear prominently.'
  }
];

export default function Services() {
  return (
    <section id="services" className="container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>Our Services</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {services.map((svc, idx) => (
            <motion.div 
              key={idx}
              className="glass"
              style={{ padding: '2rem', textAlign: 'center' }}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                {svc.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{svc.title}</h3>
              <p>{svc.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
