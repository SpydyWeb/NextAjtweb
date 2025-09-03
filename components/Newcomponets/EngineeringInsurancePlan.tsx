"use client";
import React,{useState} from "react";
import FAQs from "../Newcomponets/FAQs";
import Advantages from "../Newcomponets/TravelAdvantages";
import EngineeringCoverages from '@/components/Newcomponets/EngineeringCoverages';
import EngineeringImg from "@/public/assets/Images/ImagesIcons/EngineeringImg.jpeg";
import { planContents } from "@/lib/utilities";
import { useTranslation } from "react-i18next";
import {tabs} from "@/lib/utilities";
const EngineeringInsurance: React.FC = () => {
  const { t } = useTranslation("engineeringinsuranceplan");
    const [activeTab, setActiveTab] = useState("contractors");

  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1D3557] mb-6">
            {t("EngineeringInsuranceHeader")}
          </h2>
        <div className="mb-8">
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
    {tabs.map((tab) => (
      <button
        key={tab.key}
        onClick={() => setActiveTab(tab.key)}
        className={` text-sm sm:text-base font-medium rounded-md transition-colors ${
          activeTab === tab.key
            ? "bg-[#1D3557] text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        {t(tab.label)}
      </button>
    ))}
  </div>
</div>
          <div
            className="relative w-full h-80 sm:h-[28rem] rounded-xl overflow-hidden shadow-lg flex items-center"
            style={{
              backgroundImage: `url(${EngineeringImg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="relative z-10 p-6 md:p-10 max-w-xl text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {t("EngineeringSubheader1")}
              </h2>
              <p className="mb-4 leading-relaxed">{t("EngineeringSubDesc11")}</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 mt-10">
            <h3 className="text-lg md:text-xl font-bold text-[#1D3557] mb-6">
              {t("StartYourJourneyNow")}
            </h3>

            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="National ID"
                className="border border-sky-300 rounded-md px-4 py-2 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Enter your email"
                className="border border-sky-300 rounded-md px-4 py-2 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="tel"
                placeholder="Enter your Phone Number"
                className="border border-sky-300 rounded-md px-4 py-2 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="DD / MM / YYYY"
                className="border border-sky-300 rounded-md px-4 py-2 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </form>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-[#1DA1F2] hover:bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md text-base sm:text-lg font-medium transition-colors"
              >
                {t("Insurenow")}
              </button>
            </div>
          </div>
        </div>
      </section>
      <EngineeringCoverages/>
      <div className="w-full max-w-7xl mx-auto mt-10 px-4">
        <div className="w-full max-w-7xl mx-auto mt-10 px-4">
          <Advantages content={planContents?.engineeringinsuranceplan} />
        </div>
      </div>
      <FAQs />
    </>
  );
};

export default EngineeringInsurance;
