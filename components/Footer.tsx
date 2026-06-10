import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer-new">
      <div className="wrap footer-row">
        <a href="#top" aria-label="Grouv home">
          <Image src="/assets/logo.png" alt="Grouv" width={120} height={36} className="footer-logo" />
        </a>
        <span className="footer-status">Now forming · Worldwide</span>
        <a href="mailto:hello@grouv.app" className="footer-email">hello@grouv.app</a>
      </div>
    </footer>
  );
}
