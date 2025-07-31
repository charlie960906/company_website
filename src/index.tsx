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

// 初始化錯誤追蹤
initErrorTracking();
setupGlobalErrorHandler();

// 啟動性能監控
startPerformanceMonitoring();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      {' '}
      {/* 设置 basename 以匹配部署路径 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
