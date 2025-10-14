"use client";
import React from "react";
import {Check } from "lucide-react";
import { FaSkullCrossbones, } from 'react-icons/fa';
import { RiHeartPulseLine } from "react-icons/ri";
import { PiUsersThreeFill } from "react-icons/pi";
import { TbGrave2 } from "react-icons/tb";
import { useTranslation } from "react-i18next";
export default function ProtectionAndSavingsCards() {
  const { t } = useTranslation("protectionandsavingsplan");
  return (
    <div className="max-w-4xl mx-auto space-y-6 px-4">
      {/* Card 1 - Plan Benefits */}
      <div className="border rounded-lg shadow bg-white">
        <div className="bg-sky-500 text-white p-4 rounded-t-lg">
          <h2 className="text-lg md:text-xl font-semibold">
            {t("PlanBenefitsHeader")}
          </h2>
        </div>
        <div className="p-6 space-y-3 text-gray-700">
          <p className="flex items-start gap-2">
            <Check className="w-5 h-5 text-sky-500 mt-1" />
            {t("BenefitShariaCompliant")}
          </p>
          <p className="flex items-start gap-2">
            <Check className="w-5 h-5 text-sky-500 mt-1" />
            {t("BenefitSumCovered")}
          </p>
          <p className="flex items-start gap-2">
            <Check className="w-5 h-5 text-sky-500 mt-1" />
            {t("BenefitFlexibleContribution")}
          </p>
          <p className="flex items-start gap-2">
            <Check className="w-5 h-5 text-sky-500 mt-1" />
            {t("BenefitFundStrategies")}
          </p>
          <p className="flex items-start gap-2">
            <Check className="w-5 h-5 text-sky-500 mt-1" />
            {t("BenefitDifferentFunds")}
          </p>
          <p className="flex items-start gap-2">
            <Check className="w-5 h-5 text-sky-500 mt-1" />
            {t("BenefitPaymentHoliday")}
          </p>
          <button className="text-sky-500 font-medium underline mt-2">
            {t("ShowMore")}
          </button>
        </div>
      </div>

      {/* Card 2 - Additional Benefits */}
       <div className="bg-white rounded-lg border shadow-md overflow-hidden">
      <h2 className="text-[#184A7C] text-xl font-semibold px-6 pt-6 pb-4">
        {t("AdditionalBenefitsHeader")}
      </h2>
    
      <ul className="text-sm text-gray-700">
        <li className="flex items-center gap-3 p-4 odd:bg-white even:bg-gray-100">
          <TbGrave2 className="text-[#2C9CD4] text-2xl" />
          <span>{t("AdditionalBenefitDeathCoverage")}</span>
        </li>
        <li className="flex items-center gap-3 p-4 odd:bg-white even:bg-gray-100">
          <PiUsersThreeFill className="text-[#2C9CD4] text-lg" />
          <span>{t("AdditionalBenefitFamilyIncome")}</span>
        </li>
        <li className="flex items-center gap-3 p-4 odd:bg-white even:bg-gray-100">
          <FaSkullCrossbones className="text-[#2C9CD4] text-lg" />
          <span>{t("AdditionalBenefitAccidentalDeath")}</span>
        </li>
        <li className="flex items-center gap-3 p-4 odd:bg-white even:bg-gray-100">
          <RiHeartPulseLine className="text-[#2C9CD4] text-lg" />
          <span>{t("AdditionalBenefitCriticalIllness")}</span>
        </li>
      </ul>
    </div>
    </div>
  );
}
