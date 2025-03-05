import React from 'react';
import { FileText, Shield, Scale, ChevronDown } from 'lucide-react';

const ServiceSection = ({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left"
      >
        <div className="flex items-center">
          <Icon className="w-6 h-6 text-blue-600 mr-3" />
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      <div className={`mt-4 space-y-4 text-gray-600 ${isOpen ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">服務條款</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          HYJdevelop 開發的技術和服務讓用戶能夠彼此聯繫、使用社群以及拓展人脈。您使用我們所提供的其他產品、功能、應用程式、服務、技術及軟體（以下簡稱「HYJdevelop 產品」或「產品」）的行為，均須受本《服務條款》規範，惟我們明示另有適用條款（且本《服務條款》不適用）者不在此限。
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          <ServiceSection title="1. 我們提供的服務" icon={FileText}>
            <p>我們的使命是攜手拉近世界距離。為了完成這項使命，我們提供多種產品和服務，詳述如下：</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>為您打造愉快的體驗</li>
              <li>讓您與您重視的用戶和組織建立聯繫</li>
              <li>展現真我本色，與他人交流您重視的事物</li>
              <li>協助您發掘可能感興趣的內容、商品和服務</li>
              <li>提升我們服務的網路安全、帳號安全和信譽</li>
              <li>致力研究如何提升服務品質</li>
            </ul>
          </ServiceSection>

          <ServiceSection title="2. 我們服務的資金來源" icon={Scale}>
            <p>您使用 HYJdevelop 以及我們提供的其他產品和服務時無須付費；當您使用本條款涵蓋的產品，即表示您同意我們可以在 HYJdevelop 旗下公司產品與其他平台，向您顯示企業商家和組織付費請我們刊登的廣告和其他商業及贊助內容。</p>
          </ServiceSection>

          <ServiceSection title="3. 您對HYJdevelop和我們社群的承諾" icon={Shield}>
            <h3 className="font-semibold mb-2">誰可以使用</h3>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              <li>為帳號使用與您日常生活中所用的相同姓名</li>
              <li>提供正確的個人資料</li>
              <li>僅建立一個您自己的帳號，並用於個人用途</li>
              <li>請勿分享密碼、提供您的帳號存取權限給他人</li>
            </ul>
            
            <h3 className="font-semibold mb-2">您可以在 HYJdevelop 產品分享的內容和執行的動作</h3>
            <p>我們希望用戶運用 HYJdevelop 產品表達自我及分享重要內容，但不能因此犧牲他人的網路安全和福利或損害我們公司的信譽。</p>
          </ServiceSection>

          <div className="text-center text-sm text-gray-500 mt-12">
            <p>最後修訂日期：2024年7月26日</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;