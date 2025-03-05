import { Shield, MessageSquare, Lock } from 'lucide-react';

const Security = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">安全和表達自由</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          我們致力於提供一個安全且開放的平台，讓每個人都能自由表達想法，
          同時確保所有用戶的安全和隱私。
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
              <h2 className="text-xl font-bold ml-3">安全保障</h2>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li>• 全站 HTTPS 加密</li>
              <li>• 定期安全掃描</li>
              <li>• 多重身份驗證</li>
              <li>• 即時威脅監控</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <MessageSquare className="w-8 h-8 text-green-600" />
              <h2 className="text-xl font-bold ml-3">表達自由</h2>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li>• 開放討論空間</li>
              <li>• 尊重多元觀點</li>
              <li>• 保護言論自由</li>
              <li>• 防止濫用機制</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="flex items-center mb-6">
            <Lock className="w-8 h-8 text-purple-600" />
            <h2 className="text-2xl font-bold ml-3">我們的承諾</h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>
              1. 保護用戶資料安全，絕不對外洩露個人資訊。
            </p>
            <p>
              2. 維護開放且理性的討論環境，不容忍任何形式的騷擾或歧視。
            </p>
            <p>
              3. 持續改進安全措施，應對新興威脅。
            </p>
            <p>
              4. 尊重用戶隱私，確保資料使用透明度。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;