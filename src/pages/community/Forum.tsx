import { MessageSquare } from 'lucide-react';

const Forum = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
          <MessageSquare className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold mb-4">社群論壇</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          加入我們的討論，分享你的想法和經驗，與其他成員互動交流。
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">熱門討論區</h2>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <h3 className="font-bold mb-2">技術交流</h3>
            <p className="text-gray-600">分享程式開發經驗和技術討論</p>
          </div>
          <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <h3 className="font-bold mb-2">學習心得</h3>
            <p className="text-gray-600">分享你的學習歷程和心得體會</p>
          </div>
          <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
            <h3 className="font-bold mb-2">專案展示</h3>
            <p className="text-gray-600">展示你的作品，獲得回饋與建議</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <a href="#" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          開始參與討論
        </a>
      </div>
    </div>
  );
};

export default Forum;