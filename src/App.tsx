import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Service from './pages/support/Service';
import Database from './pages/support/Database';
import Report from './pages/support/Report';
import Terms from './pages/support/Terms';
import Privacy from './pages/privacy/Privacy';
import Updates from './pages/Updates';
import Security from './pages/privacy/Security';
import Hosting from './pages/privacy/Hosting';
import SLRC from './pages/community/SLRC';
import Forum from './pages/community/Forum';
import CommunityRules from './pages/community/CommunityRules';
import About from './pages/about/About';
import Contact from './pages/about/Contact';
import Join from './pages/about/Join';
import Admin from './pages/about/Admin';
import Partner from './pages/Partner';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            
            {/* Support Routes */}
            <Route path="/service" element={<Service />} />
            <Route path="/database" element={<Database />} />
            <Route path="/report" element={<Report />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/terms" element={<Terms />} />
            
            {/* Privacy Routes */}
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/security" element={<Security />} />
            <Route path="/hosting" element={<Hosting />} />
            
            {/* Community Routes */}
            <Route path="/slrc" element={<SLRC />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/rules" element={<CommunityRules />} />
            
            {/* About Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join" element={<Join />} />
            <Route path="/admin" element={<Admin />} />
            
            {/* Partner Route */}
            <Route path="/partner" element={<Partner />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;