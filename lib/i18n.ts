"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Initialize once (Next's fast refresh can re-import this module)
if (!i18n.isInitialized) {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: "en",
      supportedLngs: ["en", "ar"],
      debug: false,

      // We do NOT preload any namespaces.
      // We'll request them on-demand from the browser with useTranslation('ns').
      ns: [],
      defaultNS: undefined,

      backend: {
        // Matches your folder shape under /public
        loadPath: "/locales/translation/{{ns}}/{{lng}}.json",
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
