import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'WebApp_TimedRandomNumber',
  plugins: [react(),
  VitePWA({
    includeAssets: ['public/favicon.ico'],
    manifest: {
      name: 'Timed Random Number',
      short_name: 'TRN',
      description: 'A simple app that generates a random number every n seconds',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'public/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  })
  ]
})
