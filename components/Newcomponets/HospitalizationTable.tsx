import React from "react";
import { Hospitalizationbenefits } from "@/lib/utilities";
import { useTranslation } from "react-i18next";

const HospitalizationTable: React.FC = () => {
  const { t } = useTranslation("visitvisaplan");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-6">
      <h2 className="text-center text-[#184A7C] font-bold text-lg sm:text-xl md:text-2xl mb-6 sm:mb-10">
        {t("HospitalizationExpenses")}
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-0 text-sm sm:text-base">
          <thead>
            <tr>
              <th className="text-left text-sky-600 text-base sm:text-lg md:text-xl pb-3 sm:pb-4 pr-2 sm:pr-4">
                {t("Benefits")}
              </th>
              <th className="text-left text-sky-600 text-base sm:text-lg md:text-xl pb-3 sm:pb-4 border-l-2 border-sky-400 pl-3 sm:pl-6"></th>
            </tr>
          </thead>

          <tbody>
            {Hospitalizationbenefits.map((benefit) => (
              <tr key={benefit.name}>
                <td className="align-top pr-3 sm:pr-6 w-[60%]">
                  <div className="border-b border-gray-400 py-2 sm:py-3 text-[#184A7C] font-medium leading-snug text-xs sm:text-sm md:text-base break-words">
                    {t(benefit.name)}
                  </div>
                </td>
                <td className="align-top pl-3 sm:pl-6 border-l-2 border-sky-400 w-[40%]">
                  <div className="border-b border-dashed border-sky-500 py-2 sm:py-3 text-[#184A7C] text-xs sm:text-sm md:text-base whitespace-normal sm:whitespace-nowrap">
                    {t(benefit.value)}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HospitalizationTable;
