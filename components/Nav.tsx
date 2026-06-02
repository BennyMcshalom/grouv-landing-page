'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav" aria-label="Main navigation">
      <Link className="brand" href="#top" aria-label="Grouv home">
        <span className="brand-mark"><span>G</span></span>
        <span className="brand-name">Grouv</span>
      </Link>

      <div className="nav-links">
        <Link href="#feeling">The feeling</Link>
        <Link href="#spaces">Spaces</Link>
        <Link href="#nearby">Nearby</Link>
        <Link href="#how">How it works</Link>
      </div>

      <div className="nav-right">
        <ThemeToggle />
        <Link
          href="#join"
          className="btn btn-primary"
          style={{ padding: '.6rem 1.25rem', fontSize: '.92rem' }}
        >
          Join the waitlist
        </Link>
      </div>
    </nav>
  );
}
