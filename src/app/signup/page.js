"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();
    if(name && email && password) {
      // MOCK DB save for Demo until Supabase key provided
      localStorage.setItem('da_user_email', email);
      localStorage.setItem('da_user_password', password);
      localStorage.setItem('da_session', email);
      router.push('/dashboard');
    }
  }

  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fafafa' }}>
      <div className="glass" style={{ padding: '3rem', width: '100%', maxWidth: '400px', textAlign: 'center', background: '#fff' }}>
        <h1 className="serif" style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Start Project</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Create your client account</p>
        
        <form onSubmit={handleSignup} style={{ textAlign: 'left' }}>
          <label style={{ fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.5rem', display: 'block' }}>Full Name</label>
          <input 
            type="text" 
            placeholder="John Doe" 
            className="input-field" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
          <label style={{ fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.5rem', display: 'block' }}>Email Address</label>
          <input 
            type="email" 
            placeholder="john@example.com" 
            className="input-field" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
          <label style={{ fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.5rem', display: 'block' }}>Password</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            className="input-field" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}>Create Account</button>
        </form>
        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Already have an account? <a href="/login" style={{ color: 'var(--text-primary)', fontWeight: 500, textDecoration: 'underline' }}>Login here</a>
        </p>
      </div>
    </main>
  );
}
