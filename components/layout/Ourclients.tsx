'use client';
import React, { useRef } from 'react';

import { logos } from '@/lib/utilities';
const Ourclients = () => {
 const scrollRef = useRef<HTMLDivElement | null>(null);

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
    <>
    <section className="text-center py-12 px-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#10426C] mb-0">
        OUR CLIENTS
      </h3>
      <p className="text-base sm:text-lg mb-8">
        Explore our wide range of case studies
      </p>

      <div className="relative max-w-7xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 z-10 shadow-md items-center justify-center"
        >
          &#8249;
        </button>

        {/* Scrollable Logo Carousel */}
        <div
          id="logo-carousel"
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 px-6 md:px-12 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style>{`
            #logo-carousel::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="flex-none w-36 sm:w-40 h-28 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col items-center justify-center p-4 text-center"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-10 mb-2 object-contain"
              />
              <div className="text-sm font-medium text-gray-700">
                {logo.name}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full w-10 h-10 z-10 shadow-md items-center justify-center"
        >
          &#8250;
        </button>
      </div>

      {/* View All Button */}
      <button className="mt-8 px-6 py-2 border border-gray-300 bg-gray-50 rounded-full font-medium text-gray-800 hover:bg-white transition">
        VIEW ALL
      </button>
    </section>
    </>
  );
};

export default Ourclients;
