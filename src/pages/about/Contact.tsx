import { Mail, MessageSquare, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">聯絡我們</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          有任何問題或建議，歡迎隨時與我們聯繫。
          我們會盡快回覆您的訊息。
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold mb-2">電子郵件</h3>
            <p className="text-gray-600">support@hyjdevelop.com</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold mb-2">線上客服</h3>
            <p className="text-gray-600">週一至週五 9:00-18:00</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-bold mb-2">地址</h3>
            <p className="text-gray-600">台灣台北市</p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">聯絡表單</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                姓名
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="請輸入您的姓名"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                電子郵件
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="請輸入您的電子郵件"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                訊息內容
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={6}
                placeholder="請輸入您的訊息"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                送出訊息
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;