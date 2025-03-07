import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

// 定義選單項目的類型
interface MenuItem {
  to: string;
  label: string;
}

interface DropdownMenuItem {
  to?: string;
  label: string;
  dropdown?: MenuItem[];
}

// 動畫配置
const ANIMATION_CONFIG = {
  ITEM_DURATION: 0.12, // 單行動畫持續時間
  STAGGER_DELAY: 0.1, // 逐行間隔時間
  INITIAL_DELAY: 0.05, // 首行延遲
  EASE: [0.33, 1, 0.68, 1], // 自定義 Bezier 曲線
} as const;

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [communityOpen, setCommunityOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  // 定義選單項目
  const menuItems: DropdownMenuItem[] = [
    { to: '/', label: '首頁' },
    { to: '/shop', label: '線上商城' },
    {
      label: '我們的社群',
      dropdown: [
        { to: '/slrc', label: 'SLRC' },
        { to: '/forum', label: '論壇' },
        { to: '/rules', label: '社群守則' },
      ],
    },
    {
      label: '認識我們',
      dropdown: [
        { to: '/about', label: '社群發展' },
        { to: '/contact', label: '聯絡我們' },
        { to: '/join', label: '加入我們' },
        { to: '/admin', label: '我們的主管' },
      ],
    },
    { to: '/partner', label: '成為合作夥伴' },
  ];

  // 計算背景和文字動畫的總時長
  const totalItems = menuItems.length;
  const animationDuration = ANIMATION_CONFIG.INITIAL_DELAY + (totalItems - 1) * ANIMATION_CONFIG.STAGGER_DELAY;
  const backgroundDuration = animationDuration - 0.2; // 背景動畫時長比文字短 0.2 秒

  // 動畫變體
  const containerVariants: Variants = {
    initial: { 
      opacity: 0,
      transform: 'translateY(-10%)',
    },
    animate: { 
      opacity: 1,
      transform: 'translateY(0)',
      transition: { 
        opacity: { 
          duration: backgroundDuration, // 背景透明度提前 0.2 秒結束
          ease: ANIMATION_CONFIG.EASE,
        },
        transform: { 
          duration: animationDuration, // 滑動效果與文字同步
          ease: ANIMATION_CONFIG.EASE,
        },
        when: 'beforeChildren', // 背景動畫在子元素動畫前開始
        staggerChildren: ANIMATION_CONFIG.STAGGER_DELAY,
      },
    },
    exit: { 
      opacity: 0,
      transform: 'translateY(-10%)',
      transition: { 
        opacity: { 
          duration: backgroundDuration, // 背景透明度提前 0.2 秒結束
          ease: ANIMATION_CONFIG.EASE,
        },
        transform: { 
          duration: animationDuration, // 滑動效果與文字同步
          ease: ANIMATION_CONFIG.EASE,
        },
        when: 'afterChildren', // 背景動畫在子元素動畫後結束
        staggerChildren: ANIMATION_CONFIG.STAGGER_DELAY,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (custom: [number, number]) => {
      const [i] = custom;
      return {
        opacity: 1,
        y: 0,
        transition: {
          duration: ANIMATION_CONFIG.ITEM_DURATION,
          delay: ANIMATION_CONFIG.INITIAL_DELAY + i * ANIMATION_CONFIG.STAGGER_DELAY,
        },
      };
    },
    exit: (custom: [number, number]) => {
      const [i, length] = custom;
      return {
        opacity: 0,
        y: -20,
        transition: {
          duration: ANIMATION_CONFIG.ITEM_DURATION,
          delay: (length - 1 - i) * ANIMATION_CONFIG.STAGGER_DELAY,
        },
      };
    },
  };

  const submenuVariants: Variants = {
    open: { 
      transform: 'translateY(0)',
      transition: { 
        duration: animationDuration,
        ease: ANIMATION_CONFIG.EASE,
        when: 'beforeChildren',
        staggerChildren: ANIMATION_CONFIG.STAGGER_DELAY,
      },
    },
    closed: { 
      transform: 'translateY(-10%)',
      transition: { 
        duration: animationDuration,
        ease: ANIMATION_CONFIG.EASE,
        when: 'afterChildren',
        staggerChildren: ANIMATION_CONFIG.STAGGER_DELAY,
        staggerDirection: -1,
      },
    },
  };

  // 優化事件處理函數，避免不必要的重新創建
  const handleDropdownEnter = useCallback((menu: string) => {
    setActiveDropdown(menu);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setCommunityOpen(false);
    setAboutOpen(false);
    setActiveDropdown(null);
  }, []);

  return (
    <header className="bg-white/80 backdrop-blur-md fixed w-full top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <img src="/logo.png" alt="HYJdevelop 標誌" className="h-10" />
            <span className="text-xl font-bold">HYJdevelop</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) =>
              item.dropdown ? (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button className="flex items-center hover:text-blue-600 py-2">
                    {item.label}
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </button>
                  {(item.label === '我們的社群' && activeDropdown === '我們的社群') ||
                  (item.label === '認識我們' && activeDropdown === '認識我們') ? (
                    <div className="absolute top-[calc(100%-4px)] left-0 w-40">
                      <div className="h-4"></div>
                      <div className="bg-white rounded-lg shadow-lg py-2">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.to}
                            className="block px-4 py-2 hover:bg-blue-50"
                            onClick={closeMenu}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              ) : (
                <Link
                  key={index}
                  to={item.to!}
                  className="hover:text-blue-600"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => {
              setIsMenuOpen((prev) => !prev);
              if (isMenuOpen) closeMenu();
            }}
            aria-label="Toggle Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu with Framer Motion */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden py-4 w-full overflow-hidden"
              style={{ top: 0, right: 0, willChange: 'transform, opacity' }}
            >
              <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col space-y-4 text-right"
              >
                {menuItems.map((item, index) => {
                  const length = menuItems.length;
                  return item.dropdown ? (
                    <div key={index} className="px-6 py-2">
                      <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        custom={[index, length]}
                      >
                        <button
                          className="w-full flex justify-end items-center font-medium"
                          onClick={() => {
                            if (item.label === '我們的社群') setCommunityOpen((prev) => !prev);
                            if (item.label === '認識我們') setAboutOpen((prev) => !prev);
                          }}
                        >
                          {item.label}
                          <ChevronUp
                            className={`w-4 h-4 ml-1 transition-transform ${
                              (item.label === '我們的社群' && communityOpen) ||
                              (item.label === '認識我們' && aboutOpen)
                                ? 'rotate-180'
                                : ''
                            }`}
                          />
                        </button>
                      </motion.div>
                      <AnimatePresence>
                        {item.label === '我們的社群' && communityOpen && (
                          <motion.div
                            variants={submenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="space-y-2 pr-4 mt-2 overflow-hidden"
                          >
                            {item.dropdown.map((subItem, subIndex) => (
                              <motion.div
                                key={subIndex}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                custom={[subIndex, item.dropdown!.length]}
                              >
                                <Link
                                  to={subItem.to}
                                  className="block hover:text-blue-600"
                                  onClick={closeMenu}
                                >
                                  {subItem.label}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                        {item.label === '認識我們' && aboutOpen && (
                          <motion.div
                            variants={submenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="space-y-2 pr-4 mt-2 overflow-hidden"
                          >
                            {item.dropdown.map((subItem, subIndex) => (
                              <motion.div
                                key={subIndex}
                                variants={itemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                custom={[subIndex, item.dropdown!.length]}
                              >
                                <Link
                                  to={subItem.to}
                                  className="block hover:text-blue-600"
                                  onClick={closeMenu}
                                >
                                  {subItem.label}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      custom={[index, length]}
                    >
                      <Link
                        to={item.to!}
                        className="px-6 py-2 hover:bg-blue-50 block"
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;