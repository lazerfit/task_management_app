import Navigation from './Navigation';
import BoxProject from '@/features/projects/components/BoxProject';
import { useGetProjects } from './hooks/useProjectQueries';

const ProjectsMain = () => {
  const { data: projects } = useGetProjects();

  return (
    <div className="mt-20 h-full w-full border">
      <Navigation />
      <div className="flex flex-col gap-4">
        {projects &&
          projects.map((project) => (
            <BoxProject key={project.id} name={project.name} />
          ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
