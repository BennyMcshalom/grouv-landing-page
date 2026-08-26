'use client';

import { useEffect, useRef, useState } from 'react';
import { SPACES } from '@/lib/data';
import { SPACE_ICONS } from '@/lib/icons';
import { joinWaitlist } from '@/app/actions';
import PhoneField from './PhoneField';
import { COUNTRIES, DEFAULT_COUNTRY } from '@/lib/countries';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function JoinCTA() {
  const [picked, setPicked] = useState<string[]>([]);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState(DEFAULT_COUNTRY);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ email: string; phone: string; country: string }>).detail;
      if (detail?.email) setEmail(detail.email);
      if (detail?.phone) setPhone(detail.phone);
      if (detail?.country) setCountry(detail.country);
    };
    window.addEventListener('grouv:prefill', handler);
    return () => window.removeEventListener('grouv:prefill', handler);
  }, []);

  function togglePick(name: string) {
    setPicked((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name],
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      emailRef.current?.focus();
      return;
    }
    if (!/^[\d\s+\-().]{4,}$/.test(phone)) {
      phoneRef.current?.focus();
      return;
    }
    setLoading(true);
    setError('');

    const dial = COUNTRIES.find((c) => c.iso2 === country)?.dial ?? '1';
    const fullPhone = `+${dial} ${phone.trim()}`;
    const result = await joinWaitlist(email, picked, fullPhone);
    setLoading(false);

    if (!result.ok) {
      setError(result.error ?? 'Something went wrong. Please try again.');
      return;
    }

    window.fbq?.('track', 'CompleteRegistration');
    setSubmitted(true);
  }

  return (
    <section className="sect-pad" id="join" aria-labelledby="join-heading">
      <div className="wrap">
        <div className="cta reveal scale">
          <div className="cta-glow" aria-hidden="true" />

          {!submitted ? (
            <div className="cta-inner">
              <span className="eyebrow" style={{ color: '#fff' }}>The first circles are forming</span>
              <h2 style={{ marginTop: '1rem' }} id="join-heading">
                Begin your <em>chapter.</em>
              </h2>
              <p>
                Join the waitlist and tell us where you are.
              </p>

              <form className="cta-form" onSubmit={handleSubmit} noValidate>
                <label className="fl" htmlFor="ctaChipGroup">
                  Pick spaces relevant to you at the moment.
                </label>
                <div className="cta-chips" id="ctaChipGroup" role="group" aria-label="Life chapters">
                  {SPACES.map((space) => {
                    const Icon = SPACE_ICONS[space.name];
                    const sel = picked.includes(space.name);
                    return (
                      <button
                        key={space.name}
                        type="button"
                        className={`cta-chip${sel ? ' sel' : ''}`}
                        onClick={() => togglePick(space.name)}
                        aria-pressed={sel}
                      >
                        {Icon && <Icon size={14} strokeWidth={2} aria-hidden="true" />}
                        {space.name}
                      </button>
                    );
                  })}
                </div>

                <label className="fl" htmlFor="joinEmail">Your email</label>
                <div className="cta-emailrow">
                  <input
                    ref={emailRef}
                    id="joinEmail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    autoComplete="email"
                    aria-label="Email address"
                    required
                    disabled={loading}
                  />
                </div>
                <label className="fl" htmlFor="joinPhone" style={{ marginTop: '1rem' }}>
                  Phone number
                </label>
                <div className="cta-field">
                  <PhoneField
                    id="joinPhone"
                    country={country}
                    onCountryChange={setCountry}
                    value={phone}
                    onChange={setPhone}
                    placeholder="555 123 4567"
                    required
                    disabled={loading}
                    inputRef={phoneRef}
                  />
                </div>

                <div className="cta-submit">
                  <button type="submit" className="btn btn-primary btn-lg" disabled={loading}
                    style={{ opacity: loading ? 0.7 : 1 }}>
                    {loading ? 'Saving…' : 'Save my spot'}
                  </button>
                </div>

                {error && (
                  <p role="alert" style={{ color: '#ff6b4a', fontSize: '.88rem', marginTop: '.6rem' }}>
                    {error}
                  </p>
                )}
                <p className="cta-note">No spam, ever. One quiet note when your circle is ready.</p>
              </form>
            </div>
          ) : (
            <div className="cta-done">
              <div className="cta-check pop" aria-hidden="true">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff"
                  strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <h2 id="join-heading">You&#39;re <em>on the list.</em></h2>
              <p>
                {picked.length > 0
                  ? `We'll reach out as soon as people in your ${picked.length === 1 ? 'chapter' : 'chapters'} start forming a circle. One quiet email, nothing more.`
                  : "We'll reach out as soon as your circle starts to form. One quiet email, nothing more."}
              </p>
              {picked.length > 0 && (
                <div className="cta-echo" aria-label="Selected chapters">
                  {picked.map((name) => {
                    const space = SPACES.find((s) => s.name === name);
                    const Icon = space ? SPACE_ICONS[space.name] : null;
                    return (
                      <span key={name} className="chip">
                        {Icon && <Icon size={12} strokeWidth={2} aria-hidden="true" />}
                        {name}
                      </span>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
