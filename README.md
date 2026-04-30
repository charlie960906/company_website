# HYJdevelop 官方網站

HYJdevelop 是一個專注於技術社群建設和網站開發服務的專業團隊。本專案是我們的官方網站，採用現代化的技術棧和最佳實踐構建。

## 🚀 專案特色

- **現代化技術棧**：React 19 + TypeScript + Vite
- **響應式設計**：完美支援手機、平板、桌面裝置
- **動畫效果**：使用 Framer Motion 提供流暢的用戶體驗
- **SEO 優化**：完整的 SEO 配置和 sitemap 生成
- **安全防護**：CSP、SRI、APM 錯誤追蹤等企業級安全措施
- **效能優化**：代碼分割、懶加載、圖片優化

## 🛠 技術棧

### 前端框架
- **React 19** - 最新版本的 React 框架
- **TypeScript** - 類型安全的 JavaScript
- **Vite** - 快速的建置工具

### 樣式和動畫
- **Tailwind CSS** - 實用優先的 CSS 框架
- **Framer Motion** - 流暢的動畫庫
- **Lucide React** - 現代化的圖標庫

### 路由和 SEO
- **React Router DOM** - 客戶端路由
- **React Helmet Async** - 動態 SEO 管理
- **Sitemap** - 自動生成網站地圖

### 安全和監控
- **Sentry** - APM/錯誤追蹤系統
- **CSP** - 內容安全政策
- **SRI** - 子資源完整性檢查

### 開發工具
- **ESLint** - 代碼品質檢查
- **Prettier** - 代碼格式化
- **Vitest** - 單元測試框架

## 📁 專案結構

```
project/
├── public/                 # 靜態資源
│   ├── robots.txt         # 搜尋引擎爬蟲指引
│   ├── sitemap.xml        # 網站地圖
│   └── *.jpg/png          # 圖片資源
├── src/
│   ├── components/        # 共用組件
│   │   ├── Header.tsx     # 導航欄
│   │   ├── Footer.tsx     # 頁尾
│   │   ├── ErrorBoundary.tsx # 錯誤邊界
│   │   ├── SecurityMonitor.tsx # 安全監控
│   │   └── HistoryTimeline.tsx # 時間線
│   ├── pages/            # 頁面組件
│   │   ├── Home.tsx      # 首頁
│   │   ├── about/        # 關於我們
│   │   ├── privacy/      # 隱私政策
│   │   ├── support/      # 支援服務
│   │   └── community/    # 社群相關
│   ├── layouts/          # 佈局組件
│   ├── hooks/            # 自定義 Hooks
│   ├── utils/            # 工具函數
│   │   ├── errorTracking.ts # 錯誤追蹤
│   │   └── security.ts   # 安全工具
│   ├── config/           # 配置檔案
│   └── test/             # 測試檔案
├── _redirects            # Netlify 轉址規則
├── vercel.json           # Vercel 配置
├── scripts/              # 腳本檔案
│   ├── generate-sitemap.js   # Sitemap 生成腳本
│   └── security-check.js     # 安全檢查腳本
├── docs/                 # 文檔檔案
└── package.json          # 專案依賴
```

## 🚀 快速開始

### 環境需求
- Node.js 18+ 
- npm 或 yarn

### 安裝依賴
```bash
npm install
```

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

## 📝 開發指南

### 新增頁面
1. 在 `src/pages/` 創建新的頁面組件
2. 在 `src/App.tsx` 添加路由
3. 在 `src/config/seo.ts` 添加 SEO 配置
4. 更新 `scripts/generate-sitemap.js` 和 `public/sitemap.xml`

### 新增組件
1. 在 `src/components/` 創建組件
2. 使用 TypeScript 定義 Props 介面
3. 添加適當的動畫效果
4. 確保響應式設計

### 樣式指南
- 使用 Tailwind CSS 類別
- 遵循移動優先的響應式設計
- 使用 CSS 變數定義主題色彩
- 確保良好的可訪問性

## 🔧 配置說明

### 環境變數
複製 `env.example` 為 `.env.local` 並配置：
```env
VITE_SENTRY_DSN=your_sentry_dsn
VITE_SITE_URL=https://hyjdevelop.com
```

