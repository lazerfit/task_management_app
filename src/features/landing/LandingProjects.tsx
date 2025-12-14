import BoxProject from '@/features/projects/components/BoxProject';
import { useGetProjects } from '../projects/hooks/useProjectQueries';

const LandingProjects = () => {
  const { data } = useGetProjects();
  console.log('LadingProjects Stats', data);
  return (
    <>
      {data &&
        data.map((project) => (
          <BoxProject key={project.id} name={project.name} />
        ))}
    </>
  );
};

export default LandingProjects;
