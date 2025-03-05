import { Server, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          我們致力於科技開發
          <div className="mt-4 space-x-4">
            <span className="text-blue-600">軟體</span>
            <span className="text-yellow-500">網站</span>
            <span className="text-green-600">社群</span>
          </div>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          我們的願景是為每位成人與青少年打造一個
          為大家創造機會享受創造的喜悅。
          我們正在努力，建立一個安全、自由、開放的社群。
        </p>
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-gray-400"
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Cloud Service */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Server className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">雲端服務</h3>
              <p className="text-gray-600">
                在我們的雲端服務中，我們提供最優質的
                資源來完成你的各項需求。
              </p>
              <Link to="/hosting" className="inline-block mt-4 text-blue-600 hover:text-blue-700">
                了解更多
              </Link>
            </div>

            {/* Security */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">網站安全和隱私自由</h3>
              <p className="text-gray-600">
                我們將確保您的資料安全並且自由，以及
                幫助您安全地享受科技。
              </p>
              <Link to="/security" className="inline-block mt-4 text-blue-600 hover:text-blue-700">
                了解更多
              </Link>
            </div>

            {/* Learning */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">為學習做準備</h3>
              <p className="text-gray-600">
                我們致力於學習，提供課程，並建議
                合適的學習路徑。
              </p>
              <Link to="/slrc" className="inline-block mt-4 text-blue-600 hover:text-blue-700">
                了解更多
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">成為合作夥伴</h2>
            <p className="text-gray-600 mb-8">
              有意願支持我們的你可考慮成為合作夥伴，
              我們將提供更多專業服務給您。
            </p>
            <Link 
              to="/partner" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              了解更多合作資訊
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-4">關注更多有關</h3>
          <p className="text-blue-600 font-bold mb-8">HYJdevelop的更新</p>
          <Link 
            to="/updates" 
            className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
          >
            查看更多我們資訊
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;