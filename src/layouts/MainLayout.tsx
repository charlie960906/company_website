import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

const MainLayout: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex-grow' role='main'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;


