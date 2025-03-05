const Report = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">網頁出錯回報</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          發現網站問題？請協助我們改進，填寫以下表單回報錯誤。
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="issueType" className="block text-sm font-medium text-gray-700 mb-2">
                問題類型
              </label>
              <select
                id="issueType"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>功能異常</option>
                <option>顯示問題</option>
                <option>效能問題</option>
                <option>其他</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                問題網址
              </label>
              <input
                type="url"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="請輸入發生問題的網址"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                問題描述
              </label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={6}
                placeholder="請詳細描述您遇到的問題"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                聯絡信箱
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="請輸入您的電子郵件"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                送出回報
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Report;