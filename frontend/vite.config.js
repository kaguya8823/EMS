import { defineConfig, optimizeDeps } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import Unfonts from 'unplugin-fonts/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      google: {
        families: ['pacifico']
      }
    }),
    tailwindcss(),
    optimizeDeps: {
      include: [
        'react-data-table-component',
        'styled-components'
      ]
    }
  ]
});
