import { motion, useReducedMotion } from 'framer-motion';
import { inViewMotion } from 'src/utils/motion';

import {
  Newspaper,
  Megaphone,
  Star,
  Shield,
  Smartphone,
  Code,
} from 'lucide-react';

const Updates = () => {
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
          HYJdevelop 最新消息
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='hero-subtitle max-w-2xl mx-auto mb-2'
        >
          關注我們的最新動態，了解社群發展和重要公告。
        </motion.p>

      </motion.section>

      <div className='max-w-4xl mx-auto'>
        {/* 最新公告 */}
        <motion.div
          {...inViewMotion(shouldReduceMotion, { duration: 0.6, amount: 0.3 })}
          className='mb-12'
        >
          <h2 className='text-2xl font-bold mb-6 flex items-center'>
            <Megaphone className='w-6 h-6 mr-2 text-blue-600' />
            重要公告
          </h2>
          <div className='space-y-6'>
            <motion.div
              {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.1 })}
              className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'
            >
              <div className='flex justify-between items-start mb-4'>
                <h3 className='text-xl font-bold'>
                  Tutor Go 家教媒合 App 正式發布
                </h3>
                <span className='text-sm text-gray-500'>2025/01/20</span>
              </div>
              <p className='text-gray-600 mb-4'>
                我們很高興地宣布，Tutor Go 家教媒合 App 正式發布！這是 SLRC
                的未來版本， 提供更智能的家教媒合服務，讓學習更有效率。
              </p>
              <a
                href='/tutorgo'
                className='text-blue-600 hover:text-blue-700 font-medium'
              >
                了解更多 →
              </a>
            </motion.div>

            <motion.div
              {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.2 })}
              className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'
            >
              <div className='flex justify-between items-start mb-4'>
                <h3 className='text-xl font-bold'>網站安全與性能全面升級</h3>
                <span className='text-sm text-gray-500'>2025/01/18</span>
              </div>
              <p className='text-gray-600 mb-4'>
                完成網站安全強化，包含 CSP 內容安全政策、SRI 子資源完整性檢查、
                APM 錯誤追蹤系統，以及全域 ErrorBoundary 防護機制。
              </p>
              <div className='flex items-center space-x-4 text-sm text-gray-500'>
                <span className='flex items-center'>
                  <Shield className='w-4 h-4 mr-1' /> 安全強化
                </span>
                <span className='flex items-center'>
                  <Code className='w-4 h-4 mr-1' /> 性能優化
                </span>
              </div>
            </motion.div>

            <motion.div
              {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.3 })}
              className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'
            >
              <div className='flex justify-between items-start mb-4'>
                <h3 className='text-xl font-bold'>響應式設計全面優化</h3>
                <span className='text-sm text-gray-500'>2025/01/15</span>
              </div>
              <p className='text-gray-600 mb-4'>
                完成全網站響應式設計優化，支援手機、平板、桌面等多種裝置，
                提供最佳的瀏覽體驗。
              </p>
              <div className='flex items-center space-x-4 text-sm text-gray-500'>
                <span className='flex items-center'>
                  <Smartphone className='w-4 h-4 mr-1' /> 手機優化
                </span>
                <span className='flex items-center'>
                  <Code className='w-4 h-4 mr-1' /> 平板支援
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 最新消息 */}
        <motion.div
          {...inViewMotion(shouldReduceMotion, { duration: 0.6, amount: 0.3 })}
          className='mb-12'
        >
          <h2 className='text-2xl font-bold mb-6 flex items-center'>
            <Newspaper className='w-6 h-6 mr-2 text-green-600' />
            最新消息
          </h2>
          <div className='space-y-6'>
            <motion.div
              {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.1 })}
              className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'
            >
              <div className='flex justify-between items-start mb-4'>
                <h3 className='text-xl font-bold'>開放合作夥伴申請</h3>
                <span className='text-sm text-gray-500'>2025/01/14</span>
              </div>
              <p className='text-gray-600 mb-4'>
                現在開始接受合作夥伴申請！我們期待與更多優秀的夥伴一起合作，
                共同打造更好的技術生態圈。
              </p>
              <a
                href='/partner'
                className='text-blue-600 hover:text-blue-700 font-medium'
              >
                了解更多 →
              </a>
            </motion.div>

            <motion.div
              {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.2 })}
              className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'
            >
              <div className='flex justify-between items-start mb-4'>
                <h3 className='text-xl font-bold'>服務條款與隱私政策更新</h3>
                <span className='text-sm text-gray-500'>2025/01/12</span>
              </div>
              <p className='text-gray-600 mb-4'>
                更新服務條款與隱私政策，提供更詳細的法律保障和用戶權益說明，
                確保透明度和合規性。
              </p>
              <div className='flex space-x-4'>
                <a
                  href='/service'
                  className='text-blue-600 hover:text-blue-700 font-medium'
                >
                  服務條款 →
                </a>
                <a
                  href='/privacy'
                  className='text-blue-600 hover:text-blue-700 font-medium'
                >
                  隱私政策 →
                </a>
              </div>
            </motion.div>

            <motion.div
              {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.3 })}
              className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'
            >
              <div className='flex justify-between items-start mb-4'>
                <h3 className='text-xl font-bold'>社群網站正式上線</h3>
                <span className='text-sm text-gray-500'>2025/01/10</span>
              </div>
              <p className='text-gray-600 mb-4'>
                我們很高興地宣布，HYJdevelop 社群網站正式上線！
                這意味著我們將邁向建立更優質技術社群的重要里程碑。
              </p>
              <div className='flex items-center space-x-2 text-sm text-gray-500'>
                <Star className='w-4 h-4 text-yellow-500' />
                <span>重要里程碑</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 技術更新 */}
        <motion.div
          {...inViewMotion(shouldReduceMotion, { duration: 0.6, amount: 0.3 })}
          className='mb-12'
        >
          <h2 className='text-2xl font-bold mb-6 flex items-center'>
            <Code className='w-6 h-6 mr-2 text-purple-600' />
            技術更新
          </h2>
          <div className='space-y-6'>
            <motion.div
              {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.1 })}
              className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'
            >
              <div className='flex justify-between items-start mb-4'>
                <h3 className='text-xl font-bold'>404 頁面動畫優化</h3>
                <span className='text-sm text-gray-500'>2025/01/16</span>
              </div>
              <p className='text-gray-600 mb-4'>
                優化 404
                錯誤頁面的動畫效果和用戶體驗，提供更友善的錯誤處理機制。
              </p>
            </motion.div>

            <motion.div
              {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.2 })}
              className='bg-white p-6 rounded-lg shadow-sm border border-gray-100'
            >
              <div className='flex justify-between items-start mb-4'>
                <h3 className='text-xl font-bold'>導航結構簡化</h3>
                <span className='text-sm text-gray-500'>2025/01/14</span>
              </div>
              <p className='text-gray-600 mb-4'>
                簡化網站導航結構，提升用戶體驗，讓重要功能更容易被發現。
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* 追蹤我們 */}
        <motion.div
          {...inViewMotion(!!shouldReduceMotion, { duration: 0.6 })}
          className='bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-100 text-center'
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-800'>
            追蹤我們
          </h2>
          <p className='text-gray-600 mb-6'>
            查看近期公告與歷史更新，歡迎關注我們的最新動態。
          </p>
          <a href='/updates' className='inline-block btn-soft-outline px-8 py-3 rounded-xl shadow-md'>
            前往最新消息
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Updates;
