import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  resolve: {
    alias: {
      'src': path.resolve(__dirname, 'src'),
    },
  },
  root: '.', // 專案根目錄
  publicDir: 'public', // 靜態資源目錄
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: 'public/index.html', // 明確指定入口
    },
  },
  server: {
    host: true,
    port: 3000, // 改為 3000 或其他可用端口
  },
  preview: {
    host: true,
    port: 3000,
  }
});