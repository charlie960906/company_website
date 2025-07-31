import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4 pt-20'>
      <div className='max-w-md w-full text-center'>
        {/* 404 圖示 */}
        <div className='mb-8'>
          <div className='text-6xl md:text-9xl font-bold text-gray-300 mb-4'>
            404
          </div>
          <div className='w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center'>
            <svg
              className='w-12 h-12 text-white'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33'
              />
            </svg>
          </div>
        </div>

        {/* 錯誤訊息 */}
        <h1 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>
          頁面未找到
        </h1>
        <p className='text-sm md:text-base text-gray-600 mb-8 leading-relaxed px-4'>
          抱歉，您要尋找的頁面不存在或已被移除。
          <br />
          請檢查網址是否正確，或返回首頁繼續瀏覽。
        </p>

        {/* 操作按鈕 */}
        <div className='space-y-4'>
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
        </div>

        {/* 額外連結 */}
        <div className='mt-8 pt-8 border-t border-gray-200'>
          <p className='text-xs md:text-sm text-gray-500 mb-4'>
            您也可以嘗試：
          </p>
          <div className='flex flex-wrap justify-center gap-2 md:gap-4 text-xs md:text-sm'>
            <Link
              to='/shop'
              className='text-blue-600 hover:text-blue-800 hover:underline'
            >
              線上商城
            </Link>
            <Link
              to='/about'
              className='text-blue-600 hover:text-blue-800 hover:underline'
            >
              關於我們
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
