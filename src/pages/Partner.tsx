import { Handshake, Target, Users } from 'lucide-react';

const Partner = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">成為合作夥伴</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          我們歡迎各種形式的合作，一起為技術社群創造更多價值。
          無論您是企業、組織還是個人，都可以成為我們的合作夥伴。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6">
          <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Handshake className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">合作模式</h3>
          <p className="text-gray-600">提供多元且彈性的合作方案</p>
        </div>

        <div className="text-center p-6">
          <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Target className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">目標共識</h3>
          <p className="text-gray-600">共同推動技術教育發展</p>
        </div>

        <div className="text-center p-6">
          <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">資源共享</h3>
          <p className="text-gray-600">互惠互利的合作關係</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-6">合作方案</h2>
          <div className="space-y-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-2">技術課程合作</h3>
              <p className="text-gray-600">
                共同開發和提供優質的技術課程，
                為學習者提供更多元的學習資源。
              </p>
            </div>
            
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-2">活動合辦</h3>
              <p className="text-gray-600">
                舉辦技術研討會、工作坊等活動，
                促進技術交流與分享。
              </p>
            </div>
            
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-bold mb-2">資源贊助</h3>
              <p className="text-gray-600">
                提供場地、設備或其他資源支持，
                協助社群活動的順利進行。
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            聯絡我們討論合作
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partner;