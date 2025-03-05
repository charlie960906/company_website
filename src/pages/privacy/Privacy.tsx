import React from 'react';
import { Lock, Eye, Shield, ChevronDown } from 'lucide-react';

const PrivacySection = ({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) => {
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

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">資料和隱私</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          我們致力於讓您掌控自己的隱私並保護自己的資訊，以便在我們的產品上享受您最重視的體驗。
          而我們在了解您的資訊時將全力協助保護資訊安全以及做出正確隱私決定的原因，同時我們也會遵守嚴格的業界隱私標準，並保護您資料的安全。
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          <PrivacySection title="資料與體驗" icon={Eye}>
            <p>資料可提升體驗品質，並提高體驗與您的相關性，這可以是您應加入的推薦社團，或者在您的應用程式中提供反映您興趣的內容。我們會給予您更多隱私設定選擇的掌控權，並負責保護您資料的安全。</p>
          </PrivacySection>

          <PrivacySection title="為何需要提供資料" icon={Lock}>
            <p>我們僅會和我們的客戶要求他們的詳細資料，用戶在體驗時並不需要提供資料給我們(您的網路供應商或其他服務商可能會收集您的資料)。</p>
          </PrivacySection>

          <PrivacySection title="資料刪除申請" icon={Shield}>
            <p>我們並不建議我們的客戶向我們提出刪除資料的要求。若您之後向我們提出後續的產品維護，我們在資料庫中可能會無法搜尋到此項服務紀錄因此無法幫您維護，而造成我們與您之間的不愉快。如果您真的堅持要刪除資料請寄郵件給我們。(如需了解詳請可以至服務條款第3-3條)</p>
          </PrivacySection>
        </div>
      </div>
    </div>
  );
};

export default Privacy;