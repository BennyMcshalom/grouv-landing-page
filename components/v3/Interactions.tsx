'use client';

import { useEffect, useRef } from 'react';

/* Cursor glow + scroll-reveal, matching the inline script in the v3 handoff */
export default function Interactions() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('in')),
      { threshold: .14 },
    );
    document.querySelectorAll('.v3home .reveal').forEach((el) => io.observe(el));

    const cursor = cursorRef.current;
    function onPointerMove(e: PointerEvent) {
      if (cursor) cursor.style.translate = `${e.clientX}px ${e.clientY}px`;
    }
    addEventListener('pointermove', onPointerMove);

    return () => {
      io.disconnect();
      removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  return <div className="glow-cursor" ref={cursorRef} />;
}
