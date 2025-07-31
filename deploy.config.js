// 部署配置文件
export default {
  // CDN 配置
  cdn: {
    // 靜態資源 CDN 域名
    staticDomain: process.env.VITE_CDN_DOMAIN || 'https://cdn.hyjdevelop.com',
    // 圖片 CDN 域名
    imageDomain: process.env.VITE_IMAGE_CDN_DOMAIN || 'https://images.hyjdevelop.com',
  },

  // 環境配置
  environments: {
    development: {
      apiUrl: 'http://localhost:3000',
      analytics: false,
    },
    staging: {
      apiUrl: 'https://staging-api.hyjdevelop.com',
      analytics: true,
    },
    production: {
      apiUrl: 'https://api.hyjdevelop.com',
      analytics: true,
    },
  },

  // 建置配置
  build: {
    // 輸出目錄
    outDir: 'dist',
    // 是否生成 sourcemap
    sourcemap: process.env.NODE_ENV === 'development',
    // 是否壓縮
    minify: process.env.NODE_ENV === 'production',
    // 是否生成 gzip
    gzip: process.env.NODE_ENV === 'production',
  },

  // 性能優化配置
  performance: {
    // 圖片優化
    imageOptimization: {
      formats: ['webp', 'avif'],
      sizes: [320, 640, 1024, 1920],
      quality: 80,
    },
    // 快取策略
    cache: {
      static: 'public, max-age=31536000',
      dynamic: 'public, max-age=3600',
    },
  },
}; 