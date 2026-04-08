"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const [user, setUser] = useState('');
  const router = useRouter();

  useEffect(() => {
    const session = localStorage.getItem('da_session');
    if (!session) {
      router.push('/login');
    } else {
      setUser(session);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('da_session');
    router.push('/');
  }

  if (!user) return null;

  return (
    <main style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '4rem' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}
        >
          <div>
            <h1 style={{ fontSize: '2.5rem' }}>Welcome, Client</h1>
            <p style={{ color: 'var(--accent)' }}>{user}</p>
          </div>
          <button onClick={handleLogout} className="btn-primary" style={{ background: 'transparent', border: '1px solid var(--surface-border)' }}>
            Logout
          </button>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <motion.div className="glass" style={{ padding: '2rem' }}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#a3a3a3' }}>Active Project</h3>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Website Redesign</p>
            <div style={{ marginTop: '1rem', background: 'var(--surface-border)', height: '8px', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: '65%', height: '100%', background: 'var(--accent)' }}></div>
            </div>
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#a3a3a3' }}>65% Complete</p>
          </motion.div>

          <motion.div className="glass" style={{ padding: '2rem' }}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#a3a3a3' }}>Recent Invoices</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span>INV-2026-001 (Paid)</span>
                <span>$2,500</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>INV-2026-002 (Pending)</span>
                <span style={{ color: 'var(--accent)' }}>$1,200</span>
              </li>
            </ul>
          </motion.div>

          <motion.div className="glass" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Need Support?</h3>
            <p style={{ color: '#a3a3a3', marginBottom: '1rem' }}>Dennis Albert team is available 24/7 for you.</p>
            <button className="btn-primary" style={{ width: '100%' }}>Open Ticket</button>
          </motion.div>
        </div>
        
        <div style={{ marginTop: '3rem', textAlign: 'center', color: '#a3a3a3', fontSize: '0.9rem' }}>
           *This is a Demo Dashboard. Real features will connect to Supabase DB upon key provision.
        </div>
      </div>
    </main>
  );
}
