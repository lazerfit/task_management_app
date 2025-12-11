import Page from '@/components/template/Page';
import SettingHeader from '@/features/setting/SettingHeader';
import { Outlet } from 'react-router-dom';

const SettingPage = () => {
  return (
    <Page>
      <SettingHeader />
      <Outlet />
    </Page>
  );
};

export default SettingPage;
