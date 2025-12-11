import Page from '@/components/template/Page';
import ProjectFormMain from '@/features/projects/ProjectFormMain';
import ProjectFormHeader from '@/features/projects/ProjectFormHeader';

const ProjectFormPage = () => {
  return (
    <Page>
      <ProjectFormHeader />
      <ProjectFormMain />
    </Page>
  );
};

export default ProjectFormPage;
