import Header from '@/components/layouts/Header';
import { GoArrowLeft } from 'react-icons/go';
import { IoMenuOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const ProjectsHeader = () => {
  const navigate = useNavigate();

  return (
    <Header>
      <div className="cursor-pointer" onClick={() => navigate('/')}>
        <GoArrowLeft size="26px" />
      </div>
      <div className="font-bold text-3xl font-english">Projects</div>
      <div className="cursor-pointer">
        <IoMenuOutline size="26px" />
      </div>
    </Header>
  );
};

export default ProjectsHeader;
