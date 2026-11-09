
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Fitting-Valves/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
