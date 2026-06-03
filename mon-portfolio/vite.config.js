import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // On utilise le plugin standard ici
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})