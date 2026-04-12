import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
        support: resolve(__dirname, 'support.html'),
        404: resolve(__dirname, '404.html'),
      },
    },
    outDir: 'dist',
    emptyOutDir: true,
  },
  publicDir: 'public',
});
