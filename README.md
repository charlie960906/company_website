# HYJdevelop 官網

HYJdevelop 是一個致力於科技開發、軟體開發、網站建設和社群建立的創新平台。

## 🚀 專案特色

- **現代化技術棧**: 使用 React 18 + TypeScript + Vite
- **響應式設計**: 支援各種設備尺寸
- **SEO 優化**: 使用 react-helmet 進行動態 SEO
- **動畫效果**: 使用 Framer Motion 提供流暢的用戶體驗
- **性能優化**: 代碼分割和懶加載
- **程式碼品質**: Prettier 格式化 + ESLint 檢查
- **單元測試**: Vitest + Testing Library
- **錯誤追蹤**: Sentry 整合
- **打包分析**: vite-bundle-analyzer

## 📁 專案結構

```
project/
├── public/                 # 靜態資源
│   ├── index.html         # HTML 模板
│   ├── logo.png           # 品牌標誌
│   └── *.jpg              # 圖片資源
├── src/
│   ├── components/        # 共用組件
│   │   ├── Header.tsx     # 導航欄組件
│   │   └── Footer.tsx     # 頁腳組件
│   ├── layouts/           # 版面配置 (Layout)
│   │   └── MainLayout.tsx # 主版面，含 Header/Footer 與 <Outlet/>
│   ├── config/            # 設定/常數
│   │   └── seo.ts         # 路由對應 SEO 設定集中管理
│   ├── hooks/             # 自定義 Hooks
│   │   └── useScrollToTop.ts
│   ├── pages/             # 頁面組件
│   │   ├── Home.tsx       # 首頁
│   │   ├── Shop.tsx       # 線上商城
│   │   ├── Updates.tsx    # 最新消息
│   │   ├── Partner.tsx    # 合作夥伴
│   │   ├── NotFound.tsx   # 404 頁面
│   │   ├── about/         # 關於我們相關頁面
│   │   ├── community/     # 社群相關頁面
│   │   ├── privacy/       # 隱私相關頁面
│   │   └── support/       # 支援相關頁面
│   ├── test/              # 測試文件
│   │   ├── setup.ts       # 測試設置
│   │   └── __tests__/     # 測試文件
│   ├── utils/             # 工具函數
│   │   └── errorTracking.ts
│   ├── App.tsx            # 主應用組件
│   ├── index.tsx          # 應用入口
│   └── index.css          # 全局樣式
├── package.json           # 專案配置
├── vite.config.ts         # Vite 配置
├── vitest.config.ts       # Vitest 配置
├── tailwind.config.js     # Tailwind CSS 配置
├── tsconfig.json          # TypeScript 配置
├── eslint.config.js       # ESLint 配置
├── .prettierrc           # Prettier 配置
├── .prettierignore       # Prettier 忽略文件
├── deploy.config.js       # 部署配置
└── env.example           # 環境變數範例
```

## 🛠️ 技術棧

- **前端框架**: React 18
- **開發語言**: TypeScript
- **建置工具**: Vite
- **樣式框架**: Tailwind CSS
- **路由**: React Router DOM
- **動畫**: Framer Motion
- **圖標**: Lucide React
- **SEO**: React Helmet
- **測試**: Vitest + Testing Library
- **格式化**: Prettier
- **錯誤追蹤**: Sentry
- **打包分析**: vite-bundle-analyzer

## 🚀 快速開始

### 安裝依賴

```bash
npm install
```

### 環境配置

複製環境變數範例文件：

```bash
cp env.example .env
```

編輯 `.env` 文件，填入您的配置。

### 開發模式

```bash
npm run dev
```

### 建置生產版本

```bash
npm run build
```

### 預覽生產版本

```bash
npm run preview
```

### 程式碼檢查

```bash
# ESLint 檢查
npm run lint

# ESLint 自動修復
npm run lint:fix

# TypeScript 類型檢查
npm run type-check

# Prettier 格式化
npm run format

# Prettier 檢查格式
npm run format:check
```

### 測試

