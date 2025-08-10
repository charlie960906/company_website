// 錯誤追蹤工具配置
import * as Sentry from '@sentry/react';

// Sentry 配置：從環境變數讀取
const SENTRY_DSN: string | undefined = (import.meta as any)?.env?.VITE_SENTRY_DSN;

export const initErrorTracking = () => {
  if (typeof window !== 'undefined' && SENTRY_DSN) {
    try {
      Sentry.init({
        dsn: SENTRY_DSN,
        // 設置此選項為 true 將發送默認 PII 數據到 Sentry
        // 例如，事件上的自動 IP 地址收集
        sendDefaultPii: true,
        // 環境配置
        environment: process.env.NODE_ENV || 'development',
        // 性能監控
        tracesSampleRate: 0.2,
        // 錯誤採樣率
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 1.0,
        // 錯誤過濾
        beforeSend(event) {
          // 過濾掉開發環境的錯誤
          if (process.env.NODE_ENV === 'development') {
            return null;
          }
          return event;
        },
      });
      console.log('Sentry 初始化成功');
    } catch (error) {
      console.warn('Sentry 初始化失敗:', error);
    }
  } else if (!SENTRY_DSN) {
    console.warn('[Sentry] 未設定 VITE_SENTRY_DSN，略過初始化');
  }
};

export const captureError = (error: Error, context?: Record<string, unknown>) => {
  if (typeof window !== 'undefined') {
    Sentry.captureException(error, {
      extra: context,
      tags: {
        errorType: 'application_error',
        component: context?.component || 'unknown',
      },
    });
  }
};

export const captureMessage = (
  message: string,
  level: 'info' | 'warning' | 'error' = 'info'
) => {
  if (typeof window !== 'undefined') {
    Sentry.captureMessage(message, level);
  }
};

// 新增：用戶行為追蹤
export const trackUserAction = (action: string, data?: Record<string, unknown>) => {
  if (typeof window !== 'undefined') {
    Sentry.addBreadcrumb({
      category: 'user_action',
      message: action,
      data,
      level: 'info',
    });
  }
};

// 新增：頁面載入時間追蹤
export const trackPageLoad = (pageName: string) => {
  if (typeof window !== 'undefined') {
    const loadTime = performance.now();
    // 使用 Sentry 的 breadcrumb 來記錄頁面載入時間
    Sentry.addBreadcrumb({
      category: 'performance',
      message: `Page load: ${pageName}`,
      data: { loadTime },
      level: 'info',
    });
  }
};

// 新增：API 請求追蹤
export const trackApiRequest = (url: string, method: string, status: number, duration: number) => {
  if (typeof window !== 'undefined') {
    Sentry.addBreadcrumb({
      category: 'api_request',
      message: `${method} ${url}`,
      data: { url, method, status, duration },
      level: status >= 400 ? 'error' : 'info',
    });
  }
};

// 全局錯誤處理器
export const setupGlobalErrorHandler = () => {
  if (typeof window !== 'undefined') {
    window.addEventListener('error', event => {
      captureError(event.error || new Error(event.message), {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        errorType: 'runtime_error',
      });
    });

    window.addEventListener('unhandledrejection', event => {
      captureError(new Error(event.reason), {
        type: 'unhandledrejection',
        errorType: 'promise_rejection',
      });
    });

    // 新增：資源載入錯誤追蹤
    window.addEventListener('error', event => {
      if (event.target && event.target !== window) {
        const target = event.target as HTMLElement;
        captureError(new Error(`Resource load failed: ${target.tagName}`), {
          errorType: 'resource_error',
          resource: target.tagName,
          src: (target as any).src || (target as any).href,
        });
      }
    }, true);
  }
};

// 性能監控
export const startPerformanceMonitoring = () => {
  if (typeof window !== 'undefined') {
    // 使用 Performance API 記錄性能指標
    if (performance && performance.mark) {
      performance.mark('page-load-start');
      performance.mark('page-load-end');
      performance.measure('page-load', 'page-load-start', 'page-load-end');
    }

    // 新增：Core Web Vitals 監控
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            trackUserAction('lcp_measured', { value: entry.startTime });
          } else if (entry.entryType === 'first-input') {
            const fid = entry.processingStart - entry.startTime;
            trackUserAction('fid_measured', { value: fid });
          } else if (entry.entryType === 'layout-shift') {
            trackUserAction('cls_measured', { value: (entry as any).value });
          }
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    }
  }
};

// 用戶識別
export const identifyUser = (userId: string, userData?: Record<string, unknown>) => {
  if (typeof window !== 'undefined') {
    Sentry.setUser({
      id: userId,
      ...userData,
    });
  }
};

// 設置標籤
export const setTag = (key: string, value: string) => {
  if (typeof window !== 'undefined') {
    Sentry.setTag(key, value);
  }
};

// 設置上下文
export const setContext = (name: string, context: Record<string, unknown>) => {
  if (typeof window !== 'undefined') {
    Sentry.setContext(name, context);
  }
};

// 新增：自定義錯誤類型
export const captureNetworkError = (url: string, status: number, message: string) => {
  captureError(new Error(`Network Error: ${message}`), {
    errorType: 'network_error',
    url,
    status,
  });
};

export const captureValidationError = (field: string, value: unknown) => {
  captureError(new Error(`Validation Error: ${field}`), {
    errorType: 'validation_error',
    field,
    value,
  });
};

export const captureAuthError = (action: string, reason: string) => {
  captureError(new Error(`Auth Error: ${action}`), {
    errorType: 'auth_error',
    action,
    reason,
  });
};
