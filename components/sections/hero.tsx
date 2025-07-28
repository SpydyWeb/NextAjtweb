'use client';
import React,{useState} from 'react'
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play } from 'lucide-react';
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import logo from '../../assets/Images/logo.png';
import globelogImg from '../../assets/Images/globelogoImg.png';
import Image from 'next/image';
import Link from "next/link";
import headercar from '../../assets/Images/ImagesIcons/Headercar.png'
import { useTranslation } from "react-i18next";
export function Hero() {
      const [activeIndex, setActiveIndex] = useState(0);
 const { t, i18n } = useTranslation();
      const images = [headercar, globelogImg, logo, logo];
  return (
    // <section className="relative bg-gradient-to-b from-blue-50 to-white">
     <section className="relative">
      <div className="w-full">
      <div className="max-w-screen-xl mx-auto px-2  py-2 flex flex-wrap items-center justify-between gap-6 relative">
        {/* Select Dropdown */}
        <div className="flex-1 min-w-[250px] relative">
          <select
            className="w-full appearance-none bg-slate-100 border border-gray-200 rounded-full py-2 px-4 text-slate-600 text-sm outline-none"
          >
            <option>Choose your product insurance...</option>
            <option>Choose your Motor insurance... Raect js</option>
            <option>Choose your Medical insurance... nextjs</option>
          </select>
          <div className="absolute top-1/2 right-5 transform -translate-y-1/2 pointer-events-none text-slate-500">
            <ChevronDownIcon className="w-3 h-3" />
          </div>
        </div>

        {/* EServices Button */}
        <button
          className="py-2 sm:px-6 px-3 border border-[#123766] text-[#10426C] rounded-full font-medium text-sm bg-white cursor-pointer whitespace-nowrap sm:relative absolute right-[8px]"
        >
          {t("EServicesbtn")}
        </button>
      </div>
    </div>
   {/* <section className="relative flex flex-col md:flex-row justify-between items-center max-w-[1100px] mx-auto p-1 gap-8"> */}
 <section className="relative flex flex-col lg:flex-row justify-between items-center mx-auto p-4 gap-6 
  max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1100px]">


      {/* Left Text */}
      <div className="flex-1 text-center md:text-left">
        {/* <h1 className="text-3xl md:text-7xl font-bold text-[#1e3a8a] whitespace-nowrap">
  {t("motorinsurancetitle")}
</h1>
<p className="text-3xl md:text-7xl mt-2 whitespace-nowrap">
  {t("YouDriveWeInsure")}
</p> */}

        <h1 className="text-3xl md:text-6xl font-bold text-[#1e3a8a] whitespace-nowrap">{t("motorinsurancetitle")}</h1>
        <p className="text-3xl md:text-6xl  mt-2 whitespace-nowrap">{t("YouDriveWeInsure")}</p>
        <button className="mt-4 px-6 py-2 border border-[#123766] text-[#10426C] rounded-full font-medium text-sm bg-transparent cursor-pointer whitespace-nowrap">
          {t("InsureNowbtn")}
        </button>
      </div>

      {/* Right Image */}
      <div className="flex-shrink-0 mb-0 md:mb-0">
        {/* <div className="w-[500px] h-[280px] sm:w-[280px] sm:h-[250px] md:w-[320px] md:h-[300px] mx-auto md:mx-0">
         */}
         <div className="w-[320px] h-[280px] sm:w-[400px] sm:h-[340px] md:w-[500px] md:h-[420px] lg:w-[600px] lg:h-[500px] mx-auto md:mx-0">
  <Link href="/">
    <Image
      src={images[activeIndex]}
      width={1000}
      height={1000}
      alt={`Motor Image ${activeIndex + 1}`}
      className="object-contain w-full h-full"
    />
  </Link>
</div>

      </div>

      {/* Center Dots */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center gap-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setActiveIndex(idx)} // Step 2: Set active index on click
            className={`w-[10px] h-[10px] rounded-full cursor-pointer transition-colors duration-300 ${
              activeIndex === idx ? 'bg-[#1e3a8a]' : 'bg-slate-300'
            }`}
          />
        ))}
      </div>
    </section>
    </section>
  );
}