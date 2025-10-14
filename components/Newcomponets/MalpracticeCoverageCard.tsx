"use client";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
export default function MalpracticeCoverageCard() {
   const { t } =useTranslation("medicalmalpracticeinsuranceplan")
  return (
    <div className="px-4">
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow border">
      {/* Header */}
      <div className="bg-[#17406D] text-white text-center py-4 px-6 rounded-lg">
        <h2 className="text-lg md:text-xl font-semibold">
          {t("mainCoverageTitle")} <br /> {t("malpracticePolicyTitle")}
        </h2>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-start gap-2">
          <Check className="w-5 h-5 text-sky-500 flex-shrink-0 mt-1" strokeWidth={3} />
          <p className="text-gray-700">
            {t("compensationCoverage")}
          </p>
        </div>

        <div className="flex items-start gap-2">
          <Check className="w-5 h-5 text-sky-500 flex-shrink-0 mt-1" strokeWidth={3} />
          <p className="text-gray-700">
            {t("legalExpensesCoverage")}
          </p>
        </div>

        <div className="flex items-start gap-2">
          <Check className="w-5 h-5 text-sky-500 flex-shrink-0 mt-1" strokeWidth={3} />
          <p className="text-gray-700">
           {t("insuranceDuration")}
          </p>
        </div>

        <div className="flex items-start gap-2">
          <Check className="w-5 h-5 text-sky-500 flex-shrink-0 mt-1" strokeWidth={3} />
          <p className="text-gray-700">
            {t("compensationLimitsText")}{" "}
            <span className="text-sky-600 font-semibold">{t("compensationLimitsRange")}</span>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
