import Link from 'next/link';
import Image from 'next/image';

export default function LegalShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="legal-page">
      <nav className="lg-nav">
        <Link href="/" aria-label="Grouv home">
          <Image src="/assets/logo.png" alt="Grouv" width={120} height={36} className="brand-logo" />
        </Link>
        <Link href="/" className="lg-back">← Back to Grouv</Link>
      </nav>

      {children}

      <footer className="lg-footer">
        <div className="footer-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
