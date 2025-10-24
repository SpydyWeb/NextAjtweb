"use client";
import React from "react";
import ReportFraudForm from "@/components/Newcomponets/ReportFraudForm";
import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa";
const ReportFraud: React.FC = () => {
  const { t } = useTranslation("reportafraud");
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1D3557] uppercase">
            {t("fraud")}
          </h2>

          <p className="mt-4 text-sm sm:text-base  max-w-3xl mx-auto leading-relaxed">
            {t("fraudp1")}
          </p>

          <p className="mt-4 text-sm sm:text-base  max-w-3xl mx-auto leading-relaxed">
            {t("fraud2")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-sky-400 px-4 py-3">
              <h3 className="text-white text-sm sm:text-base font-semibold text-center">
                {t("fraudh1")}
              </h3>
            </div>

            <div className="p-6 bg-white">
              <ul className="space-y-4 text-gray-700 text-sm sm:text-base leading-7">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-500">
                    <FaCheck aria-hidden />
                  </span>
                  <span className="text-[#1D3557]">{t("fraudul1li1")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-500">
                    <FaCheck aria-hidden />
                  </span>
                  <span className="text-[#1D3557]">{t("fraudul1li2")}</span>
                </li>

                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-500">
                    <FaCheck aria-hidden />
                  </span>
                  <span className="text-[#1D3557]">{t("fraudul1li3")}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-sky-400 px-4 py-3">
              <h3 className="text-white text-sm sm:text-base font-semibold text-center">
                {t("fraudh2")}
              </h3>
            </div>

            <div className="p-6 bg-white">
              <ul className="space-y-4 text-gray-700 text-sm sm:text-base leading-7">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sky-500">
                    <FaCheck aria-hidden />
                  </span>
                  <span className="text-[#1D3557]">{t("fraudp2")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ReportFraudForm />
    </section>
  );
};

export default ReportFraud;
