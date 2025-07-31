const Hosting = () => {
  return (
    <div className='min-h-screen pb-24'>
      {/* Hero Section */}
      <section className='min-h-screen max-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-center px-4 relative py-12 overflow-hidden'>
        <h1 className='text-5xl md:text-7xl font-bold mb-8 text-gray-800'>
          雲端服務
        </h1>
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

      <div className='max-w-4xl mx-auto mb-24'>
        {/* 新增的雲端服務說明區塊 */}
        <div className='bg-white p-8 rounded-lg shadow-sm mb-12'>
          <h2 className='text-2xl font-bold mb-6'>我們的雲端服務承諾</h2>
          <p className='text-gray-600 leading-relaxed'>
            我們目前所能提供 2TB
            的上下載流量，來供應各用戶使用，讓您在我們提供的服務當中有更好的體驗，並且無須擔心在使用我們雲端空間時的隱私安全。我們只會看到下載的次數以及使用的流量大小，並不會收集任何您的個人資訊。您使用我們的雲端下載服務，我們並不會向您收費，但因為我們服務的人眾多，請不要重複下載或做其他使用，以避免其他用戶在使用上產生不便。
          </p>
          <p className='text-gray-500 italic mt-4'>
            *我們並不確定我們使用的雲端服務商是否會收集相關資料，若有疑慮，可以自
            <a
              href='https://www.pcloud.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-600 hover:underline'
            >
              Pclude官網
            </a>
            查看。
          </p>
        </div>

        {/* 服務方案部分已註解掉，若需啟用可移除註解 */}
        {/*<div className="bg-white p-8 rounded-lg shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-6">服務方案</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-4">基礎版</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• 10GB 存儲空間</li>
                <li>• 基本安全防護</li>
                <li>• 標準支援</li>
              </ul>
              <p className="text-2xl font-bold text-blue-600">NT$ 299/月</p>
            </div>

            <div className="p-6 border rounded-lg bg-blue-50">
              <h3 className="text-xl font-bold mb-4">專業版</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• 50GB 存儲空間</li>
                <li>• 進階安全防護</li>
                <li>• 優先支援</li>
              </ul>
              <p className="text-2xl font-bold text-blue-600">NT$ 799/月</p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-4">企業版</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• 不限存儲空間</li>
                <li>• 企業級安全防護</li>
                <li>• 24/7 專人支援</li>
              </ul>
              <p className="text-2xl font-bold text-blue-600">聯繫銷售</p>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default Hosting;
