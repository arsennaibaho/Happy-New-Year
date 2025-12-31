import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // Menyediakan process.env.API_KEY ke aplikasi saat runtime
    'process.env': {
      API_KEY: JSON.stringify(process.env.API_KEY)
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});