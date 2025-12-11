import MainContent from '@/components/template/MainContent';
import LandingTasks from './LandingTasks';
import LandingProjects from './LandingProjects';

const LandingMain = () => {
  return (
    <MainContent>
      <LandingTasks />
      <LandingProjects />
    </MainContent>
  );
};

export default LandingMain;
