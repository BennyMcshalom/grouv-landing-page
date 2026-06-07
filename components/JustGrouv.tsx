import Image from 'next/image';

export default function JustGrouv() {
  return (
    <section className="sect-pad dark" aria-labelledby="jg-heading">
      <div className="wrap split rev">
        <div className="split-media" style={{ display: 'flex', justifyContent: 'center' }}>
          <figure
            className="jg-card reveal d1 scale"
            data-float=""
            style={{ animation: 'float 9s ease-in-out infinite' }}
          >
            <span className="jg-tag">Just Grouv</span>
            <Image src="/assets/face8.png" alt="" width={330} height={413} />
            <div className="jg-overlay" aria-hidden="true" />
            <div className="jg-top" aria-hidden="true">
              <div className="jg-clock">23:41</div>
              <div className="jg-loc">Porto, Portugal</div>
            </div>
            <figcaption className="jg-cap">
              <p>sat down. didn&#39;t get up easy.</p>
            </figcaption>
          </figure>
        </div>

        <div className="split-copy">
          <span className="eyebrow reveal from-right">A quieter kind of post</span>
          <div className="head">
            <h2 className="reveal d1 from-right" id="jg-heading">
              Some nights don&#39;t need a <em>paragraph.</em>
            </h2>
            <p className="reveal d2 from-right">
              Grouv turns everyday moments into shared experiences. Post a single frame and a
              single thought, then decide whether it belongs to your private space or the public feed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
