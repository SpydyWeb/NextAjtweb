"use client";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const ReportFraudForm: React.FC = () => {
  const { t } = useTranslation("reportafraud");
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-3xl font-bold text-[#1D3557]">
            {t("fraudh3")}
          </h2>
          <p className="mt-2 text-sm sm:text-base">
            {t("fraudp3")}{" "}
            <span className="font-semibold text-sky-500">{t("fraudp4")}</span>
          </p>
          <p className="mt-1 text-xs sm:text-sm ">
            <span className="mt-1 text-xs sm:text-sm text-sky-500 font-semibold">
              {t("fraudNote1")}
            </span>
            <span className="text-black">{t("fraudNote2")}</span>
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#1D3557]">
                {t("fraudName")}
              </label>
              <input
                type="text"
                placeholder="Enter Your name"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1D3557]">
                {t("fraudDOB")}
              </label>
              <input
                type="text"
                placeholder="DD / MM / YY"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1D3557]">
                {t("fraudMobile")}
              </label>
              <input
                type="text"
                placeholder="Enter Your Mobile number"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1D3557]">
                {t("fraudInformer")}
              </label>
              <div className="relative w-full">
                <select className="appearance-none mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option value="-1">Select Informer Situation</option>
                  <option value="Insured by Al Jazira Takaful Company">
                    {t("fraudInformer1")}
                  </option>
                  <option value="Employee at Al Jazira Takaful Company">
                    {t("fraudInformer2")}
                  </option>
                  <option value="An employee of a medical service provider">
                    {t("fraudInformer3")}
                  </option>
                  <option value="Other">{t("fraudInformer4")}</option>
                </select>
                <FaChevronDown className="absolute top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 ltr:right-3 rtl:left-3" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1D3557]">
                {t("fraudEmail")}
              </label>
              <input
                type="email"
                placeholder="Enter Your E-mail address"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#1D3557]">
                {t("fraudResponsible")}
              </label>
              <div className="relative w-full">
                <select className="appearance-none mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                  <option>Select Responsible for Fraud</option>
                  <option value="An employee at Al Jazira Takaful Company">
                    {t("fraudResponsible1")}
                  </option>
                  <option value="Insured at Al Jazira Takaful Company">
                    {t("fraudResponsible2")}
                  </option>
                  <option value="Medical Service Provider">
                    {t("fraudResponsible3")}
                  </option>
                  <option value="Other">{t("fraudResponsible4")}</option>
                </select>
                <FaChevronDown className="absolute top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 ltr:right-3 rtl:left-3" />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[#1D3557]">
              {t("fraudDescription")}
            </label>
            <textarea
              placeholder="Write here ..."
              rows={4}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-start space-x-2">
            <input
              id="confirm"
              type="checkbox"
              className="h-4 w-4 mt-1 rounded border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor="confirm" className="text-sm text-gray-700">
              {t("fraudTermsAgreement")}
            </label>
          </div>
          <div>
            <img
              src="https://dummyimage.com/120x40/cccccc/000000&text=CAPTCHA"
              alt="captcha"
              className="mb-2"
            />
            <input
              type="text"
              placeholder="Enter the text you see above"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-2.5 rounded-md bg-[#1D3557] text-white font-medium hover:bg-[#16324c] transition"
            >
              {t("fraudSubmit")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReportFraudForm;
