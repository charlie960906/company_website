import {
  MessageSquare,
  Users,
  Shield,
  AlertTriangle,
  FileText,
  Heart,
  Globe,
  Lock,
} from 'lucide-react';
import { motion } from 'framer-motion';

const Freedom = () => {
  return (
    <div className='min-h-screen pb-24'>
      {/* Hero Section */}
      <section className='min-h-screen max-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-white text-center px-4 relative py-12 overflow-hidden'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className='text-5xl md:text-7xl font-bold mb-8 text-gray-800'
        >
          表達自由與社群保護
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-lg text-gray-700 max-w-3xl mx-auto mb-4'
        >
          我們致力於保護每個人的表達自由權利，同時確保社群環境的安全與和諧。
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-lg text-gray-700 max-w-3xl mx-auto'
        >
          在數位時代，表達自由是民主社會的基石，我們將持續努力為用戶提供安全、包容且富有活力的交流平台。
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

      <div className='max-w-6xl mx-auto px-4'>
        <div className='space-y-12'>
          {/* 表達自由的定義與重要性 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className='bg-white p-8 rounded-lg shadow-sm'
          >
            <div className='flex items-center mb-6'>
              <MessageSquare className='w-8 h-8 text-green-600 mr-3' />
              <h2 className='text-2xl font-bold'>表達自由的定義與重要性</h2>
            </div>
            <p className='text-gray-700 mb-6 leading-relaxed'>
              表達自由是基本人權之一，包括言論自由、出版自由、集會自由等。在數位平台上，表達自由體現為用戶能夠自由分享想法、意見、創意和資訊，而不受不當限制或審查。
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='bg-green-50 p-6 rounded-lg'>
                <h4 className='font-semibold text-green-800 mb-4 text-lg'>
                  表達自由的內涵：
                </h4>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>言論自由</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        自由表達意見、觀點和想法
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>資訊自由</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        自由獲取和傳播資訊
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>創意表達</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        藝術、文學、音樂等創意作品
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>學術自由</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        學術研究和知識分享
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='bg-blue-50 p-6 rounded-lg'>
                <h4 className='font-semibold text-blue-800 mb-4 text-lg'>
                  表達自由的價值：
                </h4>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>促進民主發展</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        多元意見促進社會進步
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>知識傳播</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        促進資訊流通和知識分享
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>創意激發</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        鼓勵創新和藝術創作
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>社會監督</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        監督權力，促進透明
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* 我們的表達自由保護措施 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='bg-white p-8 rounded-lg shadow-sm'
          >
            <div className='flex items-center mb-6'>
              <Shield className='w-8 h-8 text-blue-600 mr-3' />
              <h2 className='text-2xl font-bold'>我們的表達自由保護措施</h2>
            </div>
            <p className='text-gray-700 mb-6 leading-relaxed'>
              我們建立了全面的表達自由保護機制，確保用戶能夠在安全、包容的環境中自由表達，同時保護社群免受有害內容的影響。
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='bg-blue-50 p-6 rounded-lg'>
                <div className='flex items-center mb-4'>
                  <Lock className='w-6 h-6 text-blue-600 mr-2' />
                  <h3 className='font-semibold text-blue-800'>內容保護機制</h3>
                </div>
                <ul className='space-y-2 text-sm text-gray-700'>
                  <li>• 反審查技術</li>
                  <li>• 內容加密保護</li>
                  <li>• 匿名發表選項</li>
                  <li>• 內容備份機制</li>
                </ul>
              </div>
              <div className='bg-green-50 p-6 rounded-lg'>
                <div className='flex items-center mb-4'>
                  <Users className='w-6 h-6 text-green-600 mr-2' />
                  <h3 className='font-semibold text-green-800'>社群自治</h3>
                </div>
                <ul className='space-y-2 text-sm text-gray-700'>
                  <li>• 用戶自治機制</li>
                  <li>• 社群規則制定</li>
                  <li>• 民主投票系統</li>
                  <li>• 透明治理流程</li>
                </ul>
              </div>
              <div className='bg-purple-50 p-6 rounded-lg'>
                <div className='flex items-center mb-4'>
                  <Globe className='w-6 h-6 text-purple-600 mr-2' />
                  <h3 className='font-semibold text-purple-800'>多元包容</h3>
                </div>
                <ul className='space-y-2 text-sm text-gray-700'>
                  <li>• 多語言支援</li>
                  <li>• 文化包容性</li>
                  <li>• 無障礙設計</li>
                  <li>• 性別平等保護</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* 內容審核原則 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='bg-white p-8 rounded-lg shadow-sm'
          >
            <div className='flex items-center mb-6'>
              <FileText className='w-8 h-8 text-indigo-600 mr-3' />
              <h2 className='text-2xl font-bold'>內容審核原則</h2>
            </div>
            <p className='text-gray-700 mb-6 leading-relaxed'>
              我們採用透明、公正的內容審核機制，在保護表達自由的同時，確保社群安全和用戶權益。我們的審核原則基於國際人權標準和最佳實踐。
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='bg-indigo-50 p-6 rounded-lg'>
                <h4 className='font-semibold text-indigo-800 mb-4 text-lg'>
                  審核標準：
                </h4>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>合法性原則</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        遵守當地法律法規要求
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>必要性原則</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        限制措施必須是必要且適當的
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>比例性原則</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        限制程度與危害程度相稱
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>透明性原則</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        審核過程和標準公開透明
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='bg-teal-50 p-6 rounded-lg'>
                <h4 className='font-semibold text-teal-800 mb-4 text-lg'>
                  審核流程：
                </h4>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>自動化初篩</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        AI 技術初步識別違規內容
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>人工審核</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        專業團隊進行詳細審核
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>社群參與</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        用戶可參與內容評審
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-teal-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>申訴機制</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        提供公平的申訴管道
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* 禁止內容類型 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='bg-white p-8 rounded-lg shadow-sm'
          >
            <div className='flex items-center mb-6'>
              <AlertTriangle className='w-8 h-8 text-red-600 mr-3' />
              <h2 className='text-2xl font-bold'>禁止內容類型</h2>
            </div>
            <p className='text-gray-700 mb-6 leading-relaxed'>
              為了保護社群安全和用戶權益，我們明確禁止以下類型的內容。這些限制是基於法律要求、社會責任和社群安全考慮，旨在創造健康、安全的交流環境。
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-4'>
                <div className='bg-red-50 p-4 rounded-lg'>
                  <h4 className='font-semibold text-red-800 mb-2'>違法內容</h4>
                  <ul className='text-sm text-gray-700 space-y-1'>
                    <li>• 暴力威脅或煽動暴力</li>
                    <li>• 恐怖主義相關內容</li>
                    <li>• 兒童剝削或虐待</li>
                    <li>• 非法藥物交易</li>
                    <li>• 詐騙或欺詐行為</li>
                  </ul>
                </div>
                <div className='bg-orange-50 p-4 rounded-lg'>
                  <h4 className='font-semibold text-orange-800 mb-2'>
                    仇恨言論
                  </h4>
                  <ul className='text-sm text-gray-700 space-y-1'>
                    <li>• 種族歧視言論</li>
                    <li>• 宗教仇恨內容</li>
                    <li>• 性別歧視言論</li>
                    <li>• 性取向歧視</li>
                    <li>• 殘疾歧視內容</li>
                  </ul>
                </div>
              </div>
              <div className='space-y-4'>
                <div className='bg-yellow-50 p-4 rounded-lg'>
                  <h4 className='font-semibold text-yellow-800 mb-2'>
                    騷擾與霸凌
                  </h4>
                  <ul className='text-sm text-gray-700 space-y-1'>
                    <li>• 個人騷擾行為</li>
                    <li>• 網路霸凌</li>
                    <li>• 跟蹤或騷擾</li>
                    <li>• 惡意造謠</li>
                    <li>• 人身攻擊</li>
                  </ul>
                </div>
                <div className='bg-pink-50 p-4 rounded-lg'>
                  <h4 className='font-semibold text-pink-800 mb-2'>不當內容</h4>
                  <ul className='text-sm text-gray-700 space-y-1'>
                    <li>• 過度暴力或血腥</li>
                    <li>• 露骨色情內容</li>
                    <li>• 自殘或自殺內容</li>
                    <li>• 垃圾訊息</li>
                    <li>• 惡意軟體連結</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 申訴與救濟機制 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='bg-white p-8 rounded-lg shadow-sm'
          >
            <div className='flex items-center mb-6'>
              <Heart className='w-8 h-8 text-pink-600 mr-3' />
              <h2 className='text-2xl font-bold'>申訴與救濟機制</h2>
            </div>
            <p className='text-gray-700 mb-6 leading-relaxed'>
              我們建立了完善的申訴和救濟機制，確保用戶在內容被限制時能夠獲得公平的審查和救濟機會。我們承諾在收到申訴後，在合理時間內進行審查並給予回應。
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='bg-pink-50 p-6 rounded-lg'>
                <h4 className='font-semibold text-pink-800 mb-4 text-lg'>
                  申訴流程：
                </h4>
                <div className='space-y-4'>
                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1'>
                      1
                    </div>
                    <div>
                      <h5 className='font-semibold text-pink-800'>提交申訴</h5>
                      <p className='text-sm text-gray-700 mt-1'>
                        透過申訴表單或郵件提交申訴
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1'>
                      2
                    </div>
                    <div>
                      <h5 className='font-semibold text-pink-800'>初步審查</h5>
                      <p className='text-sm text-gray-700 mt-1'>
                        專業團隊進行初步審查
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1'>
                      3
                    </div>
                    <div>
                      <h5 className='font-semibold text-pink-800'>詳細調查</h5>
                      <p className='text-sm text-gray-700 mt-1'>
                        必要時進行更深入的調查
                      </p>
                    </div>
                  </div>
                  <div className='flex items-start'>
                    <div className='w-6 h-6 bg-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1'>
                      4
                    </div>
                    <div>
                      <h5 className='font-semibold text-pink-800'>結果通知</h5>
                      <p className='text-sm text-gray-700 mt-1'>
                        在7個工作日內通知結果
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-purple-50 p-6 rounded-lg'>
                <h4 className='font-semibold text-purple-800 mb-4 text-lg'>
                  救濟措施：
                </h4>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>內容恢復</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        確認誤判時立即恢復內容
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>帳號解封</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        解除不當的帳號限制
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>道歉與補償</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        對誤判造成的損失進行補償
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>政策改進</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        根據申訴改進審核政策
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* 國際合作與標準 */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='bg-white p-8 rounded-lg shadow-sm'
          >
            <div className='flex items-center mb-6'>
              <Globe className='w-8 h-8 text-blue-600 mr-3' />
              <h2 className='text-2xl font-bold'>國際合作與標準</h2>
            </div>
            <p className='text-gray-700 mb-6 leading-relaxed'>
              我們積極參與國際表達自由保護倡議，與國際組織、人權機構和技術社群合作，共同推動數位時代的表達自由保護標準和最佳實踐。
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='bg-blue-50 p-6 rounded-lg'>
                <h4 className='font-semibold text-blue-800 mb-4 text-lg'>
                  國際合作：
                </h4>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>聯合國人權理事會</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        參與數位人權相關討論
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>國際特赦組織</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        合作推動表達自由保護
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>電子前線基金會</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        技術合作與政策倡議
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>全球網路倡議</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        推動負責任的網路治理
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className='bg-green-50 p-6 rounded-lg'>
                <h4 className='font-semibold text-green-800 mb-4 text-lg'>
                  遵循標準：
                </h4>
                <ul className='space-y-3 text-gray-700'>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>聯合國人權宣言</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        遵循基本人權保護原則
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>國際電信聯盟標準</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        遵循國際通訊標準
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>GDPR 隱私保護</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        遵循歐盟資料保護法規
                      </p>
                    </div>
                  </li>
                  <li className='flex items-start'>
                    <div className='w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0'></div>
                    <div>
                      <strong>網路安全最佳實踐</strong>
                      <p className='text-sm text-gray-600 mt-1'>
                        遵循國際網路安全標準
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>
        </div>

        {/* 聯絡資訊 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='mt-12 bg-green-50 p-8 rounded-lg'
        >
          <h3 className='text-2xl font-bold text-green-800 mb-6'>
            表達自由相關聯絡
          </h3>
          <p className='text-gray-700 mb-6 leading-relaxed'>
            如果您對我們的表達自由政策有任何疑問，或需要申訴內容限制決定，請透過以下方式聯絡我們。我們承諾保護您的表達自由權利，並提供公平的申訴管道。
          </p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-white p-6 rounded-lg'>
              <h4 className='font-semibold text-green-800 mb-3 text-lg'>
                一般諮詢：
              </h4>
              <p className='text-gray-600 mb-2'>freedom@hyjdevelop.com</p>
              <p className='text-sm text-gray-500'>
                適用於表達自由政策諮詢、權利保護等一般問題
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg'>
              <h4 className='font-semibold text-green-800 mb-3 text-lg'>
                內容申訴：
              </h4>
              <p className='text-gray-600 mb-2'>appeal@hyjdevelop.com</p>
              <p className='text-sm text-gray-500'>
                專門處理內容限制申訴、帳號解封等請求
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Freedom;
