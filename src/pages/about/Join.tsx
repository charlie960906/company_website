import { Briefcase, Clock, Users } from 'lucide-react';

const Join = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">加入我們</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          我們正在尋找充滿熱情的夥伴，一起打造最棒的技術社群。
          如果你也對此充滿熱忱，歡迎加入我們的團隊！
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold mb-2">工作環境</h3>
            <p className="text-gray-600">開放、自由的工作氛圍</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold mb-2">彈性時間</h3>
            <p className="text-gray-600">自由安排工作時間</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-bold mb-2">團隊文化</h3>
            <p className="text-gray-600">重視每個成員的想法</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-6">目前職缺</h2>
          <div className="space-y-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-2">前端工程師</h3>
              <p className="text-gray-600 mb-4">
                負責開發和維護社群網站的前端功能，提供良好的使用者體驗。
              </p>
              <button className="text-blue-600 hover:text-blue-700">
                查看詳情 →
              </button>
            </div>
            
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-2">社群經理</h3>
              <p className="text-gray-600 mb-4">
                管理社群活動，促進成員互動，維護良好的社群氛圍。
              </p>
              <button className="text-blue-600 hover:text-blue-700">
                查看詳情 →
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-4">
            沒有找到適合的職位？歡迎直接寄送履歷給我們！
          </p>
          <a
            href="mailto:jobs@hyjdevelop.com"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            寄送履歷
          </a>
        </div>
      </div>
    </div>
  );
};

export default Join;