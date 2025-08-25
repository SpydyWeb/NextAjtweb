import React from "react";
import { Hospitalizationbenefits } from "@/lib/utilities";
import { useTranslation } from "react-i18next";

const HospitalizationTable: React.FC = () => {
  const { t } = useTranslation("visitvisaplan");

  return (
   <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:pl-[7rem] lg:pr-[10rem] py-6">
      <h2 className="text-center text-[#184A7C] font-bold text-lg sm:text-xl md:text-2xl mb-6 sm:mb-10">
        {t("HospitalizationExpenses")}
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-0 text-sm sm:text-base">
          <thead>
            <tr>
              <th className="px-4 sm:px-0 py-2 text-left text-sky-500 text-2xl lg:px-4 py-2 ">
                {t("Benefits")}
              </th>
                <th className="px-4 py-2 text-left border-sky-400 rtl:border-r ltr:border-l"></th>
            </tr>
          </thead>
 <tbody>
  {Hospitalizationbenefits.map((benefit) => (
    <tr key={benefit.name} className="align-middle">
      <td className="text-left align-middle px-2 sm:px-4 py-2 w-3/5">
        <div className="border-b border-gray-300 pb-2 sm:pb-3 leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base">
          {t(benefit.name)}
        </div>
      </td>
      <td className="text-center align-middle px-2 sm:px-6 py-2 w-2/5 border-sky-400 rtl:border-r ltr:border-l">
        <div className="border-b border-dashed border-sky-500 pb-2 sm:pb-3 whitespace-normal sm:whitespace-nowrap lg:whitespace-nowrap text-[#184A7C] text-xs sm:text-sm md:text-base">
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
