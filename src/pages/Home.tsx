import { Server, Shield, Users, Cpu, Bot, Lock, Rocket, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HistoryTimeline from 'src/components/HistoryTimeline';

const Home = () => {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='section-hero flex flex-col items-center justify-center text-center px-4 relative overflow-hidden'>
        <div className='pointer-events-none absolute -top-40 -right-32 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60'></div>
        <div className='pointer-events-none absolute -bottom-40 -left-32 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-60'></div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className='text-3xl md:text-4xl lg:text-6xl font-bold mb-6 px-4 text-balance'
        >
          我們致力於科技開發
          <div className='mt-4 space-x-4 md:space-x-10'>
            <span className='text-blue-500'>軟體</span>
            <span className='text-yellow-400'>網站</span>
            <span className='text-red-500'>社群</span>
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mb-0 px-4 text-balance'
        >
          我們的產品將各地的人與人聯繫在一起
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mb-0 px-4 text-balance'
        >
          為大家創造機會並發出聲音
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mb-0 px-4 text-balance'
        >
          我們正在努力，建立一個安全、自由、開放的社群
        </motion.p>
        <div className='animate-bounce absolute bottom-4 mid transform -translate-x-1/2'>
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

      {/* Mission & Tech Section */}
      <section className='section-screen px-4 flex items-center'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='text-2xl md:text-3xl font-bold mb-4'>我們的使命</h2>
            <p className='text-gray-700 leading-relaxed'>
              我們正在打造人際連結的未來，透過技術與社群的力量，
              讓每個人都能更安全、自由地交流與創造價值。
            </p>
            <div className='mt-6 flex flex-wrap gap-3'>
              <span className='px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm'>開放</span>
              <span className='px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm'>安全</span>
              <span className='px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm'>隱私</span>
              <span className='px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm'>學習</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className='rounded-2xl bg-white/70 backdrop-blur p-6 shadow-sm'
          >
            <h3 className='text-xl font-bold mb-4'>以及可實現此未來的技術</h3>
            <ul className='space-y-3 text-gray-700'>
              <li className='flex items-center gap-3'><ShieldCheck className='w-5 h-5 text-blue-600' /> 雲端與網路安全</li>
              <li className='flex items-center gap-3'><Cpu className='w-5 h-5 text-blue-600' /> 資料處理與隱私保護</li>
              <li className='flex items-center gap-3'><Users className='w-5 h-5 text-blue-600' /> 社群產品與協作工具</li>
            </ul>
            <div className='mt-6 flex gap-3'>
              <Link to='/partner' className='text-blue-600 hover:text-blue-700'>了解合作與網站製作</Link>
              <span className='text-gray-300'>|</span>
              <Link to='/service' className='text-blue-600 hover:text-blue-700'>前往使用說明</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI & Innovation Section */}
      <section className='section-screen px-4 flex items-center'>
        <div className='max-w-6xl mx-auto'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className='text-2xl md:text-3xl font-bold mb-8 text-center'
          >
            我們的創新提供用戶交流聯繫的新方法
          </motion.h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -6 }}
              className='rounded-2xl bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-lg'
            >
              <div className='w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4'>
                <Bot className='w-6 h-6 text-blue-600' />
              </div>
              <h3 className='font-bold mb-2'>智慧助理</h3>
              <p className='text-sm text-gray-600'>以 AI 協助社群的管理、學習與服務體驗。</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              whileHover={{ y: -6 }}
              className='rounded-2xl bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-lg'
            >
              <div className='w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4'>
                <Cpu className='w-6 h-6 text-blue-600' />
              </div>
              <h3 className='font-bold mb-2'>資料與系統</h3>
              <p className='text-sm text-gray-600'>以可靠的資料存取與 API，提升內容分享效率。</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              whileHover={{ y: -6 }}
              className='rounded-2xl bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-lg'
            >
              <div className='w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4'>
                <Rocket className='w-6 h-6 text-blue-600' />
              </div>
              <h3 className='font-bold mb-2'>快速迭代</h3>
              <p className='text-sm text-gray-600'>持續優化產品體驗，讓交流更自然順暢。</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Actions (Safety & Impact) */}
      <section className='section-screen px-4 flex items-center'>
        <div className='max-w-6xl mx-auto'>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className='text-2xl md:text-3xl font-bold mb-8 text-center'
          >
            我們也致力於協助保護所有用戶的安全，並發揮正向影響力
          </motion.h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='rounded-2xl bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-lg transition-shadow'>
              <div className='w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4'>
                <Shield className='w-6 h-6 text-green-600' />
              </div>
              <h3 className='font-bold mb-2'>網路安全</h3>
              <p className='text-sm text-gray-600 mb-4'>採用業界最先進的安全技術保護您的資料。</p>
              <Link to='/security' className='text-blue-600 hover:text-blue-700'>瞭解詳情</Link>
            </div>
            <div className='rounded-2xl bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-lg transition-shadow'>
              <div className='w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4'>
                <Lock className='w-6 h-6 text-green-600' />
              </div>
              <h3 className='font-bold mb-2'>資料與隱私</h3>
              <p className='text-sm text-gray-600 mb-4'>讓您掌控自己的隱私並保護個人資訊。</p>
              <Link to='/privacy' className='text-blue-600 hover:text-blue-700'>瞭解詳情</Link>
            </div>
            <div className='rounded-2xl bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-lg transition-shadow'>
              <div className='w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-4'>
                <ShieldCheck className='w-6 h-6 text-green-600' />
              </div>
              <h3 className='font-bold mb-2'>表達自由</h3>
              <p className='text-sm text-gray-600 mb-4'>保護每個人的表達自由權利，確保社群和諧。</p>
              <Link to='/freedom' className='text-blue-600 hover:text-blue-700'>瞭解詳情</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-12 md:py-20 px-4'>
        <div className='max-w-6xl mx-auto w-full'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
            {/* Web Production */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              className='text-center p-6 flex flex-col h-full justify-between rounded-2xl bg-white/60 backdrop-blur shadow-sm hover:shadow-lg transition-shadow'
            >
              <div>
                <div className='bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6'>
                  <Server className='w-10 h-10 text-blue-600' />
                </div>
                <h3 className='text-xl md:text-2xl font-bold mb-4'>網站製作</h3>
                <p className='text-sm md:text-base text-gray-600 flex-1'>
                  提供現代化與行動優先的網站設計、SEO 與維運，協助團體與企業建立可信賴的線上門面。
                </p>
              </div>
              <Link
                to='/partner'
                className='inline-block mt-4 text-blue-600 hover:text-blue-700'
              >
                查看合作與案例
              </Link>
            </motion.div>

            {/* Security */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              whileHover={{ y: -6 }}
              className='text-center p-6 flex flex-col h-full justify-between rounded-2xl bg-white/60 backdrop-blur shadow-sm hover:shadow-lg transition-shadow'
            >
              <div>
                <div className='bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6'>
                  <Shield className='w-10 h-10 text-green-600' />
                </div>
                <h3 className='text-xl md:text-2xl font-bold mb-4'>Tutor Go</h3>
                <p className='text-sm md:text-base text-gray-600 flex-1'>
                  家教媒合 App（規劃中）
                </p>
              </div>
              <Link
                to='/tutorgo'
                className='inline-block mt-4 text-blue-600 hover:text-blue-700'
              >
                了解 Tutor Go
              </Link>
            </motion.div>

            {/* Learning */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6 }}
              className='text-center p-6 flex flex-col h-full justify-between rounded-2xl bg-white/60 backdrop-blur shadow-sm hover:shadow-lg transition-shadow'
            >
              <div>
                <div className='bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6'>
                  <Users className='w-10 h-10 text-purple-600' />
                </div>
                <h3 className='text-xl md:text-2xl font-bold mb-4'>
                  為學習做準備
                </h3>
                <p className='text-sm md:text-base text-gray-600 flex-1'>
                  我們也致力於學習，提供資源，並鼓勵各位共同討論學習。
                </p>
              </div>
              <Link
                to='/slrc'
                className='inline-block mt-4 text-blue-600 hover:text-blue-700'
              >
                了解更多
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className='section-screen flex items-center'>
        <div className='max-w-6xl mx-auto px-4 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className='bg-white p-6 md:p-8 rounded-2xl shadow-lg max-w-2xl mx-auto'
          >
            <h2 className='text-2xl md:text-3xl font-bold mb-6'>
              成為合作夥伴
            </h2>
            <p className='text-sm md:text-base text-gray-600 mb-8'>
              有意願支持我們的你可考慮成為合作夥伴，
              我們將提供更多專業服務給您。
            </p>
            <Link
              to='/partner'
              className='inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors'
            >
              了解更多合作資訊
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className='section-screen flex items-center'>
        <div className='max-w-6xl mx-auto px-4 text-center'>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className='text-lg md:text-xl font-bold mb-4'
          >
            關注更多有關
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className='text-blue-600 font-bold mb-8'
          >
            HYJdevelop的更新
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to='/updates'
              className='inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors'
            >
              查看更多我們資訊
            </Link>
          </motion.div>
        </div>
      </section>

      {/* History Section - moved to bottom */}
      <section id='history' className='section-screen flex flex-col justify-center'>
        <div className='max-w-6xl mx-auto px-4 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold mb-6'>歷史發展</h2>
          <p className='text-sm md:text-base text-gray-600 mb-10'>回顧我們從起步到成長的關鍵時間</p>
        </div>
        <HistoryTimeline />
      </section>
    </div>
  );
};

export default Home;
