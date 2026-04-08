"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState('');
  const router = useRouter();

  const handleRequestOtp = (e) => {
    e.preventDefault();
    if(email) {
      setStep(2);
      // Simulate sending OTP
    }
  }

  const handleVerifyOtp = (e) => {
    e.preventDefault();
    // Simulate verification (any 6 digit works for demo)
    if(otp.length === 6) {
      localStorage.setItem('da_session', email);
      router.push('/dashboard');
    } else {
      alert('Please enter a 6 digit Demo OTP (e.g. 123456)');
    }
  }

  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass"
        style={{ padding: '3rem', width: '100%', maxWidth: '400px', textAlign: 'center' }}
      >
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Client Portal</h1>
        <p style={{ color: '#a3a3a3', marginBottom: '2rem' }}>
          {step === 1 ? 'Enter your email to receive an OTP' : `Enter the OTP sent to ${email}`}
        </p>
        
        {step === 1 ? (
          <form onSubmit={handleRequestOtp}>
            <input 
              type="email" 
              placeholder="client@agency.com" 
              className="input-field" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send OTP</button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp}>
             <p style={{ fontSize: '0.8rem', color: 'var(--accent)', marginBottom: '1rem' }}>Demo Mode: Type any 6 digits (e.g. 123456)</p>
            <input 
              type="text" 
              placeholder="123456" 
              className="input-field" 
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              maxLength={6}
              required 
              style={{ textAlign: 'center', letterSpacing: '0.5rem', fontSize: '1.5rem' }}
            />
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>Login</button>
          </form>
        )}
      </motion.div>
    </main>
  );
}
