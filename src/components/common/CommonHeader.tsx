import Header from '@/components/layouts/Header';
import { IconArrowLeft, IconMenu2 } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

interface HeaderLayoutProps {
  title: string;
}

const CommonHeader = ({ title }: HeaderLayoutProps) => {
  const navigate = useNavigate();

  return (
    <Header>
      <div className="cursor-pointer" onClick={() => navigate(-1)}>
        <IconArrowLeft size={26} aria-label="back-button" role="img" />
      </div>
      <div className="font-english scroll-m-20 text-3xl font-semibold tracking-tight">
        {title}
      </div>
      <div className="cursor-pointer">
        <IconMenu2 size={26} aria-label="menu" role="img" />
      </div>
    </Header>
  );
};

export default CommonHeader;
