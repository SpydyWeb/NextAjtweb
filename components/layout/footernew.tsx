"use client";
import React, { useState } from "react";
import facebook from "../../public/assets/Images/ImagesIcons/facebook.png";
import instagram from "../../public/assets/Images/ImagesIcons/instagram.png";
import twitter from "../../public/assets/Images/ImagesIcons/twitter.png";
import logo from "../../public/assets/Images/logo.png";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { footernewLinks } from "@/lib/utilities";
import { useTranslation } from "react-i18next";
export const FooterNew: React.FC = () => {
  const { t, i18n } = useTranslation("footernew");
  const [isLangAr, setLangAr] = useState<boolean>(
    typeof window !== "undefined" && localStorage.getItem("lang") === "ar"
  );

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLangAr(newLang === "ar");

    // Update localStorage
    localStorage.setItem("lang", newLang);

    i18n.changeLanguage(newLang);

    document.documentElement.setAttribute("lang", newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";

    window.dispatchEvent(new Event("storage"));
  };
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/aljaziratakafulco/",
      icon: instagram,
    },
    {
      name: "Twitter",
      href: "https://x.com/AljaziraTakaful",
      icon: twitter,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/AljaziraTakafulofficial/",
      icon: facebook,
    },
  ];
  const lang = isLangAr ? "ar" : "en";
  return (
    <footer className="bg-[#f5f7fa] text-[#003366] text-sm">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-3 text-lg">{t("AboutUs")}</h3>
          <ul className="space-y-1">
           {footernewLinks.AboutUs.map((link) => (
  <li key={link.name} className="flex items-start gap-3">
    <Link href={link.href}>
      <span className="leading-snug hover:underline">
        {t(link.name)}
      </span>
    </Link>
  </li>
))}

          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-lg">{t("MyPolicies")}</h3>
          <ul className="space-y-1">
           {footernewLinks.MyPolicies.map((link) => (
  <li key={link.name} className="flex items-start gap-3">
    <Link href={link.href}>
      <span className="leading-snug hover:underline">
        {t(link.name)}
      </span>
    </Link>
  </li>
))}

          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-lg">{t("OurService")}</h3>
          <ul className="space-y-1">
           {footernewLinks.OurServices.map((link) => (
  <li key={link.name} className="flex items-start gap-3">
    <Link href={link.href}>
      <span className="leading-snug hover:underline">
        {t(link.name)}
      </span>
    </Link>
  </li>
))}

          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-3 text-lg">{t("UsefulLinks")}</h3>
          <ul className="space-y-1">
          {footernewLinks.UsefulLinks.map((link) => (
  <li key={link.name} className="flex items-start gap-3">
    <Link href={link.href}>
      <span className="leading-snug hover:underline">
        {t(link.name)}
      </span>
    </Link>
  </li>
))}

          </ul>
        </div>
      </div>
      <hr className="h-[0.1rem]  mt-0 w-full sm:w-[95%] lg:w-[80%] mx-auto" />
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-2">
          <Link href="/" className="inline-block">
            <Image
              src={logo}
              alt="Aljazira Takaful"
              width={250}
              height={250}
              className="w-[15rem] h-[3rem]"
            />
          </Link>
        </div>
        <div className="flex items-center gap-4 mb-6 text-lg">
          {/* <FaLinkedinIn className="w-6 h-6 text-sky-400" /> */}
          <a
            href="https://www.linkedin.com/company/aljazira-takaful-taawuni/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="w-6 h-6 text-sky-400" />
          </a>

          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 flex items-center justify-center"
            >
              <Image
                src={social.icon}
                alt={social.name}
                className="w-6 h-6 object-contain"
              />
            </Link>
          ))}
          {/* <AiOutlineYoutube className="w-6 h-6 text-sky-400" /> */}
          <a
            href="https://www.youtube.com/watch?v=s9u3wzstMD0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineYoutube className="w-6 h-6 text-sky-400" />
          </a>
        </div>
      </div>
      <hr className="h-[0.1rem] mt-0 w-full sm:w-[95%] lg:w-[80%] mx-auto" />
      {/* <hr className="h-[0.1rem] bg-[#0000008f] mt-0 w-full sm:w-[95%] lg:w-[80%] mx-auto" /> */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="space-x-2">
          <span>{t("Aljaziratakaful")}</span>
          <span>|</span>
          <a href="/about" className="underline text-sky-700">
            {t("PrivacyPolicy")}
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative text-base w-fit">
            <select
              value={lang}
              onChange={handleLanguageChange}
              // className="appearance-none cursor-pointer rounded px-4 py-2 text-[#10426c] pr-8 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="en">{t("English")}</option>
              <option value="ar">{t("Arabic")}</option>
            </select>
          </div>
          <span>{t("SaudiArabia")}</span>
        </div>
      </div>
    </footer>
  );
};
