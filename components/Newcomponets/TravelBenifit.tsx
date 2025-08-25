import React, { useState } from "react";
import { plans, benefits } from "@/lib/utilities";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { useTranslation } from "react-i18next";
type PlanKey = "basic" | "silver" | "gold" | "platinum" | "schengen";
const BenefitsTable: React.FC = () => {
  const { t } = useTranslation("travelplan");
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>("basic");

  return (
    <div className="overflow-x-auto  ">
      <table className="m-auto">
        <thead>
          <tr>
            <th className="px-4 sm:px-0 py-2 text-left ">
              <div className="text-sky-500 text-2xl  align-middle lg:px-4 py-2 ">
                {t("Benefits")}
              </div>
            </th>
                 <th className="px-4 py-2 text-left border-sky-400 rtl:border-r ltr:border-l">
              <div className="block lg:flex gap-2">
                {plans.map((plan) => (
                  <button
                    key={plan.key}
                    onClick={() => setSelectedPlan(plan.key as PlanKey)}
                    style={{
                      backgroundColor: plan.bgColor,
                      borderColor: plan.borderColor,
                      color: plan.textColor,
                    }}
                    className="flex items-center gap-3 px-3 py-2 md:px-4 md:py-2 rounded-lg border transition-shadow active:scale-95 shadow-md w-full sm:w-auto"
                  >
                    <div
                      className={`w-6 h-6 md:w-7 md:h-7 rounded-sm flex items-center justify-center ${
                        plan.key === "silver" || plan.key === "gold"
                          ? "bg-black/5 border border-black/10 text-gray-800"
                          : "bg-white/15 border border-white/20 text-white"
                      }`}
                    >
                      <PiAirplaneTiltFill className="w-4 h-4 md:w-[1rem] md:h-[1rem]" />
                    </div>
                    <span className="text-sm md:text-base font-medium">
                      {t(plan.label)}
                    </span>
                  </button>
                ))}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {benefits.map((benefit) => (
            <tr key={benefit.name} className="align-middle">
              <td className="text-left align-middle px-4 py-2 w-[20rem]">
                <div className="border-b border-gray-300 pb-2 leading-snug break-words font-semibold text-[#184A7C]">
                  {t(benefit.name)}
                </div>
              </td>
              <td className="text-center align-middle px-6 py-2 w-[12rem] border-sky-400 rtl:border-r ltr:border-l">
                <div className="border-b border-dashed border-sky-500 pb-2 whitespace-nowrap text-[#184A7C]">
                  {t(benefit.values[selectedPlan])}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BenefitsTable;
