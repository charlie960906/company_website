const Forum = () => {
  return (
    <div className='min-h-screen pb-24'>
      {/* Hero Section */}
      <section className='min-h-screen max-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-center px-4 relative py-12 overflow-hidden'>
        <h1 className='text-5xl md:text-7xl font-bold mb-8 text-gray-800'>
          社群論壇
        </h1>
        <p>加入我們的討論，分享你的想法和經驗，與其他成員互動交流。</p>
        <div className='animate-bounce absolute bottom-12 mid transform -translate-x-1/2'>
          <svg
            className='w-8 h-8 text-gray-400'
            fill='none'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            viewBox='0 0 22 22'
            stroke='currentColor'
          >
            <path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
          </svg>
        </div>
      </section>

      <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
        <h2 className='text-2xl font-bold mb-4'>熱門討論區</h2>
        <div className='space-y-4'>
          <div className='p-4 border rounded-lg hover:bg-gray-50 transition-colors'>
            <h3 className='font-bold mb-2'>技術交流</h3>
            <p className='text-gray-600'>分享程式開發經驗和技術討論</p>
          </div>
          <div className='p-4 border rounded-lg hover:bg-gray-50 transition-colors'>
            <h3 className='font-bold mb-2'>學習心得</h3>
            <p className='text-gray-600'>分享你的學習歷程和心得體會</p>
          </div>
          <div className='p-4 border rounded-lg hover:bg-gray-50 transition-colors'>
            <h3 className='font-bold mb-2'>專案展示</h3>
            <p className='text-gray-600'>展示你的作品，獲得回饋與建議</p>
          </div>
        </div>
      </div>

      <div className='text-center'>
        <a
          href='#'
          className='inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors'
        >
          尚在建置中
        </a>
      </div>
    </div>
  );
};

export default Forum;
