import React from "react";
import { medicaldomestichelpertable } from "@/lib/utilities";
import { useTranslation } from "react-i18next";

const Medicaldomestictable: React.FC = () => {
  const { t } = useTranslation("medicaldomestichelperplan");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6">
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-0 text-sm sm:text-base">
          <tbody>
            {medicaldomestichelpertable.map((benefit) => (
              <tr key={benefit.name} className="align-middle">
                <td className="text-left align-middle px-2 sm:px-4 py-2 w-1/3">
                  <div className="border-b border-gray-300 pb-2 sm:pb-3 leading-snug break-words font-semibold text-[#184A7C] 
                  text-xs sm:text-sm md:text-base w-full">
                    {t(benefit.name)}
                  </div>
                </td>
                <td className="text-center align-middle px-2 sm:px-6 py-2 w-2/3 rtl:border-r ltr:border-l border-sky-400">
                  <div className="border-b border-dashed border-sky-500 pb-2 sm:pb-3 leading-snug break-words font-semibold text-[#184A7C] 
                  text-xs sm:text-sm md:text-base w-full">
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

export default Medicaldomestictable;
