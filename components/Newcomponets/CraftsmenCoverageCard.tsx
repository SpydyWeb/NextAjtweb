"use client";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
export default function CraftsmenCoverageCard() {
  const { t } = useTranslation("craftsmenInsuranceplan")
  return (
    <div className="px-4">
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow border">
      {/* Header */}
      <div className="bg-[#17406D] text-white text-center py-4 px-6 rounded-t-lg">
        <h2 className="text-lg md:text-xl font-semibold">
          {t("coveragesinclude")}
        </h2>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-start gap-2">
          <Check className="w-5 h-5 text-sky-500 flex-shrink-0 mt-1" strokeWidth={3} />
          <p className="text-gray-700">
            {t("professionalNegligenceCoverage")}
          </p>
        </div>

        <div className="flex items-start gap-2">
         <Check className="w-5 h-5 text-sky-500 flex-shrink-0 mt-1" strokeWidth={3} />
          <p className="text-gray-700">
            {t("policyDuration")}
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
