import { ExternalLink } from 'lucide-react';

const Admin = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">我們的主管</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          認識我們的核心團隊成員，他們致力於為社群提供最好的服務。
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-12">
          {/* 創辦人 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <img
                src="/ceo.jpg"
                alt="創辦人照片"
                className="w-48 h-48 object-cover rounded-lg"
              />
              <div>
                <h2 className="text-2xl font-bold mb-2">黃宥鈞</h2>
                <p className="text-lg text-blue-600 mb-4">創辦人、主席兼執行長</p>
                <p className="text-gray-600 mb-4">
                  一個對資訊科技有興趣的高中生，
                  希望可以透過自己小小的力量改變這個世界。
                </p>
                <p className="text-gray-700 mb-4">
                  座右銘：
                  <br />
                  「I'm not the best but I work hard」
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  個人網站 <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* 藝術總監 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <img
                src="/artceo.jpg"
                alt="藝術總監照片"
                className="w-48 h-48 object-cover rounded-lg"
              />
              <div>
                <h2 className="text-2xl font-bold mb-2">倫教鐵喬</h2>
                <p className="text-lg text-blue-600 mb-4">藝術總監</p>
                <p className="text-gray-600 mb-4">
                  在農業學校認真耕耘資訊的小小高中生。
                </p>
                <p className="text-gray-700 mb-4">
                  座右銘：
                  <br />
                  「向陽而生無悔青春」
                </p>
                <a
                  href="https://bone1018.hyjdevelop.com"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  個人網站 <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* 技術總監 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <img
                src="/codeceo.jpg"
                alt="技術總監照片"
                className="w-48 h-48 object-cover rounded-lg"
              />
              <div>
                <h2 className="text-2xl font-bold mb-2">許安祐</h2>
                <p className="text-lg text-blue-600 mb-4">技術總監</p>
                <a
                  href="https://larryeng.hyjdevelop.com"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  個人網站 <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;