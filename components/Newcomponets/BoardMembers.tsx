import React from "react";

import WitnessIcon from "../../public/assets/Images/Eyevisionicon.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { boardMembers } from "../../lib/utilities";
const BoardMembers = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="px-6 md:px-20 xl:px-[20rem] py-12">
      {/* Vision Section */}
      <div className="flex items-center gap-10 mb-16">
        <Image src={WitnessIcon} alt="Witness Icon" className="p-12" />
        <div className="max-w-xl ">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
            {t("CompanyProfilSubHeader2")}{" "}
            <span className="text-[#002c60]">{t("Vision")}</span>
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            {t("VisionDesc")}
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#1e3a8a]">
          {t("OurCore")} <span className="text-[#002c60]">{t("Values")}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
          <h4 className="text-[#002c60] text-lg font-semibold mb-3">
            {t("ValuesTowardsOurCustomers")}
          </h4>
          <ul className="list-disc pl-5 text-sm space-y-2 marker:text-[#069edb] text-gray-700">
            <li>{t("valueslist1")}</li>
            <li>{t("valueslist2")}</li>
            <li>{t("valueslist3")}</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
          <h4 className="text-[#002c60] text-lg font-semibold mb-3">
            {t("ValuesTowardsOurEmployees")}
          </h4>
          <ul className="list-disc pl-5 text-sm space-y-2 marker:text-[#069edb] text-gray-700">
            <li>{t("CompanyProfilSubHeader1Item2List1")}</li>
            <li>{t("CompanyProfilSubHeader1Item2List2")}</li>
            <li>{t("CompanyProfilSubHeader1Item2List3")}</li>
            <li>{t("CompanyProfilSubHeader1Item2List4")}</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
          <h4 className="text-[#002c60] text-lg font-semibold mb-3">
            {t("ValuesTowardsOurOrganization")}
          </h4>
          <ul className="list-disc pl-5 text-sm space-y-2 marker:text-[#069edb] text-gray-700">
            <li>{t("CompanyProfilSubHeader1Item3List1")}</li>
            <li>{t("CompanyProfilSubHeader1Item3List2")}</li>
            <li>{t("CompanyProfilSubHeader1Item3List3")}</li>
            <li>{t("CompanyProfilSubHeader1Item3List4")}</li>
            <li>{t("CompanyProfilSubHeader1Item3List5")}</li>
          </ul>
        </div>
      </div>

      {/* Board Members */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-[#1e3a8a]">
          {t("Board")} <span className="text-[#002c60]">{t("Members")}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 justify-items-center">
        {boardMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center hover:duration-700 hover:scale-[1.1]"
          >
            {/* Gray halo + blue ring */}
            {/* <div className="relative w-[250px] h-[250px] flex items-center md:w-[70%] justify-center"> */}
            <div className="relative w-auto md:w-[80%] lg:w-auto h-[250px] flex items-center justify-center">
              <div className="w-[240px] h-[240px] ">
                <Image
                  src={member.image}
                  alt={t(member.name)}
                  width={240}
                  height={240}
                  className="w-full h-full rounded-full"
                />
              </div>
            </div>

            <div className="mt-4">
              {/* <span className="block font-bold text-base text-[#10426C]"> */}
              <span className="block font-bold text-[#10426C] text-nowrap text-sm md:text-base md:px-[60px] lg:px-0">
                {t(member.name)}
              </span>
              <span className="block text-sm text-[#10426C]">
                {t(member.role)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardMembers;
