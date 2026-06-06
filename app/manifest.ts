import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Grouv',
    short_name: 'Grouv',
    description: 'Social for where you actually are in life.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F4F2EE',
    theme_color: '#F3701E',
    icons: [
      {
        src: '/assets/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
