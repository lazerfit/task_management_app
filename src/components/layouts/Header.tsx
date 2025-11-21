import React from 'react';

interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="h-14 absolute top-0 left-0 w-full flex items-center justify-between px-4 z-10 border">
      {children}
    </header>
  );
};

export default Header;
