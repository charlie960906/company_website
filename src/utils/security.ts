// 安全工具函數

// CSP 內容安全政策驗證
export const validateCSP = (cspHeader: string): boolean => {
  const requiredDirectives = [
    'default-src',
    'script-src',
    'style-src',
    'img-src',
    'connect-src'
  ];
  
  return requiredDirectives.every(directive => 
    cspHeader.includes(directive)
  );
};

// 生成 CSP 報告 URI
export const generateCSPReportURI = (endpoint: string): string => {
  return `report-uri ${endpoint}; report-to ${endpoint}`;
};

// SRI 子資源完整性檢查
export const generateSRI = async (content: string, algorithm: 'sha256' | 'sha384' | 'sha512' = 'sha256'): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(content);
  const hashBuffer = await crypto.subtle.digest(algorithm, data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return `${algorithm}-${hashHex}`;
};

// 驗證 SRI hash
export const verifySRI = async (content: string, sriHash: string): Promise<boolean> => {
  try {
    const expectedHash = await generateSRI(content);
    return expectedHash === sriHash;
  } catch (error) {
    console.error('SRI 驗證失敗:', error);
    return false;
  }
};

// 為外部資源生成 SRI 屬性
export const generateSRIForExternalResource = async (url: string): Promise<string> => {
  try {
    const response = await fetch(url);
    const content = await response.text();
    return await generateSRI(content);
  } catch (error) {
    console.error('生成外部資源 SRI 失敗:', error);
    return '';
  }
};

// XSS 防護 - 清理 HTML 內容
export const sanitizeHTML = (html: string): string => {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
};

// 更嚴格的 HTML 清理
export const sanitizeHTMLStrict = (html: string): string => {
  // 移除所有 script 標籤
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  // 移除所有事件處理器
  html = html.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, '');
  // 移除 javascript: 協議
  html = html.replace(/javascript:/gi, '');
  // 移除 data: 協議（除了圖片）
  html = html.replace(/data:text\/html/gi, '');
  return html;
};

// CSRF Token 生成
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// 安全標頭檢查
export const checkSecurityHeaders = async (url: string): Promise<Record<string, string>> => {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    const headers = response.headers;
    
    return {
      'Content-Security-Policy': headers.get('Content-Security-Policy') || '未設定',
      'X-Frame-Options': headers.get('X-Frame-Options') || '未設定',
      'X-Content-Type-Options': headers.get('X-Content-Type-Options') || '未設定',
      'X-XSS-Protection': headers.get('X-XSS-Protection') || '未設定',
      'Referrer-Policy': headers.get('Referrer-Policy') || '未設定',
      'Strict-Transport-Security': headers.get('Strict-Transport-Security') || '未設定',
      'Permissions-Policy': headers.get('Permissions-Policy') || '未設定',
    };
  } catch (error) {
    console.error('安全標頭檢查失敗:', error);
    return {};
  }
};

// 密碼強度檢查
export const checkPasswordStrength = (password: string): {
  score: number;
  feedback: string[];
} => {
  const feedback: string[] = [];
  let score = 0;
  
  // 長度檢查
  if (password.length >= 8) {
    score += 1;
  } else {
    feedback.push('密碼長度至少需要 8 個字元');
  }
  
  // 包含數字
  if (/\d/.test(password)) {
    score += 1;
  } else {
    feedback.push('密碼需要包含數字');
  }
  
  // 包含小寫字母
  if (/[a-z]/.test(password)) {
    score += 1;
  } else {
    feedback.push('密碼需要包含小寫字母');
  }
  
  // 包含大寫字母
  if (/[A-Z]/.test(password)) {
    score += 1;
  } else {
    feedback.push('密碼需要包含大寫字母');
  }
  
  // 包含特殊字元
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    score += 1;
  } else {
    feedback.push('密碼需要包含特殊字元');
  }
  
  return { score, feedback };
};

// 輸入驗證
export const validateInput = {
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  
  phone: (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  },
  
  url: (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },
  
  sanitizeString: (str: string): string => {
    return str.replace(/[<>]/g, '');
  }
};

// 安全隨機字串生成
export const generateSecureRandomString = (length: number = 32): string => {
  const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  
  for (let i = 0; i < length; i++) {
    result += charset[array[i] % charset.length];
  }
  
  return result;
};

// 安全雜湊函數
export const hashString = async (str: string, algorithm: 'SHA-256' | 'SHA-384' | 'SHA-512' = 'SHA-256'): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest(algorithm, data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};

// 生成安全的 UUID
export const generateSecureUUID = (): string => {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  
  // 設置版本 (4) 和變體位
  array[6] = (array[6] & 0x0f) | 0x40;
  array[8] = (array[8] & 0x3f) | 0x80;
  
  const hex = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;
};

// 檢查是否為安全上下文
export const isSecureContext = (): boolean => {
  return typeof window !== 'undefined' && window.isSecureContext;
};

// 檢查 HTTPS
export const isHTTPS = (): boolean => {
  return typeof window !== 'undefined' && window.location.protocol === 'https:';
};

// 生成安全的 CSP 報告
export const generateCSPViolationReport = (violation: any): string => {
  return JSON.stringify({
    'csp-report': {
      'document-uri': violation.documentURI,
      'referrer': violation.referrer,
      'violated-directive': violation.violatedDirective,
      'original-policy': violation.originalPolicy,
      'blocked-uri': violation.blockedURI,
      'source-file': violation.sourceFile,
      'line-number': violation.lineNumber,
      'column-number': violation.columnNumber,
      'status-code': violation.statusCode,
    }
  });
};
