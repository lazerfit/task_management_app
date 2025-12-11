import MainContent from '@/components/template/MainContent';
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
          className="flex h-12 w-full cursor-pointer items-center justify-between rounded-xl border px-5 py-3 hover:bg-gray-100"
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
