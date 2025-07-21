'use client';

import React, { useRef, useState } from 'react';
// import { DatePicker } from 'antd';
// import { CalendarOutlined } from '@ant-design/icons';
// import dayjs from 'dayjs';
import { newsData } from '@/lib/utilities';



const Dateformat = 'DD/MM/YYYY';

const LatestNews = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const pickerRef = useRef(null);

  return (
    <>
    <section className="text-center py-12 px-4 bg-white">
      <h3 className="text-2xl font-bold text-[#10426C] mb-2">LATEST NEWS</h3>
      <p className="text-gray-500 mb-8">Discover our latest news!</p>

      <div className="grid gap-6 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {newsData.map((item, idx) => (
          <div
            key={item.id}
            className="relative bg-white border border-gray-200 rounded-2xl shadow-md p-6 text-left"
          >
            {/* ID Bubble */}
            <div
              className={`absolute -top-5 left-4 w-10 h-10 rounded-md text-white flex items-center justify-center font-bold ${
                idx === 0 ? 'bg-cyan-500' : idx === 1 ? 'bg-slate-900' : 'bg-indigo-900'
              }`}
            >
              {item.id}
            </div>

            <p className="text-base text-black mt-6 font-semibold">{item.title}</p>

            {/* Date Picker Section */}
            <div className="flex items-center gap-2 mt-3">
              {/* <CalendarOutlined className="text-[#00AEEF]" /> */}
              <span
                // onClick={() => pickerRef.current?.focus()}
                className="text-[#00AEEF] text-sm cursor-pointer"
              >
                {/* {selectedDate ? selectedDate.format(Dateformat) : dayjs(item.date).format(Dateformat)} */}
              </span>

              {/* <DatePicker
                ref={pickerRef}
                value={selectedDate}
                onChange={(date) => setSelectedDate(date || null)}
                open={false}
                style={{ display: 'none' }}
              /> */}
            </div>

            <p className="text-sm text-gray-500 mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in euismod odio.
            </p>

            {/* Learn More CTA */}
            <div className="flex items-center mt-4 cursor-pointer text-gray-700">
              <div className="w-8 h-8 rounded-full bg-[#10426C] flex items-center justify-center text-white text-lg mr-2">
                →
              </div>
              <span className="text-[#10426C] text-base font-medium">LEARN MORE</span>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-10 px-6 py-2 border border-gray-300 bg-gray-50 rounded-full font-medium text-gray-800 hover:bg-gray-100 transition">
        VIEW ALL
      </button>
    </section>
    </>
  );
};

export default LatestNews;
