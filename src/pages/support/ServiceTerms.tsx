import { motion } from 'framer-motion';
import { inViewMotion } from 'src/utils/motion';

import {
  User,
  Shield,
  Ban,
  Info,
  Lock,
  FileText,
  AlertTriangle,
  XCircle,
  Gavel,
  Mail,
  RefreshCcw,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <div className='min-h-screen pb-24'>
      {/* Hero Section */}
      <section className='min-h-screen max-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-center px-4 relative py-12 overflow-hidden'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className='hero-title mb-6 text-gray-800'
        >
          服務條款
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='hero-subtitle max-w-2xl mx-auto mb-4'
        >
          歡迎您使用 HYJdevelop 及其相關服務，請詳閱下列服務條款。
        </motion.p>

      </section>

      <div className='max-w-3xl mx-auto px-4 py-12 space-y-10'>
        {/* 1. 導言與適用範圍 */}
        <motion.section
          {...inViewMotion(false, { duration: 0.5, amount: 0.3 })}
          className='bg-white p-6 rounded-lg shadow-sm'
        >
          <div className='flex items-center mb-4'>
            <Info className='w-6 h-6 text-blue-600 mr-3' />
            <h2 className='text-xl font-bold'>1. 導言與適用範圍</h2>
          </div>
          <p className='text-gray-700 mb-2'>
            本服務條款（以下簡稱「本條款」）適用於您（以下簡稱「用戶」）使用
            HYJdevelop
            及其相關網站、App、平台與服務。當您註冊、登入或使用本服務，即表示您已閱讀、瞭解並同意遵守本條款。
          </p>
          <p className='text-gray-700 text-sm leading-relaxed'>
            您使用我們所提供的其他產品、功能、應用程式、服務、技術及軟體（以下合稱「HYJdevelop
            產品」或「產品」）的行為，這些產品皆由 HYJdevelop
            為您提供。除非另有說明，否則我們不會對您使用 HYJdevelop
            或本條款涵蓋之其他產品或服務收取費用；惟企業商家、組織及其他人可能會付費請我們向您顯示其商品與服務之廣告或贊助內容。您使用本服務，即表示您同意我們在符合法令與設定之範圍內，向您顯示與您相關之廣告或贊助內容。更多關於資料與個人化之資訊，請參考
            <Link to='/privacy' className='text-blue-600 hover:underline'>
              《資料和隱私》
            </Link>
            。
          </p>
        </motion.section>

        {/* 2. 用戶註冊與帳號安全 */}
        <motion.section
          {...inViewMotion(false, { duration: 0.5, delay: 0.1, amount: 0.3 })}
          className='bg-white p-6 rounded-lg shadow-sm'
        >
          <div className='flex items-center mb-4'>
            <User className='w-6 h-6 text-green-600 mr-3' />
            <h2 className='text-xl font-bold'>2. 用戶註冊與帳號安全</h2>
          </div>
          <ul className='list-disc pl-5 space-y-2 text-gray-700'>
            <li>
              用戶須提供真實、完整的個人資料，並維持資料之正確性（鼓勵使用真實姓名）。
            </li>
            <li>
              每位用戶限建立並使用一個個人帳號，請勿共享、轉讓或授權他人使用。
            </li>
            <li>
              帳號、密碼請妥善保管，勿提供他人使用。因用戶疏忽導致之損失，平台不負賠償責任。
            </li>
            <li>如發現帳號遭盜用或異常，請立即通知平台。</li>
          </ul>
        </motion.section>

        {/* 3. 用戶義務與禁止行為 */}
        <motion.section
          {...inViewMotion(false, { duration: 0.5, delay: 0.2, amount: 0.3 })}
          className='bg-white p-6 rounded-lg shadow-sm'
        >
          <div className='flex items-center mb-4'>
            <Ban className='w-6 h-6 text-red-600 mr-3' />
            <h2 className='text-xl font-bold'>3. 用戶義務與禁止行為</h2>
          </div>
          <ul className='list-disc pl-5 space-y-2 text-gray-700'>
            <li>不得冒用他人身分、散布不實資訊、發表違法或侵權內容。</li>
            <li>不得干擾、破壞平台運作，或進行任何未經授權之存取。</li>
            <li>不得利用本服務進行商業廣告、垃圾訊息、詐騙、騷擾等行為。</li>
            <li>不得違反任何適用法令或本平台規範。</li>
          </ul>
        </motion.section>

        {/* 4. 服務內容與權利義務 */}
        <motion.section
          {...inViewMotion(false, { duration: 0.5, delay: 0.3, amount: 0.3 })}
          className='bg-white p-6 rounded-lg shadow-sm'
        >
          <div className='flex items-center mb-4'>
            <FileText className='w-6 h-6 text-indigo-600 mr-3' />
            <h2 className='text-xl font-bold'>4. 服務內容與權利義務</h2>
          </div>
          <ul className='list-disc pl-5 space-y-2 text-gray-700'>
            <li>
              我們提供社群、內容分享、媒合與互動等服務，並持續改進體驗與安全。
            </li>
            <li>
              平台有權隨時調整、暫停或終止全部或部分服務，並於必要時公告。
            </li>
            <li>平台有權審查、刪除違規內容，或暫停/終止違規用戶帳號。</li>
            <li>用戶應遵守平台公告之各項規範與指引。</li>
          </ul>
          <div className='mt-4 p-4 rounded-lg bg-indigo-50'>
            <h3 className='font-semibold text-indigo-700 mb-2'>
              4.1 服務的資金來源
            </h3>
            <p className='text-gray-700 text-sm'>
              用戶一般無須付費即可使用本服務；部分功能與內容可能含有商業贊助或廣告。使用本服務即表示您同意我們可於平台內顯示與您相關的贊助與商業內容。
            </p>
          </div>
          <div className='mt-4 p-4 rounded-lg bg-indigo-50'>
            <h3 className='font-semibold text-indigo-700 mb-2'>
              4.2 用戶承諾與行為規範
            </h3>
            <ul className='list-disc pl-5 space-y-1 text-gray-700 text-sm'>
              <li>
                不得發表違法、侵權、詐欺、仇恨或危害安全之內容；不得散播惡意程式、垃圾訊息。
              </li>
              <li>不得未經授權蒐集他人資料、嘗試入侵或迴避存取控制。</li>
              <li>若內容違規，平台得移除並視情節停權或終止帳號。</li>
            </ul>
          </div>
        </motion.section>

        {/* 5. 隱私權與資料保護 */}
        <motion.section
          {...inViewMotion(false, { duration: 0.5, delay: 0.4, amount: 0.3 })}
          className='bg-white p-6 rounded-lg shadow-sm'
        >
          <div className='flex items-center mb-4'>
            <Lock className='w-6 h-6 text-blue-600 mr-3' />
            <h2 className='text-xl font-bold'>5. 隱私權與資料保護</h2>
          </div>
          <p className='text-gray-700 mb-2'>
            我們重視您的個人資料保護，所有資料之蒐集、處理與利用，均依據{' '}
            <Link to='/privacy' className='text-blue-600 hover:underline'>
              隱私權政策
            </Link>{' '}
            辦理。請詳閱隱私權政策以瞭解您的權利與平台義務。
          </p>
          <p className='text-gray-700'>
            平台採用業界標準的安全技術（如加密傳輸、權限控管、定期稽核）保護您的資料安全，並持續提升資安防護措施。
          </p>
        </motion.section>

        {/* 6. 智慧財產權（含用戶授權） */}
        <motion.section
          {...inViewMotion(false, { duration: 0.5, delay: 0.5, amount: 0.3 })}
          className='bg-white p-6 rounded-lg shadow-sm'
        >
          <div className='flex items-center mb-4'>
            <Shield className='w-6 h-6 text-purple-600 mr-3' />
            <h2 className='text-xl font-bold'>6. 智慧財產權與授權</h2>
          </div>
          <ul className='list-disc pl-5 space-y-2 text-gray-700'>
            <li>
              本平台內容（含文字、圖片、程式、商標等）受智慧財產權法保護，未經授權不得擅自使用。
            </li>
            <li>
              用戶保留其上傳內容的權利；為提供服務之必要，用戶授權平台於服務範圍內進行儲存、重製、公開傳輸與展示，並得為合理之格式轉換與備援。
            </li>
            <li>
              您同意我們得於合法與設定許可範圍內，將您的姓名/頭像與您對內容之互動（例如按讚、追蹤）顯示於相關的贊助或商業內容旁。
            </li>
          </ul>
          <p className='text-gray-700 text-sm mt-2'>
            使用我們的著作權或商標（或近似標記）須遵守
            <Link to='/terms' className='text-blue-600 hover:underline'>
              品牌使用準則
            </Link>
            ，或事先取得授權。
          </p>
        </motion.section>

        {/* 7. 責任免除與限制 */}
        <motion.section
          {...inViewMotion(false, { duration: 0.5, delay: 0.6, amount: 0.3 })}
          className='bg-white p-6 rounded-lg shadow-sm'
        >
          <div className='flex items-center mb-4'>
            <AlertTriangle className='w-6 h-6 text-red-600 mr-3' />
            <h2 className='text-xl font-bold'>7. 責任免除與限制</h2>
          </div>
          <ul className='list-disc pl-5 space-y-2 text-gray-700'>
            <li>
              平台致力於維護服務安全，採用多層次防護措施，防止未經授權存取、資料外洩與惡意攻擊。
            </li>
            <li>平台對於用戶自行上傳、發表之內容不負擔保責任。</li>
            <li>
              因不可抗力、第三人行為、系統維護、網路攻擊等因素導致服務中斷、資料遺失，平台不負賠償責任。
            </li>
            <li>
              用戶應妥善保管帳號密碼，並對自身行為負全部責任。若因用戶疏忽造成損害，平台不負賠償責任。
            </li>
            <li>用戶因違反本條款或法令所致之損害，應自負全部責任。</li>
          </ul>
        </motion.section>

        {/* 8. 服務終止與帳號刪除 */}
        <motion.section
          {...inViewMotion(false, { duration: 0.5, delay: 0.7, amount: 0.3 })}
          className='bg-white p-6 rounded-lg shadow-sm'
        >
          <div className='flex items-center mb-4'>
            <XCircle className='w-6 h-6 text-gray-600 mr-3' />
            <h2 className='text-xl font-bold'>8. 服務終止與帳號刪除</h2>
          </div>
          <ul className='list-disc pl-5 space-y-2 text-gray-700'>
            <li>用戶可隨時申請終止帳號，平台將依規定處理資料刪除。</li>
            <li>
              平台有權因違規、法令要求或其他正當理由，終止全部或部分服務。
            </li>
          </ul>
        </motion.section>

        {/* 9. 爭議處理與準據法 */}
        <motion.section
          {...inViewMotion(false, { duration: 0.5, delay: 0.8, amount: 0.3 })}
          className='bg-white p-6 rounded-lg shadow-sm'
        >
          <div className='flex items-center mb-4'>
            <Gavel className='w-6 h-6 text-blue-800 mr-3' />
            <h2 className='text-xl font-bold'>9. 爭議處理與準據法</h2>
          </div>
          <p className='text-gray-700'>
            本條款之解釋與適用，以中華民國（台灣）法律為準據法。雙方因本服務發生爭議時，應以誠信協商解決，協商不成時，以台灣台北地方法院為第一審管轄法院。
          </p>
        </motion.section>

        {/* 10. 聯絡方式 */}
        <motion.section
          {...inViewMotion(false, { duration: 0.5, delay: 0.9, amount: 0.3 })}
          className='bg-white p-6 rounded-lg shadow-sm'
        >
          <div className='flex items-center mb-4'>
            <Mail className='w-6 h-6 text-green-700 mr-3' />
            <h2 className='text-xl font-bold'>10. 聯絡方式</h2>
          </div>
          <p className='text-gray-700'>
            如對本條款有任何疑問，請來信：
            <a
              href='mailto:hyjdevelop@gmail.com'
              className='text-blue-600 hover:underline ml-1'
            >
              hyjdevelop@gmail.com
            </a>
          </p>
        </motion.section>

        {/* 11. 條款修訂與公告 */}
        <motion.section
          {...inViewMotion(false, { duration: 0.5, delay: 1.0, amount: 0.3 })}
          className='bg-white p-6 rounded-lg shadow-sm'
        >
          <div className='flex items-center mb-4'>
            <RefreshCcw className='w-6 h-6 text-indigo-700 mr-3' />
            <h2 className='text-xl font-bold'>11. 條款修訂與公告</h2>
          </div>
          <p className='text-gray-700'>
            本平台有權隨時修訂本條款，並於網站公告。修訂後條款自公告時起生效，請用戶定期查閱。
          </p>
        </motion.section>

        <div className='text-center text-sm text-gray-500 mt-8'>
          <p>最後更新：2025年8月10日</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
