"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { NavData } from "@/types";
import utilities from "@/Utilities.json";
import { BsSearch } from "react-icons/bs";
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

  const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lang = e.target.checked ? "ar" : "en";
    setLangAr(e.target.checked);
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
            {NavigationData && Object.keys(NavigationData).length > 0 ? (
              Object.entries(NavigationData).map(
                ([key, section]: [string, any]) => (
                  <div key={key} className="relative group">
                    <button className="text-lg font-medium text-[#10426c] hover:text-blue-700 transition">
                      {t(getLocalizedText(section[key].title, lang))}
                    </button>
                    {/* Dropdown */}
                    <div className="absolute hidden group-hover:block bg-white border mt-2 rounded shadow-md p-3 z-50 min-w-52">
                      <ul className="space-y-1">
                        {section[key].items.length > 0 ? (
                          section[key].items.map((i: any, link: any) => (
                            <li key={i}>
                              <a
                                onClick={() => handleNavigation(link.path)}
                                className="cursor-pointer text-gray-700 hover:text-blue-600 block text-sm"
                              >
                                {t(getLocalizedText(link.label, lang))}
                              </a>
                            </li>
                          ))
                        ) : (
                          <></>
                        )}
                      </ul>
                    </div>
                  </div>
                )
              )
            ) : (
              <></>
            )}
          </div>

          {/* Right: Auth, Language Toggle */}
          <div className="flex items-center gap-4 text-lg text-[#2e3b55]">
            <Link href="/aboutuspage" className="underline hover:text-blue-600">
              Login
            </Link>

            <Link
              href="/createaccounts"
              className="bg-[#002c60] hover:bg-[#001a3c] text-white px-4 py-1.5 rounded-full font-medium"
            >
              SignUp
            </Link>

            {/* Language Toggle */}
            <div className="flex items-center">
              <span className="mr-2">{t("left")}</span>
              <input
                type="checkbox"
                checked={isLangAr}
                onChange={handleLanguageChange}
                className="toggle-checkbox accent-blue-600"
              />
              <span className="ml-2">{t("right")}</span>
            </div>

            <BsSearch />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
