"use client";
import React, { useState } from "react";
import PropertyImg from "@/public/assets/Images/ImagesIcons/PropertyImg.jpg";
import FAQs from "../Newcomponets/FAQs";
import Advantages from "../Newcomponets/TravelAdvantages";
import MainCoveragesCard from "./PropertyMainCoverage";
import { planContents } from "@/lib/utilities";
import { useTranslation } from "react-i18next";

const PropertyInsurance: React.FC = () => {
  const { t } = useTranslation("propertyinsuranceplan");
  const [activeTab, setActiveTab] = useState("fire");

  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#1D3557] mb-6">
            {t("Propertyheader")}
          </h2>
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab("fire")}
              className={`px-6 py-3 w-64 font-medium rounded-md transition-colors ${
                activeTab === "fire"
                  ? "bg-[#1D3557] text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {t("PropertyBtn")}
            </button>

            <button
              onClick={() => setActiveTab("marine")}
              className={`px-6 py-3 w-64 font-medium rounded-md transition-colors ${
                activeTab === "marine"
                  ? "bg-[#1D3557] text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {t("MarineHullBtn")}
            </button>
          </div>
          <div
            className="relative w-full h-80 sm:h-[28rem] rounded-xl overflow-hidden shadow-lg flex items-center"
            style={{
              backgroundImage: `url(${PropertyImg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
            <div className="relative z-10 p-6 md:p-10 max-w-xl text-white">
              {activeTab === "fire" ? (
                <>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-sky-300">
                   {t("propertySubheader1")}
                  </h3>
                  <p className="text-white">
                   {t("propertySubDesc1")}
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-sky-300">
                    Marine Hull (small craft)
                  </h3>
                  <p className="text-white">
                    Covers accidental loss or damage to small crafts including
                    fire, sinking, collision, and other risks as per the policy
                    terms.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* --- Form Section --- */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mt-10">
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
          className="border border-sky-300 rounded-md px-4 py-2 placeholder-sky-400 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">
          {t("Email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          className="border border-sky-300 rounded-md px-4 py-2 placeholder-sky-400 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone" className="mb-1 text-sm font-medium text-gray-700">
          {t("PhoneNumber")}
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Enter your Phone Number"
          className="border border-sky-300 rounded-md px-4 py-2 placeholder-sky-400 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="dob" className="mb-1 text-sm font-medium text-gray-700">
          {t("BirthDate")}
        </label>
        <input
          id="dob"
          name="dob"
          type="text"
          placeholder="DD / MM / YYYY"
          className="border border-sky-300 rounded-md px-4 py-2 placeholder-sky-400 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </form>

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-[#1DA1F2] hover:bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md text-base sm:text-lg font-medium transition-colors"
              >
                {t("InsureNow")}
              </button>
            </div>
          </div>
        </div>
      </section>
      <MainCoveragesCard/>
      <div className="w-full max-w-7xl mx-auto mt-10 px-4">
        <Advantages content={planContents?.propertyinsuranceplan} />
      </div>
      <FAQs />
    </>
  );
};

export default PropertyInsurance;
