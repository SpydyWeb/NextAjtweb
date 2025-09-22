'use client';
import React from "react";
import { Check } from "lucide-react"; // for check icons
import { useTranslation } from "react-i18next";
import {craftsmen,craftsmen2,craftsmen3} from "@/lib/utilities"
const CraftsmenInsuranceCards = () => {
  const { t } = useTranslation("craftsmenInsuranceplan")
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#10426c] mb-10">
          {t("qualifiedCraftSpecialties")} <br className="hidden sm:block" />
         {t("craftsmenInsuranceSubtitle")}
        </h2>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Professions */}
          <div className="bg-white border rounded-xl shadow-sm">
            <div className="bg-sky-600 text-white font-semibold text-lg py-3 rounded-t-xl">
              {t("professions")}
            </div>
            <ul className="p-6 space-y-3 text-left">
              {craftsmen.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-sky-500 flex-shrink-0" />
                  <span className="text-gray-700">{t(item)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialists */}
          <div className="bg-white border rounded-xl shadow-sm">
            <div className="bg-sky-600 text-white font-semibold text-lg py-3 rounded-t-xl">
              {t("specialists")}
            </div>
            <ul className="p-6 space-y-3 text-left">
              {craftsmen2.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-sky-500 flex-shrink-0" />
                  <span className="text-gray-700">{t(item)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Professions */}
          <div className="bg-white border rounded-xl shadow-sm">
            <div className="bg-sky-600 text-white font-semibold text-lg py-3 rounded-t-xl">
              
              {t("technicalProfessions")}
            </div>
            <ul className="p-6 space-y-3 text-left">
              {craftsmen3.map(
                (item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-sky-500 flex-shrink-0" />
                    <span className="text-gray-700">{t(item)}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmenInsuranceCards;
