# 網站安全功能使用說明

## 🚀 快速開始

您的網站現在已經配置了全面的安全標頭，包括：

- ✅ 內容安全政策 (CSP)
- ✅ HTTPS 強制 (HSTS)
- ✅ 點擊劫持防護
- ✅ MIME 類型保護
- ✅ XSS 防護
- ✅ 引用來源政策
- ✅ 權限政策

## 🔧 如何使用

### 1. 安全監控組件

在您的 React 應用中，您可以使用 `SecurityMonitor` 組件來監控安全狀態：

```tsx
import SecurityMonitor from './components/SecurityMonitor';

function App() {
  return (
    <div>
      <SecurityMonitor />
    </div>
  );
}
```

### 2. 安全檢查腳本

使用內建的安全檢查腳本來驗證您的網站安全配置：

```bash
# 檢查單個網站
npm run security:check https://yourwebsite.com

# 檢查多個網站
npm run security:check https://site1.com https://site2.com

# 檢查預設網站
npm run security:test
```

### 3. 安全工具函數

在您的代碼中使用安全工具函數：

```tsx
import { 
  validateSecurityConfig, 
  getSecurityRecommendations 
} from './utils/security';

// 檢查安全配置
const warnings = validateSecurityConfig();
console.log('安全警告:', warnings);

// 獲取安全建議
const recommendations = getSecurityRecommendations();
console.log('安全建議:', recommendations);
```

## 📊 安全標頭詳解

### Content-Security-Policy (CSP)

**作用：** 防止 XSS 攻擊和資源注入

**配置：**
```
default-src 'self';
script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.sentry-cdn.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
frame-ancestors 'none';
```

**自定義：** 根據您的需求調整允許的資源來源

### Strict-Transport-Security (HSTS)

**作用：** 強制使用 HTTPS 連接

**配置：**
```
max-age=31536000; includeSubDomains; preload
```

**注意：** 一旦啟用，瀏覽器會記住一年，確保謹慎配置

### X-Frame-Options

**作用：** 防止點擊劫持攻擊

**配置：**
```
DENY
```

**替代方案：** 如果需要允許特定域名嵌入，可以使用 `SAMEORIGIN` 或 `ALLOW-FROM`

## 🛠️ 自定義配置

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

## 🔍 故障排除

### 常見問題

1. **CSP 違規錯誤**
   - 檢查瀏覽器控制台的錯誤訊息
   - 確認資源來源是否在允許列表中
   - 使用 `report-only` 模式進行調試

2. **資源載入失敗**
   - 檢查 CSP 配置是否過於嚴格
   - 確認外部資源的 HTTPS 可用性
   - 測試資源載入是否正常

3. **iframe 嵌入問題**
   - 確認 X-Frame-Options 設置
   - 檢查是否需要允許特定域名嵌入
   - 考慮使用 CSP 的 `frame-ancestors` 指令

### 調試技巧

1. **使用瀏覽器開發者工具**
   - 查看 Network 標籤中的響應標頭
   - 檢查 Security 標籤中的安全狀態
   - 監控 CSP 違規事件

2. **逐步收緊策略**
   - 從寬鬆的 CSP 開始
   - 逐步收緊以達到最佳安全性
   - 使用 `report-only` 模式收集違規報告

## 📈 安全監控

### 自動監控

- 網站包含安全監控組件
- 實時顯示安全標頭狀態
- 提供安全評分和建議

### 手動檢查

- 使用安全檢查腳本
- 線上安全檢查工具
- 瀏覽器開發者工具

## 🎯 最佳實踐

### 1. 定期檢查

- 每週檢查安全標頭狀態
- 監控 CSP 違規報告
- 更新依賴套件

### 2. 安全更新

- 關注安全公告
- 及時修補安全漏洞
- 保持安全配置最新

### 3. 測試驗證

- 定期進行安全掃描
- 測試安全標頭有效性
- 驗證防護措施

## 📚 相關資源

### 文檔

- [SECURITY.md](./SECURITY.md) - 詳細安全配置說明
- [Mozilla CSP 文檔](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [OWASP 安全標頭指南](https://owasp.org/www-project-secure-headers/)

### 工具

- [Security Headers](https://securityheaders.com/) - 線上安全標頭檢查
- [Mozilla Observatory](https://observatory.mozilla.org/) - 網站安全評分
- [SSL Labs](https://www.ssllabs.com/ssltest/) - SSL/TLS 配置測試

### 社群

- [OWASP](https://owasp.org/) - 開放式 Web 應用安全專案
- [Web Security](https://web.dev/security/) - Google Web 安全指南

## 🆘 需要幫助？

如果您遇到問題或需要協助：

1. 檢查本文檔的故障排除部分
2. 查看瀏覽器控制台的錯誤訊息
3. 使用安全檢查腳本進行診斷
4. 聯繫技術支援團隊

---

**記住：** 安全是一個持續的過程，定期檢查和更新是保持網站安全性的關鍵！
