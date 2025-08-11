import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SearchX } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 pt-20'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        className='max-w-md w-full text-center'
      >
        {/* 404 圖示 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='mb-8'
        >
          <div className='text-6xl md:text-9xl font-bold text-gray-300 mb-4'>
            404
          </div>
          <div className='w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center'>
            <SearchX className='w-12 h-12 text-white' aria-label='找不到頁面' />
          </div>
        </motion.div>

        {/* 錯誤訊息 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'
        >
          頁面未找到
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-sm md:text-base text-gray-600 mb-8 leading-relaxed px-4'
        >
          抱歉，您要尋找的頁面不存在或已被移除。
          <br />
          請檢查網址是否正確，或返回首頁繼續瀏覽。
        </motion.p>

        {/* 操作按鈕 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='space-y-4'
        >
          <Link
            to='/'
            className='inline-block w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg touch-target mobile-text'
          >
            返回首頁
          </Link>
          <button
            onClick={() => window.history.back()}
            className='w-full bg-white text-gray-700 font-semibold py-4 px-6 rounded-lg border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 touch-target mobile-text'
          >
            返回上一頁
          </button>
        </motion.div>

        {/* 額外連結 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='mt-8 pt-8 border-t border-gray-200 pb-16 md:pb-24'
        >
          <p className='text-xs md:text-sm text-gray-500 mb-4'>
            您也可以嘗試：
          </p>
          <div className='flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm'>
            <Link
              to='/tutorgo'
              className='text-blue-600 hover:text-blue-800 hover:underline'
            >
              Tutor Go
            </Link>
            <Link
              to='/contact'
              className='text-blue-600 hover:text-blue-800 hover:underline'
            >
              聯絡我們
            </Link>
            <Link
              to='/updates'
              className='text-blue-600 hover:text-blue-800 hover:underline'
            >
              最新資訊
            </Link>
            <Link
              to='/service'
              className='text-blue-600 hover:text-blue-800 hover:underline'
            >
              服務條款
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
