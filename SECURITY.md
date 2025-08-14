# 網站安全配置說明

## 概述

本文檔詳細說明了網站的安全配置，包括所有啟用的安全標頭及其作用。這些安全措施可以有效防止各種常見的網路攻擊。

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

### 3. 點擊劫持防護 (X-Frame-Options)

**標頭值：**
```
X-Frame-Options: DENY
```

**作用：**
- 完全禁止網站被嵌入到 iframe 中
- 防止點擊劫持攻擊

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

## 安全配置檢查

### 自動檢查

網站包含一個安全監控組件，可以：
- 顯示所有安全標頭的狀態
- 提供安全評分
- 顯示安全警告和建議
- 監控安全配置的變化

### 手動檢查

您可以使用以下工具檢查安全標頭：

1. **瀏覽器開發者工具**
   - 查看 Network 標籤中的響應標頭
   - 檢查 Security 標籤中的安全狀態

2. **線上安全檢查工具**
   - [Security Headers](https://securityheaders.com/)
   - [Mozilla Observatory](https://observatory.mozilla.org/)
   - [SSL Labs](https://www.ssllabs.com/ssltest/)

## 安全建議

### 定期維護

1. **更新依賴套件**
   - 定期檢查並更新 npm 套件
   - 關注安全公告和 CVE 報告

2. **監控安全標頭**
   - 定期檢查安全標頭是否正確設置
   - 監控 CSP 違規報告

3. **安全掃描**
   - 定期進行安全掃描
   - 進行滲透測試

### 進階安全措施

1. **CSP 報告機制**
   - 實施 CSP 違規報告收集
   - 分析並處理安全事件

2. **速率限制**
   - 實施 API 速率限制
   - 防止暴力攻擊

3. **日誌記錄**
   - 啟用安全事件日誌
   - 監控異常活動

## 故障排除

### 常見問題

1. **CSP 違規**
   - 檢查瀏覽器控制台的錯誤訊息
   - 調整 CSP 策略以允許必要的資源

2. **資源載入失敗**
   - 確認資源來源是否在 CSP 允許列表中
   - 檢查 HTTPS 連接是否正常

3. **iframe 嵌入問題**
   - 確認 X-Frame-Options 設置
   - 檢查是否需要允許特定域名嵌入

### 調試技巧

1. **使用 CSP 報告模式**
   - 在開發階段使用 `report-only` 模式
   - 收集違規報告以調整策略

2. **逐步收緊策略**
   - 從寬鬆的 CSP 開始
   - 逐步收緊以達到最佳安全性

## 聯繫支援

如果您遇到安全配置問題或需要協助，請聯繫：
- 技術支援團隊
- 安全專家
- 相關文檔和資源

---

**注意：** 安全配置應該根據您的具體需求和環境進行調整。建議在實施前進行充分測試，確保不會影響網站功能。
