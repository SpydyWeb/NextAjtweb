"use client";
import React, { useMemo, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { DATA } from "@/lib/utilities";
import { useTranslation } from "react-i18next";
type TabKey =
  | "motor"
  | "medical"
  | "malpractice"
  | "travel"
  | "visitvisa"
  | "marine"
  | "protection";

// type DownloadItem = {
//   title: string;
//   href: string;
//   filename?: string;
// };

const TABS: { key: TabKey; label: string }[] = [
  { key: "motor", label: "motor" },
  { key: "medical", label: "medical" },
  { key: "malpractice", label: "medicalMalPractise" },
  { key: "travel", label: "travel" },
  { key: "visitvisa", label: "visitVisaExte" },
  { key: "marine", label: "marine" },
  { key: "protection", label: "protectionSavingsCaps" },
];

const DownloadCenter: React.FC = () => {
  const [active, setActive] = useState<TabKey>("motor");
  const items = useMemo(() => DATA[active] ?? [], [active]);
  const { t } = useTranslation("downloadcenter");
  return (
    <section className="w-full  py-12 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-[#1D3557] uppercase">
            {t("downloadCenter")}
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-sm sm:text-base">
            {t("downloadCenterdesc")}
          </p>
        </div>
  <div className="flex flex-wrap sm:flex-nowrap md:grid md:grid-cols-5  lg:flex lg:flex-nowrap items-center justify-center gap-3 mb-8 overflow-x-auto sm:overflow-visible md:overflow-visible lg:overflow-visible scroll-smooth">
  {TABS.map((tab) => {
    const activeTab = tab.key === active;
    return (
      <button
        key={tab.key}
        onClick={() => setActive(tab.key)}
        aria-current={activeTab ? "page" : undefined}
        className={[
          "w-32 sm:w-36 md:w-32 lg:w-32 h-12 flex-shrink-0",
          "flex items-center justify-center",
          "rounded-md text-sm  font-medium transition-colors",
          "border",
          activeTab
            ? "bg-[#1D3557] border-[#1D3557] text-white"
            : "bg-white border-gray-200 text-gray-700",
        ].join(" ")}
      >
        {t(tab.label)}
      </button>
    );
  })}
</div>





        <div className="space-y-4">
          {items.length === 0 ? (
            <div className="py-10 text-center text-gray-500 bg-white rounded-md shadow-sm">
              No files found.
            </div>
          ) : (
            items.map((it, idx) => (
              <div
                key={it.title + idx}
                className="flex items-center justify-between px-4 sm:px-6 py-4 bg-gray-100 rounded-md shadow-sm"
              >
                <span className="text-[#1D3557] text-sm sm:text-base font-medium">
                  {t(it.title)}
                </span>

                <a
                  href={it.href}
                  // download={it.filename}
                  className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 text-sm font-medium"
                >
                  <FiDownload className="text-base" />
                  <span>{t("download")}</span>
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default DownloadCenter;
