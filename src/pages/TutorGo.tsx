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
} from 'lucide-react';

const TutorGo = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className='min-h-screen pb-24'>
      {/* Hero Section */}
      <section className='min-h-screen max-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-yellow-50 to-white text-center px-4 relative py-12 overflow-hidden'>
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
