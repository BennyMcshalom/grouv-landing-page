const DIMENSIONS = [
  {
    n: "01",
    cls: "violet",
    symbol: "↗︎",
    title: "Career",
    sub: "Making the move",
  },
  {
    n: "02",
    cls: "pink",
    symbol: "◉",
    title: "Spiritual",
    sub: "Looking inward",
  },
  {
    n: "03",
    cls: "cyan",
    symbol: "◇",
    title: "Wealth",
    sub: "Building freedom",
  },
  {
    n: "04",
    cls: "lime",
    symbol: "⌁",
    title: "Adventure",
    sub: "Going somewhere",
  },
  {
    n: "05",
    cls: "amber",
    symbol: "✚",
    title: "Health",
    sub: "Choosing yourself",
  },
  {
    n: "06",
    cls: "blue",
    symbol: "✣",
    title: "Creative",
    sub: "Making it real",
  },
  { n: "07", cls: "red", symbol: "⌘", title: "Learning", sub: "Becoming more" },
  {
    n: "08",
    cls: "mint",
    symbol: "∞",
    title: "Relationships",
    sub: "Growing closer",
  },
];

export default function Spaces() {
  return (
    <section className="spaces">
      <div className="spaces-head">
        <p className="eyebrow">01 / YOUR WORLD</p>
        <h2 className="reveal">
          One life.
          <br />
          <em>Eight dimensions.</em>
        </h2>
        <p>
          Move through the spaces that shape you. Meet people at the same point
          on the map.
        </p>
      </div>
      <div className="dimension-grid">
        {DIMENSIONS.map((d) => (
          <article className={d.cls} key={d.title}>
            <span>{d.n}</span>
            <div className="symbol">{d.symbol}</div>
            <h3>{d.title}</h3>
            <small>{d.sub}</small>
          </article>
        ))}
      </div>
      <div className="world-line">
        <span>
          YOUR WORLD IS BIGGER WITH THE RIGHT PEOPLE IN IT ✦ YOUR WORLD IS
          BIGGER WITH THE RIGHT PEOPLE IN IT ✦{" "}
        </span>
      </div>
    </section>
  );
}
