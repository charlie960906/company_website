import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useScrollToTop } from 'src/hooks/useScrollToTop';
import { setTag, setContext } from 'src/utils/errorTracking';
import MainLayout from 'src/layouts/MainLayout';
import { ROUTE_META, DEFAULT_META } from 'src/config/seo';
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
  const meta = ROUTE_META[location.pathname] || DEFAULT_META;
  const { title, description } = meta;

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
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
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
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
