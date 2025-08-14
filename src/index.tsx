import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 添加路由支持
import App from './App';
import './index.css';
import {
  initErrorTracking,
  setupGlobalErrorHandler,
  startPerformanceMonitoring,
} from './utils/errorTracking';
import { HelmetProvider } from 'react-helmet-async';

// 初始化錯誤追蹤
initErrorTracking();
setupGlobalErrorHandler();

// 啟動性能監控
startPerformanceMonitoring();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename='/'>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
