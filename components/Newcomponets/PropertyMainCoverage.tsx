import React from "react";
import { FaCheck } from "react-icons/fa";
import {coverages} from '@/lib/utilities';
import { useTranslation } from "react-i18next";

const MainCoveragesCard: React.FC = () => {
  const { t } = useTranslation("propertyinsuranceplan");
  return (
    <div className="px-4 lg:px-0">
    <div className="max-w-md mx-auto border rounded-lg shadow-sm overflow-hidden ">
      {/* Header */}
      <div className="bg-[#2BA6DF] text-white text-center py-2 font-medium text-lg">
        {t("MainCoverages")}
      </div>

      {/* List */}
      <ul className="p-6 space-y-3 text-gray-700 text-sm">
        {coverages.map((item) => (
          <li key={item.name} className="flex items-center gap-2">
            <FaCheck className="text-[#2BA6DF]" />
            <span>{t(item.name)}</span>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default MainCoveragesCard;
