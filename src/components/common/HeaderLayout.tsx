import Header from '@/components/layouts/Header';
import { IconArrowLeft, IconMenu2 } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

interface HeaderLayoutProps {
  title: string;
}

const HeaderLayout = ({ title }: HeaderLayoutProps) => {
  const navigate = useNavigate();

  return (
    <Header>
      <div className="cursor-pointer" onClick={() => navigate(-1)}>
        <IconArrowLeft size={26} />
      </div>
      <div className="font-english text-3xl font-bold">{title}</div>
      <div className="cursor-pointer">
        <IconMenu2 size={26} />
      </div>
    </Header>
  );
};

export default HeaderLayout;
