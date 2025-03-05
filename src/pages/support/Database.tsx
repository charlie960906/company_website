import {Image, FileVideo, FileAudio } from 'lucide-react';

const MediaDatabase = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">媒體庫</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          瀏覽我們豐富的媒體資源，包含圖片、影片和音訊檔案。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <Image className="w-8 h-8 text-blue-600" />
            <h2 className="text-xl font-bold ml-3">圖片資源</h2>
          </div>
          <p className="text-gray-600 mb-4">高品質的圖片素材，適用於各種專案。</p>
          <button className="text-blue-600 hover:text-blue-700">
            瀏覽圖片 →
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <FileVideo className="w-8 h-8 text-green-600" />
            <h2 className="text-xl font-bold ml-3">影片資源</h2>
          </div>
          <p className="text-gray-600 mb-4">豐富的影片內容，包含教學和展示影片。</p>
          <button className="text-blue-600 hover:text-blue-700">
            瀏覽影片 →
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <FileAudio className="w-8 h-8 text-purple-600" />
            <h2 className="text-xl font-bold ml-3">音訊資源</h2>
          </div>
          <p className="text-gray-600 mb-4">各種音效和背景音樂素材。</p>
          <button className="text-blue-600 hover:text-blue-700">
            瀏覽音訊 →
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaDatabase;