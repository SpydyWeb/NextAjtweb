"use client";
import React from 'react';
import { useTranslation } from 'react-i18next'; 
const Contactus = () => {
  const { t } = useTranslation("contactus");

  return (
    <section className="py-12 px-4 text-center bg-white">
      <h3 className="text-2xl sm:text-5xl font-semibold text-[#1e3a8a] mb-1">
        {t("Contactus")}
      </h3>
      <h3 className="text-2xl sm:text-5xl font-bold text-[#1e3a8a] mb-4">
        {t("Your")} <span className="text-sky-400">{t("InsuranceToday")}</span>
      </h3>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-base sm:text-lg leading-7 text-gray-600 mb-8">
        {t("ContactDescription")}
      </p>

      {/* Email Form */}
      <div className="flex flex-row justify-center max-w-xl mx-auto overflow-hidden rounded-full border border-[#1e3a8a] shadow-sm">
        <input
          type="email"
          placeholder="ENTER YOUR EMAIL"
          className="flex-1 px-4 py-3 text-sm text-gray-800 outline-none border-none"
        />
        <button className="bg-[#1e3a8a] rounded-[20px] text-white sm:px-6 px-3 py-3 text-sm font-semibold w-full sm:w-auto ">
          {t("ContactBtn")}
        </button>
      </div>
    </section>
  );
};

export default Contactus;
