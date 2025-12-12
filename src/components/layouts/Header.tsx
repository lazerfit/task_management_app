import React from 'react';

interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="absolute top-0 left-0 z-10 flex h-14 w-full items-center justify-between border">
      {children}
    </header>
  );
};

export default Header;
