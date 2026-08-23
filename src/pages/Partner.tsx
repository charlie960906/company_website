import {
  Handshake,
  Users,
  School,
  ArrowRight,
  FileText,
  Globe,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';


const Partner = () => {
  return (
    <div className='min-h-screen pb-24'>
      {/* Hero Section */}
      <section className='section-hero flex flex-col items-center justify-center text-center px-4 relative overflow-hidden'>
        <motion.h1
          initial={{ opacity: 0, y: (useReducedMotion() ? 0 : 20) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className='hero-title mb-8 text-gray-800'
        >
          成為我們的合作夥伴
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: (useReducedMotion() ? 0 : 20) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.05 }}
          className='hero-title mb-8 text-gray-800'
        >
          To Be Our Cooperator
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: (useReducedMotion() ? 0 : 16) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='hero-subtitle max-w-2xl mx-auto mb-1 text-balance'
        >
          HYJdevelop 是一間科技公司的母公司，聚焦數位產品與服務整合。
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: (useReducedMotion() ? 0 : 16) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className='hero-subtitle max-w-2xl mx-auto mb-1 text-balance'
        >
          我們的業務包含家教媒合
          App（規劃中）、網站製作、以及與教育/民間團體的合作專案。
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: (useReducedMotion() ? 0 : 16) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='hero-subtitle max-w-2xl mx-auto mb-1'
        >
          我們鼓勵學生自治團體跳脫思想框架、發掘潛在的可能性
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: (useReducedMotion() ? 0 : 16) }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className='hero-subtitle max-w-2xl mx-auto mb-1'
        >
          並幫助它們建構官方網頁，使其能透過更多的管道來傳播自己的理念。
        </motion.p>

      </section>

      <div className='max-w-4xl mx-auto'>
        {/* 企業合作 */}
        <div className='bg-white rounded-lg shadow-sm p-8 mb-12'>
          <div className='flex items-center mb-6'>
            <Handshake className='w-8 h-8 text-blue-600 mr-3' />
            <h2 className='text-2xl font-bold'>企業合作</h2>
          </div>

          <p className='text-gray-600 mb-6'>
            我們也樂見其他企業與這些團體的交流，成為我們的合作夥伴您可以提升品牌影響力、
            深入這些學生群體推廣產品內容。
          </p>

          <div className='grid md:grid-cols-2 gap-6 mb-8'>
            <div className='bg-blue-50 p-6 rounded-lg'>
              <h3 className='font-bold mb-3'>品牌曝光</h3>
              <ul className='space-y-2 text-gray-600'>
                <li>• 官方網站品牌展示</li>
                <li>• 社群媒體聯合推廣</li>
                <li>• 學生團體網頁廣告位</li>
              </ul>
            </div>
            <div className='bg-blue-50 p-6 rounded-lg'>
              <h3 className='font-bold mb-3'>資源共享</h3>
              <ul className='space-y-2 text-gray-600'>
                <li>• 學生社群直接觸及</li>
                <li>• 產品推廣機會</li>
                <li>• 人才招募管道</li>
              </ul>
            </div>
          </div>

          <a
            href='mailto:hyjdevelop@gmail.com'
            className='inline-flex items-center text-blue-600 hover:text-blue-700'
          >
            聯絡我們討論合作細節 <ArrowRight className='w-4 h-4 ml-1' />
          </a>
        </div>

        {/* 學生團體支持 */}
        <div className='bg-white rounded-lg shadow-sm p-8 mb-12'>
          <div className='flex items-center mb-6'>
            <School className='w-8 h-8 text-green-600 mr-3' />
            <h2 className='text-2xl font-bold'>教育/民間團體合作</h2>
          </div>

          <p className='text-gray-600 mb-6'>
            如果您是學生團體，需要我們的幫助，我們非常歡迎與您合作！
            讓我們一起為學生自治注入新的活力。
          </p>

          <div className='grid md:grid-cols-2 gap-6 mb-8'>
            <div className='bg-green-50 p-6 rounded-lg'>
              <h3 className='font-bold mb-3'>我們提供</h3>
              <ul className='space-y-2 text-gray-600'>
                <li>• 網站建置與維運（含 SEO）</li>
                <li>• App/雲端服務技術諮詢</li>
                <li>• 共同推廣與品牌資源共享</li>
              </ul>
            </div>
            <div className='bg-green-50 p-6 rounded-lg'>
              <h3 className='font-bold mb-3'>合作流程</h3>
              <ul className='space-y-2 text-gray-600'>
                <li>1. 填寫合作申請表</li>
                <li>2. 團隊評估討論</li>
                <li>3. 確認合作細節</li>
              </ul>
            </div>
          </div>

          <a
            href='https://forms.gle/mNL2rxvuaQzZ8eiM7'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors'
          >
            <FileText className='w-5 h-5 mr-2' />
            填寫合作申請表
          </a>
        </div>

        {/* 目前上線作品 */}
        <div className='bg-white rounded-lg shadow-sm p-8 mb-12'>
          <div className='flex items-center mb-6'>
            <Globe className='w-8 h-8 text-indigo-600 mr-3' />
            <h2 className='text-2xl font-bold'>目前上線作品</h2>
          </div>

          <p className='text-gray-600 mb-6'>
            以下是目前由 HYJdevelop 維護的上線作品。
          </p>

          <div className='grid md:grid-cols-2 gap-6'>
            <div className='bg-indigo-50 p-6 rounded-lg'>
              <h3 className='font-bold mb-2'>hyjblog.hyjdevelop.com</h3>
              <p className='text-gray-600 text-sm'>
                HYJdevelop 的官方部落格。
              </p>
              <a
                href='https://hyjblog.hyjdevelop.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-indigo-600 hover:underline text-sm'
              >
                訪問網站
              </a>
            </div>
          </div>
        </div>

        {/* 支持我們 */}
        <div className='bg-white rounded-lg shadow-sm p-8'>
          <div className='flex items-center mb-6'>
            <Users className='w-8 h-8 text-purple-600 mr-3' />
            <h2 className='text-2xl font-bold'>支持我們</h2>
          </div>

          <p className='text-gray-600 mb-6'>
            最後如果您也認同 HYJdevelop
            的理念，希望在學生邁向未來的路上提供支持，
            歡迎寄信至「hyjdevelop@gmail.com」，以實際行動支持 HYJdevelop
            的運作。
            您的支持不僅能幫助更多團體前行，也能讓學生自治的種子散播至臺灣的每個角落。
          </p>

          <a
            href='mailto:hyjdevelop@gmail.com'
            className='inline-flex items-center text-purple-600 hover:text-purple-700'
          >
            聯絡我們了解更多 <ArrowRight className='w-4 h-4 ml-1' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partner;
