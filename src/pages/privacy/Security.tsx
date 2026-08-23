import {
  Shield,
  AlertTriangle,
  Eye,
  Lock,
  Globe,
  CheckCircle,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { inViewMotion } from 'src/utils/motion';
import SecurityMonitor from 'src/components/SecurityMonitor';


const Security = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className='min-h-screen pb-24'>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className='section-hero flex flex-col items-center justify-center text-center px-4 relative overflow-hidden'
      >
        <motion.h1
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className='hero-title mb-4 text-gray-800'
        >
          網路安全與資料保護
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='hero-subtitle max-w-2xl mx-auto mb-2'
        >
          我們致力於保護您的資料安全，採用最新的安全技術和最佳實踐，
          確保您的資訊在我們的平台上得到最高等級的保護。
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='hero-subtitle max-w-2xl mx-auto'
        >
          從加密傳輸到安全儲存，我們在每個環節都嚴格把關，
          讓您能夠安心使用我們的服務。
        </motion.p>

      </motion.section>

      <div className='max-w-6xl mx-auto px-4'>
        {/* 安全狀態監控 */}
        <motion.div
          {...inViewMotion(shouldReduceMotion, { duration: 0.6, amount: 0.3 })}
          className='mb-16'
        >
          <SecurityMonitor />
        </motion.div>

        {/* 安全措施 */}
        <motion.div
          {...inViewMotion(shouldReduceMotion, { duration: 0.6, amount: 0.3 })}
          className='mb-16'
        >
          <h2 className='text-3xl font-bold mb-8 text-center'>
            我們的安全措施
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <motion.div
              {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.1 })}
              className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'
            >
              <div className='bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4'>
                <Lock className='w-6 h-6 text-blue-600' />
              </div>
              <h3 className='text-xl font-bold mb-3'>加密傳輸</h3>
              <p className='text-gray-600'>
                所有資料傳輸都使用 TLS 1.3
                加密協議，確保您的資訊在傳輸過程中不會被竊取或篡改。
              </p>
            </motion.div>

            <motion.div
              {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.2 })}
              className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'
            >
              <div className='bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4'>
                <Shield className='w-6 h-6 text-green-600' />
              </div>
              <h3 className='text-xl font-bold mb-3'>內容安全政策</h3>
              <p className='text-gray-600'>
                實施嚴格的 CSP
                政策，防止跨站腳本攻擊（XSS）和其他注入攻擊，保護您的瀏覽器安全。
              </p>
            </motion.div>

            <motion.div
              {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.3 })}
              className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'
            >
              <div className='bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4'>
                <Eye className='w-6 h-6 text-purple-600' />
              </div>
              <h3 className='text-xl font-bold mb-3'>隱私保護</h3>
              <p className='text-gray-600'>
                我們不會收集不必要的個人資訊，所有收集的資料都經過匿名化處理，保護您的隱私。
              </p>
            </motion.div>

            <motion.div
              {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.4 })}
              className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'
            >
              <div className='bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4'>
                <AlertTriangle className='w-6 h-6 text-yellow-600' />
              </div>
              <h3 className='text-xl font-bold mb-3'>威脅檢測</h3>
              <p className='text-gray-600'>
                24/7 監控系統檢測和防禦各種網路威脅，包括 DDoS
                攻擊、惡意軟體和異常活動。
              </p>
            </motion.div>

            <motion.div
              {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.5 })}
              className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'
            >
              <div className='bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4'>
                <CheckCircle className='w-6 h-6 text-red-600' />
              </div>
              <h3 className='text-xl font-bold mb-3'>定期安全審計</h3>
              <p className='text-gray-600'>
                定期進行安全審計和滲透測試，確保系統安全性的持續改進和漏洞的及時修補。
              </p>
            </motion.div>

            <motion.div
              {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.6 })}
              className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'
            >
              <div className='bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4'>
                <Globe className='w-6 h-6 text-indigo-600' />
              </div>
              <h3 className='text-xl font-bold mb-3'>全球安全標準</h3>
              <p className='text-gray-600'>
                遵循國際安全標準和最佳實踐，包括 OWASP 指南、ISO 27001
                等，確保最高安全等級。
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* 技術細節 */}
        <motion.div
          {...inViewMotion(shouldReduceMotion, { duration: 0.6, amount: 0.3 })}
          className='mb-16'
        >
          <h2 className='text-3xl font-bold mb-8 text-center'>技術安全細節</h2>
          <div className='bg-white p-8 rounded-lg shadow-sm border border-gray-100'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div>
                <h3 className='text-xl font-bold mb-4 text-gray-800'>
                  加密技術
                </h3>
                <ul className='space-y-2 text-gray-600'>
                  <li>• TLS 1.3 加密協議</li>
                  <li>• AES-256 資料加密</li>
                  <li>• RSA-2048 金鑰交換</li>
                  <li>• SHA-256 雜湊函數</li>
                </ul>
              </div>
              <div>
                <h3 className='text-xl font-bold mb-4 text-gray-800'>
                  安全標頭
                </h3>
                <ul className='space-y-2 text-gray-600'>
                  <li>• Content-Security-Policy (CSP)</li>
                  <li>• Strict-Transport-Security (HSTS)</li>
                  <li>• X-Frame-Options</li>
                  <li>• X-Content-Type-Options</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 安全承諾 */}
        <motion.div
          {...inViewMotion(shouldReduceMotion, { duration: 0.6, amount: 0.3 })}
          className='text-center'
        >
          <h2 className='text-3xl font-bold mb-6'>我們的安全承諾</h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto mb-8'>
            我們承諾持續投資於安全技術和人才，確保您的資料安全始終是我們的首要任務。
            如果您發現任何安全問題，請立即聯繫我們的安全團隊。
          </p>
          <a
            href='mailto:hyjdevelop@gmail.com'
            className='inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium'
          >
            <Shield className='w-5 h-5 mr-2' />
            報告安全問題
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Security;
