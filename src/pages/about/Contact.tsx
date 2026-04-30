import {
  Mail,
  MessageSquare,
  MapPin,
  Globe,
  Camera,
  MessageCircle as Threads,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';


const Contact = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className='min-h-screen pb-24'>
      {/* Hero Section */}
      <section className='min-h-screen max-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-center px-4 relative py-12 overflow-hidden'>
        <motion.h1
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className='hero-title mb-8 text-gray-800'
        >
          聯絡我們
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='hero-subtitle max-w-2xl mx-auto mb-12'
        >
          有任何問題或建議，歡迎隨時與我們聯繫。 我們會盡快回覆您的訊息。
        </motion.p>

      </section>

      <div className='max-w-4xl mx-auto mt-24 px-4'>
        {/* 第一排：聯絡資訊卡片 */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12'>
          <div className='text-center p-6 bg-white rounded-lg shadow-md border border-gray-100'>
            <div className='bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <Mail className='w-8 h-8 text-blue-600' />
            </div>
            <h3 className='font-bold mb-2'>電子郵件</h3>
            <a
              href='mailto:support@hyjdevelop.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 hover:text-blue-600 underline'
            >
              support@hyjdevelop.com
            </a>
          </div>

          <div className='text-center p-6 bg-white rounded-lg shadow-md border border-gray-100'>
            <div className='bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <MessageSquare className='w-8 h-8 text-green-600' />
            </div>
            <h3 className='font-bold mb-2'>服務時間</h3>
            <p className='text-gray-600'>週一至週五 8:00-19:00</p>
          </div>

          <div className='text-center p-6 bg-white rounded-lg shadow-md border border-gray-100'>
            <div className='bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <MapPin className='w-8 h-8 text-purple-600' />
            </div>
            <h3 className='font-bold mb-2'>地址</h3>
            <p className='text-gray-600'>台灣,嘉義</p>
          </div>
        </div>

        {/* 第二排：社交媒體卡片 */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12'>
          <div className='text-center p-6 bg-white rounded-lg shadow-md border border-gray-100'>
            <div className='bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <Globe className='w-8 h-8 text-blue-600' />
            </div>
            <h3 className='font-bold mb-2'>Facebook</h3>
            <a
              href='https://fb.hyjdevelop.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 hover:text-blue-600 underline'
            >
              訪問我們
            </a>
          </div>

          <div className='text-center p-6 bg-white rounded-lg shadow-md border border-gray-100'>
            <div className='bg-pink-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <Camera className='w-8 h-8 text-pink-600' />
            </div>
            <h3 className='font-bold mb-2'>Instagram</h3>
            <a
              href='https://ig.hyjdevelop.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 hover:text-pink-600 underline'
            >
              訪問我們
            </a>
          </div>

          <div className='text-center p-6 bg-white rounded-lg shadow-md border border-gray-100'>
            <div className='bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <Threads className='w-8 h-8 text-purple-600' />
            </div>
            <h3 className='font-bold mb-2'>Threads</h3>
            <a
              href='https://threads.hyjdevelop.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-600 hover:text-purple-600 underline'
            >
              訪問我們
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
