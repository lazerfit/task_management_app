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
    <nav className="w-full h-14 flex justify-between items-center border border-solid mt-auto">
      <button
        type="button"
        aria-label="Home"
        className="p-2 cursor-pointer"
        onClick={() => navigate('/')}
      >
        <IoHomeOutline className="w-6 h-6" />
      </button>
      <button
        type="button"
        aria-label="Calendar"
        className="p-2 cursor-pointer"
        onClick={() => navigate('/calendar')}
      >
        <IoCalendarClearOutline className="w-6 h-6" />
      </button>
      <button
        type="button"
        aria-label="Add New"
        className="p-2 cursor-pointer"
        onClick={() => navigate('/tasks/new')}
      >
        <IoAddCircleSharp className="w-10 h-10" />
      </button>
      <button
        type="button"
        aria-label="Folders"
        className="p-2 cursor-pointer"
        onClick={() => navigate('/projects')}
      >
        <IoFolderOutline className="w-6 h-6" />
      </button>
      <button
        type="button"
        aria-label="Setting"
        className="p-2 cursor-pointer"
        onClick={() => navigate('/setting')}
      >
        <IoFlowerOutline className="w-6 h-6" />
      </button>
    </nav>
  );
};

export default Footer;
