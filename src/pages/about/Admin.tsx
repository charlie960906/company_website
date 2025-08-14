import { ExternalLink } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';


const Admin = () => {
  return (
    <div className='min-h-screen pb-24'>
      {/* Hero Section */}
      <section className='min-h-screen max-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-center px-4 relative py-12 overflow-hidden'>
        <motion.h1
          initial={{ opacity: 0, y: (useReducedMotion() ? 0 : 20) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className='hero-title mb-8 text-gray-800'
        >
          我們的主管
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: (useReducedMotion() ? 0 : 16) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='hero-subtitle'
        >
          認識我們的核心團隊成員，我們致力於提供最好的服務。
        </motion.p>

      </section>

      <div className='max-w-4xl mx-auto'>
        <div className='space-y-12'>
          {/* 創辦人 */}
          <div className='bg-white p-8 rounded-lg shadow-sm'>
            <div className='flex flex-col md:flex-row items-center md:items-start gap-8'>
              <img
                src='/ceo.jpg'
                alt='創辦人照片'
                className='w-48 h-48 object-cover rounded-lg'
              />
              <div>
                <h2 className='text-2xl font-bold mb-2'>黃宥鈞</h2>
                <p className='text-lg text-blue-600 mb-4'>
                  創辦人、主席兼執行長
                </p>
                <p className='text-gray-600 mb-4'>
                  一個對資訊科技有興趣的高中生，
                  希望可以透過自己小小的力量改變這個世界。
                </p>
                <p className='text-gray-700 mb-4'>
                  座右銘：
                  <br />
                  「I'm not the best but I work hard」
                </p>
                <a
                  href='https://hyjblog.hyjdevelop.com'
                  className='inline-flex items-center text-blue-600 hover:text-blue-700'
                >
                  個人網站 <ExternalLink className='w-4 h-4 ml-1' />
                </a>
              </div>
            </div>
          </div>

          {/* 藝術總監 */}
          <div className='bg-white p-8 rounded-lg shadow-sm'>
            <div className='flex flex-col md:flex-row items-center md:items-start gap-8'>
              <img
                src='/artceo.jpg'
                alt='藝術總監照片'
                className='w-48 h-48 object-cover rounded-lg'
              />
              <div>
                <h2 className='text-2xl font-bold mb-2'>倫教鐵喬</h2>
                <p className='text-lg text-blue-600 mb-4'>藝術總監</p>
                <p className='text-gray-600 mb-4'>
                  在農業學校認真耕耘資訊的小小高中生。
                </p>
                <p className='text-gray-700 mb-4'>
                  座右銘：
                  <br />
                  「向陽而生無悔青春」
                </p>
                <a
                  href='https://bone1018.hyjdevelop.com'
                  className='inline-flex items-center text-blue-600 hover:text-blue-700'
                >
                  個人網站 <ExternalLink className='w-4 h-4 ml-1' />
                </a>
              </div>
            </div>
          </div>

          {/* 技術總監 */}
          <div className='bg-white p-8 rounded-lg shadow-sm'>
            <div className='flex flex-col md:flex-row items-center md:items-start gap-8'>
              <img
                src='/codeceo.jpg'
                alt='技術總監照片'
                className='w-48 h-48 object-cover rounded-lg'
              />
              <div>
                <h2 className='text-2xl font-bold mb-2'>許安祐</h2>
                <p className='text-lg text-blue-600 mb-4'>技術總監</p>
                <a
                  href='https://larryeng.hyjdevelop.com'
                  className='inline-flex items-center text-blue-600 hover:text-blue-700'
                >
                  個人網站 <ExternalLink className='w-4 h-4 ml-1' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
