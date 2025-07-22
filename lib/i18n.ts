"use client";
import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "ar"],
    debug: false,

    backend: {
      // Correct path for Next.js public directory
      loadPath: "/public/constants/translation/{{ns}}/{{lng}}.json",
    },

    interpolation: {
      escapeValue: false,
    },

    react: {
      useSuspense: false,
    },

    ns: [], // Don't preload
    defaultNS: undefined,
  });

export default i18n;
