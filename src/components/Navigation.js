"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav style={{ 
      position: 'fixed', 
      top: 0, width: '100%', 
      padding: '1.5rem 2rem', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      zIndex: 100,
      background: 'rgba(13, 13, 18, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--surface-border)'
    }}>
      <Link href="/">
        <Image src="/logo.png" alt="Dennis Albert Logo" width={50} height={50} style={{ borderRadius: '8px' }} />
      </Link>
      <Link href="/login" className="btn-primary" style={{ padding: '0.6rem 1.5rem' }}>
        Client Login
      </Link>
    </nav>
  );
}
