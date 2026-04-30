# 網站安全配置與使用指南

本文檔詳細說明 HYJdevelop 官方網站的安全配置、使用方法和最佳實踐。

## 📋 目錄

1. [快速開始](#快速開始)
2. [已啟用的安全標頭](#已啟用的安全標頭)
3. [安全監控組件](#安全監控組件)
4. [安全檢查工具](#安全檢查工具)
5. [自定義配置](#自定義配置)
6. [故障排除](#故障排除)
7. [最佳實踐](#最佳實踐)
8. [相關資源](#相關資源)

---

## 快速開始

您的網站現在已經配置了全面的安全標頭，包括：

- ✅ 內容安全政策 (CSP)
- ✅ HTTPS 強制 (HSTS)
- ✅ 點擊劫持防護
- ✅ MIME 類型保護
- ✅ XSS 防護
- ✅ 引用來源政策
- ✅ 權限政策

---

## 已啟用的安全標頭

### 1. 內容安全政策 (Content-Security-Policy)

**標頭值：**
```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.sentry-cdn.com https://browser.sentry-cdn.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://o450000000000000.ingest.sentry.io; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'; upgrade-insecure-requests
```

**作用：**
- 防止 XSS 攻擊
- 控制資源載入來源
- 防止惡意腳本執行
- 限制外部資源載入

**配置說明：**
- `default-src 'self'`: 預設只允許同源資源
- `script-src`: 允許的腳本來源（包括 Sentry 錯誤追蹤）
- `style-src`: 允許的樣式來源（包括 Google Fonts）
- `frame-ancestors 'none'`: 完全禁止 iframe 嵌入
- `object-src 'none'`: 禁止 object 和 embed 標籤

**自定義：** 根據您的需求調整允許的資源來源

### 2. HTTPS 強制 (Strict-Transport-Security)

**標頭值：**
```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

**作用：**
- 強制使用 HTTPS 連接
- 防止協議降級攻擊
- 包含所有子域名

**配置說明：**
- `max-age=31536000`: 有效期一年
- `includeSubDomains`: 包含所有子域名
- `preload`: 支援瀏覽器預載入列表

**注意：** 一旦啟用，瀏覽器會記住一年，確保謹慎配置

### 3. 點擊劫持防護 (X-Frame-Options)

**標頭值：**
```
X-Frame-Options: DENY
```

**作用：**
- 完全禁止網站被嵌入到 iframe 中
- 防止點擊劫持攻擊

**替代方案：** 如果需要允許特定域名嵌入，可以使用 `SAMEORIGIN` 或 `ALLOW-FROM`

### 4. MIME 類型保護 (X-Content-Type-Options)

**標頭值：**
```
X-Content-Type-Options: nosniff
```

**作用：**
- 防止瀏覽器進行 MIME 類型嗅探
- 強制使用伺服器指定的 Content-Type
- 防止 MIME 類型混淆攻擊

### 5. XSS 防護 (X-XSS-Protection)

**標頭值：**
```
X-XSS-Protection: 1; mode=block
```

**作用：**
- 啟用瀏覽器內建的 XSS 過濾器
- 在檢測到攻擊時阻止頁面載入
- 提供額外的 XSS 防護層

### 6. 引用來源政策 (Referrer-Policy)

**標頭值：**
```
Referrer-Policy: strict-origin-when-cross-origin
```

**作用：**
- 控制引用來源資訊的傳送策略
- 平衡隱私和功能需求
- 防止敏感資訊洩露

### 7. 權限政策 (Permissions-Policy)

**標頭值：**
```
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()
```

**作用：**
- 限制瀏覽器功能的權限
- 禁用可能被濫用的 API
- 防止惡意網站濫用瀏覽器功能

---

## 安全監控組件

### 使用 SecurityMonitor 組件

在您的 React 應用中，您可以使用 `SecurityMonitor` 組件來監控安全狀態：

```tsx
import SecurityMonitor from 'src/components/SecurityMonitor';

function App() {
  return (
    <div>
      <SecurityMonitor />
    </div>
  );
}
```

### 功能特性

`SecurityMonitor` 組件提供以下功能：

- **實時安全狀態顯示**：顯示所有安全標頭的狀態
- **安全評分**：計算並顯示安全評分
- **安全警告**：顯示安全警告和建議
- **配置監控**：監控安全配置的變化

### 安全工具函數

在您的代碼中使用安全工具函數：

```tsx
import { 
  validateSecurityConfig, 
  getSecurityRecommendations 
} from 'src/utils/security';

// 檢查安全配置
const warnings = validateSecurityConfig();
console.log('安全警告:', warnings);

// 獲取安全建議
const recommendations = getSecurityRecommendations();
console.log('安全建議:', recommendations);
```

---

## 安全檢查工具

### 使用安全檢查腳本

使用內建的安全檢查腳本來驗證您的網站安全配置：

```bash
# 檢查單個網站
npm run security:check https://yourwebsite.com

# 檢查多個網站
npm run security:check https://site1.com https://site2.com

# 檢查預設網站
npm run security:test
```

### 手動檢查工具

您可以使用以下工具檢查安全標頭：

1. **瀏覽器開發者工具**
   - 查看 Network 標籤中的響應標頭
   - 檢查 Security 標籤中的安全狀態

2. **線上安全檢查工具**
   - [Security Headers](https://securityheaders.com/) - 線上安全標頭檢查
   - [Mozilla Observatory](https://observatory.mozilla.org/) - 網站安全評分
   - [SSL Labs](https://www.ssllabs.com/ssltest/) - SSL/TLS 配置測試

---

## 自定義配置

### 修改安全標頭

編輯 `vercel.json` 文件來調整安全標頭：

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "您的 CSP 配置"
        }
      ]
    }
  ]
}
```

### 添加新的安全標頭

在 `vercel.json` 中添加新的安全標頭：

```json
{
  "key": "X-Custom-Security-Header",
  "value": "您的值"
}
```

### CSP 配置調整

根據您的需求調整 CSP 策略：

```javascript
// 允許特定域名
script-src 'self' https://trusted-domain.com;

// 允許內聯腳本（不推薦，但必要時可使用）
script-src 'self' 'unsafe-inline';

// 允許 eval（不推薦，僅在必要時使用）
script-src 'self' 'unsafe-eval';
```

---

## 故障排除

### 常見問題

#### 1. CSP 違規錯誤

**問題：** 瀏覽器控制台顯示 CSP 違規錯誤

**解決方案：**
- 檢查瀏覽器控制台的錯誤訊息
- 確認資源來源是否在 CSP 允許列表中
- 調整 CSP 策略以允許必要的資源
- 使用 `report-only` 模式進行調試

#### 2. 資源載入失敗

**問題：** 外部資源（如字體、圖片）無法載入

**解決方案：**
- 確認資源來源是否在 CSP 允許列表中
- 檢查 HTTPS 連接是否正常
- 測試資源載入是否正常
- 檢查 CSP 配置是否過於嚴格

#### 3. iframe 嵌入問題

**問題：** 網站無法被嵌入到 iframe 中

**解決方案：**
- 確認 X-Frame-Options 設置
- 檢查是否需要允許特定域名嵌入
- 考慮使用 CSP 的 `frame-ancestors` 指令

### 調試技巧

#### 1. 使用 CSP 報告模式

在開發階段使用 `report-only` 模式：

```html
<meta http-equiv="Content-Security-Policy-Report-Only" 
      content="default-src 'self'; ...">
```

#### 2. 逐步收緊策略

- 從寬鬆的 CSP 開始
- 逐步收緊以達到最佳安全性
- 使用 `report-only` 模式收集違規報告

#### 3. 使用瀏覽器開發者工具

- 查看 Network 標籤中的響應標頭
- 檢查 Security 標籤中的安全狀態
- 監控 CSP 違規事件

---

## 最佳實踐

### 1. 定期檢查

- **每週檢查**：檢查安全標頭狀態
- **監控違規**：監控 CSP 違規報告
- **更新依賴**：定期更新 npm 套件

### 2. 安全更新

- **關注公告**：關注安全公告和 CVE 報告
- **及時修補**：及時修補安全漏洞
- **保持最新**：保持安全配置最新

### 3. 測試驗證

- **定期掃描**：定期進行安全掃描
- **測試標頭**：測試安全標頭有效性
- **驗證防護**：驗證防護措施

### 4. 進階安全措施

#### CSP 報告機制

實施 CSP 違規報告收集：

```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; report-uri /csp-report">
```

#### 速率限制

實施 API 速率限制，防止暴力攻擊

#### 日誌記錄

啟用安全事件日誌，監控異常活動

---

## 安全配置檢查

### 自動檢查

網站包含一個安全監控組件，可以：
- 顯示所有安全標頭的狀態
- 提供安全評分
- 顯示安全警告和建議
- 監控安全配置的變化

### 手動檢查清單

- [ ] 所有安全標頭已正確設置
- [ ] CSP 策略已測試並驗證
- [ ] HTTPS 已強制啟用
- [ ] 安全標頭在生產環境中正常工作
- [ ] 定期檢查安全配置

---

## 相關資源

### 文檔

- [Mozilla CSP 文檔](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [OWASP 安全標頭指南](https://owasp.org/www-project-secure-headers/)
- [Web.dev 安全指南](https://web.dev/security/)

### 工具

- [Security Headers](https://securityheaders.com/) - 線上安全標頭檢查
- [Mozilla Observatory](https://observatory.mozilla.org/) - 網站安全評分
- [SSL Labs](https://www.ssllabs.com/ssltest/) - SSL/TLS 配置測試

### 社群

- [OWASP](https://owasp.org/) - 開放式 Web 應用安全專案
- [Web Security](https://web.dev/security/) - Google Web 安全指南

---

## 需要幫助？

如果您遇到問題或需要協助：

1. 檢查本文檔的故障排除部分
2. 查看瀏覽器控制台的錯誤訊息
3. 使用安全檢查腳本進行診斷
4. 聯繫技術支援團隊：security@hyjdevelop.com

---

**注意：** 
- 安全配置應該根據您的具體需求和環境進行調整
- 建議在實施前進行充分測試，確保不會影響網站功能
- 安全是一個持續的過程，定期檢查和更新是保持網站安全性的關鍵

**最後更新**：2025-01-20  
**維護者**：HYJdevelop 團隊
