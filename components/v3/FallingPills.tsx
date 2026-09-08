'use client';

import { useRef } from 'react';

const LIFE_MOMENTS = [
  'Starting over at 32', 'Reinventing myself', 'Rebuilding after a layoff',
  'A new chapter in life', 'Resetting my life', 'Getting my life together',
  'New city, fresh start', 'A positive midlife reset',
  'Entering my second adulthood', 'Finding support through change',
  'Figuring out who I am now',
];
const PALETTE = ['#ffc900', '#00b95e', '#17466a', '#f27690', '#f3701e', '#b9ee71', '#6b6ff0'];
const TILTS = [-7, 4, -3, 7, -5, 3, -2, 6, -4, 2, -6];

export default function FallingPills() {
  const colorIndex = useRef(LIFE_MOMENTS.map((_, i) => i % PALETTE.length));

  function handlePointerDown(pill: HTMLButtonElement, i: number) {
    const next = (colorIndex.current[i] + 2) % PALETTE.length;
    colorIndex.current[i] = next;
    pill.style.background = PALETTE[next];
    const tilt = TILTS[i % TILTS.length];
    pill.animate(
      [
        { transform: `rotate(${tilt}deg) translateX(0)` },
        { transform: 'rotate(-7deg) translateX(-8px)' },
        { transform: 'rotate(7deg) translateX(8px)' },
        { transform: 'rotate(-4deg) translateX(-5px)' },
        { transform: `rotate(${tilt}deg) translateX(0)` },
      ],
      { duration: 400, easing: 'ease-out' },
    );
  }

  return (
    <div className="falling-pills" aria-hidden="true">
      {LIFE_MOMENTS.map((text, i) => (
        <button
          key={text}
          type="button"
          className="life-pill"
          style={{
            '--pill': PALETTE[i % PALETTE.length],
            '--tilt': `${TILTS[i % TILTS.length]}deg`,
          } as React.CSSProperties}
          onPointerDown={(e) => handlePointerDown(e.currentTarget, i)}
        >
          {text}
        </button>
      ))}
    </div>
  );
}
