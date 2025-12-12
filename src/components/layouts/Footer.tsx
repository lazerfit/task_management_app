import { useNavigate } from 'react-router-dom';
import {
  IconFolder,
  IconCalendar,
  IconHome,
  IconSettings2,
  IconHexagonPlusFilled,
} from '@tabler/icons-react';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <nav className="mt-auto flex h-14 w-full items-center justify-between border border-solid">
      <button
        type="button"
        aria-label="Home"
        className="cursor-pointer p-2"
        onClick={() => navigate('/')}
      >
        <IconHome className="h-7 w-7" />
      </button>
      <button
        type="button"
        aria-label="Calendar"
        className="cursor-pointer p-2"
        onClick={() => navigate('/calendar')}
      >
        <IconCalendar className="h-7 w-7" />
      </button>
      <button
        type="button"
        aria-label="Add New"
        className="cursor-pointer p-2"
        onClick={() => navigate('/projects/new')}
      >
        <IconHexagonPlusFilled className="h-10 w-10" />
      </button>
      <button
        type="button"
        aria-label="Folders"
        className="cursor-pointer p-2"
        onClick={() => navigate('/projects')}
      >
        <IconFolder className="h-7 w-7" />
      </button>
      <button
        type="button"
        aria-label="Setting"
        className="cursor-pointer p-2"
        onClick={() => navigate('/setting')}
      >
        <IconSettings2 className="h-7 w-7" />
      </button>
    </nav>
  );
};

export default Footer;
