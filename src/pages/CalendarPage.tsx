import Page from '@/components/template/Page';
import CalendarHeader from '@/features/calendar/CalendarHeader';
import CalendarMain from '@/features/calendar/CalendarMain';

const CalendarPage = () => {
  return (
    <Page>
      <CalendarHeader />
      <CalendarMain />
    </Page>
  );
};

export default CalendarPage;
