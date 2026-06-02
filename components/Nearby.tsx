'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Building2, Palette, Navigation, Sunrise, CalendarDays, Laptop, Coffee, Hand } from 'lucide-react';

type WaveState = Record<string, boolean>;
type MeetState = Record<string, boolean>;

/* Tiny chip for stage labels inside radar and wave rows */
function StageIcon({ name }: { name: string }) {
  if (name === 'career') return <Building2 size={11} strokeWidth={2} aria-hidden="true" />;
  if (name === 'creative') return <Palette size={11} strokeWidth={2} aria-hidden="true" />;
  return <Navigation size={11} strokeWidth={2} aria-hidden="true" />;
}

export default function Nearby() {
  const [going, setGoing] = useState(false);
  const [waves, setWaves] = useState<WaveState>({});
  const [meets, setMeets] = useState<MeetState>({});

  function toggleWave(name: string) {
    setWaves((prev) => ({ ...prev, [name]: !prev[name] }));
  }
  function toggleMeet(key: string) {
    setMeets((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  const waveUsers = [
    { name: 'David Okonkwo', face: '/assets/face4.png', stage: 'Building a business · early', icon: 'career' },
    { name: 'Cole Bennett',  face: '/assets/face1.png', stage: 'Building a business · early', icon: 'career' },
    { name: 'Saanvi Rao',    face: '/assets/face3.png', stage: 'Building a business · early', icon: 'career' },
  ];

  const radarPins = [
    { face: '/assets/face7.png', label: 'On the road now',  icon: <Navigation size={10} strokeWidth={2} />, style: { left: '50%', top: '11%' } },
    { face: '/assets/face2.png', label: 'Mid-project',      icon: <Palette size={10} strokeWidth={2} />,    style: { left: '15%', top: '64%' } },
    { face: '/assets/face4.png', label: 'Building, early',  icon: <Building2 size={10} strokeWidth={2} />,  style: { left: '84%', top: '58%' } },
  ];

  return (
    <section className="sect-pad nearby-sect" id="nearby" aria-labelledby="nearby-heading">
      <div className="wrap">
        <div className="head center">
          <span className="eyebrow center reveal">Grouv Nearby · when you&#39;re ready to be found</span>
          <h2 className="reveal d1" id="nearby-heading">
            Some chapters are better <em>walked side by side.</em>
          </h2>
          <p className="reveal d2">
            Turn it on and the few people in your chapter — right here, right now — can find
            you. It switches off the moment you leave. No map of your life, no background
            tracking. Just the quiet relief of not doing this alone.
          </p>
        </div>

        {/* Radar */}
        <div className="radar reveal d2" aria-label="Radar showing 3 nearby people">
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
          <div className="prox-panel reveal d1">
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
                      <Building2 size={11} strokeWidth={2} aria-hidden="true" />
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
                      {['/assets/face4.png', '/assets/face1.png', '/assets/face3.png'].map((f) => (
                        <i key={f}><Image src={f} alt="" width={20} height={20} /></i>
                      ))}
                    </span>
                    5 going
                  </span>
                  <button
                    type="button"
                    className={`ev-join${going ? ' going' : ''}`}
                    onClick={() => setGoing((p) => !p)}
                    aria-pressed={going}
                  >
                    {going ? '✓ Going' : "I'll grouv"}
                  </button>
                </div>
              </div>

              <div className="prox-sub">
                <span className="kicker">Meet &amp; greet</span>
                <p className="sub-lede">
                  Out in the world — a conference, a city you just landed in. Flip it on for
                  the room, and the people here on the same journey find you.
                </p>
                {[
                  { key: 'tc', Icon: Laptop,  name: 'TechCrunch Disrupt 2026',  where: 'Moscone West · Founders & builders', count: 12 },
                  { key: 'cf', Icon: Coffee,  name: 'Indie coffee, this block',  where: "Right here · whoever's around",       count: 4 },
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
                      <button
                        type="button"
                        className={`meet-btn${meets[key] ? ' here' : ''}`}
                        onClick={() => toggleMeet(key)}
                        aria-pressed={!!meets[key]}
                      >
                        {meets[key] ? '✓ Here' : "I'm here too"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stage-only panel */}
          <div className="prox-panel reveal d2">
            <span className="kicker">Stage-only</span>
            <h3>Found by the few standing <em>exactly where you are.</em></h3>
            <p className="lede">
              Not your city. Not your interests. Your exact stage — &ldquo;building a business,
              early,&rdquo; &ldquo;starting over.&rdquo; The most honest kind of nearby is a wave
              from a stranger who already gets it.
            </p>
            <div className="sizzle">
              <div className="wave-head" role="tablist" aria-label="Stage filters">
                <span className="wave-chip on" role="tab" aria-selected="true" style={{ display: 'flex', alignItems: 'center', gap: '.4rem' }}>
                  <Building2 size={13} strokeWidth={2} aria-hidden="true" />
                  Building a business · early
                </span>
                <span className="wave-chip" role="tab" aria-selected="false" style={{ display: 'flex', alignItems: 'center', gap: '.4rem' }}>
                  <Palette size={13} strokeWidth={2} aria-hidden="true" />
                  Mid-project
                </span>
              </div>

              <div
                className="wave-list"
                data-float=""
                style={{ animation: 'float 9s ease-in-out infinite' }}
                role="list"
              >
                {waveUsers.map((user) => (
                  <div key={user.name} className="wave-row" role="listitem">
                    <span className="wave-av">
                      <span className="ph">
                        <Image src={user.face} alt="" width={42} height={42} />
                      </span>
                      <span className="pd2" aria-hidden="true" />
                    </span>
                    <div>
                      <div className="wave-nm">{user.name}</div>
                      <div className="wave-st" style={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>
                        <StageIcon name={user.icon} />
                        {user.stage}
                      </div>
                    </div>
                    <button
                      type="button"
                      className={`wave-btn${waves[user.name] ? ' waved' : ''}`}
                      onClick={() => toggleWave(user.name)}
                      aria-pressed={!!waves[user.name]}
                      aria-label={`Wave to ${user.name}`}
                      style={{ display: 'flex', alignItems: 'center', gap: '.35rem' }}
                    >
                      <Hand size={13} strokeWidth={2} aria-hidden="true" />
                      {waves[user.name] ? 'Waved' : 'Wave'}
                    </button>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '.78rem', color: 'var(--ink-4)', fontStyle: 'italic', textAlign: 'center', marginTop: '.9rem' }}>
                In Stage-only, you&#39;re visible only to people in your exact stage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
