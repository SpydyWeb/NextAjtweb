"use client";
import React, { useState } from "react";
import travelpageImg from "@/public/assets/Images/ImagesIcons/travelpageImg.jpg";
import FAQs from "../Newcomponets/FAQs";
import Advantages from "../Newcomponets/TravelAdvantages";
import MarineImg from "@/public/assets/Images/ImagesIcons/MarineImg.jpg";
import MarineCoveragesCard from "./MarineCoverages";
import { planContents } from "@/lib/utilities";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import CorporateMarineImg from "@/public/assets/Images/Corporate/Corporate - Marine.png";
const MarineInsurance: React.FC = () => {
  const { t } = useTranslation("marineinsuranceplan");
  const [activeTab, setActiveTab] = useState("fire");

  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 lg:mb-[12rem]">
            <div className="relative z-10 flex flex-col items-center text-center text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-sky-600">
                {t("Marineheader")}
              </h2>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 w-full sm:w-auto">
                <button
                  onClick={() => setActiveTab("fire")}
                  className={`px-4 sm:px-6 py-6 rtl:py-3 w-full sm:w-48 md:w-56 lg:w-64 font-medium rounded-md transition-colors ${
                    activeTab === "fire"
                      ? "bg-[#1D3557] text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {t("MarineBtn")}
                </button>

                <button
                  onClick={() => setActiveTab("marine")}
                  className={`px-4 sm:px-6 py-6  rtl:py-3 w-full sm:w-48 md:w-56 lg:w-64 font-medium rounded-md transition-colors ${
                    activeTab === "marine"
                      ? "bg-[#1D3557] text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {t("MarineHullBtn")}
                </button>
              </div>
            </div>

            {/* Background Image */}
            <Image
              src={CorporateMarineImg}
              alt="Corporate Aviation"
              fill
              // className="absolute inset-0 h-full w-full object-cover rounded-xl"
              priority
            />

            {/* Text Content */}
            <div className="relative z-10 p-10 md:p-20 max-w-lg text-black text-lg text-justify ml-0 lg:ml-[-11rem] mt-4 ">
              {activeTab === "fire" ? (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">
                    {t("MarineSubheader1")}
                  </h2>
                  <p className="text-slate-700">{t("MarineSubDesc1")}</p>
                </>
              ) : (
                <>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-sky-600">
                    {t("MarineHull")}
                  </h2>
                  <p className="text-slate-700">{t("MarineHulldesc")}</p>
                </>
              )}
            </div>
          </div>

          <div className="w-full mx-auto mb-10 px-4 lg:px-0">
            <div className="max-w-7xl mx-auto -mt-16 lg:-mt-24 relative z-20 px-4">
              {/* <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8"> */}
              <div className="bg-white rounded-2xl shadow-2xl p-[1rem] sm:p-[1.5rem] md:p-[2rem] w-full sm:w-[105%] md:w-[110%] lg:w-[115%] ms-0 sm:ms-[-1.25rem] md:ms-[-2.5rem] lg:ms-[-5.125rem]">
                <h3 className="text-lg md:text-xl font-bold text-[#1D3557] mb-6">
                  {t("Secureyourtripnow")}.
                </h3>

                <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="nationalId"
                      className="mb-1 text-sm font-medium text-gray-700"
                    >
                      {t("NationalID")}
                    </label>
                    <input
                      id="nationalId"
                      name="nationalId"
                      type="text"
                      placeholder="National ID"
                      className="border border-sky-300 rounded-md px-4 py-2 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="mb-1 text-sm font-medium text-gray-700"
                    >
                      {t("Email")}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="border border-sky-300 rounded-md px-4 py-2 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="phone"
                      className="mb-1 text-sm font-medium text-gray-700"
                    >
                      {t("PhoneNumber")}
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your Phone Number"
                      className="border border-sky-300 rounded-md px-4 py-2 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="dob"
                      className="mb-1 text-sm font-medium text-gray-700"
                    >
                      {t("BirthDate")}
                    </label>
                    <input
                      id="dob"
                      name="dob"
                      type="text"
                      placeholder="DD / MM / YYYY"
                      className="border border-sky-300 rounded-md px-4 py-2 placeholder-sky-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
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
          </div>
        </div>
      </section>
      <MarineCoveragesCard />
      <div className="w-full max-w-7xl mx-auto mt-10 px-4">
        <Advantages content={planContents?.marineinsuranceplan} />
      </div>
      <FAQs />
    </>
  );
};

export default MarineInsurance;
