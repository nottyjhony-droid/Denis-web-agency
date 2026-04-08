import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main style={{ paddingBottom: '4rem' }}>
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <span className="badge">Award Winning Agency</span>
          <h1 style={{ fontSize: '5.5rem', lineHeight: 1.1, maxWidth: '800px', marginBottom: '2rem' }}>
            Engineering <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Digital</span> Masterpieces.
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '600px', marginBottom: '3rem' }}>
            We combine strategic thinking with exquisite design and robust engineering to create websites that define global brands.
          </p>
          <a href="#contact" className="btn-primary" style={{ marginRight: '1rem', padding: '1rem 2.5rem' }}>Start Project</a>
          <a href="/login" className="btn-primary" style={{ background: 'transparent', color: 'var(--text-primary)' }}>Client Login -></a>
        </div>
        
        {/* Subtle decorative background elements instead of a heavy 3D orb for Awwwards clean look */}
        <div style={{ position: 'absolute', top: '10%', right: '5%', width: '40vw', height: '40vw', borderRadius: '50%', background: 'radial-gradient(circle, rgba(236,72,153,0.05) 0%, rgba(255,255,255,0) 70%)', zIndex: 0 }} />
      </section>

      <div className="container" style={{ borderTop: '1px solid var(--border)', paddingTop: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>The Dennis Standard</h2>
            <p>Every pixel considered. Every line of code optimized. When you work with the Dennis Albert Agency, you are choosing a partner who understands that your digital footprint is your most valuable asset.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
             <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '2rem' }}>
               <h3 className="serif" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>01. Strategy</h3>
               <p>Deep-dive research into your market positioning.</p>
             </div>
             <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '2rem' }}>
               <h3 className="serif" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>02. Design</h3>
               <p>Meticulous Anthropic-inspired typography and layouts.</p>
             </div>
             <div style={{ paddingBottom: '2rem' }}>
               <h3 className="serif" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>03. Development</h3>
               <p>Next-gen React and Next.js architectures.</p>
             </div>
          </div>
        </div>
      </div>

      <section id="contact" style={{ background: '#0a0a0a', color: '#fff', marginTop: '4rem' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 className="serif" style={{ fontSize: '3.5rem', marginBottom: '1rem', color: '#fff' }}>Get In Touch</h2>
            <p style={{ color: '#a3a3a3', marginBottom: '3rem' }}>Ready to elevate your brand? Reach out below.</p>
            <Contact />
          </div>
        </div>
      </section>

    </main>
  );
}
