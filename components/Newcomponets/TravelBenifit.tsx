import React, { useState } from "react";
import { FaPlane } from "react-icons/fa";
import { Benefit } from "@/lib/utilities";
import { PiAirplaneTiltFill } from "react-icons/pi";
import { useTranslation } from "react-i18next";
type PlanKey = "basic" | "silver" | "gold" | "platinum" | "schengen";
const plans: { key: PlanKey; label: string; colorClass: string }[] = [
  {
    key: "basic",
    label: "Basic",
    colorClass: "bg-[#1DA1F2] border-[#1DA1F2] text-white",
  },
  {
    key: "silver",
    label: "Silver",
    colorClass: "bg-[#E6E9EC] border-[#E6E9EC] text-gray-800",
  },
  {
    key: "gold",
    label: "Gold",
    colorClass: "bg-[#E7C94B] border-[#E7C94B] text-gray-800",
  },
  {
    key: "platinum",
    label: "Platinum",
    colorClass: "bg-[#9E9E9E] border-[#9E9E9E] text-white",
  },
  {
    key: "schengen",
    label: "Schengen",
    colorClass: "bg-[#7AA0D0] border-[#7AA0D0] text-white",
  },
];

const BenefitsTable: React.FC = () => {
  const { t } = useTranslation();
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>("basic");

  return (
    <div className="overflow-x-auto  ">
      <table className="m-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">
              <div className="text-sky-500 text-2xl text-center">{t("Benefits")}</div>
            </th>
            <th className="px-4 py-2 text-left border-l border-sky-400">
              <div className="flex gap-2">
                {plans.map((plan) => (
                  <button
                    key={plan.key}
                    onClick={() => setSelectedPlan(plan.key)}
                    className={`flex items-center gap-3 px-3 py-2 md:px-4 md:py-2 rounded-lg border transition-shadow active:scale-95 shadow-md ${plan.colorClass} w-full sm:w-auto`}
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
                      {plan.label}
                    </span>
                  </button>
                ))}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {Benefit.map((benefit) => (
            <tr key={benefit.name} className="align-middle">
              <td className="text-center m-2">
                <div className="border-b border-gray-500 inline-block p-3">
                  {t(benefit.name)}
                </div>
              </td>
              <td className="text-center">
                <div className="border-b border-dashed border-sky-500 p-3">
                  {t(benefit.values)}
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
