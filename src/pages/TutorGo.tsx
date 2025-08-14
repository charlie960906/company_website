import { motion } from 'framer-motion';
import { Shield, Lock, Star, Users, BookOpen, HelpCircle } from 'lucide-react';

const TutorGo = () => {
  return (
    <div className='min-h-screen pb-24'>
      {/* Hero Section */}
      <section className='min-h-screen max-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-50 to-white text-center px-4 relative py-12 overflow-hidden'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className='text-5xl md:text-7xl font-bold mb-6 text-gray-800'
        >
          Tutor Go
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-4'
        >
          家教媒合 App（規劃中）
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-lg text-gray-600 max-w-2xl mx-auto mb-2'
        >
          Tutor Go
          將為學生、家長與老師打造一個安全、透明、有效率的家教媒合平台，讓學習更有保障，教學更有信任。
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className='text-sm text-gray-500 max-w-2xl mx-auto'
        >
          提示：Tutor Go 為 SLRC
          的未來版本，我們將把既有的學習社群經驗升級至更完善的媒合服務。
        </motion.p>
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

      {/* 產品特色 */}
      <section className='max-w-5xl mx-auto px-4 py-16'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className='text-3xl md:text-4xl font-bold mb-10 text-center'
        >
          產品特色
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className='bg-white rounded-2xl shadow-sm p-6 text-center flex flex-col items-center'
          >
            <Shield className='w-10 h-10 text-blue-600 mb-3' />
            <h3 className='font-bold mb-2'>安全媒合</h3>
            <p className='text-gray-600'>
              嚴格審核老師與學生資料，確保雙方真實可靠，打造安心的學習環境。
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='bg-white rounded-2xl shadow-sm p-6 text-center flex flex-col items-center'
          >
            <Lock className='w-10 h-10 text-green-600 mb-3' />
            <h3 className='font-bold mb-2'>隱私保護</h3>
            <p className='text-gray-600'>
              個人資料加密處理，聯絡資訊僅於媒合成功後雙方可見，保障隱私。
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='bg-white rounded-2xl shadow-sm p-6 text-center flex flex-col items-center'
          >
            <Star className='w-10 h-10 text-yellow-500 mb-3' />
            <h3 className='font-bold mb-2'>評價系統</h3>
            <p className='text-gray-600'>
              雙向評價與回饋，讓優質老師與認真學生都能被看見，提升整體教學品質。
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='bg-white rounded-2xl shadow-sm p-6 text-center flex flex-col items-center'
          >
            <BookOpen className='w-10 h-10 text-purple-600 mb-3' />
            <h3 className='font-bold mb-2'>試教機制</h3>
            <p className='text-gray-600'>
              媒合後可先安排試教，雙方滿意再正式合作，降低溝通與選擇風險。
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='bg-white rounded-2xl shadow-sm p-6 text-center flex flex-col items-center'
          >
            <Users className='w-10 h-10 text-pink-600 mb-3' />
            <h3 className='font-bold mb-2'>雙方保障</h3>
            <p className='text-gray-600'>
              平台保障家長、學生與老師權益，提供申訴與協調機制，遇到問題有專人協助。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 使用流程 */}
      <section className='max-w-5xl mx-auto px-4 py-16'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className='text-3xl md:text-4xl font-bold mb-10 text-center'
        >
          使用流程
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className='bg-white rounded-2xl shadow-sm p-6'
          >
            <h3 className='font-bold mb-4 text-blue-700 flex items-center'>
              <Users className='w-5 h-5 mr-2' /> 學生/家長
            </h3>
            <ol className='list-decimal pl-5 space-y-2 text-gray-700'>
              <li>註冊帳號並填寫需求（科目、地區、預算等）</li>
              <li>瀏覽老師資料、查看評價</li>
              <li>發送媒合申請或等待老師主動聯繫</li>
              <li>平台協助媒合，安排試教</li>
              <li>試教滿意後正式合作，開始課程</li>
              <li>課程結束後給予老師評價</li>
            </ol>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='bg-white rounded-2xl shadow-sm p-6'
          >
            <h3 className='font-bold mb-4 text-green-700 flex items-center'>
              <BookOpen className='w-5 h-5 mr-2' /> 老師
            </h3>
            <ol className='list-decimal pl-5 space-y-2 text-gray-700'>
              <li>註冊帳號並建立個人教學檔案</li>
              <li>瀏覽學生需求，主動申請媒合</li>
              <li>回覆家長/學生訊息，安排試教</li>
              <li>試教後雙方確認合作意願</li>
              <li>開始正式課程，累積評價</li>
              <li>遇到問題可隨時聯絡平台協助</li>
            </ol>
          </motion.div>
        </div>
      </section>

      {/* 常見問答 */}
      <section className='max-w-4xl mx-auto px-4 py-16'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className='text-3xl md:text-4xl font-bold mb-10 text-center'
        >
          常見問答
        </motion.h2>
        <div className='space-y-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className='bg-white rounded-2xl shadow-sm p-6'
          >
            <h3 className='font-bold mb-2 flex items-center'>
              <HelpCircle className='w-5 h-5 mr-2 text-blue-600' /> Tutor Go
              什麼時候上線？
            </h3>
            <p className='text-gray-700'>
              目前仍在規劃與開發階段，預計 2025 年底前開放公測，敬請期待！
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='bg-white rounded-2xl shadow-sm p-6'
          >
            <h3 className='font-bold mb-2 flex items-center'>
              <HelpCircle className='w-5 h-5 mr-2 text-blue-600' /> 需要收費嗎？
            </h3>
            <p className='text-gray-700'>
              平台註冊與媒合免費，部分進階功能或加值服務將於正式上線後公告。
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='bg-white rounded-2xl shadow-sm p-6'
          >
            <h3 className='font-bold mb-2 flex items-center'>
              <HelpCircle className='w-5 h-5 mr-2 text-blue-600' />{' '}
              如何確保安全？
            </h3>
            <p className='text-gray-700'>
              我們會審核所有註冊資料，並提供雙向評價、申訴機制與專人協助，保障每一位用戶的權益。
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='bg-white rounded-2xl shadow-sm p-6'
          >
            <h3 className='font-bold mb-2 flex items-center'>
              <HelpCircle className='w-5 h-5 mr-2 text-blue-600' />{' '}
              可以跨區媒合嗎？
            </h3>
            <p className='text-gray-700'>
              支援線上教學與跨區媒合，讓學生能找到最適合的老師，老師也能服務更多學生。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 聯絡方式 */}
      <section className='max-w-3xl mx-auto px-4 py-16'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className='text-3xl md:text-4xl font-bold mb-10 text-center'
        >
          聯絡我們
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='bg-white rounded-2xl shadow-sm p-6 text-center'
        >
          <p className='text-gray-700 mb-2'>
            如有任何問題、合作或建議，歡迎來信：
          </p>
          <a
            href='mailto:tutor@hyjdevelop.com'
            className='text-blue-600 hover:underline text-lg font-bold'
          >
            tutor@hyjdevelop.com
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default TutorGo;
