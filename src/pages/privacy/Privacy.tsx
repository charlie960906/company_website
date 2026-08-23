import { Lock, Eye, Shield, Cookie, Database, UserCheck } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { inViewMotion } from 'src/utils/motion';


const Privacy = () => {
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
          資料和隱私
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='hero-subtitle max-w-3xl mx-auto mb-4'
        >
          我們致力於讓您掌控自己的隱私並保護自己的資訊，以便在我們的產品上享受您最重視的體驗。
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='hero-subtitle max-w-3xl mx-auto'
        >
          而我們在了解您的資訊時將全力協助保護資訊安全以及做出正確隱私決定的原因，同時我們也會遵守嚴格的業界隱私標準，並保護您資料的安全。
        </motion.p>

      </section>

      <div className='max-w-4xl mx-auto px-4'>
        <div className='space-y-12'>
          {/* 資料與體驗 */}
          <motion.section
            {...inViewMotion(!!shouldReduceMotion, { duration: 0.5, amount: 0.3 })}
            className='bg-white p-8 rounded-lg shadow-sm'
          >
            <div className='flex items-center mb-6'>
              <Eye className='w-8 h-8 text-blue-600 mr-3' />
              <h2 className='text-2xl font-bold'>資料與體驗</h2>
            </div>
            <p className='text-gray-700 mb-6 leading-relaxed'>
              資料可提升體驗品質，並提高體驗與您的相關性，這可以是您應加入的推薦社團，或者在您的應用程式中提供反映您興趣的內容。我們會給予您更多隱私設定選擇的掌控權，並負責保護您資料的安全。
            </p>
            <div className='bg-blue-50 p-6 rounded-lg'>
              <h4 className='font-semibold text-blue-800 mb-4 text-lg'>
                我們收集的資料類型：
              </h4>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>基本帳戶資訊</strong>（如需要）
                      <p className='text-sm text-gray-600 mt-1'>
                        包括用戶名、電子郵件等基本識別資訊
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>使用行為數據</strong>（匿名化處理）
                      <p className='text-sm text-gray-600 mt-1'>
                        網站使用模式、功能偏好等統計資訊
                      </p>
                    </div>
                  </li>
                </ul>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>技術資訊</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        瀏覽器類型、設備資訊、IP 位址等
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>互動內容</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        您主動分享的資訊、評論、上傳的檔案等
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Cookie 與追蹤技術 */}
          <motion.section
            {...inViewMotion(!!shouldReduceMotion, { duration: 0.5, delay: 0.1, amount: 0.3 })}
            className='bg-white p-8 rounded-lg shadow-sm'
          >
            <div className='flex items-center mb-6'>
              <Cookie className='w-8 h-8 text-yellow-600 mr-3' />
              <h2 className='text-2xl font-bold'>Cookie 與追蹤技術</h2>
            </div>
            <p className='text-gray-700 mb-6 leading-relaxed'>
              我們使用 Cookie
              和類似技術來改善網站體驗、分析使用情況，並提供個人化內容。這些技術幫助我們了解用戶如何使用我們的服務，並據此優化我們的平台。
            </p>
            <div className='bg-yellow-50 p-6 rounded-lg'>
              <h4 className='font-semibold text-yellow-800 mb-4 text-lg'>
                Cookie 類型與用途：
              </h4>
              <div className='space-y-4'>
                <div className='bg-white p-4 rounded-lg'>
                  <h5 className='font-semibold text-yellow-800 mb-2'>
                    必要 Cookie
                  </h5>
                  <p className='text-sm text-gray-700 mb-2'>
                    網站基本功能運作所需，無法停用
                  </p>
                  <ul className='text-xs text-gray-600 space-y-1'>
                    <li>• 登入狀態維護</li>
                    <li>• 購物車功能</li>
                    <li>• 安全驗證</li>
                  </ul>
                </div>
                <div className='bg-white p-4 rounded-lg'>
                  <h5 className='font-semibold text-yellow-800 mb-2'>
                    功能 Cookie
                  </h5>
                  <p className='text-sm text-gray-700 mb-2'>
                    記住您的偏好設定，提升使用體驗
                  </p>
                  <ul className='text-xs text-gray-600 space-y-1'>
                    <li>• 語言偏好</li>
                    <li>• 主題設定</li>
                    <li>• 搜尋歷史</li>
                  </ul>
                </div>
                <div className='bg-white p-4 rounded-lg'>
                  <h5 className='font-semibold text-yellow-800 mb-2'>
                    分析 Cookie
                  </h5>
                  <p className='text-sm text-gray-700 mb-2'>
                    幫助我們改善服務（可選擇退出）
                  </p>
                  <ul className='text-xs text-gray-600 space-y-1'>
                    <li>• 網站使用統計</li>
                    <li>• 效能監控</li>
                    <li>• 錯誤追蹤</li>
                  </ul>
                </div>
                <div className='bg-white p-4 rounded-lg'>
                  <h5 className='font-semibold text-yellow-800 mb-2'>
                    行銷 Cookie
                  </h5>
                  <p className='text-sm text-gray-700 mb-2'>
                    提供相關內容和廣告（可選擇退出）
                  </p>
                  <ul className='text-xs text-gray-600 space-y-1'>
                    <li>• 個人化推薦</li>
                    <li>• 廣告投放</li>
                    <li>• 社交媒體整合</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 資料處理與保護 */}
          <motion.section
            {...inViewMotion(!!shouldReduceMotion, { duration: 0.5, delay: 0.2, amount: 0.3 })}
            className='bg-white p-8 rounded-lg shadow-sm'
          >
            <div className='flex items-center mb-6'>
              <Database className='w-8 h-8 text-green-600 mr-3' />
              <h2 className='text-2xl font-bold'>資料處理與保護</h2>
            </div>
            <p className='text-gray-700 mb-6 leading-relaxed'>
              我們採用業界標準的安全措施來保護您的資料，包括加密傳輸、安全存儲和定期安全審查。我們遵循資料最小化原則，只收集必要的資訊，並確保資料的安全性和完整性。
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='bg-green-50 p-6 rounded-lg'>
                <h4 className='font-semibold text-green-800 mb-4 text-lg'>
                  資料保護措施：
                </h4>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>HTTPS 加密傳輸</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        所有資料傳輸都使用 SSL/TLS 加密
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>資料庫加密存儲</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        敏感資料在靜態時也進行加密
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>定期安全更新</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        系統和軟體定期更新以修補漏洞
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>存取權限控制</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        嚴格的員工資料存取權限管理
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='bg-purple-50 p-6 rounded-lg'>
                <h4 className='font-semibold text-purple-800 mb-4 text-lg'>
                  資料使用原則：
                </h4>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>最小化收集原則</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        只收集提供服務所必需的資料
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>明確使用目的</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        清楚說明資料的收集和使用目的
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>有限存儲期限</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        資料只在必要期間內保存
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>第三方限制</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        嚴格控制第三方對資料的存取
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* 您的權利 */}
          <motion.section
            {...inViewMotion(!!shouldReduceMotion, { duration: 0.5, delay: 0.3 })}
            className='bg-white p-8 rounded-lg shadow-sm'
          >
            <div className='flex items-center mb-6'>
              <UserCheck className='w-8 h-8 text-indigo-600 mr-3' />
              <h2 className='text-2xl font-bold'>您的權利</h2>
            </div>
            <p className='text-gray-700 mb-6 leading-relaxed'>
              根據相關法規，您對自己的個人資料擁有以下權利。我們承諾在收到您的請求後，在法定期限內回應並處理您的權利行使申請。
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-4'>
                <div className='bg-indigo-50 p-4 rounded-lg'>
                  <h4 className='font-semibold text-indigo-800 mb-2'>存取權</h4>
                  <p className='text-sm text-gray-700'>
                    了解我們收集了哪些您的資料，以及如何使用這些資料
                  </p>
                </div>
                <div className='bg-indigo-50 p-4 rounded-lg'>
                  <h4 className='font-semibold text-indigo-800 mb-2'>更正權</h4>
                  <p className='text-sm text-gray-700'>
                    要求修正不正確、不完整或過時的個人資料
                  </p>
                </div>
                <div className='bg-indigo-50 p-4 rounded-lg'>
                  <h4 className='font-semibold text-indigo-800 mb-2'>刪除權</h4>
                  <p className='text-sm text-gray-700'>
                    要求刪除您的個人資料（在特定條件下）
                  </p>
                </div>
                <div className='bg-indigo-50 p-4 rounded-lg'>
                  <h4 className='font-semibold text-indigo-800 mb-2'>限制權</h4>
                  <p className='text-sm text-gray-700'>
                    限制資料處理範圍，暫停特定用途的資料使用
                  </p>
                </div>
              </div>
              <div className='space-y-4'>
                <div className='bg-indigo-50 p-4 rounded-lg'>
                  <h4 className='font-semibold text-indigo-800 mb-2'>攜帶權</h4>
                  <p className='text-sm text-gray-700'>
                    以結構化、常用且機器可讀的格式取得您的資料副本
                  </p>
                </div>
                <div className='bg-indigo-50 p-4 rounded-lg'>
                  <h4 className='font-semibold text-indigo-800 mb-2'>反對權</h4>
                  <p className='text-sm text-gray-700'>
                    反對特定資料處理，特別是基於合法利益的處理
                  </p>
                </div>
                <div className='bg-indigo-50 p-4 rounded-lg'>
                  <h4 className='font-semibold text-indigo-800 mb-2'>
                    自動化決策
                  </h4>
                  <p className='text-sm text-gray-700'>
                    不受完全自動化決策影響，包括資料分析
                  </p>
                </div>
                <div className='bg-indigo-50 p-4 rounded-lg'>
                  <h4 className='font-semibold text-indigo-800 mb-2'>申訴權</h4>
                  <p className='text-sm text-gray-700'>
                    向相關監管機關申訴我們的資料處理行為
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 為何需要提供資料 */}
          <motion.section
            {...inViewMotion(!!shouldReduceMotion, { duration: 0.5, delay: 0.4 })}
            className='bg-white p-8 rounded-lg shadow-sm'
          >
            <div className='flex items-center mb-6'>
              <Lock className='w-8 h-8 text-gray-600 mr-3' />
              <h2 className='text-2xl font-bold'>為何需要提供資料</h2>
            </div>
            <p className='text-gray-700 mb-6 leading-relaxed'>
              我們僅會和我們的客戶要求他們的詳細資料，用戶在體驗時並不需要提供資料給我們(您的網路供應商或其他服務商可能會收集您的資料)。我們收集資料的目的是為了提供更好的服務體驗。
            </p>
            <div className='bg-gray-50 p-6 rounded-lg'>
              <h4 className='font-semibold text-gray-800 mb-4 text-lg'>
                資料收集目的：
              </h4>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>提供和改善服務</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        確保服務正常運作並持續改進
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>個人化用戶體驗</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        根據您的偏好提供相關內容
                      </p>
                    </div>
                  </li>
                </ul>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>安全防護和詐騙預防</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        保護您的帳號和資料安全
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-gray-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>法律合規要求</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        遵守相關法律法規要求
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* 資料刪除申請 */}
          <motion.section
            {...inViewMotion(!!shouldReduceMotion, { duration: 0.5, delay: 0.5 })}
            className='bg-white p-8 rounded-lg shadow-sm'
          >
            <div className='flex items-center mb-6'>
              <Shield className='w-8 h-8 text-red-600 mr-3' />
              <h2 className='text-2xl font-bold'>資料刪除申請</h2>
            </div>
            <p className='text-gray-700 mb-6 leading-relaxed'>
              我們並不建議我們的客戶向我們提出刪除資料的要求。若您之後向我們提出後續的產品維護，我們在資料庫中可能會無法搜尋到此項服務紀錄因此無法幫您維護，而造成我們與您之間的不愉快。如果您真的堅持要刪除資料請寄郵件給我們。(如需了解詳請可以至服務條款第3-3條)
            </p>
            <div className='bg-red-50 p-6 rounded-lg'>
              <h4 className='font-semibold text-red-800 mb-4 text-lg'>
                刪除申請流程：
              </h4>
              <div className='space-y-4'>
                <div className='flex items-start'>
                  <div className='w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1'>
                    1
                  </div>
                  <div>
                    <h5 className='font-semibold text-red-800'>
                      發送郵件至我們的隱私專用信箱
                    </h5>
                    <p className='text-sm text-gray-700 mt-1'>
                      hyjdevelop@gmail.com
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className='w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1'>
                    2
                  </div>
                  <div>
                    <h5 className='font-semibold text-red-800'>
                      提供身份驗證資訊
                    </h5>
                    <p className='text-sm text-gray-700 mt-1'>
                      包括帳號資訊、聯絡方式等驗證資料
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className='w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1'>
                    3
                  </div>
                  <div>
                    <h5 className='font-semibold text-red-800'>
                      說明刪除範圍和原因
                    </h5>
                    <p className='text-sm text-gray-700 mt-1'>
                      明確指出要刪除的資料類型和刪除原因
                    </p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <div className='w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1'>
                    4
                  </div>
                  <div>
                    <h5 className='font-semibold text-red-800'>
                      我們將在30天內回覆處理結果
                    </h5>
                    <p className='text-sm text-gray-700 mt-1'>
                      根據法規要求，我們會在30天內回應您的請求
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* 聯絡資訊 */}
        <motion.div
          {...inViewMotion(!!shouldReduceMotion, { duration: 0.5, delay: 0.6, amount: 0.3 })}
          className='mt-12 bg-blue-50 p-8 rounded-lg'
        >
          <h3 className='text-2xl font-bold text-blue-800 mb-6'>
            隱私相關聯絡
          </h3>
          <p className='text-gray-700 mb-6 leading-relaxed'>
            如果您對我們的隱私政策有任何疑問，或需要行使您的權利，請透過以下方式聯絡我們。我們承諾在收到您的詢問後，盡快為您提供協助。
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-white p-6 rounded-lg'>
              <h4 className='font-semibold text-blue-800 mb-3 text-lg'>
                一般隱私問題：
              </h4>
              <p className='text-gray-600 mb-2'>hyjdevelop@gmail.com</p>
              <p className='text-sm text-gray-500'>
                適用於隱私政策諮詢、權利行使等一般問題
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg'>
              <h4 className='font-semibold text-blue-800 mb-3 text-lg'>
                資料刪除申請：
              </h4>
              <p className='text-gray-600 mb-2'>hyjdevelop@gmail.com</p>
              <p className='text-sm text-gray-500'>
                專門處理資料刪除、更正等權利行使申請
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
