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
        tracesSampleRate: 1.0,
        // 錯誤採樣率
        replaysSessionSampleRate: 0.1,
        replaysOnErrorSampleRate: 1.0,
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

// 全局錯誤處理器
export const setupGlobalErrorHandler = () => {
  if (typeof window !== 'undefined') {
    window.addEventListener('error', event => {
      captureError(event.error || new Error(event.message), {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      });
    });

    window.addEventListener('unhandledrejection', event => {
      captureError(new Error(event.reason), {
        type: 'unhandledrejection',
      });
    });
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
