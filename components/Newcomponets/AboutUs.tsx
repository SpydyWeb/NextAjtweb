'use client'
import React,{useState} from 'react';
import VisionImg from '../../assets/Images/vision2030.jpg';
import Vision2030 from '../../assets/Images/Boardmembers/Vision2030.png'
import Image from 'next/image';
import utilities from "@/Utilities.json";
import {Steps} from "@/lib/utilities";
import BoardMembers from '../Newcomponets/BoardMembers'
import { useTranslation } from 'react-i18next';
const AboutUs = () => {
 const {t, i18n}= useTranslation()
  return (
    <>
    <div className="flex flex-col min-h-screen font-sans text-[#1c1c1c] bg-white mt-4">
      {/* About Us Section */}
      <section className="px-6 md:px-20 xl:px-[20rem] py-12">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold mb-2 text-[#10426C]">{t("AboutUsHeader")}</h1>
          <p className="text-base text-black-600">
            {t("CompanyProfileTab")}
            <br/>
            {t("CompanyProfileTab1")}
          </p>
        </div>

        {/* Who We Are Section */}
        <div className="grid md:grid-cols-2 items-center gap-1 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#002c60]">
              {t("who")} <span className="text-[#1e3a8a]">{t("weare")}</span>
            </h3>
            <p className="leading-relaxed font-semibold text-[#10426C]">
              {t("CompanyProfilDesc1")}<br />
              {t("CompanyProfilDesc21")}
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src={Vision2030}
              alt="Vision 2030"
                className="w-[250px] h-[250px]"
              // className="w-full md:max-w-lg object-contain"
            />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white px-4 md:px-24 py-16 relative overflow-visible">
        <h2 className="text-3xl font-bold text-center text-[#1e3a8a] mb-20 ml-[-50%]">
          {t("Our")} <span className="text-[#002c60]">{t("Story")}</span>
        </h2>

        {/* <svg
          className="absolute top-[150px] left-0 w-full h-[220px] z-0 hidden md:block"
          viewBox="0 0 1200 220"
          preserveAspectRatio="none"
        >
          <path
            d="M 180 110 C 300 30, 400 30, 520 110 S 760 190, 880 110 S 1040 30, 1120 110"
            stroke="#00a6e0"
            strokeWidth="4"
            fill="none"
            strokeDasharray="6,6"
          />
        </svg> */}

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-y-32 md:gap-y-0">
  {Steps.map((step, index) => (
    <div
      key={step.id}
      className={`flex flex-col items-center px-4 ${
        index % 2 === 1 ? 'md:mt-32' : ''
      }`}
    >
    <div
      className="w-24 h-24 bg-cover bg-center text-[#002c60] rounded-full flex items-center justify-center text-xl font-bold "
      style={{ backgroundImage: `url(${step.BgImage.src})` }}
    >
      {step.id}
    </div>
      <h3 className="text-lg font-bold text-[#002c60] mt-12 mb-2 text-center text-justify">
        {t(step.title)}
      </h3>
      <p className="text-ms text-gray-700 max-w-[250px] text-center text-justify">
        {t(step.text)}
      </p>
    </div>
  ))}


</div>

      </section>
    </div>
    <BoardMembers />
    </>
  );
};

export default AboutUs;