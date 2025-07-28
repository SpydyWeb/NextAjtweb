"use client";
import React, { useState,useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { BsSearch, BsCaretDownFill } from "react-icons/bs";
import Image from "next/image";
import logo from "@/assets/Images/logo.png";
import { utilitiesData } from "@/lib/utilities";

const Header = () => {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  const [isLangAr, setLangAr] = useState<boolean>(
    typeof window !== "undefined" && localStorage.getItem("lang") === "ar"
  );
useEffect(() => {
  const storedLang = localStorage.getItem("lang") || "en";
  i18n.changeLanguage(storedLang);
  document.documentElement.setAttribute("lang", storedLang);
  setLangAr(storedLang === "ar");
}, []);
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    document.documentElement.setAttribute("lang", lang);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    setLangAr(lang === "ar");
    changeLanguage(lang);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const lang = isLangAr ? "ar" : "en";

  return (
    <>
    <header className="bg-white shadow-sm w-full px-6 py-3">    
      <div className="max-w-[100rem] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} width={250} height={250} alt="AlJAZIRA TAKAFUL" />
        </Link>

        {/* Navigation Links */}
  <div className="flex gap-6 items-center">
{Object.entries(utilitiesData).map(([key, section]) => (
        <div key={key} className="relative group">
          <button className="text-lg font-semibold text-[#10426c] hover:text-blue-700 transition-colors duration-200">
            {t(section.title)}
          </button>

          {section.links.length > 0 && (
            <div className="w-[250px] absolute left-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 bg-white border border-gray-200 mt-3 rounded-lg shadow-lg p-4 z-50 min-w-56 space-y-2 pointer-events-auto">
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a
                      onClick={() => handleNavigation(link.path)}
                      className="block text-sm text-gray-700 hover:text-white hover:bg-sky-400 px-3 py-1.5 rounded-md transition-all duration-200 cursor-pointer"
                    >
                      {t(link.label)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}

</div>
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
          <div className="relative text-base w-fit">
            <select
              value={lang}
              onChange={handleLanguageChange}
              className="appearance-none cursor-pointer rounded px-4 py-2 text-[#10426c] pr-8 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="en">{t("left")}</option>
              <option value="ar">{t("Right")}</option>
            </select>
            <BsCaretDownFill className="ml-2 absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none text-[#10426c]" />
          </div>

          <BsSearch />
        </div>
      </div>
      {/* <hr className="bg-[#0000008f] h-[2px] mt-5 sm:block hidden mx-24"/> */}
    </header>
      <hr className="bg-[#0000008f] h-[2px] mt-0 sm:block hidden mx-24"/>
</>
  );
};

export default Header;
