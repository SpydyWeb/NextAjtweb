"use client";
import React from "react";
import Image from "next/image";
import { members } from "@/lib/utilities";
import { useTranslation } from "react-i18next";

const ShariahSupervision = () => {
  const { t } = useTranslation("shariacommitee");

  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl font-bold text-[#1D3557] uppercase mb-2">
          {t("Shariaheader")}
        </h2>
        <p className=" max-w-2xl mx-auto text-sm sm:text-base mb-6">
          {t("ShariaDesc")}
        </p>
        <h3 className="text-sky-600 font-semibold text-lg mb-2">
          {t("ShariahSupervisionHeader")}
        </h3>
        <p className=" text-sm sm:text-base mb-10">
          {t("ShariahSupervisionDesc1")} {t("ShariahSupervisionDesc2")}
        </p>
        <h3 className="text-sky-600 font-semibold text-lg mb-10">
          {t("ShariahSupervisionSubHeader1")}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {members.map((member, idx) => (
            <div key={member.name} className="text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={300} 
                  height={300}
                  className="w-[18.75rem] h-[18.75rem] rounded-full object-cover shadow-md"
                />
              </div>

              <h4 className="font-bold text-[#1D3557] mb-4">
                {t(member.name)}
              </h4>
              <ul className="text-gray-600 text-sm space-y-2 text-left list-disc list-inside">
                {member.points.map((point, i) => (
                  <li key={point}>{t(point)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShariahSupervision;
