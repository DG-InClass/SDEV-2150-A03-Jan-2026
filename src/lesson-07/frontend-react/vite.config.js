import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Import Tailwind CSS
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()], // Tailwind CSS does "pre-processing" to find which styles/classes to use
})
