import Header from '@/components/layouts/Header';
import { GoArrowLeft } from 'react-icons/go';
import { IoMenuOutline } from 'react-icons/io5';

const CalendarHeader = () => {
  return (
    <Header>
      <button type="button" className="cursor-pointer">
        <GoArrowLeft size="26px" />
      </button>
      <div className="font-bold text-3xl font-english">Calendar</div>
      <button type="button" className="cursor-pointer">
        <IoMenuOutline size="26px" />
      </button>
    </Header>
  );
};

export default CalendarHeader;
