import { Users, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">社群發展</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          我們致力於建立一個充滿活力、互助成長的技術社群，
          為每位成員提供優質的學習環境和發展機會。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6">
          <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">社群願景</h3>
          <p className="text-gray-600">打造台灣最優質的技術學習社群</p>
        </div>

        <div className="text-center p-6">
          <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Target className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">發展目標</h3>
          <p className="text-gray-600">培育更多優秀的技術人才</p>
        </div>

        <div className="text-center p-6">
          <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">核心價值</h3>
          <p className="text-gray-600">開放、分享、互助、成長</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">我們的成長歷程</h2>
        <div className="space-y-8">
          <div className="flex items-start">
            <div className="bg-gray-100 rounded-full p-2 mr-4">
              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
            </div>
            <div>
              <h3 className="font-bold mb-2">2025年</h3>
              <p className="text-gray-600">社群正式成立，開始提供線上學習資源</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;