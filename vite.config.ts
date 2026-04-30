import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { analyzer } from 'vite-bundle-analyzer';
import { copyFileSync, existsSync } from 'fs';

export default defineConfig({
  plugins: [
    react(),
    analyzer({
      analyzerMode: 'static',
      analyzerPort: 8888,
      openAnalyzer: false,
      generateStatsFile: true,
      statsFilename: 'stats.json',
    }),
    {
      name: 'copy-redirects',
      writeBundle() {
        // 複製 _redirects 檔案到 dist 資料夾
        if (existsSync('_redirects')) {
          copyFileSync('_redirects', 'dist/_redirects');
          console.log('✅ _redirects 檔案已複製到 dist 資料夾');
        }
      },
    },
  ],
  resolve: {
    alias: {
      'src': path.resolve(__dirname, 'src'),
    },
  },
  root: '.', // 專案根目錄
  publicDir: 'public', // 靜態資源目錄
  base: '/', // 確保路徑從根目錄解析
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Vite 8（Rolldown/Rollup）對 manualChunks 的支援以 function 為主，
        // 這裡維持原本 vendor/router/ui 的分包策略。
        manualChunks(id) {
          if (!id.includes('node_modules')) return;

          // router 優先（避免被 react 規則先吃掉）
          if (
            id.includes('react-router') ||
            id.includes('react-router-dom') ||
            id.includes('@remix-run/router')
          ) {
            return 'router';
          }

          if (id.includes('framer-motion') || id.includes('lucide-react')) {
            return 'ui';
          }

          if (id.includes('/react/') || id.includes('/react-dom/')) {
            return 'vendor';
          }

          return;
        },
      },
    },
    esbuild: {
      drop: ['console', 'debugger'],
    },
    sourcemap: false,
  },
  server: {
    host: true,
    port: 5173,
    open: true,
  },
  preview: {
    host: true,
    port: 4173,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
});