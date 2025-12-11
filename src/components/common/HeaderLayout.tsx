import Header from '@/components/layouts/Header';
import { GoArrowLeft } from 'react-icons/go';
import { IoMenuOutline } from 'react-icons/io5';

interface HeaderLayoutProps {
  title: string;
}

const HeaderLayout = ({ title }: HeaderLayoutProps) => {
  return (
    <Header>
      <div className="cursor-pointer">
        <GoArrowLeft size="26px" />
      </div>
      <div className="font-english text-3xl font-bold">{title}</div>
      <div className="cursor-pointer">
        <IoMenuOutline size="26px" />
      </div>
    </Header>
  );
};

export default HeaderLayout;
