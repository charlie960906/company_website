import { Bell, Newspaper, Megaphone } from 'lucide-react';

const Updates = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
          <Bell className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold mb-6">HYJdevelop 最新消息</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          關注我們的最新動態，了解社群發展和重要公告。
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* 最新公告 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Megaphone className="w-6 h-6 mr-2 text-blue-600" />
            重要公告
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">社群網站正式上線</h3>
                <span className="text-sm text-gray-500">2025/03/15</span>
              </div>
              <p className="text-gray-600 mb-4">
                我們很高興地宣布，HYJdevelop 社群網站正式上線！
                這標誌著我們邁向建立優質技術社群的重要一步。
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                閱讀更多 →
              </a>
            </div>
          </div>
        </div>

        {/* 最新消息 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Newspaper className="w-6 h-6 mr-2 text-green-600" />
            最新消息
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">開放合作夥伴申請</h3>
                <span className="text-sm text-gray-500">2025/03/14</span>
              </div>
              <p className="text-gray-600 mb-4">
                現在開始接受合作夥伴申請！我們期待與更多優秀的夥伴一起合作，
                共同推動技術教育的發展。
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                閱讀更多 →
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">SLRC 學習社群成立</h3>
                <span className="text-sm text-gray-500">2025/03/13</span>
              </div>
              <p className="text-gray-600 mb-4">
                SLRC 學習社群正式成立！這是一個專注於技術學習和交流的平台，
                歡迎所有對技術有熱情的朋友加入。
              </p>
              <a href="#" className="text-blue-600 hover:text-blue-700">
                閱讀更多 →
              </a>
            </div>
          </div>
        </div>

        {/* 訂閱更新 */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">訂閱最新消息</h2>
          <p className="text-gray-600 mb-6 text-center">
            訂閱我們的最新消息，第一時間收到重要更新！
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="請輸入您的電子郵件"
                className="flex-1 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                訂閱
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Updates;