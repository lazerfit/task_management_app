import dayjs from 'dayjs';

const DateStrip = () => {
  const dateNow = dayjs().format('YYYY-MM-DD');

  return (
    <div className="px-6">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <p className="text-sm text-gray-400">{dateNow}</p>
          <h2 className="text-2xl font-bold text-gray-800">Today</h2>
        </div>
      </div>
    </div>
  );
};

export default DateStrip;
