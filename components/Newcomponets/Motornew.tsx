import React from "react";
import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa";
import { FaGlobeAsia } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { motorcomprehensive, motorliability } from "@/lib/utilities";

const InsurancePlans: React.FC = () => {
  const { t } = useTranslation("motorinsuranceplan");
  return (
    <div className="px-6 sm:px-8 lg:px-[25rem] py-10 space-y-10">
      {/* Plans Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Comprehensive Insurance */}
        <div className="rounded-lg border shadow-md overflow-hidden">
          <div className="bg-[#184A7C] text-white px-6 py-4 text-lg font-semibold">
            {t("MotorComprehensiveInsurance")}
          </div>
          <div className="p-6 text-gray-700 text-sm leading-relaxed">
            <p className="mb-4">{t("Policycoversdesc")}</p>
            <hr className="border-t border-black mx-auto mb-4" />

            <ul className="space-y-3">
              {motorcomprehensive.map((item) => (
                <li key={item.name} className="flex items-center gap-3">
                  <FaCheck className="text-[#2C9CD4] text-sm" />
                  <span>{t(item.name)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Third Party Liability Insurance */}
        <div className="rounded-lg border shadow-md overflow-hidden">
          <div className="bg-[#2C9CD4] text-white px-6 py-4 text-lg font-semibold">
            {t("MotorThirdPartyLiabilityInsurance")}
          </div>
          <div className="p-6 text-gray-700 text-sm leading-relaxed">
            <p className="mb-4">{t("Policycoversdesc1")}</p>
            <hr className="border-t border-black mx-auto mb-4" />
            <ul className="space-y-3">
              {motorliability.map((item) => (
                <li key={item.name} className="flex items-center gap-3">
                  <FaCheck className="text-[#2C9CD4] text-sm" />
                  <span>{t(item.name)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Coverages */}
      <div className="bg-white rounded-lg border shadow-md overflow-hidden">
  <h3 className="text-[#184A7C] font-semibold px-6 pt-6 pb-4">
    {t("AdditionalCoverages")}
  </h3>

  <ul className="text-sm text-gray-700">
    <li className="flex items-center gap-3 p-4 odd:bg-white even:bg-gray-100">
      <FaGlobeAsia className="text-[#2C9CD4] text-lg" />
      <span>{t("GeographicalExtension")}</span>
    </li>
    <li className="flex items-center gap-3 p-4 odd:bg-white even:bg-gray-100">
      <FaUserShield className="text-[#2C9CD4] text-lg" />
      <span>{t("PersonalAccident")}</span>
    </li>
    <li className="flex items-center gap-3 p-4 odd:bg-white even:bg-gray-100">
      <FaCar className="text-[#2C9CD4] text-lg" />
      <span>{t("ReplacementCar")}</span>
    </li>
  </ul>
</div>

    </div>
  );
};

export default InsurancePlans;
