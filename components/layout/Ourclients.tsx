'use client';
import React, { useRef } from 'react';
import { logos } from '@/lib/utilities';
import Image from "next/image";
import { useTranslation } from "react-i18next";
const Ourclients = () => {
  const { t } = useTranslation();
 const scrollRef = useRef<HTMLDivElement | null>(null);;
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  return (
    <section className="text-center py-12 px-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#10426C] mb-0">
        {t("OurClients")}
      </h3>
      <p className="text-base sm:text-lg mb-8">
        {t("Explorestudies")}
      </p>

<div className="relative max-w-7xl mx-auto">
  {/* Left Arrow */}
  <button
    onClick={() => scroll('left')}
    className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-12 h-12 z-10 shadow-lg items-center justify-center"
  >
    &#8249;
  </button>

  {/* Scrollable Logo Carousel */}
  <div
    id="logo-carousel"
    ref={scrollRef}
    className="flex overflow-x-auto gap-6 scroll-smooth px-[3rem] sm:px-[5rem] md:px-[8rem]"
    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
  >
    <style>{`
      #logo-carousel::-webkit-scrollbar {
        display: none;
      }
    `}</style>

    {logos.map((logo) => (
      <div
        key={logo.name}
        className="flex-none w-36 sm:w-48 lg:w-48 h-48 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center px-4 py-2 text-center"
      >
        <Image
          src={logo.src}
          alt={t(logo.name)}
          width={100}
          height={40}
          className="max-h-[3rem] w-[3rem] mb-2 object-contain"
        />
        <div className="text-sm font-medium text-gray-700">
          {t(logo.name)}
        </div>
      </div>
    ))}
  </div>

  {/* Right Arrow */}
  <button
    onClick={() => scroll('right')}
    className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-12 h-12 z-10 shadow-lg items-center justify-center"
  >
    &#8250;
  </button>
</div>



      {/* View All Button */}
       <button className="mt-8 px-12 py-4 border border-[#10426C] bg-gray-50 rounded-full font-medium text-[#10426C] hover:bg-white transition">
        {t('Viewbtn')}
      </button>
    </section>
  );
};

export default Ourclients;
