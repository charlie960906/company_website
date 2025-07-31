import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { analyzer } from 'vite-bundle-analyzer';
import fs from 'fs';
import { fileURLToPath } from 'url';

// 自定義插件：將圖片移動到 dist/public 目錄
const moveImagesToPublic = () => {
  return {
    name: 'move-images-to-public',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const publicDir = path.resolve(distDir, 'public');
      
      // 確保 public 目錄存在
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      
      // 圖片文件擴展名
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.avif'];
      
      // 讀取 dist 目錄中的文件
      const files = fs.readdirSync(distDir);
      
      files.forEach(file => {
        const filePath = path.join(distDir, file);
        const stats = fs.statSync(filePath);
        
        // 只處理文件（不是目錄）
        if (stats.isFile()) {
          const ext = path.extname(file).toLowerCase();
          
          // 如果是圖片文件，移動到 public 目錄
          if (imageExtensions.includes(ext)) {
            const newPath = path.join(publicDir, file);
            fs.renameSync(filePath, newPath);
            console.log(`Moved ${file} to dist/public/`);
          }
        }
      });
    },
  };
};

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
    moveImagesToPublic(),
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
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['framer-motion', 'lucide-react'],
        },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
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