# HYJdevelop 官方網站 - 技術架構文檔

## 📋 目錄

1. [專案概述](#專案概述)
2. [技術棧](#技術棧)
3. [專案架構](#專案架構)
4. [目錄結構](#目錄結構)
5. [核心功能](#核心功能)
6. [路由系統](#路由系統)
7. [狀態管理](#狀態管理)
8. [樣式系統](#樣式系統)
9. [安全機制](#安全機制)
10. [性能優化](#性能優化)
11. [錯誤處理](#錯誤處理)
12. [SEO 優化](#seo-優化)
13. [部署架構](#部署架構)

---

## 專案概述

HYJdevelop 官方網站是一個基於 React 19 和 TypeScript 構建的現代化單頁應用（SPA），採用 Vite 作為建置工具，提供快速、安全、響應式的用戶體驗。

### 核心特性

- **現代化技術棧**：React 19 + TypeScript + Vite
- **響應式設計**：完美支援手機、平板、桌面裝置
- **動畫效果**：使用 Framer Motion 提供流暢的用戶體驗
- **SEO 優化**：完整的 SEO 配置和 sitemap 生成
- **安全防護**：CSP、SRI、APM 錯誤追蹤等企業級安全措施
- **效能優化**：代碼分割、懶加載、圖片優化

---

## 技術棧

### 前端框架

| 技術 | 版本 | 用途 |
|------|------|------|
| **React** | 19.1.1 | UI 框架 |
| **TypeScript** | 5.9.2 | 類型安全 |
| **Vite** | 7.1.1 | 建置工具和開發伺服器 |

### 路由和導航

| 技術 | 版本 | 用途 |
|------|------|------|
| **React Router DOM** | 7.8.0 | 客戶端路由 |
| **React Helmet Async** | 2.0.5 | 動態 SEO 管理 |

### 樣式和動畫

| 技術 | 版本 | 用途 |
|------|------|------|
| **Tailwind CSS** | 3.4.17 | 實用優先的 CSS 框架 |
| **Framer Motion** | 12.23.12 | 動畫庫 |
| **Lucide React** | 0.539.0 | 圖標庫 |

### 安全和監控

| 技術 | 版本 | 用途 |
|------|------|------|
| **Sentry** | 10.3.0 | APM/錯誤追蹤系統 |
| **CSP** | - | 內容安全政策 |
| **SRI** | - | 子資源完整性檢查 |

### 開發工具

| 技術 | 版本 | 用途 |
|------|------|------|
| **ESLint** | 9.32.0 | 代碼品質檢查 |
| **Prettier** | 3.6.2 | 代碼格式化 |
| **Vitest** | 3.2.4 | 單元測試框架 |
| **TypeScript ESLint** | 8.39.0 | TypeScript 代碼檢查 |

---

## 專案架構

### 整體架構圖

```
┌─────────────────────────────────────────┐
│          用戶瀏覽器 (Browser)            │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│         React 應用 (SPA)                 │
│  ┌───────────────────────────────────┐  │
│  │      React Router (路由層)        │  │
│  └──────────────┬────────────────────┘  │
│                 │                        │
│  ┌──────────────▼────────────────────┐  │
│  │      MainLayout (佈局層)          │  │
│  │  ┌──────────┐  ┌──────────────┐  │  │
│  │  │ Header   │  │   Content    │  │  │
│  │  └──────────┘  │   (Pages)    │  │  │
│  │  ┌──────────┐  └──────────────┘  │  │
│  │  │ Footer   │                     │  │
│  │  └──────────┘                     │  │
│  └───────────────────────────────────┘  │
│                 │                        │
│  ┌──────────────▼────────────────────┐  │
│  │    Hooks & Utils (工具層)         │  │
│  └───────────────────────────────────┘  │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│      外部服務 (External Services)        │
│  • Sentry (錯誤追蹤)                    │
│  • CDN (靜態資源)                       │
└─────────────────────────────────────────┘
```

### 數據流

```
用戶操作
   │
   ▼
React 組件
   │
   ▼
Hooks (狀態管理)
   │
   ▼
Utils (業務邏輯)
   │
   ▼
API/外部服務 (如 Sentry)
```

---

## 目錄結構

```
project/
├── public/                    # 靜態資源
│   ├── robots.txt            # 搜尋引擎爬蟲指引
│   ├── sitemap.xml           # 網站地圖
│   ├── manifest.json         # PWA 配置
│   └── *.jpg/png             # 圖片資源
│
├── src/                      # 原始碼
│   ├── components/           # 共用組件
│   │   ├── Header.tsx        # 導航欄
│   │   ├── Footer.tsx        # 頁尾
│   │   ├── ErrorBoundary.tsx # 錯誤邊界
│   │   ├── SecurityMonitor.tsx # 安全監控
│   │   ├── HistoryTimeline.tsx # 時間線
│   │   └── ScrollHint.tsx    # 滾動提示
│   │
│   ├── pages/                # 頁面組件
│   │   ├── Home.tsx          # 首頁
│   │   ├── NotFound.tsx      # 404 頁面
│   │   ├── TutorGo.tsx       # Tutor Go 頁面
│   │   ├── Updates.tsx       # 最新消息
│   │   ├── Partner.tsx       # 合作夥伴
│   │   ├── about/            # 關於我們
│   │   │   ├── Admin.tsx     # 主管團隊
│   │   │   ├── Contact.tsx   # 聯絡我們
│   │   │   └── Join.tsx      # 加入我們
│   │   ├── privacy/          # 隱私政策
│   │   │   ├── Privacy.tsx   # 資料和隱私
│   │   │   ├── Security.tsx  # 網路安全
│   │   │   ├── Freedom.tsx   # 表達自由
│   │   │   └── Hosting.tsx   # 託管服務
│   │   ├── support/          # 支援服務
│   │   │   ├── Terms.tsx     # 品牌使用準則
│   │   │   ├── ServiceTerms.tsx # 服務條款
│   │   │   └── Database.tsx  # 媒體庫
│   │   └── community/        # 社群相關
│   │       ├── Forum.tsx     # 論壇
│   │       └── CommunityRules.tsx # 社群守則
│   │
│   ├── layouts/              # 佈局組件
│   │   └── MainLayout.tsx    # 主佈局
│   │
│   ├── hooks/                # 自定義 Hooks
│   │   ├── useScrollToTop.ts # 滾動到頂部
│   │   └── useDynamicBackground.ts # 動態背景
│   │
│   ├── utils/                # 工具函數
│   │   ├── errorTracking.ts  # 錯誤追蹤
│   │   ├── security.ts       # 安全工具
│   │   └── motion.ts         # 動畫工具
│   │
│   ├── config/               # 配置檔案
│   │   └── seo.ts            # SEO 配置
│   │
│   ├── test/                 # 測試檔案
│   │   ├── __tests__/        # 測試用例
│   │   └── setup.ts          # 測試設置
│   │
│   ├── App.tsx               # 應用入口
│   ├── index.tsx             # 應用啟動
│   ├── index.css             # 全域樣式
│   └── vite-env.d.ts         # Vite 類型定義
│
├── scripts/                  # 腳本檔案
│   ├── generate-sitemap.js   # Sitemap 生成腳本
│   └── security-check.js     # 安全檢查腳本
│
├── docs/                     # 文檔檔案
│   ├── ARCHITECTURE.md       # 技術架構文檔（本文件）
│   ├── CHANGELOG.md          # 更新日誌
│   ├── CONTRIBUTING.md       # 貢獻指南
│   ├── DEPLOYMENT.md         # 部署指南
│   └── SECURITY.md           # 安全文檔
│
├── _redirects                # Netlify 轉址規則
├── vercel.json               # Vercel 配置
├── vite.config.ts            # Vite 配置
├── tsconfig.json             # TypeScript 配置
├── tailwind.config.js        # Tailwind 配置
├── eslint.config.js          # ESLint 配置
├── package.json              # 專案依賴
└── README.md                 # 專案說明
```

---

## 核心功能

### 1. 路由系統

使用 React Router DOM 實現客戶端路由，支援：
- 動態路由配置
- 路由級別的代碼分割（懶加載）
- 路由守衛和權限控制
- 404 錯誤處理

**主要路由：**
- `/` - 首頁
- `/about/*` - 關於我們相關頁面
- `/privacy/*` - 隱私政策相關頁面
- `/support/*` - 支援服務相關頁面
- `/community/*` - 社群相關頁面
- `/tutorgo` - Tutor Go 頁面
- `*` - 404 頁面

### 2. 錯誤處理

- **ErrorBoundary**：捕獲 React 組件樹中的錯誤
- **Sentry 整合**：自動追蹤和報告錯誤
- **全域錯誤處理器**：捕獲未處理的異常

### 3. SEO 優化

- **動態 Meta 標籤**：使用 React Helmet Async
- **Sitemap 生成**：自動生成網站地圖
- **robots.txt**：搜尋引擎爬蟲指引
- **結構化數據**：Open Graph 和 Twitter Cards

### 4. 安全機制

- **CSP（內容安全政策）**：防止 XSS 攻擊
- **安全標頭**：HSTS、X-Frame-Options 等
- **SRI（子資源完整性）**：驗證外部資源
- **安全監控組件**：實時顯示安全狀態

### 5. 性能優化

- **代碼分割**：路由級別的懶加載
- **資源優化**：圖片壓縮和格式優化
- **快取策略**：靜態資源長期快取
- **Bundle 分析**：使用 vite-bundle-analyzer

---

## 路由系統

### 路由配置

路由配置位於 `src/App.tsx`，使用 React Router 的嵌套路由結構：

```typescript
<Routes>
  <Route element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path='/service' element={<Service />} />
    <Route path='/tutorgo' element={<TutorGo />} />
    {/* ... 其他路由 ... */}
  </Route>
  <Route path='*' element={<NotFound />} />
</Routes>
```

### SEO 配置

每個路由的 SEO 資訊配置在 `src/config/seo.ts`：

```typescript
export const ROUTE_META: Record<string, RouteMeta> = {
  '/': {
    title: 'HYJdevelop - 創新科技與社群平台',
    description: '...',
  },
  // ...
};
```

### 動態 Meta 標籤

使用 React Helmet Async 動態設置每個頁面的 Meta 標籤：

```typescript
<Helmet>
  <title>{title}</title>
  <meta name='description' content={description} />
  <meta property='og:title' content={title} />
  {/* ... */}
</Helmet>
```

---

## 狀態管理

目前專案使用 React 內建的狀態管理機制：

- **useState**：組件內部狀態
- **useEffect**：副作用處理
- **Context API**：跨組件狀態共享（如需要）

未來可考慮引入：
- **Zustand**：輕量級狀態管理
- **Redux Toolkit**：複雜狀態管理

---

## 樣式系統

### Tailwind CSS

使用 Tailwind CSS 作為主要的樣式框架：

- **實用優先**：使用工具類別而非自定義 CSS
- **響應式設計**：移動優先的斷點系統
- **自定義配置**：在 `tailwind.config.js` 中配置

### 動畫系統

使用 Framer Motion 實現動畫效果：

- **頁面轉場**：路由切換動畫
- **組件動畫**：進入/退出動畫
- **交互反饋**：按鈕點擊、懸停效果

### 主題系統

- **CSS 變數**：定義主題色彩
- **深色模式**：未來計劃支援
- **自定義字體**：Google Fonts 整合

---

## 安全機制

### 內容安全政策 (CSP)

配置在 `vercel.json` 和 `index.html` 中：

```
Content-Security-Policy: default-src 'self'; 
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.sentry-cdn.com; 
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  ...
```

### 安全標頭

- **Strict-Transport-Security**：強制 HTTPS
- **X-Frame-Options**：防止點擊劫持
- **X-Content-Type-Options**：防止 MIME 類型嗅探
- **X-XSS-Protection**：XSS 防護
- **Referrer-Policy**：引用來源政策
- **Permissions-Policy**：權限政策

### 安全監控

`SecurityMonitor` 組件提供：
- 實時安全標頭狀態顯示
- 安全評分計算
- 安全警告和建議

---

## 性能優化

### 代碼分割

在 `vite.config.ts` 中配置：

```typescript
build: {
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom'],
        router: ['react-router-dom'],
        ui: ['framer-motion', 'lucide-react'],
      },
    },
  },
}
```

### 懶加載

路由級別的懶加載（未來可實現）：

```typescript
const Home = lazy(() => import('src/pages/Home'));
```

### 資源優化

- **圖片優化**：使用現代格式（WebP、AVIF）
- **字體預載入**：關鍵字體預載入
- **CSS 壓縮**：生產環境自動壓縮

### Bundle 分析

使用 `vite-bundle-analyzer` 分析建置大小：

```bash
npm run analyze
```

---

## 錯誤處理

### ErrorBoundary

`ErrorBoundary` 組件捕獲 React 組件樹中的錯誤：

```typescript
<ErrorBoundary>
  <Routes>
    {/* ... */}
  </Routes>
</ErrorBoundary>
```

### Sentry 整合

在 `src/utils/errorTracking.ts` 中配置：

- **錯誤追蹤**：自動捕獲和報告錯誤
- **性能監控**：追蹤頁面載入時間
- **用戶行為追蹤**：記錄用戶操作

### 全域錯誤處理

設置全域錯誤處理器：

```typescript
window.addEventListener('error', handleError);
window.addEventListener('unhandledrejection', handleRejection);
```

---

## SEO 優化

### Meta 標籤

使用 React Helmet Async 動態設置：
- `<title>`
- `<meta name="description">`
- Open Graph 標籤
- Twitter Cards 標籤

### Sitemap

使用 `scripts/generate-sitemap.js` 生成 sitemap.xml

### robots.txt

配置在 `public/robots.txt` 中

### 結構化數據

未來可添加 JSON-LD 結構化數據

---

## 部署架構

### 建置流程

```
原始碼 (src/)
   │
   ▼
Vite 建置
   │
   ▼
代碼分割和優化
   │
   ▼
靜態檔案 (dist/)
   │
   ▼
部署平台 (Netlify/Vercel)
   │
   ▼
CDN 分發
   │
   ▼
用戶瀏覽器
```

### 部署平台

- **Netlify**：自動部署、轉址規則
- **Vercel**：完整的部署配置
- **GitHub Pages**：靜態網站託管
- **自架伺服器**：Nginx 配置

詳細部署說明請參考 [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 開發工作流

### 本地開發

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 類型檢查
npm run type-check

# 代碼檢查
npm run lint

# 格式化代碼
npm run format
```

### 測試

```bash
# 運行測試
npm run test

# 測試覆蓋率
npm run test:coverage

# 測試 UI
npm run test:ui
```

### 建置

```bash
# 生產建置
npm run build

# 預覽建置結果
npm run preview

# 分析建置大小
npm run analyze
```

---

## 未來規劃

### v1.1.0 (計劃中)

- [ ] 多語言支援 (i18n)
- [ ] 深色模式
- [ ] PWA 支援
- [ ] 更多動畫效果

### v1.2.0 (計劃中)

- [ ] 部落格系統
- [ ] 用戶評論功能
- [ ] 搜尋功能
- [ ] 性能優化

### v2.0.0 (計劃中)

- [ ] 後端 API 整合
- [ ] 用戶認證系統
- [ ] 管理後台
- [ ] 資料庫整合

---

## 相關文檔

- [README.md](../README.md) - 專案說明
- [CHANGELOG.md](./CHANGELOG.md) - 更新日誌
- [CONTRIBUTING.md](./CONTRIBUTING.md) - 貢獻指南
- [DEPLOYMENT.md](./DEPLOYMENT.md) - 部署指南
- [SECURITY.md](./SECURITY.md) - 安全文檔

---

**最後更新**：2025-01-20  
**維護者**：HYJdevelop 團隊

