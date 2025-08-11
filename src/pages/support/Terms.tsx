import { Palette, Image, Layout, FileImage, Copyright } from 'lucide-react';

const Terms = () => {
  return (
    <div className='min-h-screen pb-24'>
      <section className='min-h-screen max-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-center px-4 relative py-12 overflow-hidden'>
        <h1 className='text-5xl md:text-7xl font-bold mb-8 text-gray-800'>
          品牌使用準則
        </h1>
        <p className='text-gray-700 max-w-2xl mx-auto mb-1'>
          本準則說明使用 HYJdevelop
          商標、名稱、內容、照片等資產時的規則與標註方式。
        </p>
      </section>

      <div className='max-w-3xl mx-auto'>
        <div className='space-y-8'>
          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <div className='flex items-center mb-4'>
              <Image className='w-6 h-6 text-blue-600 mr-3' />
              <h2 className='text-xl font-bold'>1. 商標與名稱</h2>
            </div>
            <ul className='list-disc pl-5 space-y-2 text-gray-600'>
              <li>
                請使用官方提供的標誌檔案，不得自行重繪或變形、傾斜、拉伸。
              </li>
              <li>不得修改顏色、加上陰影、描邊或其他特效。</li>
              <li>標誌周圍需留有足夠留白，至少等同「J」高度。</li>
              <li>以文字提及時，請使用「HYJdevelop」。</li>
            </ul>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <div className='flex items-center mb-4'>
              <Palette className='w-6 h-6 text-green-600 mr-3' />
              <h2 className='text-xl font-bold'>2. 色彩與字體</h2>
            </div>
            <ul className='list-disc pl-5 space-y-2 text-gray-600'>
              <li>主色：HYJ 藍 #3B82F6、HYJ 黃 #FACC15、HYJ 紅 #EF4444。</li>
              <li>字體：中文以思源黑體/思源宋體；英文以 Inter / System UI。</li>
            </ul>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <div className='flex items-center mb-4'>
              <FileImage className='w-6 h-6 text-indigo-600 mr-3' />
              <h2 className='text-xl font-bold'>3. 內容與照片使用</h2>
            </div>
            <ul className='list-disc pl-5 space-y-2 text-gray-600'>
              <li>
                引用我們的文章、設計、截圖、照片時，需標註「來源：HYJdevelop」。
              </li>
              <li>
                如包含人物或可識別資訊之影像，需確認權利與同意；不得造成誤導或貶損。
              </li>
              <li>未經授權，不得將內容用於商業銷售或廣告背書。</li>
              <li>媒體報導可於合理使用範圍內節錄，仍需附上出處連結。</li>
            </ul>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <div className='flex items-center mb-4'>
              <Layout className='w-6 h-6 text-orange-600 mr-3' />
              <h2 className='text-xl font-bold'>4. 置放與應用</h2>
            </div>
            <ul className='list-disc pl-5 space-y-2 text-gray-600'>
              <li>網頁與印刷品請遵循留白、對比與尺寸規範，確保辨識度。</li>
              <li>社群貼文與縮圖請避免在標誌上方疊加文字或雜訊。</li>
              <li>若需範例檔或 SVG，請聯繫品牌小組索取。</li>
            </ul>
          </div>

          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <div className='flex items-center mb-4'>
              <Copyright className='w-6 h-6 text-pink-600 mr-3' />
              <h2 className='text-xl font-bold'>5. 授權與禁止事項</h2>
            </div>
            <ul className='list-disc pl-5 space-y-2 text-gray-600'>
              <li>
                不得暗示與 HYJdevelop
                具有合作、背書或贊助關係，除非事先取得書面同意。
              </li>
              <li>不得將標誌或內容用於違法、歧視、欺詐或不當情境。</li>
              <li>商業使用（活動聯名、商品印製等）需事前書面授權。</li>
            </ul>
          </div>

          <div className='text-center text-sm text-gray-500 mt-12'>
            <p>如需授權或原始素材，請寄信至：support@hyjdevelop.com</p>
            <p className='mt-2'>最後更新：2025年3月15日</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
