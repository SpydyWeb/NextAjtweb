"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const CopaymentCard = () => {
  const { t } = useTranslation("medicaldomestichelperplan");

  return (
    <div className="px-5">
    <div className="border rounded-lg overflow-hidden shadow-sm max-w-7xl mx-auto my-10">
     <div className="bg-sky-500 text-white px-6 py-3 text-lg font-semibold text-center ltr:text-left rtl:text-right">
  {t("Copayment")}
</div>
      <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x rtl:divide-x-reverse">
        <div className="flex-1 p-6 sm:p-10 space-y-4 text-sky-900 text-base sm:text-lg">
          <p>{t("Consultation")}</p>
          <p>{t("Laboratoryservices")}</p>
          <p>{t("Radiologyandotherservices")}</p>
        </div>
        <div className="flex-1 p-6 sm:p-10 space-y-4 text-sky-900 text-base sm:text-lg">
          <p>{t("NoCopayment")}</p>
          <p>{t("UpTo200SAR1")}</p>
          <p>{t("WithNoUpperLimit30")}</p>
        </div>
      </div>
    </div>
    </div>
  );
};
  

export default CopaymentCard;
