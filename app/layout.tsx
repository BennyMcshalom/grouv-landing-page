import type { Metadata, Viewport } from 'next';
import { Figtree, Outfit, DM_Mono, Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-figtree',
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

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const siteUrl = 'https://grouv.app';
const siteTitle = 'Grouv — Social for where you actually are in life';
const siteDesc =
  'Find people in the same chapter of life as you — career pivots, new cities, creative blocks, big transitions. Grouv is a small-circle social app built for depth, not reach. Join the waitlist.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Grouv',
  },
  description: siteDesc,
  keywords: [
    'social app', 'social network', 'life chapters', 'authentic connection',
    'small community', 'meaningful relationships', 'career transitions',
    'life transitions', 'community building', 'intentional social network',
    'real friendships', 'online community', 'grouv', 'waitlist',
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
    // opengraph-image.tsx is auto-discovered by Next.js — no explicit images needed
  },
  twitter: {
    card: 'summary_large_image',
    site: '@grouv',
    creator: '@grouv',
    title: siteTitle,
    description: siteDesc,
  },
  alternates: { canonical: siteUrl },
  icons: {
    icon: [{ url: '/assets/logo.png', type: 'image/png' }],
    shortcut: '/assets/logo.png',
    apple: '/assets/logo.png',
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
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl}/?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Grouv',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/assets/logo.png`,
      },
      sameAs: ['https://twitter.com/grouv'],
    },
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}/#webpage`,
      url: siteUrl,
      name: siteTitle,
      description: siteDesc,
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}/#app` },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${siteUrl}/#app`,
      name: 'Grouv',
      applicationCategory: 'SocialNetworkingApplication',
      operatingSystem: 'iOS, Android, Web',
      description:
        'A social app built around life chapters. Find a small circle of people in the exact same season of life as you — no algorithm, no audience, just depth.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
      },
      publisher: { '@id': `${siteUrl}/#organization` },
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
      className={`${figtree.variable} ${outfit.variable} ${dmMono.variable} ${playfair.variable} ${dmSans.variable}`}
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
