import { Palette, Type, Image, Layout, AlertTriangle, FileImage, Scale } from 'lucide-react';
import './Terms.css';

const Terms = () => {
  return (
    <div className="min-h-screen pb-24">
      {/* Hero Section */}
      <section className="min-h-screen max-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-center px-4 relative py-12 overflow-hidden">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-800">品牌使用準則</h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-1">為確保 HYJdevelop 品牌形象的一致性與專業性，我們制定了以下品牌使用準則。</p>
        <p className="text-gray-700 max-w-2xl mx-auto mb-1">這些規範適用於所有品牌相關的應用場景，包括但不限於數位媒體、印刷品和行銷素材。</p>
        <div className="animate-bounce absolute bottom-12 mid transform -translate-x-1/2">
          <svg 
            className="w-8 h-8 text-gray-400"
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 22 22" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          {/* 品牌標誌 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Image className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-bold">品牌標誌規範</h2>
            </div>
            <div className="space-y-6 text-gray-600">
              <div>
                <h3 className="font-semibold mb-2">標準標誌</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <img
                    src="./logo.png"
                    alt="HYJdevelop 標誌"
                    className="logo-image"
                  />
                </div>
                <p className="text-sm">我們的標準標誌由「HYJ」和「develop」組成，代表我們的核心價值。</p>
              </div>
              {/* 其他內容保持不變 */}
              <div>
                <h3 className="font-semibold mb-2">最小使用尺寸</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>數位使用：最小寬度 100px</li>
                  <li>印刷使用：最小寬度 30mm</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">安全間距</h3>
                <p className="text-sm">標誌周圍需保持至少等於「J」字母高度的空白間距。</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">禁止事項</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                    <span>變形或扭曲</span>
                  </div>
                  <div className="flex items-center">
                    <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                    <span>改變顏色</span>
                  </div>
                  <div className="flex items-center">
                    <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                    <span>添加特效</span>
                  </div>
                  <div className="flex items-center">
                    <AlertTriangle className="w-4 h-4 text-red-500 mr-2" />
                    <span>重新排列元素</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 品牌色彩系統 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Palette className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-xl font-bold">品牌色彩系統</h2>
            </div>
            <div className="space-y-6 text-gray-600">
              <div>
                <h3 className="font-semibold mb-4">主要品牌色</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="h-20 bg-blue-500 rounded-lg mb-2"></div>
                    <p className="text-sm font-medium">HYJ 藍</p>
                    <p className="text-xs">#3B82F6</p>
                  </div>
                  <div>
                    <div className="h-20 bg-yellow-400 rounded-lg mb-2"></div>
                    <p className="text-sm font-medium">HYJ 黃</p>
                    <p className="text-xs">#FACC15</p>
                  </div>
                  <div>
                    <div className="h-20 bg-red-500 rounded-lg mb-2"></div>
                    <p className="text-sm font-medium">HYJ 紅</p>
                    <p className="text-xs">#EF4444</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">輔助色系</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <div className="h-16 bg-gray-800 rounded-lg mb-2"></div>
                    <p className="text-xs">深灰 #1F2937</p>
                  </div>
                  <div>
                    <div className="h-16 bg-gray-400 rounded-lg mb-2"></div>
                    <p className="text-xs">中灰 #9CA3AF</p>
                  </div>
                  <div>
                    <div className="h-16 bg-gray-100 rounded-lg mb-2"></div>
                    <p className="text-xs">淺灰 #F3F4F6</p>
                  </div>
                  <div>
                    <div className="h-16 bg-white border rounded-lg mb-2"></div>
                    <p className="text-xs">純白 #FFFFFF</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 品牌字體 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Type className="w-6 h-6 text-purple-600 mr-3" />
              <h2 className="text-xl font-bold">品牌字體規範</h2>
            </div>
            <div className="space-y-6 text-gray-600">
              <div>
                <h3 className="font-semibold mb-2">中文字體</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-lg mb-1 font-bold">思源黑體</p>
                    <p className="text-sm">用於標題與重要文字</p>
                  </div>
                  <div>
                    <p className="text-lg mb-1">思源宋體</p>
                    <p className="text-sm">用於內文與長篇文字</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">英文字體</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-lg mb-1 font-bold font-inter">Inter</p>
                    <p className="text-sm">用於標題與介面元素</p>
                  </div>
                  <div>
                    <p className="text-lg mb-1 font-system-ui">System UI</p>
                    <p className="text-sm">用於內文與說明文字</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">字級規範</h3>
                <div className="space-y-4">
                  <p className="text-4xl font-bold">主標題 (32px)</p>
                  <p className="text-2xl font-bold">次標題 (24px)</p>
                  <p className="text-xl">小標題 (20px)</p>
                  <p className="text-base">內文 (16px)</p>
                  <p className="text-sm">輔助文字 (14px)</p>
                </div>
              </div>
            </div>
          </div>

          {/* 其他部分保持不變 */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <FileImage className="w-6 h-6 text-indigo-600 mr-3" />
              <h2 className="text-xl font-bold">視覺元素規範</h2>
            </div>
            <div className="space-y-6 text-gray-600">
              <div>
                <h3 className="font-semibold mb-2">圖像風格</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>使用現代、簡潔的設計風格</li>
                  <li>優先使用扁平化設計元素</li>
                  <li>確保圖像具有高解析度和清晰度</li>
                  <li>避免過度裝飾和複雜的視覺效果</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">圖示設計</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>使用線性圖示，保持統一的線條粗細</li>
                  <li>圖示需保持簡潔易識別</li>
                  <li>建議使用 24x24 像素的標準尺寸</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">照片使用</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>優先使用自然光源的照片</li>
                  <li>避免過度飽和或過度處理的影像</li>
                  <li>確保照片主題清晰且構圖平衡</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Layout className="w-6 h-6 text-orange-600 mr-3" />
              <h2 className="text-xl font-bold">應用規範</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <div>
                <h3 className="font-semibold mb-2">數位媒體</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>網站設計需符合響應式設計原則</li>
                  <li>社群媒體圖片需符合各平台的尺寸規範</li>
                  <li>確保所有互動元素具有適當的視覺回饋</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">印刷品</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>確保印刷品使用 CMYK 色彩模式</li>
                  <li>保留適當的出血邊界</li>
                  <li>考慮不同印刷材質的色彩表現</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Scale className="w-6 h-6 text-red-600 mr-3" />
              <h2 className="text-xl font-bold">使用限制與授權</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <div>
                <h3 className="font-semibold mb-2">禁止事項</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>未經授權修改品牌標誌或視覺元素</li>
                  <li>在違法或不當內容中使用品牌元素</li>
                  <li>暗示與 HYJdevelop 的官方合作關係</li>
                  <li>將品牌元素用於商業用途而未經許可</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">授權使用</h3>
                <p className="text-sm">
                  如需使用 HYJdevelop 的品牌資產，請聯繫我們的品牌團隊取得授權。
                  Email: support@hyjdevelop.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>最後更新：2025年3月15日</p>
          <p className="mt-2">
            如有任何品牌使用相關問題，請聯繫：
            <a href="mailto:support@hyjdevelop.com" className="text-blue-600 hover:underline">
              support@hyjdevelop.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;