import Header from '@/features/landing/LandingHeader';
import LandingMain from '@/features/landing/LandingMain';
import Page from '@/components/template/Page';

const LandingPage = () => {
  return (
    <Page>
      <Header />
      <LandingMain />
    </Page>
  );
};

export default LandingPage;
