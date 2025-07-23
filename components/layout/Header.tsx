"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { NavData } from "@/types";
import utilities from "@/Utilities.json";
import { BsSearch,BsCaretDownFill } from "react-icons/bs";
import Image from "next/image";
import logo from "@/assets/Images/logo.png";
import { getLocalizedText } from "@/lib/utils";

const Header = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [isLangAr, setLangAr] = useState<boolean>(
    (typeof window !== "undefined" && localStorage.getItem("lang") === "ar") ||
      false
  );
  const { NavigationData } = utilities;

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
  };

  // const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const lang = e.target.checked ? "ar" : "en";
  //   setLangAr(e.target.checked);
  //   changeLanguage(lang);
  // };
const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const lang = e.target.value;
  setLangAr(lang === "ar");
  changeLanguage(lang);
};

  const handleNavigation = (path: string) => {
    router.push(path);
  };
  const lang: string = isLangAr ? "ar" : "en";
  return (
    <>
      <header className="bg-white shadow-sm w-full px-6 py-3">
        <div className="max-w-[100rem] mx-auto flex items-center justify-between">
          {/* Left: Logo */}
          <Link href="/">
            <Image src={logo} width={300} height={300} alt="AlJAZIRA TAKAFUL" />
          </Link>
          {/* Center: Navigation Links */}
          <div className="flex gap-6 items-center">
            {NavigationData && Object.keys(NavigationData).length > 0
              ? Object.entries(NavigationData).map(
                  ([key, section]: [string, any]) => (
                    <div key={key} className="relative group">
                      <button className="text-lg font-medium text-[#10426c] hover:text-blue-700 transition">
                        {(getLocalizedText(section.title, lang))}{" "}
                      </button>
                      <div className="absolute hidden group-hover:block bg-white border mt-2 rounded shadow-md p-3 z-50 min-w-52">
                        <ul className="space-y-1">
                          {(section.items || section.links || []).map(
                            (link: any, index: number) => (
                              <li key={index}>
                                <a
                                  onClick={() => handleNavigation(link.path)}
                                  className="cursor-pointer text-gray-700 hover:text-blue-600 block text-sm"
                                >
                                  {(getLocalizedText(link.label, lang))}
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  )
                )
              : null}
          </div>

          {/* Right: Auth, Language Toggle */}
          <div className="flex items-center gap-4 text-lg text-[#2e3b55]">
            <Link href="/aboutuspage" className="underline hover:text-blue-600">
              {t("login")}
            </Link>

            <Link
              href="/createaccounts"
              className="bg-[#002c60] hover:bg-[#001a3c] text-white px-4 py-1.5 rounded-full font-medium"
            >
              {t("signup")}
            </Link>

            {/* Language Toggle */}
           <div className="relative text-base w-fit">
  <select
    value={isLangAr ? "ar" : "en"}
    onChange={handleLanguageChange}
    className="appearance-none cursor-pointer rounded px-4 py-2 text-[#10426c] pr-8 focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    <option value="en">{t("left")}</option>
    <option value="ar">{t("Right")}</option>
  </select>

  {/* Icon overlay */}
  <BsCaretDownFill className="ml-2 absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none text-[#10426c]" />
</div>

            <BsSearch />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
