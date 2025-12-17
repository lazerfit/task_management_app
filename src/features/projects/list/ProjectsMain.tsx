import Navigation from './Navigation';
import BoxProject from '@/features/projects/components/BoxProject';
import { useGetProjects } from '../hooks/useProjectQueries';
import { useState } from 'react';
import type { ProjectStatus } from '../types/projectTypes';
import ProjectEmpty from './ProjectEmpty';

const ProjectsMain = () => {
  const [filter, setFilter] = useState<ProjectStatus>('');
  const { data: projects } = useGetProjects(filter);

  const onFilterChange = (value: ProjectStatus) => {
    if (filter !== value) {
      setFilter(value);
    }
  };

  return (
    <div className="mt-20 h-full w-full border">
      <Navigation filter={filter} onChange={onFilterChange} />
      <div className="flex flex-col gap-4">
        {projects?.length === 0 && <ProjectEmpty />}
        {projects &&
          projects.map((project) => (
            <BoxProject
              key={project.id}
              name={project.name}
              navigateTo={project.id}
              status={project.status}
            />
          ))}
      </div>
    </div>
  );
};

export default ProjectsMain;
