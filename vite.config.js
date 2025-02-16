import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        laravel({
          input: 'resources/js/index.jsx',
          refresh: true,
      }),
    ],
    server: {
      hmr: {
          host: 'localhost',
      },
      watch: {
          usePolling: true
      }
  },
  test: {
    environment: 'jsdom',
  },
});
