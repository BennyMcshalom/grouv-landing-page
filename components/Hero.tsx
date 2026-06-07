'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { HERO_NODES, PROOF_FACES } from '@/lib/data';
import { joinWaitlist } from '@/app/actions';

/* ── Floating hero stage ── */
function HeroStage() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const heroEl = stage.closest('header') as HTMLElement;
    if (!heroEl) return;

    const wraps = Array.from(stage.querySelectorAll<HTMLElement>('.node-wrap'));
    let ticking = false;

    function update() {
      // progress: 0 = top of hero, 1 = 60% of hero scrolled past
      const raw = window.scrollY / (heroEl.offsetHeight * 0.6 || 1);
      const progress = Math.min(Math.max(raw, 0), 1);
      // quadratic ease-in — slow start, snappy exit
      const eased = progress * progress;

      wraps.forEach((wrap) => {
        const dir = wrap.dataset.side === 'right' ? 1 : -1;
        wrap.style.transform = `translate(${dir * eased * 160}px, ${-eased * 48}px)`;
        wrap.style.opacity = String(Math.max(1 - eased * 2.4, 0));
      });

      ticking = false;
    }

    function onScroll() {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    update(); // sync on mount in case page is pre-scrolled
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="hero-stage" ref={stageRef} id="heroStage" aria-hidden="true">
      {HERO_NODES.map((node, i) => {
        const isRight = !node.x.left;
        return (
          <div
            key={node.face}
            className="node-wrap"
            data-side={isRight ? 'right' : 'left'}
            style={{
              top: node.y,
              ...(node.x.left ? { left: node.x.left } : { right: node.x.right }),
            }}
          >
            <div
              className="node"
              data-float=""
              style={{ animation: `float ${node.dur}s ease-in-out ${i * 0.3}s infinite` }}
            >
              <Image src={node.face} alt="" width={node.size} height={node.size} />
            </div>
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
        <b>First circles forming</b> · Be among the first in
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
            <span>People in the same chapter (nearby, or around the world).</span>
          </div>
          <ProofStack />
        </div>
      </div>
    </header>
  );
}
