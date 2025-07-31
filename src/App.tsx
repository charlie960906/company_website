import { Routes, Route, useLocation } from 'react-router-dom'; // 移除 BrowserRouter
import { Helmet } from 'react-helmet'; // 添加 react-helmet 進行動態 SEO
import { useScrollToTop } from 'src/hooks/useScrollToTop';
import { setTag, setContext } from 'src/utils/errorTracking';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Home from 'src/pages/Home';
import Shop from 'src/pages/Shop';
import Service from 'src/pages/support/Service';
import Database from 'src/pages/support/Database';
import Terms from 'src/pages/support/Terms';
import Privacy from 'src/pages/privacy/Privacy';
import Updates from 'src/pages/Updates';
import Security from 'src/pages/privacy/Security';
import Hosting from 'src/pages/privacy/Hosting';
import SLRC from 'src/pages/community/SLRC';
import Forum from 'src/pages/community/Forum';
import CommunityRules from 'src/pages/community/CommunityRules';
import About from 'src/pages/about/About';
import Contact from 'src/pages/about/Contact';
import Join from 'src/pages/about/Join';
import Admin from 'src/pages/about/Admin';
import Partner from 'src/pages/Partner';
import NotFound from 'src/pages/NotFound';
import React from 'react';

function App() {
  const location = useLocation();
  
  // 使用現有的 hook
  useScrollToTop();

  // 設置 Sentry 路由標籤
  React.useEffect(() => {
    setTag('route', location.pathname);
    setContext('navigation', {
      from: location.pathname,
      timestamp: new Date().toISOString(),
    });
  }, [location.pathname]);

  // 動態設置中繼說明和標題
  const getMetaData = () => {
    switch (location.pathname) {
      case '/':
        return {
          title: 'HYJdevelop - 創新科技與社群平台',
          description:
            '我們的產品將各地的人與人聯繫在一起，為大家創造機會並發出聲音，我們正在努力，建立一個安全、自由、開放的社群',
        };
      case '/shop':
        return {
          title: 'HYJdevelop - 線上商城',
          description:
            'HYJdevelop 線上商城，即將推出，敬請期待我們的創新產品！',
        };
      case '/service':
        return {
          title: 'HYJdevelop - 服務條款',
          description:
            '查看 HYJdevelop 的服務條款與支援資訊，確保您的體驗安全與順暢。',
        };
      case '/database':
        return {
          title: 'HYJdevelop - 媒體庫',
          description: '探索 HYJdevelop 的媒體庫，獲取豐富的資源與資訊。',
        };
      case '/updates':
        return {
          title: 'HYJdevelop - 最新資訊',
          description: '查看 HYJdevelop 的最新更新與公告。',
        };
      case '/terms':
        return {
          title: 'HYJdevelop - 品牌使用準則',
          description: '了解 HYJdevelop 的品牌使用準則與規範。',
        };
      case '/privacy':
        return {
          title: 'HYJdevelop - 資料和隱私',
          description: '了解 HYJdevelop 的安全與隱私政策，保障您的權益。',
        };
      case '/security':
        return {
          title: 'HYJdevelop - 安全和表達自由',
          description: 'HYJdevelop 致力於安全即是自由，了解我們的保護措施。',
        };
      case '/hosting':
        return {
          title: 'HYJdevelop - 雲端服務',
          description: '了解 HYJdevelop 提供的雲端服務。',
        };
      case '/slrc':
        return {
          title: 'HYJdevelop - SLRC 學生學習資訊社群',
          description: '探索 SLRC 的活動與資訊。',
        };
      case '/forum':
        return {
          title: 'HYJdevelop - 論壇',
          description: '加入 HYJdevelop 的論壇，與社群互動與交流。',
        };
      case '/rules':
        return {
          title: 'HYJdevelop - 社群守則',
          description: '查看 HYJdevelop 的社群守則，維護健康的社群環境。',
        };
      case '/about':
        return {
          title: 'HYJdevelop - 歷史發展',
          description: '了解 HYJdevelop 的歷史發展。',
        };
      case '/contact':
        return {
          title: 'HYJdevelop - 聯絡我們',
          description: '聯絡 HYJdevelop 的方式',
        };
      case '/join':
        return {
          title: 'HYJdevelop - 加入我們',
          description: '加入 HYJdevelop 的團隊，參與新創之旅。',
        };
      case '/admin':
        return {
          title: 'HYJdevelop - 主管團隊',
          description: '探索 HYJdevelop 的管理團隊',
        };
      case '/partner':
        return {
          title: 'HYJdevelop - 成為合作夥伴',
          description: '成為 HYJdevelop 的合作夥伴，共同開創美好未來。',
        };
      default:
        return {
          title: 'HYJdevelop - 頁面未找到 (404)',
          description:
            '抱歉，您要尋找的頁面不存在。請返回首頁或聯絡我們獲取協助。',
        };
    }
  };

  const { title, description } = getMetaData();

  return (
    <div className='flex flex-col min-h-screen'>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content='https://hyjdevelop.com/logo.png' />
        <meta
          property='og:url'
          content={`https://hyjdevelop.com${location.pathname}`}
        />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content='https://hyjdevelop.com/logo.png' />
      </Helmet>
      <Header />
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/service' element={<Service />} />
          <Route path='/database' element={<Database />} />
          <Route path='/updates' element={<Updates />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/security' element={<Security />} />
          <Route path='/hosting' element={<Hosting />} />
          <Route path='/slrc' element={<SLRC />} />
          <Route path='/forum' element={<Forum />} />
          <Route path='/rules' element={<CommunityRules />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/join' element={<Join />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/partner' element={<Partner />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
