import { useParams } from 'react-router-dom';
import CommonHeader from '@/components/common/CommonHeader';
import { useGetProject } from './hooks/useProjectQueries';
import MainContent from '@/components/template/MainContent';

const ProjectDetail = () => {
  const { id } = useParams();
  const { data } = useGetProject(id);

  return (
    <>
      <CommonHeader title={data?.name ?? 'EMPTY'} />
      <MainContent>Hi</MainContent>
    </>
  );
};

export default ProjectDetail;
