'use client';
import React from "react";
import { Check } from "lucide-react"; // for check icons
import { useTranslation } from "react-i18next";
import {professions} from "@/lib/utilities"
const Medicalspecialities = () => {  
     const { t } =useTranslation("medicalmalpracticeinsuranceplan")

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#10426c] mb-10">
          {t("qualifiedmalpracticeSpecialties")} <br className="hidden sm:block" />
         {t("malpracticeInsuranceSubtitle")}
        </h2>

       <div className="bg-sky-600 text-white text-center py-4 px-6 rounded-lg">
        <h2 className="text-lg md:text-xl font-semibold">
         {t("MedicalProfessionals")}
        </h2>
      </div>
    <div className="p-6 space-y-4 rounded-sm border bg-white">
      {professions.map((item, index) => (
        <div key={index} className="flex items-start gap-2">
          <Check
            className="w-5 h-5 text-sky-500 flex-shrink-0 mt-1"
            strokeWidth={3}
          />
          <p className="text-gray-700">{t(item)}</p>
        </div>
      ))}
    </div>


      </div>
    </section>
  );
};

export default Medicalspecialities;
