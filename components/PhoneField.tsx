'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { COUNTRIES, DEFAULT_COUNTRY, detectCountryFromLocale, flagEmoji, type Country } from '@/lib/countries';

interface PhoneFieldProps {
  id: string;
  country: string;
  onCountryChange: (iso2: string) => void;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  inputRef?: React.Ref<HTMLInputElement>;
}

export default function PhoneField({
  id, country, onCountryChange, value, onChange, placeholder, disabled, required, inputRef,
}: PhoneFieldProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [menuPos, setMenuPos] = useState<{ top: number; left: number; width: number; maxHeight: number } | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const selected = COUNTRIES.find((c) => c.iso2 === country)
    ?? COUNTRIES.find((c) => c.iso2 === DEFAULT_COUNTRY)!;

  // Best-effort: switch the default country to the visitor's locale on mount.
  useEffect(() => {
    onCountryChange(detectCountryFromLocale());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node;
      if (wrapRef.current?.contains(target)) return;
      if (menuRef.current?.contains(target)) return;
      setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      setQuery('');
      searchRef.current?.focus();
    }
  }, [open]);

  // Position the dropdown in the viewport (it's portaled to <body> so it
  // can escape any ancestor with overflow: hidden, e.g. the CTA card).
  useEffect(() => {
    if (!open) return;
    function updatePos() {
      const rect = wrapRef.current?.getBoundingClientRect();
      if (!rect) return;
      const width = Math.min(320, window.innerWidth - 16);
      const left = Math.min(Math.max(rect.left, 8), window.innerWidth - width - 8);

      const spaceBelow = window.innerHeight - rect.bottom - 8;
      const spaceAbove = rect.top - 8;
      let top: number;
      let maxHeight: number;
      if (spaceBelow >= spaceAbove) {
        maxHeight = Math.max(160, Math.min(320, spaceBelow));
        top = rect.bottom + 8;
      } else {
        maxHeight = Math.max(160, Math.min(320, spaceAbove));
        top = Math.max(8, rect.top - 8 - maxHeight);
      }
      setMenuPos({ top, left, width, maxHeight });
    }
    updatePos();
    window.addEventListener('resize', updatePos);
    window.addEventListener('scroll', updatePos, true);
    return () => {
      window.removeEventListener('resize', updatePos);
      window.removeEventListener('scroll', updatePos, true);
    };
  }, [open]);

  const q = query.trim().toLowerCase();
  const filtered = q
    ? COUNTRIES.filter((c) => c.name.toLowerCase().includes(q) || c.dial.includes(q.replace(/^\+/, '')))
    : COUNTRIES;

  function pick(c: Country) {
    onCountryChange(c.iso2);
    setOpen(false);
  }

  return (
    <div className="phone-field" ref={wrapRef}>
      <button
        type="button"
        className="pf-country"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Country code: ${selected.name} +${selected.dial}`}
        onClick={() => setOpen((o) => !o)}
        disabled={disabled}
      >
        <span className="pf-flag" aria-hidden="true">{flagEmoji(selected.iso2)}</span>
        <span className="pf-dial">+{selected.dial}</span>
        <svg className="pf-chevron" width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <input
        ref={inputRef}
        id={id}
        type="tel"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete="tel-national"
        aria-label="Phone number"
        required={required}
        disabled={disabled}
        className="pf-input"
      />

      {open && menuPos && createPortal(
        <div
          className="pf-menu"
          ref={menuRef}
          role="listbox"
          aria-label="Select country code"
          style={{ top: menuPos.top, left: menuPos.left, width: menuPos.width, maxHeight: menuPos.maxHeight }}
        >
          <div className="pf-search-wrap">
            <svg className="pf-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              ref={searchRef}
              type="text"
              className="pf-search"
              placeholder="Search country or code"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="pf-list">
            {filtered.length === 0 && <div className="pf-empty">No countries found</div>}
            {filtered.map((c) => (
              <button
                key={c.iso2}
                type="button"
                role="option"
                aria-selected={c.iso2 === selected.iso2}
                className={`pf-option${c.iso2 === selected.iso2 ? ' active' : ''}`}
                onClick={() => pick(c)}
              >
                <span className="pf-flag" aria-hidden="true">{flagEmoji(c.iso2)}</span>
                <span className="pf-name">{c.name}</span>
                <span className="pf-dial">+{c.dial}</span>
              </button>
            ))}
          </div>
        </div>,
        document.body,
      )}
    </div>
  );
}
