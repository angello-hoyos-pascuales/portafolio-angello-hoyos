import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Configuración para desplegar en GitHub Pages
// Cambia la base al nombre del repo
export default defineConfig({
  base: '/portafolio-angello-hoyos/',
  plugins: [react()],
})
