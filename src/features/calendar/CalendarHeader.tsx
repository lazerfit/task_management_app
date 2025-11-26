import Header from '@/components/layouts/Header';
import { GoArrowLeft } from 'react-icons/go';
import { IoMenuOutline } from 'react-icons/io5';

const CalendarHeader = () => {
  return (
    <Header>
      <button type="button" className="cursor-pointer" aria-label="Go back">
        <GoArrowLeft size="26px" />
      </button>
      <div className="font-english text-3xl font-bold">Calendar</div>
      <button type="button" className="cursor-pointer" aria-label="Menu">
        <IoMenuOutline size="26px" />
      </button>
    </Header>
  );
};

export default CalendarHeader;
