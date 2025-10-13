"use client";
import React,{useState} from "react";
import FAQs from "../Newcomponets/FAQs";
import Advantages from "../Newcomponets/TravelAdvantages";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import ProtectionsavingsImg from "@/public/assets/Images/Retail/Retail-protection and saving.png";
import ProtectionAndSavingsCards from "@/components/Newcomponets/ProtectionAndSavingsCards";
import { planContents,protectionTabs } from "@/lib/utilities";
const ProtectionandSavingsPlan: React.FC = () => {
      const [activeTab, setActiveTab] = useState("Sakhaa");
    
  const { t } = useTranslation("protectionandsavingsplan");
  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-12">
            <h2 className=" relative z-10 text-2xl md:text-3xl font-bold text-center text-[#1D3557] mt-12 mb-12">
                        {t("ProtectionInsuranceHeader")}
                      </h2>
                     <div className="mb-8">
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
    {/* Buttons Grid */}
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 xl:grid-cols-7 gap-3 w-full lg:w-[90rem] ">
      {protectionTabs.map((tab) => (
        <button
          key={t(tab.title)}
          onClick={() => setActiveTab(t(tab.title))}
          className={`w-full text-lg font-bold rounded-md transition-colors text-center ${
            activeTab === tab.title
              ? "bg-[#1D3557] text-white"
              : "bg-gray-200 text-gray-600"
          }`}
        >
          {t(tab.title)}
          <br />
          <span className="font-normal">{t(tab.subtitle)}</span>
        </button>
      ))}
    </div>
  </div>
</div>

          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 lg:mb-[5rem] rtl:mb-[15rem]">
            <Image
              src={ProtectionsavingsImg}
              alt="Corporate Aviation"
            //   fill
               className="absolute inset-0 w-full h-full text-transparent mt-[12rem]"
              priority
            />
            <div className="relative z-10 p-10 md:p-20 max-w-lg text-black text-lg text-justify ml-0 lg:ml-[-11rem] mt-4 ">
                 <h2 className="text-2xl sm:text-2xl md:text-2xl font-bold mb-4 text-sky-600 sm:whitespace-normal md:whitespace-nowrap">
                 {t("ProtectionSubheader1")}
              </h2>
              <p className="mt-4 text-base md:text-lg text-align text-start ">
                {t("ProtectionSubDesc11")}
              </p>
               <p className="mt-4 text-base md:text-lg text-align text-start ">
                {t("ProtectionSubDesc12")}

              </p>
               <p className="mt-4 text-base md:text-lg text-align text-start ">
                 {t("ProtectionSubDesc13")}
              </p>

            </div>
            
          </div>

          <div className="w-full mx-auto mb-10 px-4 lg:px-0">
            <div className="max-w-7xl mx-auto -mt-16 lg:-mt-24 relative z-20 px-4">
              {/* <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8"> */}
              <div className="bg-white rounded-2xl shadow-2xl p-[1rem] sm:p-[1.5rem] md:p-[2rem] w-full sm:w-[105%] md:w-[110%] lg:w-[115%] ms-0 sm:ms-[-1.25rem] md:ms-[-2.5rem] lg:ms-[-5.125rem]">
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
        </div>
      </section>
      <ProtectionAndSavingsCards/>
      <div className="w-full max-w-7xl mx-auto mt-10 px-4">
        <Advantages content={planContents?.protectionandsavingsplan} />
      </div>
      <FAQs />
    </>
  );
};

export default ProtectionandSavingsPlan;
