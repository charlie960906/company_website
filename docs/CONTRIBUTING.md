# 貢獻指南

感謝您對 HYJdevelop 官方網站的關注！我們歡迎所有形式的貢獻，包括但不限於代碼、文檔、設計建議和錯誤報告。

## 🤝 如何貢獻

### 報告錯誤
1. 使用 GitHub Issues 報告錯誤
2. 提供詳細的重現步驟
3. 包含瀏覽器版本和作業系統資訊
4. 附上錯誤截圖或日誌

### 功能建議
1. 在 Issues 中提出新功能建議
2. 說明功能的目的和預期效果
3. 討論實現方案和技術細節

### 代碼貢獻
1. Fork 專案
2. 創建功能分支
3. 實現功能或修復錯誤
4. 添加測試
5. 提交 Pull Request

## 🛠 開發環境設置

### 前置需求
- Node.js 18+
- npm 或 yarn
- Git

### 本地開發
```bash
# 克隆專案
git clone https://github.com/your-username/hyjdevelop-website.git
cd hyjdevelop-website

# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev
```

### 環境變數
複製 `env.example` 為 `.env.local`：
```bash
cp env.example .env.local
```

## 📝 代碼規範

### TypeScript
- 使用嚴格的 TypeScript 配置
- 為所有組件定義 Props 介面
- 避免使用 `any` 類型
- 使用有意義的變數和函數名稱

### React 組件
```typescript
interface ComponentProps {
  title: string;
  description?: string;
  onAction?: () => void;
}

const Component: React.FC<ComponentProps> = ({ 
  title, 
  description, 
  onAction 
}) => {
  // 組件實現
};
```

### 樣式指南
- 使用 Tailwind CSS 類別
- 遵循移動優先的響應式設計
- 使用語義化的類別名稱
- 避免內聯樣式

### 動畫效果
- 使用 Framer Motion 實現動畫
- 確保動畫有適當的延遲和緩動
- 支援 `prefers-reduced-motion`
- 避免過度動畫影響用戶體驗

## 🧪 測試指南

### 單元測試
```bash
# 運行所有測試
npm run test

# 運行測試並監視變更
npm run test:watch

# 生成測試覆蓋率報告
npm run test:coverage
```

### 測試規範
- 為所有組件編寫測試
- 測試用戶交互和狀態變更
- 確保測試覆蓋率 > 80%
- 使用有意義的測試描述

### 測試範例
```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Component from './Component';

describe('Component', () => {
  it('should render with title', () => {
    render(<Component title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });
});
```

## 📋 Pull Request 流程

### 創建 PR
1. 確保代碼通過所有測試
2. 更新相關文檔
3. 添加適當的提交訊息
4. 填寫 PR 模板

### PR 模板
```markdown
## 變更類型
- [ ] 錯誤修復
- [ ] 新功能
- [ ] 文檔更新
- [ ] 樣式調整
- [ ] 重構

## 變更描述
簡要描述變更內容

## 測試
- [ ] 本地測試通過
- [ ] 新增測試覆蓋
- [ ] 手動測試完成

## 檢查清單
- [ ] 代碼符合規範
- [ ] 文檔已更新
- [ ] 測試已添加
- [ ] 無控制台錯誤
```

### 代碼審查
- 至少需要一名維護者審查
- 回應審查意見並進行修改
- 確保所有 CI 檢查通過

## 📚 文檔貢獻

### 文檔類型
- README.md 更新
- API 文檔
- 使用指南
- 部署文檔

### 文檔規範
- 使用清晰的標題結構
- 提供代碼範例
- 包含截圖或圖表
- 定期更新過時資訊

## 🎨 設計貢獻

### 設計原則
- 保持一致的視覺風格
- 優先考慮用戶體驗
- 確保可訪問性
- 支援響應式設計

### 設計資源
- 使用 Tailwind CSS 設計系統
- 遵循現有的色彩和字體規範
- 使用 Lucide React 圖標庫
- 保持簡潔和現代化的設計

## 🔒 安全貢獻

### 安全報告
如果您發現安全漏洞，請：
1. **不要**在公開 Issues 中報告
2. 發送郵件至 security@hyjdevelop.com
3. 提供詳細的漏洞描述
4. 等待安全團隊回應

### 安全最佳實踐
- 遵循 OWASP 指南
- 實施適當的輸入驗證
- 使用安全的依賴版本
- 定期更新安全依賴

## 📞 聯絡方式

### 一般問題
- GitHub Issues
- contact@hyjdevelop.com

### 安全問題
- security@hyjdevelop.com

### 技術討論
- GitHub Discussions

## 🙏 致謝

感謝所有為專案做出貢獻的開發者！您的貢獻讓 HYJdevelop 官方網站變得更好。

---

**注意**：參與本專案即表示您同意遵守我們的[行為準則](CODE_OF_CONDUCT.md)。
