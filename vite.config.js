import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuration Vite de base pour le projet Café Bilal
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})
