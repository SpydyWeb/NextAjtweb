import React from "react";
import { FaFireAlt } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { GiWaterDrop, GiHouseKeys } from "react-icons/gi";
import { MdOutlineWaterDamage } from "react-icons/md";
import { BsSnow } from "react-icons/bs";
import { RiBuilding2Fill } from "react-icons/ri";
import { FaHandHolding } from "react-icons/fa";
import { GiHouse } from "react-icons/gi";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { useTranslation } from "react-i18next";

const HouseHolder: React.FC = () => {
  const { t } = useTranslation("householderplans");
  return (
    <div className="px-6 sm:px-8 lg:px-[20rem] py-10 space-y-10">
      {/* Coverage Section */}
      <div className="rounded-lg border  shadow-md overflow-hidden">
        <div className="bg-[#184A7C] text-white px-6 py-4 text-lg font-semibold">
          {t("Coverage")}
        </div>
        <div className="p-6 text-gray-700 text-sm leading-relaxed">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaFireAlt className="text-[#2C9CD4] text-lg mt-1" />
              <span>{t("Damagecases")}</span>
            </li>
            <li className="flex items-start gap-3">
              <RiBuilding2Fill className="text-[#2C9CD4] text-lg mt-1" />
              <span>{t("Theft")}</span>
            </li>
            <li className="flex items-start gap-3">
              <MdOutlineWaterDamage className="text-[#2C9CD4] text-lg mt-1" />
              <span>{t("Bursting")}</span>
            </li>
            <li className="flex items-start gap-3">
              <BsSnow className="text-[#2C9CD4] text-lg mt-1" />
              <span>{t("Impactcollision")}</span>
            </li>
            <li className="flex items-start gap-3">
              <FaShieldAlt className="text-[#2C9CD4] text-lg mt-1" />
              <span>{t("MaliciousAct")}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Additional Coverages */}
     <div className="bg-white rounded-xl border shadow-md overflow-hidden">
  <h3 className="text-[#184A7C] font-semibold px-6 pt-6 pb-4">
    {t("AdditionalCoverages")}
  </h3>

  <ul className="text-sm text-gray-700">
    <li className="flex items-center gap-3 p-4 odd:bg-white even:bg-[#F5F8FB]">
      <RiBuilding2Fill className="text-[#2C9CD4] text-lg" />
      <span>{t("BreakageoffixedGlass")}</span>
    </li>
    <li className="flex items-center gap-3 p-4 odd:bg-white even:bg-gray-200">
      <FaHandHolding className="text-[#2C9CD4] text-lg" />
      <span>{t("PublicLiability")}</span>
    </li>
    <li className="flex items-center gap-3 p-4 odd:bg-white even:bg-[#F5F8FB]">
      <GiHouse className="text-[#2C9CD4] text-lg" />
      <span>{t("LossofRent")}</span>
    </li>
    <li className="flex items-center gap-3 p-4 odd:bg-white even:bg-gray-200">
      <MdOutlinePersonalInjury className="text-[#2C9CD4] text-lg" />
      <span>{t("RemovalofPersonalEffects")}</span>
    </li>
    <li className="flex items-center gap-3 p-4 odd:bg-white even:bg-[#F5F8FB]">
      <GiHouseKeys className="text-[#2C9CD4] text-lg" />
      <span>{t("Theftofkeys")}</span>
    </li>
  </ul>
</div>

    </div>
  );
};

export default HouseHolder;
