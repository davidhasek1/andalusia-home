import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Andalusia Home',
    short_name: 'AH',
    description: 'Spanish real estates for sale',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '16x16',
        type: 'image/x-icon',
      },
    ],
  }
}
