import MainContent from '@/components/template/MainContent';
import DateStrip from './DateStrip';
import DateScroll from './DateScroll';
import TimelineItem from './TimelineItem';

const CalendarMain = () => {
  return (
    <MainContent className="relative">
      <DateStrip />
      <DateScroll />
      <TimelineItem />
    </MainContent>
  );
};

export default CalendarMain;
