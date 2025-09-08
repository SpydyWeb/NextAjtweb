import React from "react";
import { useTranslation } from "react-i18next";
import {
  companyInformation,
  companyProfileSections,
  managementBoardMembers,
} from "../../lib/utilities";
import { ImArrowUp } from "react-icons/im";

export default function CompanyProfileScreen() {
  const { t } = useTranslation("shareholderrelation");

  return (
    <div className="min-h-screen bg-white">
      <header className="w-full bg-[#184A7C]">
        <div className="mx-auto max-w-[73.75rem] px-4">
          <div className="h-auto sm:h-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-6 py-2 sm:py-0">
            <div className="text-white font-semibold tracking-wide text-sm sm:text-md">
              {t("JAZIRATAKAFUL")}
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 lg:gap-24 text-sm sm:text-lg">
              <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm">
                <span className="font-semibold text-emerald-400">0.08%</span>
                <ImArrowUp className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-400" />
              </div>
              <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm">
                <span className="font-semibold text-white">{t("Volume")}</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 text-xs sm:text-sm">
                <span className="font-semibold text-white">{t("Trades")}</span>
              </div>
              <div className="text-white/80 text-xs sm:text-sm">
                {t("LastUpdated")}:{" "}
                <span className="text-white">{t("LastUpdatedvalue")}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-[73.75rem] px-4 py-6">
        <div className="grid grid-cols-12 gap-6">
          <aside className="col-span-12 md:col-span-4 lg:col-span-3 space-y-3">
            <div className="w-full rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium border text-white bg-[#184A7C] border-[#184A7C] shadow-inner ">
              {t("CompanyProfile")}
            </div>
            {companyProfileSections.map((item, idx) => (
              <div
                key={idx}
                className="w-full rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium border text-slate-700 hover:text-slate-900 bg-[#EFF3F6] border-[#E6EAEE]"
              >
                {t(item)}
              </div>
            ))}
          </aside>
          <section className="col-span-12 md:col-span-8 lg:col-span-9 space-y-8">
            <div>
              <h2 className="px-4 py-3 bg-[#2B84C6] text-white text-center font-semibold rounded-t-xl text-sm sm:text-base">
                {t("CompanyInformationh")}
              </h2>
              <div className="px-4 py-4 text-sm sm:text-base lg:text-lg space-y-2 border border-[#E6EAEE] rounded-b-xl text-gray-600">
                {t("CompanyInformation")}

                {companyInformation.map(([label, value], i) => (
                  <p key={i} className="text-gray-600">
                    <span className="font-medium text-gray-500">
                      {t(label)}:{" "}
                    </span>
                    {t(value)}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h2 className="px-4 py-3 bg-[#2B84C6] text-white text-center font-semibold rounded-t-xl text-sm sm:text-base">
                {t("ManagementBoardMembers")}
              </h2>
              <div className="px-4 py-4 text-sm sm:text-base lg:text-lg space-y-2 border border-[#E6EAEE] rounded-b-xl">
                {managementBoardMembers.map(([name, role, date], idx) => (
                  <div
                    key={idx}
                    className="flex flex-wrap items-center gap-x-2"
                  >
                    <span className="text-gray-600 font-medium">{t(name)}</span>
                    <span className="text-slate-400">|</span>
                    <span className="text-[#2B84C6] font-semibold">
                      {t(role)}
                    </span>
                    {date && (
                      <>
                        <span className="text-slate-400">|</span>
                        <span className="text-[#2B84C6]">{t(date)}</span>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="px-4 py-3 bg-[#2B84C6] text-white text-center font-semibold rounded-t-xl text-sm sm:text-base">
                {t("Contacts")}
              </h2>
              <div className="px-4 py-4 text-sm sm:text-base lg:text-lg space-y-3 border border-[#E6EAEE] rounded-b-xl">
                <p>
                  <span className="font-semibold text-[#2B84C6]">
                    {t("Address")}:{" "}
                  </span>
                  <span className="text-slate-500">{t("Building")}</span>
                </p>
                <p>
                  <span className="font-semibold text-[#2B84C6]">
                    {t("ShortAddress")}:{" "}
                  </span>
                  <span className="text-slate-500">{t("PostalCode")}</span>
                </p>
                <p>
                  <span className="font-semibold text-[#2B84C6]">
                    {t("Tel")}:{" "}
                  </span>
                  <span className="text-slate-500">{t("TelNumber")}</span>
                </p>
                <p>
                  <span className="font-semibold text-[#2B84C6]">
                    {t("Fax")}:{" "}
                  </span>
                  <span className="text-slate-500">{t("FaxNumber")}</span>
                </p>
                <p>
                  <span className="font-semibold text-[#2B84C6]">
                    {t("Website")}:{" "}
                  </span>
                  <span className="text-slate-500">{t("WebsiteURL")}</span>
                </p>
                <p>
                  <span className="font-semibold text-[#2B84C6]">
                    {t("Email")}:{" "}
                  </span>
                  <span className="text-slate-500">{t("EmailAddress")}</span>
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
