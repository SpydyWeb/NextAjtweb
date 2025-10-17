"use client";
import React from "react";
import FAQs from "../Newcomponets/FAQs";
import Advantages from "../Newcomponets/TravelAdvantages";
import HealthCoverage from "../Newcomponets/HealthCoverage";
import { planContents } from "@/lib/utilities";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import MedicaldomesticImg from "@/public/assets/Images/Retail/Retail-Medical Domestic Helper.png";
import Medicaldomestictable from "@/components/Newcomponets/Medicaldomestictable";
import CopaymentCard from "@/components/Newcomponets/CopaymentCard";
const MedicalDomesticHelperPlan: React.FC = () => {
  const { t } = useTranslation("medicaldomestichelperplan");
  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10 lg:mb-[16rem] rtl:mb-[17rem]">
            <Image
              src={MedicaldomesticImg}
              alt="Corporate Aviation"
            //   fill
              className="absolute inset-0 w-full h-full text-transparent mt-[4.7rem]"
              priority
            />

            <div className="relative z-10 p-10 md:p-20 max-w-lg text-black text-lg text-justify ml-0 lg:ml-[-11rem] mt-4 ">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#10426c] ">
                {t("MedicaldomesticSubheader1")}<br/>
                {t("MedicaldomesticSubheader2")}

              </h2>
              <p className="mt-4 text-base md:text-lg  text-wrap leading-relaxed">
                {t("MedicaldomesticSubDesc11")}
              </p>
            </div>
          </div>

          <div className="w-full mx-auto mb-10 px-4 lg:px-0 ">
            <div className="max-w-7xl mx-auto -mt-16 lg:-mt-24 relative z-20 px-4">
              {/* <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8"> */}
              <div className="bg-white rounded-2xl shadow-2xl p-[1rem] sm:p-[1.5rem] md:p-[2rem] w-full sm:w-[105%] md:w-[110%] lg:w-[115%] ms-0 sm:ms-[-1.25rem] md:ms-[-2.5rem] lg:ms-[-5.125rem]">
                <h3 className="text-lg md:text-xl font-bold text-[#1D3557] mb-6">
                  {t("Secureyourtripnow")}
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
      
      <Medicaldomestictable />
      <CopaymentCard />
      <div className="w-full max-w-7xl mx-auto mt-10 px-4">
        <Advantages content={planContents?.medicaldomestichelperplan} />
      </div>
      <FAQs />
    </>
  );
};

export default MedicalDomesticHelperPlan;
