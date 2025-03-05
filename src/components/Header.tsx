import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

  const handleDropdownEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md fixed w-full top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="HYJdevelop 標誌" className="h-10" />
            <span className="text-xl font-bold">HYJdevelop</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-600">首頁</Link>
            <Link to="/shop" className="hover:text-blue-600">線上商城</Link>
            
            {/* Community Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('community')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center hover:text-blue-600 py-2">
                我們的社群
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'community' && (
                <div className="absolute top-[calc(100%-4px)] left-0 w-40">
                  <div className="h-4"></div>
                  <div className="bg-white rounded-lg shadow-lg py-2">
                    <Link to="/slrc" className="block px-4 py-2 hover:bg-blue-50">SLRC</Link>
                    <Link to="/forum" className="block px-4 py-2 hover:bg-blue-50">論壇</Link>
                    <Link to="/rules" className="block px-4 py-2 hover:bg-blue-50">社群守則</Link>
                  </div>
                </div>
              )}
            </div>
            
            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleDropdownEnter('about')}
              onMouseLeave={handleDropdownLeave}
            >
              <button className="flex items-center hover:text-blue-600 py-2">
                認識我們
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute top-[calc(100%-4px)] left-0 w-40">
                  <div className="h-4"></div>
                  <div className="bg-white rounded-lg shadow-lg py-2">
                    <Link to="/about" className="block px-4 py-2 hover:bg-blue-50">社群發展</Link>
                    <Link to="/contact" className="block px-4 py-2 hover:bg-blue-50">聯絡我們</Link>
                    <Link to="/join" className="block px-4 py-2 hover:bg-blue-50">加入我們</Link>
                    <Link to="/admin" className="block px-4 py-2 hover:bg-blue-50">我們的主管</Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/partner" className="hover:text-blue-600">成為合作夥伴</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="px-4 py-2 hover:bg-blue-50">首頁</Link>
              <Link to="/shop" className="px-4 py-2 hover:bg-blue-50">線上商城</Link>
              
              <div className="px-4 py-2">
                <div className="font-medium mb-2">我們的社群</div>
                <div className="pl-4 space-y-2">
                  <Link to="/slrc" className="block hover:text-blue-600">SLRC</Link>
                  <Link to="/forum" className="block hover:text-blue-600">論壇</Link>
                  <Link to="/rules" className="block hover:text-blue-600">社群守則</Link>
                </div>
              </div>
              
              <div className="px-4 py-2">
                <div className="font-medium mb-2">認識我們</div>
                <div className="pl-4 space-y-2">
                  <Link to="/about" className="block hover:text-blue-600">社群發展</Link>
                  <Link to="/contact" className="block hover:text-blue-600">聯絡我們</Link>
                  <Link to="/join" className="block hover:text-blue-600">加入我們</Link>
                  <Link to="/admin" className="block hover:text-blue-600">我們的主管</Link>
                </div>
              </div>
              
              <Link to="/partner" className="px-4 py-2 hover:bg-blue-50">成為合作夥伴</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;