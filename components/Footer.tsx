import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-slim">
      <Link href="/privacy">Privacy</Link>
      <Link href="/terms">Terms</Link>
      <Link href="/contact">Contact</Link>
    </footer>
  );
}
