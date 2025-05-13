import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    sourcemap: true
  },
  // base: "/ulasp/",
  base: '/',
  server: {
    host: ['localhost', '192.168.0.100'],
    port: 80
  },
  node: { fs: 'empty' },
  externals: [{ './cptable': 'var cptable' }, { './jszip': 'jszip' }]
});
