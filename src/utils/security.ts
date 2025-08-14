/**
 * 網站安全配置工具
 * 提供各種安全標頭的配置和說明
 */

export interface SecurityHeaders {
  'X-Content-Type-Options': string;
  'X-Frame-Options': string;
  'X-XSS-Protection': string;
  'Referrer-Policy': string;
  'Permissions-Policy': string;
  'Strict-Transport-Security': string;
  'Content-Security-Policy': string;
}

/**
 * 安全標頭配置說明
 */
export const SECURITY_HEADERS_EXPLANATION = {
  'X-Content-Type-Options': {
    value: 'nosniff',
    description: '防止瀏覽器進行 MIME 類型嗅探，強制使用伺服器指定的 Content-Type',
    protection: '防止 MIME 類型混淆攻擊'
  },
  'X-Frame-Options': {
    value: 'DENY',
    description: '完全禁止網站被嵌入到 iframe 中',
    protection: '防止點擊劫持攻擊'
  },
  'X-XSS-Protection': {
    value: '1; mode=block',
    description: '啟用瀏覽器內建的 XSS 過濾器，並在檢測到攻擊時阻止頁面載入',
    protection: '提供額外的 XSS 防護層'
  },
  'Referrer-Policy': {
    value: 'strict-origin-when-cross-origin',
    description: '控制引用來源資訊的傳送策略，平衡隱私和功能',
    protection: '防止敏感資訊洩露'
  },
  'Permissions-Policy': {
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()',
    description: '限制瀏覽器功能的權限，禁用可能被濫用的 API',
    protection: '防止惡意網站濫用瀏覽器功能'
  },
  'Strict-Transport-Security': {
    value: 'max-age=31536000; includeSubDomains; preload',
    description: '強制使用 HTTPS 連接，有效期一年，包含子域名，支援預載入列表',
    protection: '防止中間人攻擊和協議降級'
  },
  'Content-Security-Policy': {
    value: 'default-src \'self\'; script-src \'self\' \'unsafe-inline\' \'unsafe-eval\' https://js.sentry-cdn.com https://browser.sentry-cdn.com; style-src \'self\' \'unsafe-inline\' https://fonts.googleapis.com; font-src \'self\' https://fonts.gstatic.com; img-src \'self\' data: https:; connect-src \'self\' https://o450000000000000.ingest.sentry.io; frame-ancestors \'none\'; base-uri \'self\'; form-action \'self\'; object-src \'none\'; upgrade-insecure-requests',
    description: '內容安全政策，控制資源載入來源，防止 XSS 和注入攻擊',
    protection: '防止惡意腳本執行和資源載入'
  }
};

/**
 * 生成 CSP 報告 URI（可選）
 */
export const generateCSPReportUri = (reportUri: string) => {
  return `report-uri ${reportUri}; report-to csp-endpoint`;
};

/**
 * 安全檢查函數
 */
export const validateSecurityConfig = (): string[] => {
  const warnings: string[] = [];
  
  // 檢查是否使用 HTTPS
  if (typeof window !== 'undefined' && window.location.protocol !== 'https:') {
    warnings.push('建議在生產環境中使用 HTTPS');
  }
  
  // 檢查 CSP 配置
  const csp = SECURITY_HEADERS_EXPLANATION['Content-Security-Policy'].value;
  if (csp.includes("'unsafe-inline'") || csp.includes("'unsafe-eval'")) {
    warnings.push('CSP 中使用了 unsafe-inline 和 unsafe-eval，建議在生產環境中移除');
  }
  
  return warnings;
};

/**
 * 安全標頭測試函數
 */
export const testSecurityHeaders = async (): Promise<Record<string, string>> => {
  try {
    await fetch(window.location.origin, {
      method: 'HEAD',
      mode: 'no-cors'
    });
    
    // 注意：由於 CORS 限制，實際的標頭檢查需要在伺服器端進行
    // 這裡提供一個基本的檢查框架
    return {
      'X-Content-Type-Options': '無法檢查（CORS 限制）',
      'X-Frame-Options': '無法檢查（CORS 限制）',
      'X-XSS-Protection': '無法檢查（CORS 限制）',
      'Referrer-Policy': '無法檢查（CORS 限制）',
      'Permissions-Policy': '無法檢查（CORS 限制）',
      'Strict-Transport-Security': '無法檢查（CORS 限制）',
      'Content-Security-Policy': '無法檢查（CORS 限制）'
    };
  } catch {
    return {
      error: '無法測試安全標頭'
    };
  }
};

/**
 * 安全建議
 */
export const getSecurityRecommendations = () => {
  return [
    '定期更新依賴套件以修補安全漏洞',
    '監控安全標頭是否正確設置',
    '考慮實施 CSP 報告機制',
    '定期進行安全掃描和滲透測試',
    '實施速率限制防止暴力攻擊',
    '啟用日誌記錄和監控',
    '定期備份重要數據',
    '實施多因素認證（如果適用）'
  ];
};
