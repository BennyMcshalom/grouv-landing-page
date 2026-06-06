import Link from 'next/link';
import Image from 'next/image';

const productLinks = [
  { label: 'The feeling', href: '#feeling' },
  { label: 'Spaces',       href: '#spaces' },
  { label: 'Nearby',       href: '#nearby' },
  { label: 'How it works', href: '#how' },
  { label: 'Join the waitlist', href: '#join' },
];

const companyLinks = [
  { label: 'About',     href: '#top' },
  { label: 'Manifesto', href: '#top' },
  { label: 'Careers',   href: '#top' },
  { label: 'Press',     href: '#top' },
];

const quietLinks = [
  { label: 'Privacy',          href: '#top' },
  { label: 'Terms',            href: '#top' },
  { label: 'How invites work', href: '#top' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Link className="brand" href="#top" aria-label="Grouv home">
              <Image
                src="/assets/logo.png"
                alt="Grouv"
                width={120}
                height={36}
                className="brand-logo"
              />
            </Link>
            <p className="footer-tag">
              Social for where you actually are in life. A small circle of people in the same
              chapter as you — no audience, no performance, just depth.
            </p>
          </div>

          <nav className="footer-cols" aria-label="Footer navigation">
            <div className="footer-col">
              <h4>Product</h4>
              {productLinks.map(({ label, href }) => (
                <Link key={label} href={href}>{label}</Link>
              ))}
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              {companyLinks.map(({ label, href }) => (
                <Link key={label} href={href}>{label}</Link>
              ))}
            </div>
            <div className="footer-col">
              <h4>Quiet stuff</h4>
              {quietLinks.map(({ label, href }) => (
                <Link key={label} href={href}>{label}</Link>
              ))}
            </div>
          </nav>
        </div>

        <div className="footer-bot">
          <span>© 2026 Grouv. Made for the chapter you&#39;re in.</span>
          <span className="mono" style={{ letterSpacing: '.1em' }}>NOW FORMING · WORLDWIDE</span>
        </div>
      </div>
    </footer>
  );
}
