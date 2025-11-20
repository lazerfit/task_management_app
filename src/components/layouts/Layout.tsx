import React from 'react';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="box-border w-full max-w-md h-[90vh] m-auto px-4 border border-solid flex flex-col justify-center items-center rounded-sm">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
