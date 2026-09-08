import FallingPills from "./FallingPills";

const WORLD_PHOTOS = [
  {
    cls: "w1",
    src: "/assets/v3/world-newcomer.jpg",
    alt: "A traveler arriving in a new city with a suitcase",
    label: "THE NEWCOMER",
    line: "I just got here.",
  },
  {
    cls: "w2",
    src: "/assets/v3/world-creator.jpg",
    alt: "An artist creating work in a bright studio",
    label: "THE CREATOR",
    line: "I'm making it real.",
  },
  {
    cls: "w3",
    src: "/assets/v3/world-rebuilder.jpg",
    alt: "A woman rebuilding her life while moving into a new home",
    label: "THE REBUILDER",
    line: "I'm starting again.",
  },
];

export default function Hero() {
  return (
    <section className="hero">
      <p className="eyebrow">▣ EARLY ACCESS · FIND YOUR PEOPLE</p>
      <h1 className="reveal">
        Meet your
        <br />
        <em>right-now people.</em>
      </h1>
      <p className="lead reveal">
        A social world organized around the life you&rsquo;re actually living,
        not the image you&rsquo;re projecting. Meet your people and keep a
        private digital archive of the seasons, moments and chapters that shape
        you.
      </p>
      <a className="hero-cta" href="#join">
        Enter your space <span>↗</span>
      </a>
      <FallingPills />
      <div className="photo-world">
        {WORLD_PHOTOS.map((p) => (
          <figure className={`world-photo ${p.cls}`} key={p.cls}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt={p.alt} />
            <figcaption>
              <small>{p.label}</small>
              <strong>{p.line}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="orbit o1" />
      <div className="orbit o2" />
    </section>
  );
}
