import Image from 'next/image';
import { Check, Sprout, MessageCircle, Share2 } from 'lucide-react';

export default function RootCard() {
  return (
    <section
      className="sect-pad"
      style={{ background: 'var(--cream)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
      aria-labelledby="rootcard-heading"
    >
      <div className="wrap split">
        <div className="split-copy">
          <span className="eyebrow reveal from-left">A post on Grouv</span>
          <div className="head">
            <h2 className="reveal d1 from-left" id="rootcard-heading">
              Showing up is <em>one honest sentence.</em>
            </h2>
            <p className="reveal d2 from-left">
              No likes to chase. No highlight reel. You say what you&#39;re actually doing,
              and one true thing about where you are. Your circle roots for you.
            </p>
          </div>
          <ul className="feat-list">
            <li className="reveal d2 from-left">
              <span className="tick">
                <Check size={13} strokeWidth={3} stroke="var(--accent)" aria-hidden="true" />
              </span>
              <span><b>Root</b>, not like — you&#39;re cheering someone on, not scoring them.</span>
            </li>
            <li className="reveal d3 from-left">
              <span className="tick">
                <Check size={13} strokeWidth={3} stroke="var(--accent)" aria-hidden="true" />
              </span>
              <span>Post <b>anonymously</b> when the honest thing is hard to sign.</span>
            </li>
            <li className="reveal d3 from-left">
              <span className="tick">
                <Check size={13} strokeWidth={3} stroke="var(--accent)" aria-hidden="true" />
              </span>
              <span>Seen only by the people in <b>your chapter</b>.</span>
            </li>
          </ul>
        </div>

        <div className="split-media" style={{ display: 'flex', justifyContent: 'center' }}>
          <article
            className="ui-card tilt reveal d2 scale"
            data-float=""
            style={{ animation: 'float 8s ease-in-out infinite' }}
          >
            <header className="uic-head">
              <div className="uic-av">
                <span
                  className="aura aura-spin"
                  style={{ width: 58, height: 58, border: '2px dashed var(--au-transition)', opacity: '.85' }}
                />
                <div className="ph">
                  <Image src="/assets/face4.png" alt="David" width={46} height={46} />
                </div>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', flexWrap: 'wrap' }}>
                  <span className="uic-name">David Okonkwo</span>
                  <span className="chip" style={{ display: 'inline-flex', alignItems: 'center', gap: '.35rem' }}>
                    <Building2Icon />
                    In the thick of it
                  </span>
                </div>
                <div className="uic-time">2h ago</div>
              </div>
            </header>

            <p className="uic-doing">Rewriting the pitch deck for the third time this week.</p>
            <p className="uic-honest">
              The honest thing is I still can&#39;t explain what we do in one sentence, and that
              scares me more than the runway.
            </p>
            <div className="media-frame" role="presentation" aria-hidden="true">
              <div className="media-frame-lines">
                <span /><span /><span />
              </div>
            </div>

            <footer className="uic-foot">
              <span className="uic-act on">
                <Sprout size={16} strokeWidth={1.7} aria-hidden="true" />
                Root <b style={{ fontWeight: 600 }}>18</b>
              </span>
              <span className="uic-act">
                <MessageCircle size={15} strokeWidth={1.7} aria-hidden="true" />
                Comment 5
              </span>
              <span className="uic-act">
                <Share2 size={15} strokeWidth={1.7} aria-hidden="true" />
                Share
              </span>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
}

/* Tiny inline icon to avoid importing the same icon twice */
function Building2Icon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
      <path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/>
      <path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/>
      <path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>
    </svg>
  );
}
