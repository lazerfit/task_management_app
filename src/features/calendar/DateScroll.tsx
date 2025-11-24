import { useRef, useState, type MouseEvent } from 'react';

const dates = [
  { day: 'Fri', date: 5 },
  { day: 'Sat', date: 6 },
  { day: 'Sun', date: 7 },
  { day: 'Mon', date: 8 },
  { day: 'Tue', date: 9 },
  { day: 'Wed', date: 10 },
  { day: 'Thu', date: 11 },
  { day: 'Fri', date: 12 },
  { day: 'Sat', date: 13 },
];

const DateScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [selectedDate, setSelectedDate] = useState<number>(7); // Default selected date
  const isDragRef = useRef(false);

  const onMouseDown = (e: MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    isDragRef.current = false;
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
    // Delay resetting isDragging to allow onClick to fire first if needed,
    // but actually we use isDragRef for the click check.
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;

    // If moved more than 5 pixels, consider it a drag
    if (Math.abs(x - startX) > 5) {
      isDragRef.current = true;
    }

    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDateClick = (date: number) => {
    if (isDragRef.current) return;
    setSelectedDate(date);
  };

  return (
    <div
      ref={scrollRef}
      className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide cursor-grab active:cursor-grabbing"
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {dates.map((date, index) => (
        <div
          key={index}
          onClick={() => handleDateClick(date.date)}
          className={`flex flex-col items-center justify-center min-w-[70px] h-[100px] rounded-2xl select-none
            transition-colors ${
              selectedDate === date.date
                ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-300'
                : 'bg-white text-gray-500'
            }`}
        >
          <span className="text-lg font-bold mb-1">{date.date}</span>
          <span className="text-xs font-medium">{date.day}</span>
        </div>
      ))}
    </div>
  );
};

export default DateScroll;
