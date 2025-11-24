const DateStrip = () => {
  const dateNow = new Date().toLocaleDateString('ko-KR');

  return (
    <div className="px-6">
      <div className="flex justify-between items-end mb-4">
        <div>
          <p className="text-gray-400 text-sm">{dateNow}</p>
          <h2 className="text-2xl font-bold text-gray-800">Today</h2>
        </div>
      </div>
    </div>
  );
};

export default DateStrip;
