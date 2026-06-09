import Image from 'next/image';

export default function Bonds() {
  return (
    <section className="sect-pad" aria-labelledby="bonds-heading">
      <div className="wrap split">
        <div className="split-copy">
          <span className="eyebrow reveal from-left">Bonds</span>
          <div className="head">
            <h2 className="reveal d1 from-left" id="bonds-heading">
              A small circle. <em>Not a crowd.</em>
            </h2>
            <p className="reveal d2 from-left">
              The handful of people who actually know what you&#39;re carrying. Bonds deepen
              with conversation and continued shared activities over time, not followers&hellip; and
              the good thing is Grouv remembers all.
            </p>
          </div>
        </div>

        <div className="split-media">
          <div className="bond-visual">
            <div className="bond-stack reveal d1 from-right" aria-hidden="true">
              {[
                { src: '/assets/19.png', delay: '0s' },
                { src: '/assets/17.png', delay: '.4s' },
                { src: '/assets/18.png', delay: '.8s' },
              ].map(({ src, delay }) => (
                <span
                  key={src}
                  className="ba"
                  data-float=""
                  style={{ animation: `float 6.5s ease-in-out ${delay} infinite` }}
                >
                  <Image src={src} alt="" width={88} height={88} />
                </span>
              ))}
            </div>

            <div className="bond-card reveal d2 from-right">
              <div className="row">
                <span style={{ width: 42, height: 42, borderRadius: '50%', overflow: 'hidden', boxShadow: '0 0 0 2.5px var(--white)', flexShrink: 0 }}>
                  <Image src="/assets/19.png" alt="Amara Lindqvist" width={42} height={42} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 36%' }} />
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '.95rem' }}>Amara Lindqvist</div>
                  <div style={{ fontSize: '.74rem', color: 'var(--ink-3)' }}>Bond · 7 months · last voice note 2d ago</div>
                </div>
              </div>
              <div className="bond-meter" role="progressbar" aria-valuenow={82} aria-valuemin={0} aria-valuemax={100} aria-label="Bond depth: 82%">
                <span style={{ width: '82%' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '.55rem', fontSize: '.72rem', color: 'var(--ink-4)', fontFamily: 'var(--mono)' }}>
                <span>DEPTH</span><span>82%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
