import Page from '@/components/template/Page';
import ProjectsHeader from '@/features/projects/list/ProjectsHeader';
import ProjectsMain from '@/features/projects/list/ProjectsMain';

const ProjectsPage = () => {
  return (
    <Page>
      <ProjectsHeader />
      <ProjectsMain />
    </Page>
  );
};

export default ProjectsPage;
