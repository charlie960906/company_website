import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from 'src/components/Header.tsx'; // 修正為明確的 .tsx 副檔名
import Footer from 'src/components/Footer.tsx'; // 確保也加上 .tsx
import Home from 'src/pages/Home.tsx';
import Shop from 'src/pages/Shop.tsx';
import Service from 'src/pages/support/Service.tsx';
import Database from 'src/pages/support/Database.tsx';
import Terms from 'src/pages/support/Terms.tsx';
import Privacy from 'src/pages/privacy/Privacy.tsx';
import Updates from 'src/pages/Updates.tsx';
import Security from 'src/pages/privacy/Security.tsx';
import Hosting from 'src/pages/privacy/Hosting.tsx';
import SLRC from 'src/pages/community/SLRC.tsx';
import Forum from 'src/pages/community/Forum.tsx';
import CommunityRules from 'src/pages/community/CommunityRules.tsx';
import About from 'src/pages/about/About.tsx';
import Contact from 'src/pages/about/Contact.tsx';
import Join from 'src/pages/about/Join.tsx';
import Admin from 'src/pages/about/Admin.tsx';
import Partner from 'src/pages/Partner.tsx';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/service" element={<Service />} />
            <Route path="/database" element={<Database />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/security" element={<Security />} />
            <Route path="/hosting" element={<Hosting />} />
            <Route path="/slrc" element={<SLRC />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/rules" element={<CommunityRules />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join" element={<Join />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/partner" element={<Partner />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;