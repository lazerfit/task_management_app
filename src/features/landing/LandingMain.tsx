import MainContent from '@/components/ui/template/MainContent';
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
