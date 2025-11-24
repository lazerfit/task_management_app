// const items = [
//   {
//     title: '09:00 ~ 10:00',
//     cardTitle: 'Event 1',
//     cardDetailedText: 'example#1',
//   },
//   {
//     title: '10:00 ~ 11:00',
//     cardTitle: 'Event 2',
//     cardDetailedText: 'example#2',
//   },
// ];

const TimelineItem = () => {
  return (
    <div className="mt-6 h-full w-full border px-6">
      <h3 className="mb-6 text-xl font-bold text-gray-800">Daily Task</h3>
      <div className="relative h-[90%] w-full">
        <div className="absolute top-0 bottom-0 left-[60px] w-1 rounded-2xl bg-indigo-300" />
        {/* 1. 시간 표시 영역 */}
        <div className="flex w-12 flex-col items-end pt-2 pr-2">
          <span className="text-xs font-medium text-gray-400">09:00AM</span>
        </div>
        {/* 2. 타임라인 점 (Dot) */}
        <div className="relative flex w-8 shrink-0 justify-center">
          <div className="absolute left-[54px] z-10 mt-1.5 h-4 w-4 rounded-full border-4 border-white bg-indigo-500 shadow-sm" />
        </div>
        {/* 3. 태스크 카드 */}
        <div className="mt-[-20px] ml-24 flex h-20 flex-col items-start justify-center rounded-xl border px-4">
          <h4 className="text-lg font-bold">Event 1</h4>
          <p className="text-xs text-gray-400">Completed</p>
          <div className="mt-2">
            <span className="text-xs text-gray-400">09:00AM ~ 10:00AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
