export default function NotFound() {
  return (
    <section className="notfound">
      <div className="nf-mark" aria-hidden="true">404</div>
      <p className="eyebrow">▣ WRONG CHAPTER</p>
      <h1 className="reveal">
        This page isn&rsquo;t<br /><em>in your story.</em>
      </h1>
      <p className="lead reveal">
        The page you&rsquo;re looking for doesn&rsquo;t exist, moved, or never made it past the idea stage. Your people are still back home.
      </p>
      <a className="hero-cta" href="/">Back to Grouv <span>↗︎</span></a>
      <div className="orbit o1" />
      <div className="orbit o2" />
    </section>
  );
}
