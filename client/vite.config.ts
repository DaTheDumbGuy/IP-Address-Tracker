import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/IP-Address-Tracker/', 
  server: {
    proxy: {
        '/api': 'http://localhost:8080', 
    },
  },
})
