'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { HERO_NODES, PROOF_FACES, AURAS, type AuraType } from '@/lib/data';
import { SPACE_ICONS } from '@/lib/icons';
import { joinWaitlist } from '@/app/actions';

/* ── Aura ring renderer ── */
function AuraRings({ type, size }: { type: AuraType; size: number }) {
  const color = AURAS[type].color;
  const out = size + Math.max(12, size * 0.24);

  if (type === 'open') {
    return (
      <>
        <span
          className="aura aura-breath"
          style={{ width: out + 8, height: out + 8, background: `radial-gradient(circle,${color}40,transparent 68%)` }}
        />
        <span className="aura aura-glow" style={{ width: size + 6, height: size + 6 }} />
      </>
    );
  }
  if (type === 'reflective') {
    return (
      <span
        className="aura aura-breath"
        style={{ width: out, height: out, background: `radial-gradient(circle,${color}40,transparent 70%)` }}
      />
    );
  }
  if (type === 'focus') {
    return (
      <span
        className="aura aura-mist"
        style={{ width: out + 6, height: out + 6, background: `radial-gradient(circle,${color}66,transparent 70%)` }}
      />
    );
  }
  if (type === 'transition') {
    return (
      <span
        className="aura aura-spin"
        style={{ width: out, height: out, border: `2px dashed ${color}`, opacity: '.85' }}
      />
    );
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

/* ── Floating hero stage ── */
function HeroStage() {
  return (
    <div className="hero-stage" id="heroStage" aria-hidden="true">
      {HERO_NODES.map((node, i) => {
        const Icon = SPACE_ICONS[node.tag];
        return (
          <div
            key={node.face}
            className="node"
            data-float=""
            style={{
              width: node.size,
              height: node.size,
              top: node.y,
              ...(node.x.left ? { left: node.x.left } : { right: node.x.right }),
              animation: `float ${node.dur}s ease-in-out ${i * 0.3}s infinite`,
            }}
          >
            <AuraRings type={node.aura} size={node.size} />
            <div className="pic" style={{ width: node.size, height: node.size }}>
              <Image src={node.face} alt="" width={node.size} height={node.size} />
            </div>
            {node.size >= 76 && (
              <div className="node-tag">
                {Icon && <Icon size={11} strokeWidth={2} />}
                {node.tag}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ── Hero form ── */
function HeroForm() {
  const [email, setEmail] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailRef.current?.focus();
      return;
    }
    // Capture the email early — fire-and-forget so UX isn't blocked
    joinWaitlist(email).catch(() => null);
    window.dispatchEvent(new CustomEvent('grouv:prefill-email', { detail: email }));
    document.getElementById('join')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <form className="wl-inline" onSubmit={handleSubmit} noValidate>
      <input
        ref={emailRef}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        autoComplete="email"
        aria-label="Email address"
      />
      <button type="submit" className="btn btn-primary">Join the waitlist</button>
    </form>
  );
}

/* ── Social proof ── */
function ProofStack() {
  const [count, setCount] = useState(2184);

  useEffect(() => {
    const stored = parseInt(localStorage.getItem('grouv_wl') || '', 10);
    if (stored) setCount(stored);
  }, []);

  return (
    <div className="proof reveal">
      <div className="proof-stack">
        {PROOF_FACES.map((src) => (
          <div key={src} className="av">
            <Image src={src} alt="" width={38} height={38} />
          </div>
        ))}
      </div>
      <div className="proof-txt">
        <b>{count.toLocaleString('en-US')}</b> people already waiting for their circle
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-grain" />
      <HeroStage />
      <div className="wrap">
        <div className="hero-inner">
          <span className="eyebrow center">Now forming the first circles</span>
          <h1>
            <span className="ember-word">Social</span> for where you actually are in{' '}
            <span className="ember-word">life</span>.
          </h1>
          <p className="hero-sub">
            A small circle of people in the same chapter as you. No audience, no performance, just depth.
          </p>
          <HeroForm />
          <div className="wl-micro">
            <span>Free to join the list</span>
            <span className="dot" />
            <span>No feed to perform for</span>
            <span className="dot" />
            <span>Invites roll out by chapter</span>
          </div>
          <ProofStack />
        </div>
      </div>
    </header>
  );
}
