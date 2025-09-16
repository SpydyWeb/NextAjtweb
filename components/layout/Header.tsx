"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { BsSearch, BsCaretDownFill, BsList } from "react-icons/bs";
import Image from "next/image";
import logo from "../../public/assets/Images/logo.png";

import { utilitiesData } from "@/lib/utilities";
import { IoClose } from "react-icons/io5";
const Header = () => {
  const { t, i18n } = useTranslation("header");
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLangAr, setLangAr] = useState<boolean>(
    typeof window !== "undefined" && localStorage.getItem("lang") === "ar"
  );
  useEffect(() => {
    const storedLang = localStorage.getItem("lang") || "en";
     i18n.changeLanguage(storedLang);
    document.documentElement.setAttribute("lang", storedLang);
    setLangAr(storedLang === "ar");
  }, []);
  // const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const newLang = e.target.value;
  //   setLangAr(newLang === "ar");

  //   // Update localStorage
  //   localStorage.setItem("lang", newLang);

  //   i18n.changeLanguage(newLang);

  //   document.documentElement.setAttribute("lang", newLang);
  //   document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";

  //   window.dispatchEvent(new Event("storage"));
  // };
const handleLanguageChange = () => {
    const newLang = isLangAr ? "en" : "ar";
    setLangAr(newLang === "ar");
    localStorage.setItem("lang", newLang);
    i18n.changeLanguage(newLang);
    document.documentElement.setAttribute("lang", newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    window.dispatchEvent(new Event("storage"));
  };
  const handleNavigation = (path: string) => {
    router.push(path);
  };
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const lang = isLangAr ? "ar" : "en";

  return (
    <>
      <header className="bg-white shadow-sm w-full px-6 py-3">
        <div className="max-w-[100rem] mx-auto flex items-center justify-between mr-[2rem] relative z-10">
          {/* Logo */}
          <Link href="/">
            <Image
              src={logo}
              alt="AlJAZIRA TAKAFUL"
              className="w-[15rem] h-auto lg:ml-[2rem]"
            />
          </Link>
          <div className="lg:hidden block">
            <button onClick={toggleMenu} className="text-[#10426c] text-2xl">
              {menuOpen ? <IoClose /> : <BsList />}
            </button>
          </div>
          <div className="hidden lg:flex gap-6 items-center">
            {Object.entries(utilitiesData).map(([key, section]) => (
              <div key={key} className="relative group">
                <button
                  onClick={() => handleNavigation(section.path)}
                  className="text-lg font-semibold text-[#10426c] hover:text-blue-700 transition-colors duration-200"
                >
                  {t(section.title)}
                </button>

                {section.links.length > 0 && (
                  <div className="w-[15.625rem] absolute left-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 bg-white border border-gray-200 mt-3 rounded-lg shadow-lg p-4 z-50 min-w-56 space-y-2 pointer-events-auto">
                    <ul className="space-y-2">
                      {section.links.map((link) => (
                        <li key={link.label}>
                          <button
                            onClick={() => handleNavigation(link.path)}
                            className="block text-sm text-gray-700 hover:text-white hover:bg-sky-400 px-3 py-1.5 rounded-md transition-all duration-200 cursor-pointer"
                          >
                            {t(link.label)}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="hidden lg:flex lg:pl-[5px] items-center gap-4 text-lg text-[#2e3b55]">
            <Link href="/" className="underline hover:text-blue-600">
              {t("login")}
            </Link>
            <Link
              href="/createaccounts"
              className="bg-[#002c60] hover:bg-[#001a3c] text-white px-4 py-1.5 rounded-full font-medium"
            >
              {t("signup")}
            </Link>
            {/* <div className="relative text-base w-fit">
              <select
                value={lang}
                onChange={handleLanguageChange}
                className="appearance-none cursor-pointer rounded px-4 py-2 text-[#10426c] pr-8 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="en">{t("left")}</option>
                <option value="ar">{t("Right")}</option>
              </select>
              <BsCaretDownFill className="ml-2 absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none text-[#10426c]" />
            </div> */}
             <div className="relative text-base w-fit">
              <button
                onClick={handleLanguageChange}
                className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#10426c] text-[#10426c] font-semibold hover:bg-[#10426c] hover:text-white transition-colors"
              >
            {isLangAr ? t("right") : t("left")}

              </button>
            </div>
            <BsSearch />
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden mt-4 px-6 space-y-4 border border-[azure] bg-[azure] sm:ml-[10rem] md:ml-[2rem] relative z-10">
            {Object.entries(utilitiesData).map(([key, section]) => (
              <div key={key} className="group relative">
                <p className="text-[#10426c] font-semibold cursor-pointer">
                  {t(section.title)}
                </p>
                {section.links.length > 0 && (
                  <ul className="ml-4 space-y-2 mt-1 hidden group-hover:block absolute bg-white shadow-lg p-2 rounded-md z-10">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <button
                          onClick={() => {
                            handleNavigation(link.path);
                            setMenuOpen(false);
                          }}
                          className="block text-sm text-gray-700 hover:text-white hover:bg-sky-400 px-3 py-1.5 rounded-md transition-all duration-200 cursor-pointer"
                        >
                          {t(link.label)}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className="flex flex-col gap-3 pt-3 text-[#2e3b55]">
              <div className="flex gap-3 items-center">
                <Link
                  href="/aboutuspage"
                  className="underline hover:text-blue-600"
                >
                  {t("login")}
                </Link>
                <Link
                  href="/createaccounts"
                  className="bg-[#002c60] hover:bg-[#001a3c] text-white px-4 py-1.5 rounded-full font-medium text-center w-[100px] text-sm"
                >
                  {t("signup")}
                </Link>
              </div>
              <div className="flex items-center gap-2 text-base">
                <select
                  value={lang}
                  onChange={handleLanguageChange}
                  className="appearance-none cursor-pointer rounded px-4 py-2 text-[#10426c] focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="en">{t("left")}</option>
                  <option value="ar">{t("Right")}</option>
                </select>
                <BsCaretDownFill className="text-[#10426c] text-sm" />
                <BsSearch />
              </div>
            </div>
          </div>
        )}
      </header>
      {/* <hr className="bg-[#0000008f] h-[2px] mt-0 sm:block hidden mx-24"/> */}
      <hr className="h-[0.125rem] bg-[#0000008f] mt-0 w-[95%] mx-auto" />
    </>
  );
};

export default Header;
