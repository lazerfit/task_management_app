import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="box-border w-full max-w-md h-[90vh] m-auto px-4 border border-solid flex flex-col justify-center items-center rounded-sm relative">
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
