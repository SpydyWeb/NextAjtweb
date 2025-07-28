"use client";

import React, { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [direction, setDirection] = useState<string>("rtl"); // Default direction
  const [currentLang, setCurrentLang] = useState<string>("");

  useEffect(() => {
    // Check localStorage when component mounts
    const lang = localStorage.getItem("lang");
    setCurrentLang(lang || "");
    setDirection(lang === "ar" ? "rtl" : "ltr");

    // Add event listener for storage changes
    const handleStorageChange = () => {
      const newLang = localStorage.getItem("lang");
      setCurrentLang(newLang || "");
      setDirection(newLang === "ar" ? "rtl" : "ltr");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <div dir={direction}>{children}</div>
    </I18nextProvider>
  );
}