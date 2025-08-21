"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

if (!i18n.isInitialized) {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: "en",
      supportedLngs: ["en", "ar"],
      debug: false,

      // Load namespace dynamically
      ns: ["defaultNS"],
      defaultNS: undefined,

      backend: {
        loadPath: "/locales/{{ns}}/{{lng}}.json",
      },

      detection: {
        order: ["localStorage", "cookie", "htmlTag", "navigator"],
        caches: ["localStorage", "cookie"],
        lookupLocalStorage: "lang",
        lookupCookie: "lang",
      },

      interpolation: { escapeValue: false },
      react: { useSuspense: false },
    });
}

export default i18n;
