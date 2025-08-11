import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Eye,
  Lock,
  Globe,
  Wifi,
  Zap,
} from 'lucide-react';
import {
  checkSecurityHeaders,
  isSecureContext,
  isHTTPS,
} from 'src/utils/security';
import { trackUserAction } from 'src/utils/errorTracking';

interface SecurityStatus {
  csp: boolean;
  hsts: boolean;
  xFrameOptions: boolean;
  xContentTypeOptions: boolean;
  xssProtection: boolean;
  referrerPolicy: boolean;
  permissionsPolicy: boolean;
  secureContext: boolean;
  https: boolean;
}

const SecurityMonitor: React.FC = () => {
  const [securityStatus, setSecurityStatus] = useState<SecurityStatus | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
  interface CSPViolation {
    violatedDirective?: string;
    blockedURI?: string;
  }
  const [cspViolations, setCspViolations] = useState<CSPViolation[]>([]);

  useEffect(() => {
    const checkSecurity = async () => {
      try {
        const headers = await checkSecurityHeaders(window.location.origin);

        setSecurityStatus({
          csp: headers['Content-Security-Policy'] !== '未設定',
          hsts: headers['Strict-Transport-Security'] !== '未設定',
          xFrameOptions: headers['X-Frame-Options'] !== '未設定',
          xContentTypeOptions: headers['X-Content-Type-Options'] !== '未設定',
          xssProtection: headers['X-XSS-Protection'] !== '未設定',
          referrerPolicy: headers['Referrer-Policy'] !== '未設定',
          permissionsPolicy: headers['Permissions-Policy'] !== '未設定',
          secureContext: isSecureContext(),
          https: isHTTPS(),
        });

        trackUserAction('security_check_completed', { headers });
      } catch (error) {
        console.error('安全檢查失敗:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // 監聽 CSP 違規事件
    const handleCSPViolation = (event: Event) => {
      // 部分瀏覽器會在 event.detail 提供資訊，若沒有則以空物件代替
      const detail: Partial<CSPViolation> =
        (event as { detail?: Partial<CSPViolation> }).detail ?? {};
      setCspViolations(prev => [...prev, detail as CSPViolation]);
      trackUserAction('csp_violation_detected', { violation: detail });
    };

    document.addEventListener('securitypolicyviolation', handleCSPViolation);

    checkSecurity();

    return () => {
      document.removeEventListener(
        'securitypolicyviolation',
        handleCSPViolation
      );
    };
  }, []);

  const getOverallScore = (): number => {
    if (!securityStatus) return 0;
    const checks = Object.values(securityStatus);
    return Math.round((checks.filter(Boolean).length / checks.length) * 100);
  };

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <Shield className='w-5 h-5 text-green-600' />;
    if (score >= 70)
      return <AlertTriangle className='w-5 h-5 text-yellow-600' />;
    return <AlertTriangle className='w-5 h-5 text-red-600' />;
  };

  const getScoreLevel = (score: number): string => {
    if (score >= 90) return '非常安全';
    if (score >= 70) return '安全';
    if (score >= 50) return '警告';
    return '危險';
  };

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='flex items-center justify-center p-4'
      >
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
      </motion.div>
    );
  }

  const score = getOverallScore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='bg-white rounded-lg shadow-md p-6 border border-gray-200'
    >
      <div className='flex items-center justify-between mb-4'>
        <div className='flex items-center space-x-2'>
          <Shield className='w-6 h-6 text-blue-600' />
          <h3 className='text-lg font-semibold text-gray-800'>網站安全狀態</h3>
        </div>
        <button
          onClick={() => {
            setShowDetails(!showDetails);
            trackUserAction('security_details_toggled', {
              showDetails: !showDetails,
            });
          }}
          className='flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-800 transition-colors'
        >
          <Eye className='w-4 h-4' />
          <span>{showDetails ? '隱藏' : '詳細'}</span>
        </button>
      </div>

      <div className='flex items-center space-x-4 mb-4'>
        <div className={`text-3xl font-bold ${getScoreColor(score)}`}>
          {score}%
        </div>
        <div className='flex items-center space-x-2'>
          {getScoreIcon(score)}
          <span className='text-sm text-gray-600'>{getScoreLevel(score)}</span>
        </div>
      </div>

      {showDetails && securityStatus && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className='space-y-3 pt-4 border-t border-gray-200'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <SecurityCheckItem
              name='內容安全政策 (CSP)'
              status={securityStatus.csp}
              description='防止 XSS 攻擊'
              icon={<Shield className='w-4 h-4' />}
            />
            <SecurityCheckItem
              name='HTTPS 強制 (HSTS)'
              status={securityStatus.hsts}
              description='強制使用 HTTPS'
              icon={<Lock className='w-4 h-4' />}
            />
            <SecurityCheckItem
              name='點擊劫持防護'
              status={securityStatus.xFrameOptions}
              description='防止 iframe 嵌入攻擊'
              icon={<Globe className='w-4 h-4' />}
            />
            <SecurityCheckItem
              name='MIME 類型保護'
              status={securityStatus.xContentTypeOptions}
              description='防止 MIME 類型嗅探'
              icon={<Zap className='w-4 h-4' />}
            />
            <SecurityCheckItem
              name='XSS 防護'
              status={securityStatus.xssProtection}
              description='瀏覽器 XSS 過濾'
              icon={<Shield className='w-4 h-4' />}
            />
            <SecurityCheckItem
              name='引用來源政策'
              status={securityStatus.referrerPolicy}
              description='控制引用來源資訊'
              icon={<Wifi className='w-4 h-4' />}
            />
            <SecurityCheckItem
              name='權限政策'
              status={securityStatus.permissionsPolicy}
              description='控制瀏覽器功能權限'
              icon={<Lock className='w-4 h-4' />}
            />
            <SecurityCheckItem
              name='安全上下文'
              status={securityStatus.secureContext}
              description='HTTPS 或 localhost'
              icon={<Globe className='w-4 h-4' />}
            />
            <SecurityCheckItem
              name='HTTPS 連接'
              status={securityStatus.https}
              description='使用加密連接'
              icon={<Lock className='w-4 h-4' />}
            />
          </div>

          {/* CSP 違規報告 */}
          {cspViolations.length > 0 && (
            <div className='mt-6 p-4 bg-red-50 border border-red-200 rounded-lg'>
              <h4 className='text-sm font-semibold text-red-800 mb-2'>
                CSP 違規報告 ({cspViolations.length})
              </h4>
              <div className='space-y-2'>
                {cspViolations.slice(-3).map((violation, index) => (
                  <div key={index} className='text-xs text-red-700'>
                    <strong>{violation.violatedDirective}:</strong>{' '}
                    {violation.blockedURI}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 安全建議 */}
          <div className='mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg'>
            <h4 className='text-sm font-semibold text-blue-800 mb-2'>
              安全建議
            </h4>
            <ul className='text-xs text-blue-700 space-y-1'>
              {score < 90 && <li>• 建議啟用所有安全標頭以提升防護等級</li>}
              {!securityStatus.https && <li>• 建議使用 HTTPS 加密連接</li>}
              {cspViolations.length > 0 && <li>• 檢查並修正 CSP 違規問題</li>}
              <li>• 定期更新依賴套件以修補安全漏洞</li>
            </ul>
          </div>
        </motion.div>
      )}

      <div className='mt-4 text-xs text-gray-500'>
        最後更新: {new Date().toLocaleString('zh-TW')}
      </div>
    </motion.div>
  );
};

interface SecurityCheckItemProps {
  name: string;
  status: boolean;
  description: string;
  icon: React.ReactNode;
}

const SecurityCheckItem: React.FC<SecurityCheckItemProps> = ({
  name,
  status,
  description,
  icon,
}) => (
  <div className='flex items-center justify-between p-3 bg-gray-50 rounded-lg'>
    <div className='flex-1'>
      <div className='flex items-center space-x-2'>
        {status ? (
          <CheckCircle className='w-4 h-4 text-green-600' />
        ) : (
          <AlertTriangle className='w-4 h-4 text-red-600' />
        )}
        <div className='flex items-center space-x-1'>
          {icon}
          <span className='text-sm font-medium text-gray-700'>{name}</span>
        </div>
      </div>
      <p className='text-xs text-gray-500 mt-1'>{description}</p>
    </div>
    <div
      className={`text-xs px-2 py-1 rounded ${
        status ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}
    >
      {status ? '已啟用' : '未啟用'}
    </div>
  </div>
);

export default SecurityMonitor;
