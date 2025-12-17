import BoxProject from '@/features/projects/components/BoxProject';
import { useGetProjects } from '../projects/hooks/useProjectQueries';
import ProjectEmpty from '../projects/list/ProjectEmpty';

const LandingProjects = () => {
  const { data } = useGetProjects();
  console.log('LadingProjects Stats', data);
  return (
    <div className="mt-6 flex flex-col">
      <h1 className="text-xl font-bold">Projects</h1>
      {data?.length === 0 && <ProjectEmpty />}
      {data &&
        data.map((project) => (
          <BoxProject
            key={project.id}
            name={project.name}
            navigateTo={project.id}
            status={project.status}
          />
        ))}
    </div>
  );
};

export default LandingProjects;
