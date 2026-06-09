import Image from 'next/image';
import { User, Palette, Navigation, Sunrise, CalendarDays, Laptop, Coffee, Hand } from 'lucide-react';

const radarPins = [
  { face: '/assets/14.png', label: 'On the road now', icon: <Navigation size={10} strokeWidth={2} />, style: { left: '50%', top: '11%' } },
  { face: '/assets/15.png', label: 'Mid-project', icon: <Palette size={10} strokeWidth={2} />, style: { left: '15%', top: '64%' } },
  { face: '/assets/16.png', label: 'Building, early', icon: <User size={10} strokeWidth={2} />, style: { left: '84%', top: '58%' } },
];

const waveUsers = [
  { name: 'David Okonkwo', face: '/assets/users5.png', stage: 'Building a business · early' },
  { name: 'Cole Bennett', face: '/assets/users-N.png', stage: 'Building a business · early' },
  { name: 'Rachael Leigh', face: '/assets/users4.png', stage: 'Building a business · early' },
];

export default function Nearby() {
  return (
    <section className="sect-pad nearby-sect" id="nearby" aria-labelledby="nearby-heading">
      <div className="wrap">
        <div className="head center">
          <span className="eyebrow center reveal">Grouv Nearby · when you&#39;re ready to be found</span>
          <h2 className="reveal d1" id="nearby-heading">
            Some chapters are better <em>walked side by side.</em>
          </h2>
          <p className="reveal d2">
            <b>Turn it on when you want to be found.</b> The people nearby (3km) who are in the same chapter show up around you. Their stage, their status, right there. It goes off the moment you leave it idle for a while. No location saved, no trace left. Just the right people, close enough to actually meet.

          </p>
        </div>

        {/* Radar */}
        <div className="radar reveal d2 scale" aria-label="Radar showing 3 nearby people">
          <div className="ring breathe" style={{ width: '100%', height: '100%', animationDelay: '0s' }} />
          <div className="ring breathe" style={{ width: '74%', height: '74%', animationDelay: '.5s' }} />
          <div className="ring breathe" style={{ width: '48%', height: '48%', animationDelay: '1s' }} />
          <div className="ring breathe" style={{ width: '24%', height: '24%', animationDelay: '1.5s' }} />
          <div className="sonar" aria-hidden="true" />
          <div className="core" aria-hidden="true" />
          <div className="live-tag">
            <span className="pd" aria-hidden="true" />
            3 nearby
          </div>
          {radarPins.map(({ face, label, icon, style }) => (
            <div key={label} className="pin" style={style}>
              <div className="ph">
                <Image src={face} alt="" width={54} height={54} />
                <span className="pd2" aria-hidden="true" />
              </div>
              <span className="lbl">
                <span aria-hidden="true">{icon}</span>
                {label}
              </span>
            </div>
          ))}
        </div>

        <div className="prox-grid">

          {/* Gatherings panel */}
          <div className="prox-panel reveal d1 from-left">
            <span className="kicker">Gatherings</span>
            <h3>An invitation, from someone in the <em>same chapter.</em></h3>
            <p className="lede">
              A dawn walk before the pitch. Sketch night, no laptops. A slow run for the
              burned-out. Someone a few streets over makes the first move — you just show up.
            </p>
            <div className="sizzle">
              <div
                className="ev-card"
                data-float=""
                style={{ animation: 'float 8.5s ease-in-out infinite' }}
              >
                <div className="ev-top">
                  <span className="ev-ico" aria-hidden="true">
                    <Sunrise size={22} strokeWidth={1.6} />
                  </span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="ev-name">Founders&#39; dawn walk</div>
                    <div className="ev-host" style={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>
                      <User size={11} strokeWidth={2} aria-hidden="true" />
                      David · Career · 0.4 km away
                    </div>
                  </div>
                </div>
                <p className="ev-note">Walk and talk shop before the day starts. No pitches.</p>
                <div className="ev-meta">
                  <span className="chip">
                    <CalendarDays size={11} strokeWidth={2} aria-hidden="true" />
                    Tomorrow · 7:00am
                  </span>
                  <span className="ev-going">
                    <span className="stk" aria-hidden="true">
                      {['/assets/users5.png', '/assets/users-N.png', '/assets/users4.png'].map((f) => (
                        <i key={f}><Image src={f} alt="" width={20} height={20} /></i>
                      ))}
                    </span>
                    5 going
                  </span>
                  {/* Static preview — not a real action */}
                  <span className="ev-join" aria-hidden="true">I&#39;ll grouv</span>
                </div>
              </div>

              <div className="prox-sub">
                <span className="kicker">Meet &amp; greet</span>
                <p className="sub-lede">
                  Out in the world — a conference, a block you are in, a park you are in, a football field you are in, a camping ground/park you are in, wherever you may be and you wanna meet people there on the same journey with you.
                </p>
                {[
                  { key: 'tc', Icon: Laptop, name: 'TechCrunch Disrupt 2026', where: 'Moscone West · Founders & builders', count: 12 },
                  { key: 'cf', Icon: Coffee, name: 'Indie coffee, this block', where: "Right here · whoever's around", count: 4 },
                ].map(({ key, Icon, name, where, count }) => (
                  <div key={key} className="meet-card">
                    <span className="meet-ico" aria-hidden="true">
                      <Icon size={20} strokeWidth={1.6} />
                    </span>
                    <div style={{ minWidth: 0 }}>
                      <div className="meet-nm">{name}</div>
                      <div className="meet-where">{where}</div>
                    </div>
                    <div className="meet-right">
                      <span className="meet-live">
                        <span className="pd" aria-hidden="true" />
                        live · {count} here
                      </span>
                      {/* Static preview */}
                      <span className="meet-btn" aria-hidden="true">I&#39;m here too</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stage-only panel */}
          <div className="prox-panel reveal d2 from-right">
            <span className="kicker">Stage-only</span>
            <h3>Found by the few standing <em>exactly where you are.</em></h3>
            <p className="lede">
              Not your city. Not your interests. Your exact stage — &ldquo;building a business,
              early,&rdquo; &ldquo;starting over.&rdquo; The most honest kind of nearby is a wave
              from a stranger who already gets it, because they&rsquo;re carrying the same week you are.
            </p>
            <div className="sizzle">
              <div
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}
                aria-hidden="true"
              >
                <div className="wave-head" style={{ marginBottom: 0 }}>
                  <span className="wave-chip on">
                    <User size={13} strokeWidth={2} aria-hidden="true" />
                    Building a business · early
                  </span>
                  <span className="wave-chip">
                    <Palette size={13} strokeWidth={2} aria-hidden="true" />
                    Mid-project
                  </span>
                </div>
                <span className="meet-live" style={{ flexShrink: 0 }}>
                  <span className="pd" aria-hidden="true" />
                  37 in stage
                </span>
              </div>

              <div
                className="wave-list"
                data-float=""
                style={{ animation: 'float 9s ease-in-out infinite' }}
                aria-hidden="true"
              >
                {waveUsers.map((user) => (
                  <div key={user.name} className="wave-row">
                    <span className="wave-av">
                      <span className="ph">
                        <Image src={user.face} alt="" width={42} height={42} />
                      </span>
                      <span className="pd2" />
                    </span>
                    <div>
                      <div className="wave-nm">{user.name}</div>
                      <div className="wave-st">
                        <User size={11} strokeWidth={2} />
                        {user.stage}
                      </div>
                    </div>
                    {/* Static preview — not a real action */}
                    <span className="wave-btn">
                      <Hand size={13} strokeWidth={2} />
                      Wave
                    </span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '.78rem', color: 'var(--ink-4)', fontStyle: 'italic', textAlign: 'center', marginTop: '.9rem' }}>
                In Stage-only, you&rsquo;re visible only to people in your exact stage.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
