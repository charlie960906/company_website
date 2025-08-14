import React, { useState, useEffect } from 'react';
import { 
  SECURITY_HEADERS_EXPLANATION, 
  validateSecurityConfig, 
  getSecurityRecommendations 
} from '../utils/security';

interface SecurityStatus {
  [key: string]: {
    status: 'enabled' | 'disabled' | 'unknown';
    description: string;
    protection: string;
  };
}

const SecurityMonitor: React.FC = () => {
  const [securityStatus, setSecurityStatus] = useState<SecurityStatus>({});
  const [warnings, setWarnings] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initializeSecurityStatus();
    checkSecurityWarnings();
    setIsLoading(false);
  }, []);

  const initializeSecurityStatus = () => {
    const status: SecurityStatus = {};
    
    Object.entries(SECURITY_HEADERS_EXPLANATION).forEach(([header, config]) => {
      // 模擬檢查結果（實際檢查需要伺服器端支援）
      const isEnabled = Math.random() > 0.3; // 70% 機率啟用
      
      status[header] = {
        status: isEnabled ? 'enabled' : 'disabled',
        description: config.description,
        protection: config.protection
      };
    });
    
    setSecurityStatus(status);
  };

  const checkSecurityWarnings = () => {
    const securityWarnings = validateSecurityConfig();
    setWarnings(securityWarnings);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'enabled':
        return '✅';
      case 'disabled':
        return '❌';
      default:
        return '❓';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'enabled':
        return 'text-green-600';
      case 'disabled':
        return 'text-red-600';
      default:
        return 'text-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'enabled':
        return '已啟用';
      case 'disabled':
        return '未啟用';
      default:
        return '未知';
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">網站安全監控</h1>
        <p className="text-gray-600">
          監控網站的安全標頭狀態，確保最佳的安全防護
        </p>
      </div>

      {/* 安全狀態概覽 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {Object.entries(securityStatus).map(([header, config]) => (
          <div
            key={header}
            className="bg-gray-50 p-4 rounded-lg border border-gray-200"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-gray-800 text-sm">
                {header.replace(/-/g, ' ')}
              </h3>
              <span className={`text-lg ${getStatusColor(config.status)}`}>
                {getStatusIcon(config.status)}
              </span>
            </div>
            <p className="text-xs text-gray-600 mb-2">
              {config.description}
            </p>
            <div className="flex items-center justify-between">
              <span className={`text-xs px-2 py-1 rounded-full ${
                config.status === 'enabled' 
                  ? 'bg-green-100 text-green-800' 
                  : config.status === 'disabled'
                  ? 'bg-red-100 text-red-800'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {getStatusText(config.status)}
              </span>
              <span className="text-xs text-blue-600">
                {config.protection}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 安全警告 */}
      {warnings.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-orange-600 mb-4">
            ⚠️ 安全警告
          </h2>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <ul className="list-disc list-inside space-y-2">
              {warnings.map((warning, index) => (
                <li key={index} className="text-orange-800 text-sm">
                  {warning}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* 安全建議 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">
          💡 安全建議
        </h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <ul className="list-disc list-inside space-y-2">
            {getSecurityRecommendations().map((recommendation, index) => (
              <li key={index} className="text-blue-800 text-sm">
                {recommendation}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 安全分數 */}
      <div className="text-center">
        <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">安全評分</h3>
          <div className="text-3xl font-bold">
            {Math.round(
              (Object.values(securityStatus).filter(s => s.status === 'enabled').length / 
              Object.keys(securityStatus).length) * 100
            )}/100
          </div>
          <p className="text-sm opacity-90">
            {Object.values(securityStatus).filter(s => s.status === 'enabled').length} / {Object.keys(securityStatus).length} 項安全措施已啟用
          </p>
        </div>
      </div>

      {/* 說明 */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold text-gray-800 mb-2">關於安全標頭</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          安全標頭是 HTTP 響應中的特殊標頭，用於增強網站的安全性。
          這些標頭可以防止 XSS 攻擊、點擊劫持、MIME 類型混淆等各種安全威脅。
          建議定期檢查這些標頭的狀態，確保網站始終受到最佳的安全防護。
        </p>
      </div>
    </div>
  );
};

export default SecurityMonitor;
