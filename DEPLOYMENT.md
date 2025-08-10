# 部署指南

本文件詳細說明如何將 HYJdevelop 官方網站部署到不同的平台。

## 🚀 部署平台

### Netlify (推薦)

#### 自動部署
1. 連接 GitHub 倉庫到 Netlify
2. 配置建置設定：
   - **建置命令**：`npm run build`
   - **發布目錄**：`dist`
   - **Node.js 版本**：18

#### 環境變數
在 Netlify 控制台設置：
```env
VITE_SENTRY_DSN=your_sentry_dsn
VITE_SITE_URL=https://your-domain.com
NODE_ENV=production
```

#### 自定義域名
1. 在 Netlify 控制台添加自定義域名
2. 配置 DNS 記錄指向 Netlify
3. 啟用 HTTPS（自動）

#### 轉址規則
專案根目錄的 `_redirects` 檔案會自動處理：
```
/robots.txt    /robots.txt    200
/sitemap.xml   /sitemap.xml   200
/slrc          /tutorgo       303
/*             /index.html    200
```

### Vercel

#### 自動部署
1. 導入 GitHub 倉庫到 Vercel
2. 框架預設：Vite
3. 建置命令：`npm run build`
4. 輸出目錄：`dist`

#### 環境變數
在 Vercel 控制台設置：
```env
VITE_SENTRY_DSN=your_sentry_dsn
VITE_SITE_URL=https://your-domain.com
```

#### 配置檔案
`vercel.json` 已配置：
```json
{
  "redirects": [
    { "source": "/slrc", "destination": "/tutorgo", "statusCode": 303 }
  ],
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/robots.txt",
      "headers": [{ "key": "Content-Type", "value": "text/plain" }]
    }
  ]
}
```

### GitHub Pages

#### 手動部署
1. 建置專案：`npm run build`
2. 將 `dist` 目錄內容推送到 `gh-pages` 分支
3. 在倉庫設定中啟用 GitHub Pages

#### 自動化部署
使用 GitHub Actions：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 自架伺服器

#### Nginx 配置
```nginx
server {
    listen 80;
    server_name your-domain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.com;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    root /var/www/hyjdevelop-website/dist;
    index index.html;
    
    # 安全標頭
    add_header X-Frame-Options "DENY" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    
    # 轉址規則
    location = /slrc {
        return 303 /tutorgo;
    }
    
    # 靜態檔案快取
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # SPA 路由
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

#### Docker 部署
創建 `Dockerfile`：
```dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🔧 環境配置

### 環境變數
複製 `env.example` 並配置：

```env
# Sentry 錯誤追蹤
VITE_SENTRY_DSN=https://your-sentry-dsn@sentry.io/project-id

# 網站 URL
VITE_SITE_URL=https://hyjdevelop.com

# 環境
NODE_ENV=production
```

### 建置優化
```bash
# 生產建置
npm run build

# 分析建置大小
npm run analyze

# 預覽建置結果
npm run preview
```

## 🔒 安全配置

### HTTPS 強制
確保所有部署都使用 HTTPS：
- Netlify/Vercel：自動啟用
- 自架伺服器：配置 SSL 憑證

### 安全標頭
配置以下安全標頭：
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

### CSP 配置
在 `src/index.html` 中已配置 CSP 政策，可根據需要調整。

## 📊 監控和分析

### Sentry 配置
1. 創建 Sentry 專案
2. 獲取 DSN
3. 配置環境變數
4. 監控錯誤和性能

### 性能監控
- 使用 Lighthouse 進行性能測試
- 監控 Core Web Vitals
- 設置性能預算

### 可用性監控
- 設置 Uptime 監控
- 配置錯誤警報
- 監控用戶體驗指標

## 🔄 CI/CD 流程

### GitHub Actions
```yaml
name: CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run test
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🚨 故障排除

### 常見問題

#### 建置失敗
- 檢查 Node.js 版本 (需要 18+)
- 清除 node_modules 並重新安裝
- 檢查環境變數配置

#### 路由問題
- 確保 SPA 路由配置正確
- 檢查轉址規則
- 驗證 404 頁面

#### 性能問題
- 分析建置大小
- 檢查圖片優化
- 驗證快取配置

#### 安全問題
- 檢查 CSP 違規
- 驗證安全標頭
- 確認 HTTPS 配置

### 日誌和調試
```bash
# 開發模式調試
npm run dev

# 建置調試
npm run build --debug

# 預覽調試
npm run preview
```

## 📞 支援

如果遇到部署問題：
1. 檢查本文件
2. 查看 GitHub Issues
3. 聯絡技術團隊：contact@hyjdevelop.com

---

**注意**：部署前請確保所有測試通過，並在測試環境中驗證功能正常。
