import Page from '@/components/template/Page';
import ProjectFormMain from '@/features/projects/form/ProjectFormMain';
import ProjectFormHeader from '@/features/projects/form/ProjectFormHeader';

const ProjectFormPage = () => {
  return (
    <Page>
      <ProjectFormHeader />
      <ProjectFormMain />
    </Page>
  );
};

export default ProjectFormPage;
