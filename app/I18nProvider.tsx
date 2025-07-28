"use client";

import React, { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [direction, setDirection] = useState<string>("rtl");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleDirectionChange = () => {
      const lang = localStorage.getItem("lang");
      if (lang === "ar") {
        setDirection("rtl");
        document.documentElement.dir = "rtl";
      } else {
        setDirection("ltr");
        document.documentElement.dir = "ltr";
      }
    };

    // Initial direction setup
    handleDirectionChange();

    // Listen for language changes
    window.addEventListener("storage", handleDirectionChange);
    i18n.on("languageChanged", handleDirectionChange);

    return () => {
      window.removeEventListener("storage", handleDirectionChange);
      i18n.off("languageChanged", handleDirectionChange);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <div dir={direction}>{children}</div>
    </I18nextProvider>
  );
}