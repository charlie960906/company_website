import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

const MainLayout: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen relative'>
      <a href='#main-content' className='skip-link'>跳至主要內容</a>
      <div className='fixed inset-0 -z-10 app-bg pointer-events-none' aria-hidden='true'></div>
      <Header />
      <main id='main-content' className='flex-grow mobile-content' role='main' tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
