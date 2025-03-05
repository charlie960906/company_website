import { Bookmark, Image, Copy } from 'lucide-react';

const Terms = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">品牌使用準則</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          這些準則說明如何正確使用我們的品牌資產，包括標誌、圖像和其他品牌元素。
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Image className="w-6 h-6 text-blue-600 mr-3" />
              <h2 className="text-xl font-bold">標誌使用</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>1. 保持標誌的完整性，不要變形或修改。</p>
              <p>2. 確保標誌周圍有足夠的空白空間。</p>
              <p>3. 使用指定的品牌顏色。</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Copy className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-xl font-bold">品牌資產</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>1. 使用官方提供的品牌資產。</p>
              <p>2. 遵守品牌色彩規範。</p>
              <p>3. 正確使用品牌字體。</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <Bookmark className="w-6 h-6 text-purple-600 mr-3" />
              <h2 className="text-xl font-bold">使用限制</h2>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>1. 不得用於暗示我們認可或贊助。</p>
              <p>2. 不得用於違法或不當用途。</p>
              <p>3. 需要獲得書面許可的使用情況。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;