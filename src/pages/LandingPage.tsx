import Header from '@/features/landing/LandingHeader';
import LandingTasks from '@/features/landing/LandingTasks';
import LandingProjects from '@/features/landing/LandingProjects';

const LandingPage = () => {
  return (
    <div className="border w-full h-full relative flex flex-col overflow-hidden">
      <Header />
      <LandingTasks />
      <LandingProjects />
    </div>
  );
};

export default LandingPage;
