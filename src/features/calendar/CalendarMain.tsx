import MainContent from '@/components/ui/template/MainContent';
import DateStrip from './DateStrip';
import DateScroll from './DateScroll';

const CalendarMain = () => {
  return (
    <MainContent className="relative">
      <DateStrip />
      <DateScroll />
    </MainContent>
  );
};

export default CalendarMain;
