import { Facebook, Instagram, Disc as Discord } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '../hooks/useScrollToTop';

const Footer = () => {
  useScrollToTop();

  return (
    <footer className="bg-white/80 backdrop-blur-sm text-gray-800 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <p>網站出錯了？ <a href="https://forms.gle/sHCAX3Ybw2fwRXQt7" className="text-blue-600 hover:underline">點此告訴我們</a></p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">支援</h3>
            <ul className="space-y-2">
              <li><Link to="/service" className="text-gray-800 hover:text-blue-600">服務條款</Link></li>
              <li><Link to="/database" className="text-gray-800 hover:text-blue-600">媒體庫</Link></li>
              <li><Link to="/report" className="text-gray-800 hover:text-blue-600">網頁出錯回報</Link></li>
              <li><Link to="/terms" className="text-gray-800 hover:text-blue-600">品牌使用準則</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">安全和隱私</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-800 hover:text-blue-600">資料和隱私</Link></li>
              <li><Link to="/security" className="text-gray-800 hover:text-blue-600">安全和表達自由</Link></li>
              <li><Link to="/hosting" className="text-gray-800 hover:text-blue-600">雲端服務</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">我們的社群</h3>
            <ul className="space-y-2">
              <li><Link to="/slrc" className="text-gray-800 hover:text-blue-600">SLRC</Link></li>
              <li><Link to="/forum" className="text-gray-800 hover:text-blue-600">論壇</Link></li>
              <li><Link to="/rules" className="text-gray-800 hover:text-blue-600">社群守則</Link></li>
              <li><Link to="/partner" className="text-gray-800 hover:text-blue-600">成為合作夥伴</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">關於我們</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-800 hover:text-blue-600">社群發展</Link></li>
              <li><Link to="/contact" className="text-gray-800 hover:text-blue-600">聯絡我們</Link></li>
              <li><Link to="/join" className="text-gray-800 hover:text-blue-600">加入我們</Link></li>
              <li><Link to="/admin" className="text-gray-800 hover:text-blue-600">我們的主管</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-2">關注我們</h4>
            <div className="flex justify-center space-x-4">
              <a
                href="https://fb.hyjdevelop.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://ig.hyjdevelop.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600"
                aria-label="Join us on Discord"
              >
                <Discord className="h-6 w-6" />
              </a>
            </div>
          </div>
          <p className="text-sm text-gray-600">© 2025 HYJdevelop</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;