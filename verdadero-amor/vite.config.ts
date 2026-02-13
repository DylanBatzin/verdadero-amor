import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // O '@vitejs/plugin-react' según lo que elegiste
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})