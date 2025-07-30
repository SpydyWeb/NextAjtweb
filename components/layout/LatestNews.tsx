'use client';

import React, { useRef, useState } from 'react';
// import { DatePicker } from 'antd';
// import { CalendarOutlined } from '@ant-design/icons';
// import dayjs from 'dayjs';
import { newsData } from '@/lib/utilities';
import { MdDateRange } from "react-icons/md";
import { useTranslation } from 'react-i18next';
const Dateformat = 'DD/MM/YYYY';

const LatestNews = () => {
   const { t, i18n } = useTranslation();
  const [selectedDate, setSelectedDate] = useState(null);
  const pickerRef = useRef(null);
  return (
    <>
    <section className="text-center py-12 px-4 bg-white">
      <h3 className="text-3xl font-bold text-[#10426C] mb-2">{t('LatestNews')}</h3>
      <p className="text-xl text-gray-500 mb-20">{t('Discovernews')}</p>

      <div className="grid gap-6 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {newsData.map((item, idx) => (
  <div
    key={item.id}
    className="relative bg-white border border-gray-200 rounded-2xl shadow-md p-6 text-left py-[40px]"
  >
    {/* ID Badge Bubble */}
    <div
      className={`absolute -top-10 left-4 w-[3.5rem] h-[4.5rem] rounded-[18px] text-white flex items-center justify-center  text-3xl ${
        idx === 0 ? 'bg-cyan-500' : idx === 1 ? 'bg-[#10426C]' : 'bg-[rgb(11,10,44)]'
      }`}
    >
      {item.id}
    </div>

    {/* News Title */}
    <p className="text-base text-black mt-6 font-bold">
      {t(item.title)}
    </p>

    {/* Date with Icon */}
    <p className="text-sm text-cyan-500 mt-4 flex items-center gap-1 text-lg">
      <MdDateRange className="text-xl" />
      {item.date}
    </p>

    {/* Optional Date Picker placeholder block (disabled for now) */}
    {/* 
    <div className="flex items-center gap-2 mt-3">
      <span className="text-[#00AEEF] text-sm cursor-pointer">
        {dayjs(item.date).format(Dateformat)}
      </span>
    </div> 
    */}

    {/* Description Label */}
    <p className="text-md text-gray-600 mt-5">
      {t('Description')}
    </p>

    {/* Learn More CTA */}
    <div className="flex items-center mt-4 cursor-pointer text-gray-700">
      <div className="w-8 h-8 rounded-full bg-[#10426C] flex items-center justify-center text-white text-lg mr-2">
        →
      </div>
      <span className="text-[#10426C] text-base font-medium">
        {t('LearnMore')}
      </span>
    </div>
  </div>
))}

      </div>

      <button className="mt-10 px-6 py-2 border border-gray-300 bg-gray-50 rounded-full font-medium text-gray-800 hover:bg-gray-100 transition">
        {t('Viewbtn')}
      </button>
    </section>
    </>
  );
};

export default LatestNews;
