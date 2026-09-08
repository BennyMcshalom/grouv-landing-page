export default function Header() {
  return (
    <header>
      <a className="logo" href="/">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/v3/v3-logo.png" alt="Grouv" />
      </a>
      <nav>
        <span>8 spaces</span>
        <a href="#join">Join waitlist</a>
      </nav>
      <a className="header-cta" href="#join">Enter Grouv <b>↗</b></a>
    </header>
  );
}
