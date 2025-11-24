import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';
import dayjs from 'dayjs';

const DateScroll = () => {
  const today = dayjs();
  const daysInMonth = today.daysInMonth();
  const [activeDate, setActiveDate] = useState(today.date());

  const dates = Array.from({ length: daysInMonth }, (_, i) => {
    const date = i + 1;
    return {
      day: today.date(date).format('ddd'),
      date: date,
    };
  });

  return (
    <div className="flex w-full items-center justify-center border px-6 py-4">
      <Swiper
        className="w-full border"
        spaceBetween={12}
        slidesPerView="auto"
        centeredSlides={true}
        initialSlide={today.date() - 1}
        slideToClickedSlide={true}
      >
        {dates.map((date, index) => (
          <SwiperSlide key={index} className="w-auto!">
            <button
              className={`flex h-24 w-16 flex-col items-center justify-center rounded-3xl border transition-colors ${
                activeDate === date.date
                  ? 'border-indigo-400 bg-indigo-400 text-white'
                  : 'border-gray-200 bg-white text-gray-500'
              }`}
              onClick={() => setActiveDate(date.date)}
            >
              <span className="text-2xl font-bold">{date.date}</span>
              <span className="text-sm">{date.day}</span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DateScroll;
