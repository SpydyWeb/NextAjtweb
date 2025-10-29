"use client";
import React from "react";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { complaintssteps } from "@/lib/utilities";
import { FaArrowRightLong } from "react-icons/fa6";

type ComplaintProps = {
  complaintStep: number;
  setComplaintStep: React.Dispatch<React.SetStateAction<number>>;
  nextStep: () => void;
};
const Complaints: React.FC<ComplaintProps> = ({  complaintStep, setComplaintStep, nextStep }) => {
 
  const { t } = useTranslation("inquiryform");

  return (
    <>
      {/* Stepper */}
      <div className="flex flex-col items-start md:items-center">
        <div className="flex flex-col gap-6 relative">
          {complaintssteps.map((s, index, arr) => (
            <div key={s.id} className="flex items-center gap-3 relative">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                  complaintStep === s.id
                    ? "bg-sky-600 text-white border-sky-600"
                    : complaintStep > s.id
                    ? "bg-sky-600 text-white border-sky-600"
                    : "border-gray-300 text-gray-400 bg-white"
                }`}
              >
                {complaintStep > s.id ? "✓" : s.id}
              </div>
              <span
                className={`font-medium ${
                  complaintStep === s.id ? "text-[#1D3557]" : "text-gray-500"
                }`}
              >
                {t(s.label)}
              </span>

              {index < arr.length - 1 && (
                <div className="absolute start-4 top-8 w-0.5 h-10 border-l-2 border-dotted border-sky-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Forms */}
      <div className="md:col-span-3">
        <div className="bg-white rounded-lg shadow-md p-8">
          {complaintStep === 1 && (
            <form className="space-y-5">
              <h2 className="text-2xl font-bold text-[#1D3557] mb-6">
                {t("Complaintform")}
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                {t("Complaintformdesc")}
              </p>
              <div>
                <label className="block text-sm font-semibold text-[#1D3557]">
                  {t("FullName")}
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1D3557]">
                  {t("MobileNumber")}
                </label>
                <input
                  type="text"
                  placeholder="Enter your mobile number"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1D3557]">
                  {t("Email")}
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
                />
              </div>
              <button
                type="button"
                onClick={nextStep}
                className="relative flex items-center justify-center bg-[#1D3557] text-white px-20 py-3 rounded-md font-semibold"
              >
                 <span>{t("NextBtn")}</span> 
                  <FaArrowRightLong className="absolute right-5 text-[16px]" />
              </button>
            </form>
          )}

          {complaintStep === 2 && (
            <form className="space-y-5">
              <h2 className="text-2xl font-bold text-[#1D3557] mb-6">
                {t("Complaintform")}
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                {t("Complaintformdesc")}
              </p>
              <div>
                <label className="block text-sm font-semibold text-[#1D3557] mb-2">
                  {t("ComplaintType")}
                </label>
                <div className="relative w-full">
                  <select className="appearance-none mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                    <option>Select</option>
                    <option>{t("NewComplaint")}</option>
                    <option>{t("ComplaintsFollowUp")}</option>
                    <option>{t("Others")}</option>
                  </select>
                  <FaChevronDown className="absolute top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 ltr:right-3 rtl:left-3" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1D3557] mb-1">
                  {t("Message")}
                </label>
                <input
                  type="text"
                  placeholder="Enter your message here..."
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Image
                    src="https://dummyimage.com/100x40/eeeeee/000000&text=JNUSF"
                    alt="captcha"
                    width={100}
                    height={40}
                    className="rounded border"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Enter the text you see above"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
                />
              </div>
              <div className="flex items-center justify-between mt-6">
                {/* <button
                  type="button"
                  onClick={() => setComplaintStep(complaintStep - 1)}
                  className="flex items-center gap-2 text-[#1D3557] font-medium"
                >
                  <span>←</span> {t("Back")}
                </button> */}
                {/* <button
                  type="submit"
                  className="flex items-center gap-2 bg-[#1D3557] text-white px-6 py-2 rounded-md "
                >
                  {t("Send")} →
                </button> */}
                <button
                  type="button"
                  onClick={() => {
                    setComplaintStep(1);
                    // here you can also trigger API call if needed
                  }}
                  className="flex items-center gap-2 bg-[#1D3557] text-white px-20 py-3 rounded-md "
                >
                  {t("Send")} 
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Complaints;
