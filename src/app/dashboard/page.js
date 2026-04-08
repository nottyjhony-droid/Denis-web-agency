"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AIOrb from '@/components/AIOrb';

export default function Dashboard() {
  const [user, setUser] = useState('');
  const [messages, setMessages] = useState([{ role: 'ai', content: "Hello! I'm Dennis AI, your Masterpiece Web Agency assistant. How can I help you today? Ask me to book an appointment, or upload a project brief." }]);
  const [chatInput, setChatInput] = useState('');
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

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    setMessages([...messages, { role: 'user', content: chatInput }]);
    
    // Simulate Smart AI Response
    setTimeout(() => {
      let aiResponse = "I specialize in web development services for Dennis Albert. Please contact us for more info.";
      const lowerInput = chatInput.toLowerCase();
      
      if (lowerInput.includes('book') || lowerInput.includes('appointment')) {
         aiResponse = "I have initiated the Calendly booking sequence for you. And I've queued a reminder cron job to send an email. (API Integration Pending)";
      } else if (lowerInput.includes('call me') || lowerInput.includes('phone')) {
         aiResponse = "Triggering Outbound Call API. You will receive a call from Dennis Sir's AI representative shortly. (Voice API pending)";
      } else if (lowerInput.includes('invoice') || lowerInput.includes('pay')) {
         aiResponse = "You can manage your payments in the billing section to your left.";
      }
      
      setMessages(prev => [...prev, { role: 'ai', content: aiResponse }]);
    }, 1000);
    
    setChatInput('');
  }

  const handleFileUpload = (e) => {
     const file = e.target.files[0];
     if (file) {
        setMessages([...messages, { role: 'user', content: `[Uploaded File: ${file.name}]` }]);
        setTimeout(() => {
           setMessages(prev => [...prev, { role: 'ai', content: `I have scanned ${file.name} using RAG. The requirements look great for a Next.js masterpiece build.` }]);
        }, 1500);
     }
  }

  if (!user) return null;

  return (
    <main style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '4rem', background: 'var(--surface)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 300px) 1fr', gap: '2rem' }}>
        
        {/* SIDEBAR */}
        <div style={{ background: '#fff', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border)', height: 'fit-content' }}>
          <h2 className="serif" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Client Portal</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem', wordBreak: 'break-all' }}>{user}</p>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Projects</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--accent)', fontWeight: 500 }}>Active: V3 Platform Build</p>
            <div style={{ width: '100%', height: '4px', background: 'var(--border)', marginTop: '0.5rem', borderRadius: '4px' }}>
               <div style={{ width: '80%', height: '100%', background: 'var(--text-primary)', borderRadius: '4px' }}></div>
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Billing & Invoices</h3>
            <div style={{ padding: '1rem', border: '1px solid var(--border)', borderRadius: '4px', marginBottom: '1rem' }}>
               <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Outstanding Balance</p>
               <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>$2,500.00</p>
               <button className="btn-primary" style={{ width: '100%', marginTop: '1rem', padding: '0.5rem' }}>Pay via Stripe</button>
            </div>
          </div>

          <button onClick={handleLogout} className="btn-secondary" style={{ width: '100%' }}>Secure Logout</button>
        </div>

        {/* MAIN AI CHAT AREA */}
        <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', height: 'calc(100vh - 120px)', position: 'relative', overflow: 'hidden' }}>
          
          {/* Header */}
          <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.95)', zIndex: 10 }}>
            <div>
              <h2 className="serif" style={{ fontSize: '1.8rem', m: 0 }}>Dennis AI Executive</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Powered by Advanced Enterprise Knowledge Base</p>
            </div>
            {/* The 3D Orb goes here in top right */}
            <div style={{ width: '60px', height: '60px', position: 'relative' }}>
               <AIOrb />
            </div>
          </div>

          {/* Chat Messages */}
          <div style={{ flex: 1, padding: '2rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
             {messages.map((m, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                   <div style={{ 
                      maxWidth: '70%', 
                      padding: '1rem 1.5rem', 
                      borderRadius: '8px',
                      background: m.role === 'user' ? 'var(--text-primary)' : 'var(--surface)',
                      color: m.role === 'user' ? '#fff' : 'var(--text-primary)',
                      border: m.role === 'user' ? 'none' : '1px solid var(--border)',
                      fontSize: '0.95rem',
                      lineHeight: '1.5'
                   }}>
                      {m.content}
                   </div>
                </div>
             ))}
          </div>

          {/* Chat Input Bar */}
          <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border)', background: '#fff' }}>
             <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '1rem' }}>
                <label className="btn-secondary" style={{ padding: '0.8rem', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                   <span style={{ fontSize: '1.2rem' }}>+</span>
                   <input type="file" style={{ display: 'none' }} onChange={handleFileUpload} />
                </label>
                <input 
                   type="text" 
                   style={{ flex: 1, padding: '1rem', border: '1px solid var(--border)', borderRadius: '4px', fontSize: '1rem', outline: 'none' }} 
                   placeholder="Ask me anything, request a call, or book an appointment..." 
                   value={chatInput}
                   onChange={(e) => setChatInput(e.target.value)}
                />
                <button type="submit" className="btn-primary">Send</button>
             </form>
          </div>
          
        </div>

      </div>
    </main>
  );
}
