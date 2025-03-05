import { Cloud, Shield, Zap } from 'lucide-react';

const Hosting = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">雲端服務</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          我們提供安全、可靠的雲端服務，
          幫助您的專案順利運行。
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Cloud className="w-8 h-8 text-blue-600" />
              <h2 className="text-xl font-bold ml-3">雲端存儲</h2>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li>• 安全的檔案存儲</li>
              <li>• 自動備份機制</li>
              <li>• 快速存取速度</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-green-600" />
              <h2 className="text-xl font-bold ml-3">安全防護</h2>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li>• DDoS 防護</li>
              <li>• SSL 加密</li>
              <li>• 24/7 監控</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Zap className="w-8 h-8 text-yellow-600" />
              <h2 className="text-xl font-bold ml-3">效能優化</h2>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li>• 負載平衡</li>
              <li>• CDN 加速</li>
              <li>• 自動擴展</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-6">服務方案</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-4">基礎版</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• 10GB 存儲空間</li>
                <li>• 基本安全防護</li>
                <li>• 標準支援</li>
              </ul>
              <p className="text-2xl font-bold text-blue-600">NT$ 299/月</p>
            </div>

            <div className="p-6 border rounded-lg bg-blue-50">
              <h3 className="text-xl font-bold mb-4">專業版</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• 50GB 存儲空間</li>
                <li>• 進階安全防護</li>
                <li>• 優先支援</li>
              </ul>
              <p className="text-2xl font-bold text-blue-600">NT$ 799/月</p>
            </div>

            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-4">企業版</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• 不限存儲空間</li>
                <li>• 企業級安全防護</li>
                <li>• 24/7 專人支援</li>
              </ul>
              <p className="text-2xl font-bold text-blue-600">聯繫銷售</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            開始使用
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hosting;