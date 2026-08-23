import { motion, useReducedMotion } from 'framer-motion';
import { inViewMotion } from 'src/utils/motion';

import {
  Shield,
  Lock,
  Star,
  Users,
  BookOpen,
  HelpCircle,
  BadgeCheck,
  CalendarClock,
  MapPin,
  Wallet,
  Award,
  CheckCircle,
  Clock,
  Globe,
  Smartphone,
} from 'lucide-react';

const TutorGo = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className='min-h-screen pb-24'>
      {/* Hero Section */}
      <section className='hero-section min-h-screen max-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-50 to-white text-center px-4 relative py-12 overflow-hidden'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className='hero-title mb-6 text-gray-800'
        >
          TutorGo
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='hero-subtitle max-w-2xl mx-auto mb-4'
        >
          家教媒合 App（規劃中）
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='body-text max-w-2xl mx-auto mb-2'
        >
          更低成本、更有效率、更可靠的家教媒合平台!
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className='text-sm text-gray-500 max-w-2xl mx-auto'
        >
          預計 2027 年初開放內測，2027 年 3 月正式推廣（實際以官方公告為準）。
        </motion.p>
      </section>

      {/* 產品概述 */}
      <section className='max-w-5xl mx-auto px-4 py-16'>
        <motion.h2
          {...inViewMotion(shouldReduceMotion, { duration: 0.5, amount: 0.3 })}
          className='text-3xl md:text-4xl font-bold mb-10 text-center'
        >
          產品概述
        </motion.h2>
        <motion.div
          {...inViewMotion(shouldReduceMotion, { duration: 0.5, amount: 0.3 })}
          className='bg-white rounded-2xl shadow-sm p-8 mb-8'
        >
          <p className='text-gray-700 text-lg leading-relaxed mb-6'>
            TutorGo 是一個專為台灣市場設計的家教媒合平台，致力於打造更公平、更透明、更安全的家教生態圈。
          </p>
          <p className='text-gray-700 text-lg leading-relaxed mb-6'>
            <strong className='text-blue-600'>我們的願景：</strong>讓每位學生都能找到最適合的老師，讓每位優質老師都能被看見，同時降低平台手續費，讓更多資源留在教學現場。
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
            <div className='bg-blue-50 rounded-lg p-4'>
              <h4 className='font-semibold text-blue-800 mb-2'>為學生與家長</h4>
              <p className='text-sm text-gray-600'>提供多重篩選工具，確保找到合適的老師</p>
            </div>
            <div className='bg-green-50 rounded-lg p-4'>
              <h4 className='font-semibold text-green-800 mb-2'>為老師</h4>
              <p className='text-sm text-gray-600'>建立個人品牌，提升教學機會與收入</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 目標用戶 */}
      <section className='max-w-5xl mx-auto px-4 py-16 bg-gray-50'>
        <motion.h2
          {...inViewMotion(shouldReduceMotion, { duration: 0.5, amount: 0.3 })}
          className='text-3xl md:text-4xl font-bold mb-10 text-center'
        >
          目標用戶
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <motion.div
            {...inViewMotion(shouldReduceMotion, { duration: 0.5, amount: 0.3 })}
            className='bg-white rounded-2xl shadow-sm p-6 text-center flex flex-col items-center'
          >
            <Users className='w-12 h-12 text-blue-600 mb-4' />
            <h3 className='font-bold mb-3 text-lg'>需求方（學生／家長）</h3>
            <p className='text-gray-600'>
              國小學生（由家長代為操作）、國中高中學生、大學生、社會人士
            </p>
          </motion.div>
          <motion.div
            {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.1, amount: 0.3 })}
            className='bg-white rounded-2xl shadow-sm p-6 text-center flex flex-col items-center'
          >
            <BookOpen className='w-12 h-12 text-green-600 mb-4' />
            <h3 className='font-bold mb-3 text-lg'>供給方（老師）</h3>
            <p className='text-gray-600'>
              大學生（兼職接案）、在職教師或專業家教
            </p>
          </motion.div>
          <motion.div
            {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.2, amount: 0.3 })}
            className='bg-white rounded-2xl shadow-sm p-6 text-center flex flex-col items-center'
          >
            <Globe className='w-12 h-12 text-purple-600 mb-4' />
            <h3 className='font-bold mb-3 text-lg'>地區範圍</h3>
            <p className='text-gray-600'>
              第一版主打全台灣，支援實體（到府／定點）及線上（視訊）教學，無地區限制
            </p>
          </motion.div>
        </div>
      </section>

      {/* 教學模式 */}
      <section className='max-w-5xl mx-auto px-4 py-16'>
        <motion.h2
          {...inViewMotion(shouldReduceMotion, { duration: 0.5, amount: 0.3 })}
          className='text-3xl md:text-4xl font-bold mb-10 text-center'
        >
          教學模式
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <motion.div
            {...inViewMotion(shouldReduceMotion, { duration: 0.5, amount: 0.3 })}
            className='bg-white rounded-2xl shadow-sm p-6 text-center flex flex-col items-center'
          >
            <MapPin className='w-12 h-12 text-blue-600 mb-4' />
            <h3 className='font-bold mb-3 text-lg'>到府家教</h3>
            <p className='text-gray-600'>
              老師前往學生家中授課
            </p>
          </motion.div>
          <motion.div
            {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.1, amount: 0.3 })}
            className='bg-white rounded-2xl shadow-sm p-6 text-center flex flex-col items-center'
          >
            <Smartphone className='w-12 h-12 text-green-600 mb-4' />
            <h3 className='font-bold mb-3 text-lg'>定點上課</h3>
            <p className='text-gray-600'>
              學生前往老師指定地點（如咖啡廳、圖書館）
            </p>
          </motion.div>
          <motion.div
            {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.2, amount: 0.3 })}
            className='bg-white rounded-2xl shadow-sm p-6 text-center flex flex-col items-center'
          >
            <CheckCircle className='w-12 h-12 text-purple-600 mb-4' />
            <h3 className='font-bold mb-3 text-lg'>線上視訊</h3>
            <p className='text-gray-600'>
              透過視訊軟體遠端授課，支援跨縣市媒合
            </p>
          </motion.div>
        </div>
        <motion.p
          {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.3, amount: 0.3 })}
          className='text-center text-gray-600 mt-8'
        >
          老師可同時支援多種模式，學生可在搜尋時篩選偏好的模式。
        </motion.p>
      </section>

      {/* 分級認證 */}
      <section className='max-w-5xl mx-auto px-4 py-16 bg-gray-50'>
        <motion.h2
          {...inViewMotion(shouldReduceMotion, { duration: 0.5, amount: 0.3 })}
          className='text-3xl md:text-4xl font-bold mb-10 text-center'
        >
          分級認證圖標計畫
        </motion.h2>
        <motion.p
          {...inViewMotion(shouldReduceMotion, { duration: 0.5, amount: 0.3 })}
          className='text-center text-gray-700 mb-8'
        >
          TutorGo 將建立分級認證制度，讓優質老師更容易被學生發現。認證將基於教學經驗、評價和相關證照等因素。
        </motion.p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <motion.div
            {...inViewMotion(shouldReduceMotion, { duration: 0.5, amount: 0.3 })}
            className='bg-white rounded-2xl shadow-sm p-6 text-center flex flex-col items-center'
          >
            <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
              <BadgeCheck className='w-6 h-6 text-blue-600' />
            </div>
            <h3 className='font-bold text-lg mb-2'>基礎認證</h3>
            <p className='text-gray-600 text-sm'>身份驗證，提升基本信任</p>
          </motion.div>
          <motion.div
            {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.1, amount: 0.3 })}
            className='bg-white rounded-2xl shadow-sm p-6 text-center flex flex-col items-center'
          >
            <div className='w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4'>
              <Award className='w-6 h-6 text-yellow-600' />
            </div>
            <h3 className='font-bold text-lg mb-2'>專業認證</h3>
            <p className='text-gray-600 text-sm'>學歷與證照認證，提升曝光度</p>
          </motion.div>
          <motion.div
            {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.2, amount: 0.3 })}
            className='bg-white rounded-2xl shadow-sm p-6 text-center flex flex-col items-center'
          >
            <div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4'>
              <Star className='w-6 h-6 text-purple-600' />
            </div>
            <h3 className='font-bold text-lg mb-2'>菁英認證</h3>
            <p className='text-gray-600 text-sm'>系統自動評定，最高榮譽</p>
          </motion.div>
        </div>
      </section>

      {/* 產品特色 */}
      <section className='max-w-5xl mx-auto px-4 py-16'>
        <motion.h2
          {...inViewMotion(shouldReduceMotion, { duration: 0.5, amount: 0.3 })}
          className='text-3xl md:text-4xl font-bold mb-10 text-center'
        >
          為什麼是 TutorGo
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <motion.div
            {...inViewMotion(shouldReduceMotion, { duration: 0.5, amount: 0.3 })}
            className='bg-white rounded-2xl shadow-sm p-6 text-center flex flex-col items-center'
          >
            <Shield className='w-10 h-10 text-blue-600 mb-3' />
            <h3 className='font-bold mb-2'>更安心的媒合</h3>
            <p className='text-gray-600'>
              多層審核機制與完善的申訴處理，讓每一次媒合更可靠，遇到問題也有平台介入協助。
            </p>
          </motion.div>
          <motion.div
            {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.1, amount: 0.3 })}
            className='bg-white rounded-2xl shadow-sm p-6 text-center flex flex-col items-center'
          >
            <Lock className='w-10 h-10 text-green-600 mb-3' />
            <h3 className='font-bold mb-2'>隱私分層保護</h3>
            <p className='text-gray-600'>
              合作確認前不公開聯絡資訊；定位資訊採分層顯示，先看大致範圍、正式合作後才釋出精確地址。
            </p>
          </motion.div>
          <motion.div
            {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.2, amount: 0.3 })}
            className='bg-white rounded-2xl shadow-sm p-6 text-center flex flex-col items-center'
          >
            <Star className='w-10 h-10 text-yellow-500 mb-3' />
            <h3 className='font-bold mb-2'>雙向評價更透明</h3>
            <p className='text-gray-600'>
              老師能評學生、學生也能評老師；雙方完成評價後才可互看，讓回饋更公平、更可信。
            </p>
          </motion.div>
          <motion.div
            {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.3, amount: 0.3 })}
            className='bg-white rounded-2xl shadow-sm p-6 text-center flex flex-col items-center'
          >
            <BadgeCheck className='w-10 h-10 text-purple-600 mb-3' />
            <h3 className='font-bold mb-2'>藍勾勾認證計畫</h3>
            <p className='text-gray-600'>
              老師可自願上傳學歷/證照/成績等佐證獲得藍勾勾標記，提升信任感與媒合曝光度。
            </p>
          </motion.div>
          <motion.div
            {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.4, amount: 0.3 })}
            className='bg-white rounded-2xl shadow-sm p-6 text-center flex flex-col items-center'
          >
            <CalendarClock className='w-10 h-10 text-pink-600 mb-3' />
            <h3 className='font-bold mb-2'>時段管理，少踩雷</h3>
            <p className='text-gray-600'>
              老師可管理可授課時段，學生填需求後只推薦「那個時段有空」的老師，避免媒合後才發現時間衝突。
            </p>
          </motion.div>
          <motion.div
            {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.5, amount: 0.3 })}
            className='bg-white rounded-2xl shadow-sm p-6 text-center flex flex-col items-center'
          >
            <Wallet className='w-10 h-10 text-orange-600 mb-3' />
            <h3 className='font-bold mb-2'>費用清楚，平台更好用</h3>
            <p className='text-gray-600'>
              手續費最高 8%，單次上限 200 元；提供訂閱方案（每月 199 元）享每月 5 次免手續費媒合等優惠。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 使用流程 */}
      <section className='max-w-5xl mx-auto px-4 py-16'>
        <motion.h2
          {...inViewMotion(shouldReduceMotion, { duration: 0.5, amount: 0.3 })}
          className='text-3xl md:text-4xl font-bold mb-10 text-center'
        >
          使用流程
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <motion.div
            {...inViewMotion(shouldReduceMotion, { duration: 0.5, amount: 0.3 })}
            className='bg-white rounded-2xl shadow-sm p-6'
          >
            <h3 className='font-bold mb-4 text-blue-700 flex items-center'>
              <Users className='w-5 h-5 mr-2' /> 學生/家長
            </h3>
            <ol className='list-decimal pl-5 space-y-2 text-gray-700'>
              <li>選擇「我要找老師」，填寫科目、預算、上課模式與可上課時段</li>
              <li>依條件篩選老師，查看評價與藍勾勾狀態</li>
              <li>送出媒合申請，於平台內聊天室溝通安排</li>
              <li>先試教：滿意再進入正式合作（降低踩雷）</li>
              <li>課後完課確認與雙向評價，讓下一次選擇更有依據</li>
            </ol>
          </motion.div>
          <motion.div
            {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.1, amount: 0.3 })}
            className='bg-white rounded-2xl shadow-sm p-6'
          >
            <h3 className='font-bold mb-4 text-green-700 flex items-center'>
              <BookOpen className='w-5 h-5 mr-2' /> 老師
            </h3>
            <ol className='list-decimal pl-5 space-y-2 text-gray-700'>
              <li>選擇「我要接家教案」，建立教學檔案與可授課時段</li>
              <li>可申請藍勾勾認證，提升信任與曝光</li>
              <li>接收媒合申請，於平台內聊天室溝通與安排試教</li>
              <li>正式合作後，時段自動鎖定，媒合更有效率</li>
              <li>課後完課確認，評價累積成口碑</li>
            </ol>
          </motion.div>
        </div>
        <motion.div
          {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.15, amount: 0.3 })}
          className='mt-8 bg-white rounded-2xl shadow-sm p-6'
        >
          <h3 className='font-bold mb-3 flex items-center text-gray-900'>
            <MapPin className='w-5 h-5 mr-2 text-yellow-600' /> 三種教學模式都支援
          </h3>
          <p className='text-gray-700'>
            到府、定點、線上視訊都可媒合。實體課程會依地理條件篩選推薦，同時用隱私分層方式保護學生位置資訊。
          </p>
        </motion.div>
      </section>

      {/* 開發時程 */}
      <section className='max-w-5xl mx-auto px-4 py-16'>
        <motion.h2
          {...inViewMotion(shouldReduceMotion, { duration: 0.5, amount: 0.3 })}
          className='text-3xl md:text-4xl font-bold mb-10 text-center'
        >
          開發進度
        </motion.h2>
        <motion.div
          {...inViewMotion(shouldReduceMotion, { duration: 0.5, amount: 0.3 })}
          className='bg-white rounded-2xl shadow-sm p-8 text-center'
        >
          <div className='flex items-center justify-center mb-4'>
            <Clock className='w-8 h-8 text-blue-600 mr-3' />
            <h3 className='text-xl font-bold'>目前階段：規劃與開發中</h3>
          </div>
          <p className='text-gray-700 mb-6'>
            我們正在積極開發 TutorGo，預計將於 2027 年初開放內測體驗。
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='bg-blue-50 rounded-lg p-4'>
              <div className='text-2xl font-bold text-blue-600 mb-2'>Q2 2026</div>
              <div className='text-sm text-gray-600'>完成核心架構設計</div>
            </div>
            <div className='bg-green-50 rounded-lg p-4'>
              <div className='text-2xl font-bold text-green-600 mb-2'>Q4 2026</div>
              <div className='text-sm text-gray-600'>App 開發與測試</div>
            </div>
            <div className='bg-purple-50 rounded-lg p-4'>
              <div className='text-2xl font-bold text-purple-600 mb-2'>Q1 2027</div>
              <div className='text-sm text-gray-600'>內測與正式上線</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 常見問答 */}
      <section className='max-w-4xl mx-auto px-4 py-16'>
        <motion.h2
          {...inViewMotion(shouldReduceMotion, { duration: 0.5, amount: 0.3 })}
          className='text-3xl md:text-4xl font-bold mb-10 text-center'
        >
          常見問答
        </motion.h2>
        <div className='space-y-8'>
          <motion.div
            {...inViewMotion(shouldReduceMotion, { duration: 0.5, amount: 0.3 })}
            className='bg-white rounded-2xl shadow-sm p-6'
          >
            <h3 className='font-bold mb-2 flex items-center'>
              <HelpCircle className='w-5 h-5 mr-2 text-blue-600' /> 什麼時候上線？
            </h3>
            <p className='text-gray-700'>
              目前仍在規劃與開發階段，預計 2027 年初開放內測，2027 年 3 月正式推廣（以官方公告為準）。
            </p>
          </motion.div>
          <motion.div
            {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.1, amount: 0.3 })}
            className='bg-white rounded-2xl shadow-sm p-6'
          >
            <h3 className='font-bold mb-2 flex items-center'>
              <HelpCircle className='w-5 h-5 mr-2 text-blue-600' /> 需要付費嗎？
            </h3>
            <p className='text-gray-700'>
              註冊與瀏覽不收費。平台服務費以「每次交易金額 8%，單次上限 200 元」為原則；另提供訂閱方案（每月 199 元）享每月 5 次免手續費媒合等優惠。
            </p>
          </motion.div>
          <motion.div
            {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.2, amount: 0.3 })}
            className='bg-white rounded-2xl shadow-sm p-6'
          >
            <h3 className='font-bold mb-2 flex items-center'>
              <HelpCircle className='w-5 h-5 mr-2 text-blue-600' />{' '}
              如何確保安全？
            </h3>
            <p className='text-gray-700'>
              透過老師審核與認證、平台內溝通（不公開聯絡資訊）、雙向評價與申訴機制，讓媒合更透明、合作更有保障。
            </p>
          </motion.div>
          <motion.div
            {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.3, amount: 0.3 })}
            className='bg-white rounded-2xl shadow-sm p-6'
          >
            <h3 className='font-bold mb-2 flex items-center'>
              <HelpCircle className='w-5 h-5 mr-2 text-blue-600' />{' '}
              可以跨區媒合嗎？
            </h3>
            <p className='text-gray-700'>
              可以。線上視訊課程不受地理限制；實體課程則會依定位條件篩選推薦，讓你更快找到「願意去、去得了」的對象。
            </p>
          </motion.div>
          <motion.div
            {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.4, amount: 0.3 })}
            className='bg-white rounded-2xl shadow-sm p-6'
          >
            <h3 className='font-bold mb-2 flex items-center'>
              <HelpCircle className='w-5 h-5 mr-2 text-blue-600' /> 家長可以幫孩子找老師嗎？
            </h3>
            <p className='text-gray-700'>
              可以。家長帳號可綁定子女並代為搜尋、送出媒合申請與付款，同時能查看上課紀錄與出缺席狀況（聊天室內容會保護學生隱私）。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 聯絡方式 */}
      <section className='max-w-3xl mx-auto px-4 py-16'>
        <motion.h2
          {...inViewMotion(shouldReduceMotion, { duration: 0.5, amount: 0.3 })}
          className='text-3xl md:text-4xl font-bold mb-10 text-center'
        >
          聯絡我們
        </motion.h2>
        <motion.div
          {...inViewMotion(shouldReduceMotion, { duration: 0.5, delay: 0.1, amount: 0.3 })}
          className='bg-white rounded-2xl shadow-sm p-6 text-center'
        >
          <p className='text-gray-700 mb-2'>
            如有任何問題、合作或建議，歡迎來信：
          </p>
          <a
            href='mailto:hyjdevelop@gmail.com'
            className='text-blue-600 hover:underline text-lg font-bold'
          >
            hyjdevelop@gmail.com
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default TutorGo;
