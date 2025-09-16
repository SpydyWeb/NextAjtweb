"use client";
import React from "react";
import FAQs from "../Newcomponets/FAQs";
import Advantages from "../Newcomponets/TravelAdvantages";
import AviationCoverage from "@/components/Newcomponets/AviationCoverages";
import { planContents } from "@/lib/utilities";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import CorporateAviataionImg from "@/public/assets/Images/Corporate/Corporate - Aviation Liability_.png";

const AviationInsurance: React.FC = () => {
  const { t } = useTranslation("aviationinsuranceplan");

  return (
    <div className="space-y-28">
      <section className="bg-white relative h-[100vh]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 h-[100vh]">
          <Image
            src={CorporateAviataionImg}
            alt="Corporate Aviation"
            priority
            className="object-fill absolute left-0 -top-[5rem] h-full "
          />
          <div className="relative z-10 top-[20%]  max-w-lg space-y-8">
            <h2 className="text-2xl md:text-4xl font-bold text-[#10426c] ">
              {t("AviationSubheader1")}
            </h2>
            <p className="text-base md:text-2xl text-slate-700 font-semibold leading-relaxed max-w-md">
              {t("AviationSubDesc11")}
            </p>
          </div>

          {/* FORM CARD: overlap the hero using negative margin */}
          <div className="max-w-7xl mx-auto -mt-16 lg:-mt-24 relative z-20 px-4 top-[50%]">
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-[#1D3557] mb-6">
                {t("StartYourJourneyNow")}
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
      </section>
      <div className="relative">
        <AviationCoverage />
        <div className="w-full max-w-7xl mx-auto mt-10 px-4">
          <div className="w-full max-w-7xl mx-auto mt-10 px-4">
            <Advantages content={planContents?.aviationinsuranceplan} />
          </div>
        </div>
        <FAQs />
      </div>
    </div>
  );
};

export default AviationInsurance;
