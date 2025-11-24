import Header from '@/components/layouts/Header';
import { GoArrowLeft } from 'react-icons/go';
import { IoMenuOutline } from 'react-icons/io5';
import { useNavigate, useLocation } from 'react-router-dom';

const SettingHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    if (location.pathname === '/setting') {
      navigate('/');
    } else {
      navigate('/setting');
    }
  };

  return (
    <Header>
      {' '}
      <div className="cursor-pointer" onClick={handleBack}>
        <GoArrowLeft size="26px" />
      </div>
      <div className="font-bold text-3xl font-english">Setting</div>
      <div className="cursor-pointer">
        <IoMenuOutline size="26px" />
      </div>
    </Header>
  );
};

export default SettingHeader;
