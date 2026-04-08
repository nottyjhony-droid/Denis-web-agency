"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        setFormStatus('success');
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="container" style={{ paddingBottom: '6rem' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass"
        style={{ padding: '4rem', maxWidth: '800px', margin: '0 auto' }}
      >
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>Get In Touch</h2>
        <p style={{ textAlign: 'center', marginBottom: '3rem', color: '#a3a3a3' }}>
          Ready to start your next project with Dennis Albert? Drop us a message below.
        </p>
        
        {formStatus === 'success' ? (
          <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '8px', color: 'var(--accent)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Message Sent!</h3>
            <p>Thank you for reaching out. We will get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
            <input name="name" type="text" placeholder="Your Name" required className="input-field" />
            <input name="email" type="email" placeholder="Your Email" required className="input-field" />
            <textarea name="message" placeholder="Project Details" required rows="5" className="input-field" style={{ resize: 'vertical' }}></textarea>
            <button type="submit" className="btn-primary" style={{ marginTop: '1rem', width: '100%', textAlign: 'center' }} disabled={formStatus === 'sending'}>
              {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {formStatus === 'error' && <p style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>Failed to send message. Please try again.</p>}
          </form>
        )}
      </motion.div>
    </section>
  );
}
