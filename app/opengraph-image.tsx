import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Grouv — Social for where you actually are in life';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F4F2EE',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Ember glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(243,112,30,0.18) 0%, transparent 70%)',
          }}
        />
        {/* Deep indigo glow bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: -60,
            left: -60,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(30,28,47,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Wordmark */}
        <div
          style={{
            fontSize: 88,
            fontWeight: 800,
            color: '#1C1B1A',
            letterSpacing: '-0.02em',
            lineHeight: 1,
            marginBottom: 20,
          }}
        >
          Grouv
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 34,
            color: '#4A4642',
            textAlign: 'center',
            maxWidth: 760,
            lineHeight: 1.3,
            marginBottom: 48,
          }}
        >
          Social for where you actually are in life
        </div>

        {/* Pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            padding: '14px 36px',
            background: '#F3701E',
            color: '#fff',
            borderRadius: 100,
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: '-0.01em',
          }}
        >
          Join the waitlist
        </div>

        {/* Social proof note */}
        <div
          style={{
            marginTop: 32,
            fontSize: 20,
            color: '#8A847C',
          }}
        >
          2,000+ people already waiting · grouv.app
        </div>
      </div>
    ),
    { ...size },
  );
}
