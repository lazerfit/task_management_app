import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import { Toaster } from '@/components/ui/sonner';
import type React from 'react';

const Layout = () => {
  return (
    <div className="relative m-auto box-border flex h-[90vh] w-full max-w-md flex-col items-center justify-center rounded-sm border border-solid px-4">
      <Outlet />
      <Toaster
        position="top-center"
        style={
          {
            '--normal-bg': 'black',
            '--normal-text': 'white',
          } as React.CSSProperties
        }
      />
      <Footer />
    </div>
  );
};

export default Layout;
