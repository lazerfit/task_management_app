import Page from '@/components/template/Page';
import ProjectsHeader from '@/features/projects/ProjectsHeader';
import ProjectsMain from '@/features/projects/ProjectsMain';

const ProjectsPage = () => {
  return (
    <Page>
      <ProjectsHeader />
      <ProjectsMain />
    </Page>
  );
};

export default ProjectsPage;
