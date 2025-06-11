import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',
  
  server: {
    port: 3000,
    open: true,
    cors: true,
    host: true
  },
  
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['lodash'],
          utils: ['./src/utils/math.js', './src/utils/string.js']
        }
      }
    }
  },
  
  css: {
    devSourcemap: true
  }
});