### SEO 配置
在 `src/config/seo.ts` 中配置各頁面的 SEO 資訊：
```typescript
export const ROUTE_META = {
  '/': {
    title: 'HYJdevelop - 專業網站開發服務',
    description: '...'
  }
}
```

### 安全配置
- CSP 政策在 `src/index.html` 中配置
- 安全標頭在部署平台配置
- Sentry 錯誤追蹤需要配置 DSN

## 🚀 部署指南

### Netlify 部署
1. 連接 GitHub 倉庫
2. 建置命令：`npm run build`
3. 發布目錄：`dist`
4. 環境變數：配置 Sentry DSN

### Vercel 部署
1. 導入 GitHub 倉庫
2. 框架預設：Vite
3. 建置命令：`npm run build`
4. 輸出目錄：`dist`

### 自定義域名
1. 在部署平台配置自定義域名
2. 更新 `env.example` 中的 `VITE_SITE_URL`
3. 更新 `public/robots.txt` 中的 sitemap URL
4. 更新 `scripts/generate-sitemap.js` 中的域名

## 🔒 安全措施

### 內容安全政策 (CSP)
- 防止 XSS 攻擊
- 限制資源載入來源
- 實時監控違規報告

### 子資源完整性 (SRI)
- 驗證外部資源完整性
- 防止資源被篡改
- 自動生成 SRI hash

### 錯誤追蹤 (APM)
- Sentry 整合
- 性能監控
- 用戶行為追蹤
- 即時錯誤警報

## 📊 性能優化

### 代碼分割
- 路由級別的代碼分割
- 組件懶加載
- 動態導入

### 資源優化
- 圖片壓縮和格式優化
- 字體預載入
- CSS 和 JS 壓縮

### 快取策略
- 靜態資源長期快取
- API 響應快取
- Service Worker 支援

## 🧪 測試

### 單元測試
```bash
npm run test
```

### 測試覆蓋率
```bash
npm run test:coverage
```

### 測試 UI
```bash
npm run test:ui
```

## 📚 文檔和資源

### 專案文檔
- [技術架構文檔](./docs/ARCHITECTURE.md) - 完整的技術架構說明
- [更新日誌](./docs/CHANGELOG.md) - 版本變更記錄
- [貢獻指南](./docs/CONTRIBUTING.md) - 開發規範和流程
- [部署指南](./docs/DEPLOYMENT.md) - 多平台部署說明
- [安全文檔](./docs/SECURITY.md) - 安全配置和使用指南

### 官方文檔
- [React 文檔](https://react.dev/)
- [TypeScript 文檔](https://www.typescriptlang.org/)
- [Vite 文檔](https://vitejs.dev/)
- [Tailwind CSS 文檔](https://tailwindcss.com/)

### 工具文檔
- [Framer Motion](https://www.framer.com/motion/)
- [React Router](https://reactrouter.com/)
- [Sentry](https://sentry.io/for/react/)

## 🤝 貢獻指南

### 開發流程
1. Fork 專案
2. 創建功能分支
3. 提交變更
4. 發起 Pull Request

### 代碼規範
- 使用 TypeScript
- 遵循 ESLint 規則
- 使用 Prettier 格式化
- 添加適當的註釋

### 提交訊息
使用 [Conventional Commits](https://www.conventionalcommits.org/) 格式：
```
feat: 新增功能
fix: 修復錯誤
docs: 更新文檔
style: 代碼格式調整
refactor: 重構代碼
test: 新增測試
chore: 建置過程或輔助工具的變動
```

## 📞 聯絡資訊

- **網站**：https://hyjdevelop.com
- **郵箱**：contact@hyjdevelop.com
- **安全問題**：security@hyjdevelop.com

## 📄 授權

本專案採用 MIT 授權條款。詳見 [LICENSE](LICENSE) 檔案。

## 🔄 更新日誌

### v1.0.0 (2025-01-20)
- 初始版本發布
- 完整的網站功能
- 安全防護系統
- 響應式設計
- SEO 優化

---

**HYJdevelop** - 專業的網站開發服務，致力於為客戶提供高品質的技術解決方案。
