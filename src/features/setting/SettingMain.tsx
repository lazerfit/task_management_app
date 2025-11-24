import MainContent from '@/components/ui/template/MainContent';
import { IoChevronForward } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const SettingMain = () => {
  const navigate = useNavigate();

  const settingOptions = [
    {
      id: 'theme-setting',
      label: 'Theme',
      path: '/setting/theme',
    },
  ];

  return (
    <MainContent className="gap-3">
      {settingOptions.map((option) => (
        <div
          key={option.id}
          className="flex items-center justify-between w-full h-12 py-3 px-5 border rounded-xl cursor-pointer hover:bg-gray-100"
          onClick={() => navigate(option.path)}
        >
          {option.label}
          <IoChevronForward size="16px" />
        </div>
      ))}
    </MainContent>
  );
};

export default SettingMain;
