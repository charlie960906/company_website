import { Shield, AlertCircle } from 'lucide-react';

const CommunityRules = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
          <Shield className="w-8 h-8 text-green-600" />
        </div>
        <h1 className="text-4xl font-bold mb-4">社群守則</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          為了維護良好的社群環境，請所有成員遵守以下守則。
          未盡完善處，請多指教提出，將由團隊討論後並修訂辦法。
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h2 className="text-xl font-bold mb-4">文章規範（適用於任何地方）</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>發表或回復文章請勿涉及人身攻擊、粗俗用語、挑釁、網路霸凌等內容</li>
                <li>若團隊未經予准限，則禁止濫發訊息或個人宣傳（何服務器廣告、廣告等）。包含私訊騷擾成員</li>
                <li>禁止限制級或猥褻內容。包含文字、圖片或主打視頻、性、肢體暴力，以及其他令人不適的圖像內容等相關連結。（在適當版放置）</li>
                <li>若您看見違反規則或可疑的內容，請通知管理員們，我們會盡快進行處理！</li>
                <li>轉貼文章或連結請務必說明出處</li>
                <li>提供之資源下載利用但禁止販賣或做其他圖利之行為</li>
              </ol>
            </div>

            <div className="border-b pb-4">
              <h2 className="text-xl font-bold mb-4">違規處理辦法</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      違反上述情節者，如果經管理員勸阻仍不聽者，將依情節輕重執行以下處分：
                    </p>
                  </div>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>第一次違規：警告</li>
                <li>第二次違規：禁言 1-7 天</li>
                <li>第三次違規：禁言 60 天重罰</li>
                <li>情節重大者：永久停權</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">SLRC 規範</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>SLRC 認真名位友善討論，在非學術群組外還有非學術討論區讓各位開放放鬆心情。</li>
                <li>非學術室論壇：🗣️ 閒聊討論 💫 梗圖版 🎮 程式區</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>如果要檢舉私訊管理員或在客服服務開啟檢舉的客服單即可</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityRules;