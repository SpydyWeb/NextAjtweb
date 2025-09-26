'use client';

import React from 'react';
import { newsData } from '@/lib/utilities';
import { MdDateRange } from "react-icons/md";
import { useTranslation } from 'react-i18next';
const Dateformat = 'DD/MM/YYYY';

const LatestNews = () => {
   const { t  } = useTranslation("latestnews");
  return (
    <section className="text-center py-12 px-4 bg-white">
      <h3 className="text-3xl font-bold text-[#10426C] mb-2">{t('LatestNews')}</h3>
      <p className="text-xl text-gray-500 mb-20">{t('Discovernews')}</p>

      <div className="grid gap-6 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {newsData.map((item, idx) => (
  <div
    key={item.id}
    className="relative bg-white border border-gray-200 rounded-2xl shadow-md p-6 text-left py-[2.5rem] mb-[2rem]"
  >
    {/* ID Badge Bubble */}
    <div
      className={`absolute -top-10 left-4 w-20 h-[5.5rem] rounded-[1.125rem] text-white flex items-center justify-center  text-3xl ${
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
      <div className="w-8 h-8 rounded-full  flex items-center justify-center mr-2">
  <img src={t("forwardcircle")} alt="Forward" className="w-10 h-10 " />
</div>

      <span className="text-[#10426C] text-base font-medium">
        {t('LearnMore')}
      </span>
    </div>
  </div>
))}

      </div>

       <button className="mt-8 px-12 py-4 border border-[#10426C] bg-gray-50 rounded-full font-medium text-[#10426C] hover:bg-white transition">
        {t('Viewbtn')}
      </button>
    </section>
  );
};

export default LatestNews;
