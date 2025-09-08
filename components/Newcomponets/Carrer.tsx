"use client";
import React, { useState } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";
const CareerForm: React.FC = () => {
  const [gender, setGender] = useState("male");
  const { t } = useTranslation("careerform");

  return (
    <section className="w-full bg-gray-50 py-12 px-4">
      <div className="text-center mb-8 max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1D3557]">
          {t("CareerHeader")}
        </h2>
        <p className=" mt-4 text-sm sm:text-base">{t("Careerdesc")}</p>
      </div>
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 sm:p-10">
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-[#1D3557]">
              {t("FullName")}
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#1D3557]">
              {t("Dateofbirth")}
            </label>
            <input
              type="date"
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#1D3557]">
              {t("Gender")}
            </label>
            <div className="flex gap-6 mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={() => setGender("male")}
                  className="h-4 w-4 text-blue-600 border-gray-300"
                />
                {t("Male")}
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={() => setGender("female")}
                  className="h-4 w-4 text-blue-600 border-gray-300"
                />
                {t("Female")}
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#1D3557]">
              {t("City")}
            </label>
            <div className="relative w-full">
              <select className="appearance-none mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option value="">Select</option>
                <option value="riyadh">Riyadh</option>
                <option value="jeddah">Jeddah</option>
                <option value="dammam">Dammam</option>
              </select>
              <FaChevronDown className="absolute top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 ltr:right-3 rtl:left-3" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#1D3557]">
              {t("Levelofeducation")}
            </label>
            <div className="relative w-full">
              <select className="appearance-none mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option value="">Select</option>
                <option value="bachelor">Bachelor</option>
                <option value="master">Master</option>
                <option value="phd">PhD</option>
              </select>
              <FaChevronDown className="absolute top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 ltr:right-3 rtl:left-3" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#1D3557]">
              {t("Mobilenumber")}
            </label>
            <input
              type="tel"
              placeholder="Enter your mobile number"
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#1D3557]">
              {t("Email")}
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            {/* <label className="block text-sm font-medium text-[#1D3557]">
              Upload CV
            </label> */}
            <button
              type="button"
              className="mt-2 flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 bg-gray-50 font-semibold  text-[#1D3557] text-sm"
            >
              <AiOutlineUpload /> {t("UploadCV")}
            </button>
            <input type="file" className="hidden" />
          </div>
        </form>
      </div>
      <div className="text-center mt-8">
        <button
          type="submit"
          className="px-10 py-3 bg-[#1D3557] text-white rounded-md font-medium transition-colors"
        >
          {t("Send")}
        </button>
      </div>
    </section>
  );
};

export default CareerForm;
