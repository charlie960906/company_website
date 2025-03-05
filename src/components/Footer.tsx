import { Facebook, Instagram, Disc as Discord } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white/80 backdrop-blur-sm text-gray-800 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <p>網站出錯了？ <a href="https://forms.gle/JKqfev6AmDDhznhU8" className="text-blue-600 hover:underline">點此告訴我們</a></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">支援</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleNavigation('/service')} className="text-gray-800 hover:text-blue-600">服務條款</button></li>
              <li><button onClick={() => handleNavigation('/database')} className="text-gray-800 hover:text-blue-600">媒體庫</button></li>
              <li><button onClick={() => handleNavigation('/report')} className="text-gray-800 hover:text-blue-600">網頁出錯回報</button></li>
              <li><button onClick={() => handleNavigation('/terms')} className="text-gray-800 hover:text-blue-600">品牌使用準則</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">安全和隱私</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleNavigation('/privacy')} className="text-gray-800 hover:text-blue-600">資料和隱私</button></li>
              <li><button onClick={() => handleNavigation('/security')} className="text-gray-800 hover:text-blue-600">安全和表達自由</button></li>
              <li><button onClick={() => handleNavigation('/hosting')} className="text-gray-800 hover:text-blue-600">雲端服務</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">我們的社群</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleNavigation('/slrc')} className="text-gray-800 hover:text-blue-600">SLRC</button></li>
              <li><button onClick={() => handleNavigation('/forum')} className="text-gray-800 hover:text-blue-600">論壇</button></li>
              <li><button onClick={() => handleNavigation('/rules')} className="text-gray-800 hover:text-blue-600">社群守則</button></li>
              <li><button onClick={() => handleNavigation('/partner')} className="text-gray-800 hover:text-blue-600">成為合作夥伴</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">關於我們</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleNavigation('/about')} className="text-gray-800 hover:text-blue-600">社群發展</button></li>
              <li><button onClick={() => handleNavigation('/contact')} className="text-gray-800 hover:text-blue-600">聯絡我們</button></li>
              <li><button onClick={() => handleNavigation('/join')} className="text-gray-800 hover:text-blue-600">加入我們</button></li>
              <li><button onClick={() => handleNavigation('/admin')} className="text-gray-800 hover:text-blue-600">我們的主管</button></li>
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