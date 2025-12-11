import {
  IoCalendarClearOutline,
  IoHomeOutline,
  IoAddCircleSharp,
  IoFolderOutline,
  IoFlowerOutline,
} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

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
        <IoHomeOutline className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="Calendar"
        className="cursor-pointer p-2"
        onClick={() => navigate('/calendar')}
      >
        <IoCalendarClearOutline className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="Add New"
        className="cursor-pointer p-2"
        onClick={() => navigate('/projects/new')}
      >
        <IoAddCircleSharp className="h-10 w-10" />
      </button>
      <button
        type="button"
        aria-label="Folders"
        className="cursor-pointer p-2"
        onClick={() => navigate('/projects')}
      >
        <IoFolderOutline className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="Setting"
        className="cursor-pointer p-2"
        onClick={() => navigate('/setting')}
      >
        <IoFlowerOutline className="h-6 w-6" />
      </button>
    </nav>
  );
};

export default Footer;
