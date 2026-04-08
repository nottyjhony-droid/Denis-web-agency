"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="nav-blur" style={{ 
      position: 'fixed', 
      top: 0, width: '100%', 
      padding: '1.2rem 3rem', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      zIndex: 100
    }}>
      <Link href="/">
        <Image src="/logo.png" alt="Dennis Albert Logo" width={45} height={45} style={{ borderRadius: '4px', filter: 'invert(1)' }} />
      </Link>
      <Link href="/login" className="btn-primary" style={{ padding: '0.6rem 1.5rem', borderRadius: '4px' }}>
        Client Portal
      </Link>
    </nav>
  );
}
