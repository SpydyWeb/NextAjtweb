"use client";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "@/lib/utilities";
import { HeroSectionData } from "@/lib/utilities";
import { useTranslation } from "react-i18next";
export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t, i18n } = useTranslation();
  const activeItem = HeroSectionData[activeIndex];

  return (
    // <section className="relative bg-gradient-to-b from-blue-50 to-white">
    <section className="relative">
      <div className="w-full">
        <div className="min-w-[[10.625rem] w-mx-auto px-2  py-4 flex flex-wrap items-center justify-between gap-6 relative lg:ml-[3rem]">
          {/* Select Dropdown */}
          <div className="flex-1  relative">
            <select className="w-full appearance-none bg-slate-100 border border-gray-200 rounded-full py-3 px-4 text-slate-600 text-sm outline-none">
              <option>Choose your product insurance...</option>
              <option>Choose your Motor insurance... React js</option>
              <option>Choose your Medical insurance... nextjs</option>
            </select>
            <div className="absolute top-1/2 right-5 transform -translate-y-1/2 pointer-events-none text-slate-500">
              <ChevronDownIcon className="w-3 h-3" />
            </div>
          </div>

          {/* EServices Button */}
          <button className="py-2 sm:px-6 px-3 border border-[#123766] text-[#10426C] rounded-full font-medium text-sm bg-white cursor-pointer whitespace-nowrap sm:relative absolute right-[0.5rem] lg:mr-[2rem]">
            {t("EServicesbtn")}
          </button>
        </div>
      </div>
      {/* <section className="relative flex flex-col md:flex-row justify-between items-center max-w-[1100px] mx-auto p-1 gap-8"> */}
      <section
        className="relative flex flex-col lg:flex-row justify-between items-center mx-auto p-4 gap-6 
  max-w-full sm:max-w-[40rem] md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem]"
      >
        {/* Left Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-6xl font-bold text-[#1e3a8a] whitespace-nowrap">
            {t(activeItem.titleKey)}
          </h1>
          <p className="text-3xl md:text-6xl mt-2 whitespace-nowrap">
            {t(activeItem.subtitleKey)}
          </p>
          <button className="mt-4 px-6 py-2 border border-[#123766] text-[#10426C] rounded-full font-medium text-sm bg-transparent cursor-pointer whitespace-nowrap">
            {t(activeItem.buttonKey)}
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 mb-0 md:mb-0">
          <div className="w-[20rem] h-[17.5rem] sm:w-[25rem] sm:h-[21.25rem] md:w-[31.25rem] md:h-[26.25rem] lg:w-[37.5rem] lg:h-[31.25rem] mx-auto md:mx-0">

            <Link href="/">
              <Image
                src={t(activeItem.imageSrcKey)}
                width={1000}
                height={1000}
                alt={`Slide Image ${activeIndex + 1}`}
                className="object-contain w-full h-full"
              />
            </Link>
          </div>
        </div>

        {/* Center Dots */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center gap-2">
          {HeroSectionData.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-[0.625rem] h-[0.625rem] rounded-full cursor-pointer transition-colors duration-300 ${
                activeIndex === idx ? "bg-[#1e3a8a]" : "bg-slate-300"
              }`}
            />
          ))}
        </div>

      </section>
    </section>
  );
}
