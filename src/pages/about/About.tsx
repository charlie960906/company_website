import { Users, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen pb-24">
      {/* Hero Section */}
      <section className="min-h-screen max-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-center px-4 relative py-12 overflow-hidden">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-800">社群發展</h1>
        <p className="text-gray-700 max-w-2xl mx-auto mb-1">我們致力於建立一個充滿活力、互助成長的技術社群，</p>
        <p className="text-gray-700 max-w-2xl mx-auto mb-1">為每位成員提供優質的學習環境和發展機會。</p>
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
        <div className="text-center p-6">
          <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">社群願景</h3>
          <p className="text-gray-600">打造台灣最優質的技術學習社群</p>
        </div>

        <div className="text-center p-6">
          <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Target className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">發展目標</h3>
          <p className="text-gray-600">培育更多優秀的技術人才</p>
        </div>

        <div className="text-center p-6">
          <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">核心價值</h3>
          <p className="text-gray-600">開放、分享、互助、成長</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">我們的成長歷程</h2>
        <div className="space-y-8">
          {/* 2024 */}
          <div className="flex items-start">
            <div className="bg-gray-100 rounded-full p-2 mr-4">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
            </div>
            <div>
              <h3 className="font-bold mb-2">2024年</h3>
              <ul className="text-gray-600 list-disc pl-5 space-y-2">
                <li><strong>12月14日</strong> - 購買 HYJdevelop.com 作為 HYJdevelop 的網域</li>
                <li><strong>5月15日</strong> - HYJdevelop 網頁與 SLRC 網頁合併</li>
                <li><strong>2月29日</strong> - HYJdevelop 粉專上線</li>
              </ul>
            </div>
          </div>

          {/* 2023 */}
          <div className="flex items-start">
            <div className="bg-gray-100 rounded-full p-2 mr-4">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
            </div>
            <div>
              <h3 className="font-bold mb-2">2023年</h3>
              <ul className="text-gray-600 list-disc pl-5 space-y-2">
                <li><strong>12月27日</strong> - SLRC 成員超過 50 人，IG 粉絲超過 50 人</li>
                <li><strong>12月23日</strong> - HYJdevelop 官網上線</li>
                <li><strong>12月15日</strong> - SLRC 官網上線</li>
                <li><strong>12月3日</strong> - HYJdevelop IG 上線</li>
                <li><strong>12月1日</strong> - SLRC 粉專和 IG 上線</li>
                <li><strong>11月1日</strong> - 「學生學習資源社群 SLRC」正式對外開放加入</li>
                <li><strong>9月20日</strong> - SLRC 標誌產生</li>
                <li><strong>8月14日</strong> - 進行 SLRC 社群內測</li>
                <li><strong>7月11日</strong> - 提出學生學習資源社群 SLRC</li>
                <li><strong>6月9日</strong> - 開始進行 Discord 群組改造</li>
                <li><strong>5月10日</strong> - 將「會考討論群」的加入連結放在個人網頁中，對外開放</li>
                <li><strong>5月2日</strong> - 黃宥鈞的個人網頁正式上線</li>
                <li><strong>4月17日</strong> - HYJdevelop 官網開始設計</li>
                <li><strong>4月16日</strong> - 黃宥鈞在 11:04 決定並創立 HYJdevelop，並首次將名稱放在個人網頁上</li>
                <li><strong>4月13日</strong> - 黃宥鈞使用 Google Sites 建立個人網頁</li>
                <li><strong>1月20日</strong> - 擁有 2TB 儲存空間，將資料從 Discord 移至資料庫並使用分享連結</li>
                <li><strong>1月1日</strong> - HYJdevelop 新一年願景：社群超過 300 人、合作夥伴增加、服務品質提升</li>
              </ul>
            </div>
          </div>

          {/* 2022 */}
          <div className="flex items-start">
            <div className="bg-gray-100 rounded-full p-2 mr-4">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
            </div>
            <div>
              <h3 className="font-bold mb-2">2022年</h3>
              <ul className="text-gray-600 list-disc pl-5 space-y-2">
                <li><strong>7月10日</strong> - 建立 Discord「會考討論群」，僅開放部分朋友加入</li>
                <li><strong>4月8日</strong> - 因疫情線上上課，開始接觸 Discord</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 未來展望 */}
        <h2 className="text-2xl font-bold mt-12 mb-6 text-center">未來展望</h2>
        <div className="space-y-8">
          {/* 2026 */}
          <div className="flex items-start">
            <div className="bg-gray-100 rounded-full p-2 mr-4">
              <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
            </div>
            <div>
              <h3 className="font-bold mb-2">2026年</h3>
              <ul className="text-gray-600 list-disc pl-5 space-y-2">
                <li><strong>全年目標</strong> - 社群成員突破 500 人，與至少 5 家教育或技術機構建立合作關係</li>
                <li><strong>第三季</strong> - 推出 SLRC 線上課程平台，提供結構化的技術學習路徑</li>
                <li><strong>第一季</strong> - 舉辦首屆 HYJdevelop 技術分享會，邀請社群成員參與</li>
              </ul>
            </div>
          </div>

          {/* 2025 */}
          <div className="flex items-start">
            <div className="bg-gray-100 rounded-full p-2 mr-4">
              <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
            </div>
            <div>
              <h3 className="font-bold mb-2">2025年</h3>
              <ul className="text-gray-600 list-disc pl-5 space-y-2">
                <li><strong>第二季</strong> - 使用 HTML 開發的 HYJdevelop 全新網頁正式上線，提供更豐富的學習資源與互動功能</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;