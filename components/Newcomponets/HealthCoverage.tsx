import React from "react";
import { GiBabyBottle } from "react-icons/gi";
import { FaTooth, FaGlasses } from "react-icons/fa";
import { MdOutlineHealthAndSafety, MdPsychology } from "react-icons/md";
import { FaEarListen } from "react-icons/fa6";
import { GiHealthNormal } from "react-icons/gi";
import { GiSyringe } from "react-icons/gi";
import { FaSkull } from "react-icons/fa";

import { useTranslation } from "react-i18next";

const HealthCoverage: React.FC = () => {
  const { t } = useTranslation("medicalinsuranceplan"); // namespace

  return (
    <div className="px-6 sm:px-8 lg:px-[20rem] py-10">
      <div className="rounded-lg border shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-[#184A7C] text-white px-6 py-3 text-sm sm:text-base font-semibold text-center">
          {t("CoverageIncluding")}
        </div>

        {/* List */}
        <div className="p-6 text-gray-700 text-sm leading-relaxed">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <GiBabyBottle className="text-[#2C9CD4] text-lg mt-1" />
              <span>{t("PregnancyChildbirth")}</span>
            </li>
            <li className="flex items-start gap-3">
              <FaTooth className="text-[#2C9CD4] text-lg mt-1" />
              <span>{t("Dental")}</span>
            </li>
            <li className="flex items-start gap-3">
              <FaGlasses className="text-[#2C9CD4] text-lg mt-1" />
              <span>{t("MedicalEyeglasses")}</span>
            </li>
            <li className="flex items-start gap-3">
              <MdOutlineHealthAndSafety className="text-[#2C9CD4] text-lg mt-1" />
              <span>{t("ChronicPreExisting")}</span>
            </li>
            <li className="flex items-start gap-3">
              <FaEarListen className="text-[#2C9CD4] text-lg mt-1" />
              <span>{t("HearingAid")}</span>
            </li>
            <li className="flex items-start gap-3">
              <GiHealthNormal className="text-[#2C9CD4] text-lg mt-1" />
              <span>{t("Physiotherapy")}</span>
            </li>
            <li className="flex items-start gap-3">
              <GiSyringe className="text-[#2C9CD4] text-lg mt-1" />
              <span>{t("Vaccinations")}</span>
            </li>
            <li className="flex items-start gap-3">
              <MdPsychology className="text-[#2C9CD4] text-lg mt-1" />
              <span>{t("PsychologicalDisorders")}</span>
            </li>
            <li className="flex items-start gap-3">
              <FaSkull className="text-[#2C9CD4] text-lg mt-1" />
              <span>{t("RepatriationOfCorpse")}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HealthCoverage;
