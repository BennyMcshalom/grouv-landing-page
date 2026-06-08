import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Page not found',
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="nf-root">
      <header className="nf-header">
        <Link href="/" aria-label="Grouv home">
          <Image
            src="/assets/logo.png"
            alt="Grouv"
            width={120}
            height={36}
            className="brand-logo"
            priority
          />
        </Link>
      </header>

      <main className="nf-main">
        {/* Ambient glow blobs */}
        <div className="nf-glow nf-glow-a" aria-hidden="true" />
        <div className="nf-glow nf-glow-b" aria-hidden="true" />

        {/* Watermark number */}
        <div className="nf-num" aria-hidden="true">404</div>

        <div className="nf-wrap">
          <span className="eyebrow center">Wrong chapter</span>
          <h1 className="nf-h1">
            You wandered into a<br />
            <em>page that doesn&#39;t exist.</em>
          </h1>
          <p className="nf-sub">
            Every chapter has a beginning — this just isn&#39;t it.<br />
            The one you&#39;re looking for is back home.
          </p>
          <Link href="/" className="btn btn-primary nf-btn">
            Take me home
          </Link>
          <div className="nf-hint">
            <span className="nf-dot" aria-hidden="true" />
            Still forming the first circles · worldwide
          </div>
        </div>
      </main>
    </div>
  );
}
