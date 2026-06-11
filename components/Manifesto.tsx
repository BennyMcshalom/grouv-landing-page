export default function Manifesto() {
  return (
    <section className="sect-pad" id="feeling" aria-labelledby="manifesto-heading">
      <div className="wrap manifesto">
        <span className="eyebrow center reveal" id="manifesto-heading">
          Why Grouv exists
        </span>
        <p className="line reveal d1 scale" style={{ marginTop: '1.6rem' }}>
          Every other feed asks you to <em>perform</em> a life.</p>
        <br />
        <p className="otherTexts">
          Grouv only asks<span className="ember"> where you actually are</span>, and finds the few people standing there with you.
        </p>
      </div>
    </section>
  );
}
