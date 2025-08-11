'use client'
import React from "react";
import { useTranslation } from "react-i18next";

const MedicalPlanCorporate = () => {
  const { t } = useTranslation();

  return (
    <div className="text-[#10426c]">
      <div className="container mx-auto w-[95%] mt-10">
        <div className="mb-4">
          <h3 className="text-[30px] text-[#00A5DF] uppercase font-normal">
            <a className="hover:underline text-[#10426c]">{t("CPHeader")}</a> | {t("CPMedical")}
          </h3>
        </div>

        <div className="w-[95%] max-w-[1000px] mx-auto mt-5 mb-12 bg-white border border-[#10426c] rounded-[10px] text-[#10426c]">
          <div className="w-[95%] max-w-[950px] mx-auto py-5">
            <p className="mb-4">{t("medicalp1")}</p>

            <h5 className="text-lg font-semibold mb-2">{t("medicalh1")}</h5>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>{t("medicalul1li1")}</li>
              <li>{t("medicalul1li2")}</li>
              <li>{t("medicalul1li3")}</li>
              <li>{t("medicalul1li4")}</li>
              <li>{t("medicalul1li5")}</li>
              <li>{t("medicalul1li6")}</li>
              <li>{t("medicalul1li7")}</li>
              <li>{t("medicalul1li8")}</li>
              <li>{t("medicalul1li9")}</li>
            </ul>

            <h5 className="text-lg font-semibold mb-2">{t("medicalh2")}</h5>
            <ul className="list-disc list-inside mb-6 space-y-1">
              <li>{t("medicalul2li1")}</li>
              <li>{t("medicalul2li2")}</li>
              <li>{t("medicalul2li3")}</li>
              <li>{t("medicalul2li4")}</li>
              <li>{t("medicalul2li5")}</li>
              <li>{t("medicalul2li6")}</li>
            </ul>

            <p>{t("medicalp2")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalPlanCorporate;
