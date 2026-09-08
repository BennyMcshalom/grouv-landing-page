"use client";

import { useRef, useState } from "react";
import { joinWaitlist } from "@/app/actions";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const SPACES = [
  "Career",
  "Spiritual",
  "Wealth",
  "Adventure",
  "Health",
  "Creative",
  "Learning",
  "Relationships",
];

export default function WaitlistForm() {
  const [space, setSpace] = useState(SPACES[0]);
  const [status, setStatus] = useState("One meaningful invite. Zero noise.");
  const [complete, setComplete] = useState(false);
  const [loading, setLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const email = emailRef.current;
    const phone = phoneRef.current;
    if (!email || !phone) return;

    if (!email.validity.valid) {
      setStatus("Enter a valid email.");
      email.focus();
      return;
    }
    if (!phone.value.trim()) {
      setStatus("Add your phone number.");
      phone.focus();
      return;
    }

    setLoading(true);
    const result = await joinWaitlist(email.value, [space], phone.value.trim());
    setLoading(false);

    if (!result.ok) {
      setStatus(result.error ?? "Something went wrong. Please try again.");
      return;
    }

    window.fbq?.("track", "CompleteRegistration");
    setComplete(true);
    setStatus(`You're in ${space}. We'll meet you there.`);
  }

  return (
    <form
      className={`waitlist-form${complete ? " complete" : ""}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="fields">
        <label>
          Email address
          <input
            ref={emailRef}
            type="email"
            name="email"
            required
            placeholder="you@email.com"
            disabled={loading || complete}
          />
        </label>
        <label>
          Phone number
          <input
            ref={phoneRef}
            type="tel"
            name="phone"
            required
            placeholder="+234 000 000 0000"
            disabled={loading || complete}
          />
        </label>
      </div>
      <br />
      <fieldset>
        <legend>Choose your space</legend>
        <div className="space-picker">
          {SPACES.map((s) => (
            <label key={s}>
              <input
                type="radio"
                name="space"
                value={s}
                checked={space === s}
                onChange={() => setSpace(s)}
                disabled={loading || complete}
              />
              <span>{s}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <button type="submit" disabled={loading || complete}>
        {complete ? "You're in" : loading ? "Connecting…" : "Connect my world"}{" "}
        <span>↗</span>
      </button>
      <p className="form-status" aria-live="polite">
        {status}
      </p>
    </form>
  );
}
