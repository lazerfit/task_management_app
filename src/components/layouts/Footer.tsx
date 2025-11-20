import {
  IoCalendarClearOutline,
  IoHomeOutline,
  IoAddCircleSharp,
  IoFolderOutline,
  IoPersonOutline,
} from 'react-icons/io5';

const Footer = () => {
  return (
    <nav className="w-full h-14 flex justify-between items-center border border-solid mt-auto">
      <button
        type="button"
        aria-label="Home"
        className="p-2 cursor-pointer"
        onClick={() => console.log('Navigate to Home')}
      >
        <IoHomeOutline className="w-6 h-6" />
      </button>
      <button
        type="button"
        aria-label="Calendar"
        className="p-2 cursor-pointer"
        onClick={() => console.log('Navigate to Calendar')}
      >
        <IoCalendarClearOutline className="w-6 h-6" />
      </button>
      <button
        type="button"
        aria-label="Add New"
        className="p-2 cursor-pointer"
        onClick={() => console.log('Navigate to Add New')}
      >
        <IoAddCircleSharp className="w-10 h-10" />
      </button>
      <button
        type="button"
        aria-label="Folders"
        className="p-2 cursor-pointer"
        onClick={() => console.log('Navigate to Folders')}
      >
        <IoFolderOutline className="w-6 h-6" />
      </button>
      <button
        type="button"
        aria-label="Profile"
        className="p-2 cursor-pointer"
        onClick={() => console.log('Navigate to Profile')}
      >
        <IoPersonOutline className="w-6 h-6" />
      </button>
    </nav>
  );
};

export default Footer;
