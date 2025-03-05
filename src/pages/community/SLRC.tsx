import { Users, BookOpen, Heart } from 'lucide-react';

const SLRC = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">SLRC 學習社群</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          我們的社群旨在為每位學習者提供一個安全、開放的學習環境，
          讓大家能夠互相交流、分享知識。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="text-center p-6">
          <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">共同學習</h3>
          <p className="text-gray-600">與其他學習者一起成長，分享經驗與知識</p>
        </div>

        <div className="text-center p-6">
          <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">資源共享</h3>
          <p className="text-gray-600">豐富的學習資源，幫助你更快掌握知識</p>
        </div>

        <div className="text-center p-6">
          <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold mb-2">互助成長</h3>
          <p className="text-gray-600">建立友善的學習氛圍，互相支持與鼓勵</p>
        </div>
      </div>

      <div className="text-center">
        <a href="#" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          立即加入 SLRC
        </a>
      </div>
    </div>
  );
};

export default SLRC;