"use client";
import React from "react";
import travelpageImg from "@/public/assets/Images/Retail/Retail-Travel.png";
import FAQs from "../Newcomponets/FAQs";
import Advantages from "../Newcomponets/TravelAdvantages";
import BenefitsTable from "../Newcomponets/TravelBenifit";
import { planContents } from "@/lib/utilities";
import { useTranslation } from "react-i18next";

const TravelInsurance: React.FC = () => {
  const { t } = useTranslation("travelplan");
  return (
    <>
      <section className="bg-white">
        <div>

        </div>
        <div className="">
          {/* relative w-full h-80 sm:h-[28rem] rounded-xl overflow-hidden shadow-lg flex items-center */}
          <div
            className="h-screen backgroun-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${travelpageImg.src})`,
              backgroundPosition: "center right"
            }}
          >
            <div className="relative z-10 left-2 md:left-[10%] top-[15%] max-w-sm text-black text-lg space-y-7">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#10426c]">
                {t("TravelSubheader1")}
              </h2>
              <p className="mb-4 leading-relaxed">{t("TravelSubDesc11")}</p>
              <p className="leading-relaxed">{t("TravelSubDesc1")}</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 mt-10">
            <h3 className="text-lg md:text-xl font-bold text-[#1D3557] mb-6">
              {t("Secureyourtripnow")}
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
      <BenefitsTable />
      <div className="w-full max-w-7xl mx-auto mt-10 px-4">
        <div className="w-full max-w-7xl mx-auto mt-10 px-4">
          <Advantages content={planContents?.travelplan} />
        </div>
      </div>
      <FAQs />
    </>
  );
};

export default TravelInsurance;
