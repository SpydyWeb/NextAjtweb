import React from "react";
import { FaCheck } from "react-icons/fa";
import { marineCoverages, marineCoveragespolicies } from "@/lib/utilities";
import { useTranslation } from "react-i18next";

const MarineCoveragesCard: React.FC = () => {
  const { t } = useTranslation("marineinsuranceplan");

  return (
    <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch px-4 lg:px-0">
      {/* Card 1 */}
      <div className="border rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
        <div className="bg-[#1D3557] text-white text-center py-3 font-medium text-lg">
          {t("MarineCoverages")}
        </div>
        <ul className="p-6 space-y-3 text-gray-700 text-sm">
          {marineCoverages.map((item) => (
            <li key={`main-${item.name}`} className="flex items-center gap-2">
              <FaCheck className="text-[#2BA6DF]" />
              <span>{t(item.name)}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card 2 */}
       <div className="border rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
        <div className="bg-[#1D3557] text-white text-center py-3 font-medium text-lg">
          {t("Marinepolicy")}
          <br/>
          {t("MarinePolicies")}
        </div>
        <ul className="p-6 space-y-3 text-gray-700 text-sm">
          {marineCoverages.map((item) => (
            <li key={`main-${item.name}`} className="flex items-center gap-2">
              <FaCheck className="text-[#2BA6DF]" />
              <span>{t(item.name)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MarineCoveragesCard;
