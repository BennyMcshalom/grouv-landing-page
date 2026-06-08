import Image from 'next/image';
import { AURAS, AURA_ROW, type AuraType } from '@/lib/data';

function AuraRing({ type, size }: { type: AuraType; size: number }) {
  const color = AURAS[type].color;
  const out = size + Math.max(12, size * 0.24);

  if (type === 'open') {
    return (
      <>
        <span className="aura aura-breath" style={{ width: out + 8, height: out + 8, background: `radial-gradient(circle,${color}40,transparent 68%)` }} />
        <span className="aura aura-glow" style={{ width: size + 6, height: size + 6 }} />
      </>
    );
  }
  if (type === 'reflective') {
    return (
      <>
        <span className="aura aura-breath" style={{ width: out + 4, height: out + 4, background: `radial-gradient(circle,${color}33,transparent 66%)` }} />
        <span className="aura aura-inward" style={{ width: size + 10, height: size + 10, border: `2px solid ${color}`, opacity: '.55' }} />
      </>
    );
  }
  if (type === 'focus') {
    return (
      <span
        className="aura aura-halo"
        style={{
          width: out + 10,
          height: out + 10,
          boxShadow: `0 0 0 6px ${color}2e, 0 0 22px 6px ${color}55`,
          background: `radial-gradient(circle,${color}1f,transparent 72%)`,
        }}
      />
    );
  }
  if (type === 'transition') {
    return <span className="aura aura-spin" style={{ width: out, height: out, border: `2px dashed ${color}`, opacity: '.85' }} />;
  }
  if (type === 'active') {
    return (
      <>
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className="firefly"
            style={{
              width: 5, height: 5,
              background: color,
              boxShadow: `0 0 6px 2px ${color}`,
              ['--r' as string]: `${out / 2}px`,
              animation: `firefly ${3 + i * 0.6}s linear ${i * 0.5}s infinite`,
            }}
          />
        ))}
      </>
    );
  }
  return null;
}

export default function AuraSection() {
  return (
    <section className="sect-pad aura-sect" aria-labelledby="aura-heading">
      <div className="wrap">
        <div className="head center">
          <span className="eyebrow center reveal">Aura ✦ your state, before your words</span>
          <h2 className="reveal d1" id="aura-heading">
            Some days you don&#39;t have a sentence.
          </h2>
          <p className="reveal d2">
            Choose your ring and lock it in until you&rsquo;re ready to change it. Your circle
            reads your state at a glance, and so does anyone else who encounters you on Grouv.
          </p>
        </div>

        <div className="aura-row" role="list">
          {AURA_ROW.map((item, i) => {
            const aura = AURAS[item.type as AuraType];
            return (
              <div key={item.type} className={`aura-item reveal d${i + 1} scale`} role="listitem">
                <div className="aura-stage" aria-hidden="true">
                  <AuraRing type={item.type as AuraType} size={84} />
                  <div className="aura-portrait">
                    <Image src={item.face} alt="" width={84} height={84} />
                  </div>
                </div>
                <div className="aura-name">{aura.label}</div>
                <div className="aura-hint">{aura.hint}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