```bash
# 運行測試
npm run test

# 運行測試並顯示 UI
npm run test:ui

# 運行測試並生成覆蓋率報告
npm run test:coverage

# 運行測試一次
npm run test:run
```

### 打包分析

```bash
# 建置並分析打包大小
npm run analyze
```

## 📦 可用的腳本

- `npm run dev` - 啟動開發伺服器
- `npm run build` - 建置生產版本
- `npm run preview` - 預覽生產版本
- `npm run lint` - 執行 ESLint 檢查
- `npm run lint:fix` - 自動修復 ESLint 問題
- `npm run type-check` - 執行 TypeScript 類型檢查
- `npm run format` - 格式化程式碼
- `npm run format:check` - 檢查程式碼格式
- `npm run analyze` - 分析打包大小
- `npm run test` - 運行測試
- `npm run test:ui` - 運行測試 UI
- `npm run test:coverage` - 運行測試並生成覆蓋率報告
- `npm run test:run` - 運行測試一次

## 🎨 設計系統

### 品牌色彩

- **主要藍色**: #3B82F6 (HYJ 藍)
- **次要黃色**: #FACC15 (HYJ 黃)
- **強調紅色**: #EF4444 (HYJ 紅)

### 字體

- **中文字體**: Noto Sans TC
- **英文字體**: Inter, System UI

## 🔧 優化內容

### 已完成的優化

1. **程式碼品質**
   - 修復所有 TypeScript 錯誤
   - 移除未使用的 import
   - 統一檔案副檔名處理
   - 添加 Prettier 格式化
   - 優化 ESLint 配置

2. **性能優化**
   - 配置 Vite 代碼分割
   - 優化打包設定
   - 移除生產環境的 console 和 debugger
   - 添加 vite-bundle-analyzer

3. **SEO 優化**
   - 添加完整的 meta 標籤
   - 使用 react-helmet 進行動態 SEO
   - 優化 HTML 結構

4. **開發體驗**
   - 添加更多有用的 npm 腳本
   - 優化 ESLint 配置
   - 改進 TypeScript 配置
   - 添加單元測試

5. **樣式系統**
   - 擴展 Tailwind 配置
   - 添加自定義色彩和動畫
   - 優化響應式設計

6. **錯誤追蹤**
   - 整合 Sentry 錯誤追蹤
   - 全局錯誤處理器
   - 性能監控

7. **測試覆蓋**
   - 組件測試
   - Hook 測試
   - 路由測試

## 📱 響應式設計

專案支援以下斷點：
- **手機**: < 768px
- **平板**: 768px - 1024px
- **桌面**: > 1024px

## 🌐 瀏覽器支援

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 🚀 部署指南

### 生產環境部署

1. **環境配置**
   ```bash
   # 設置生產環境變數
   NODE_ENV=production
   VITE_SENTRY_DSN=your_production_sentry_dsn
   VITE_CDN_DOMAIN=https://cdn.hyjdevelop.com
   ```

2. **建置專案**
   ```bash
   npm run build
   ```

3. **部署到 CDN**
   - 將 `dist` 目錄上傳到 CDN
   - 配置靜態資源快取策略

4. **伺服器配置**
   ```nginx
   # Nginx 配置範例
   server {
       listen 80;
       server_name hyjdevelop.com;
       
       location / {
           root /var/www/hyjdevelop;
           try_files $uri $uri/ /index.html;
       }
       
       # 靜態資源快取
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

### CDN 配置

- **靜態資源**: 使用 CDN 加速 JS、CSS、圖片載入
- **圖片優化**: 支援 WebP、AVIF 格式
- **快取策略**: 靜態資源 1 年快取，動態內容 1 小時快取

### 錯誤追蹤

- **Sentry**: 整合錯誤追蹤和性能監控
- **環境區分**: 開發、測試、生產環境分離
- **自動報告**: 未處理錯誤自動上報

## 📄 授權

本專案為 HYJdevelop 所有，保留所有權利。

## 🤝 貢獻

如需貢獻，請聯繫我們的開發團隊。

---

© 2025 HYJdevelop. 保留所有權利。
