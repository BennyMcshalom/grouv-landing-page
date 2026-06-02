import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Outfit, DM_Mono } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
});

const siteUrl = 'https://grouv.app';
const siteTitle = 'Grouv — Social for where you actually are in life';
const siteDesc =
  'A small circle of people in the same chapter as you. No audience, no performance, just depth. Join the Grouv waitlist.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Grouv',
  },
  description: siteDesc,
  keywords: [
    'social network', 'authentic connection', 'life chapters', 'community',
    'waitlist', 'grouv', 'real friendships', 'online community',
  ],
  authors: [{ name: 'Grouv', url: siteUrl }],
  creator: 'Grouv',
  publisher: 'Grouv',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Grouv',
    title: siteTitle,
    description: siteDesc,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Grouv — Social for where you actually are in life',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@grouv',
    creator: '@grouv',
    title: siteTitle,
    description: siteDesc,
    images: ['/og-image.png'],
  },
  alternates: { canonical: siteUrl },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F3701E',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'Grouv',
      description: siteDesc,
      publisher: { '@id': `${siteUrl}/#organization` },
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Grouv',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
      sameAs: [`https://twitter.com/grouv`],
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: siteTitle,
      description: siteDesc,
      isPartOf: { '@id': `${siteUrl}/#website` },
    },
  ],
};

/* Inline script runs before first paint — prevents flash of wrong theme */
const themeScript = `(function(){
  try {
    var t = localStorage.getItem('grouv-theme') ||
            (window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', t);
  } catch(e) {}
})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${outfit.variable} ${dmMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Anti-FOUC: set data-theme before CSS renders */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
