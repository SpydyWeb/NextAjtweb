// app/i18n-provider.tsx
"use client";

import React, { useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "@/lib/i18n";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [direction, setdirection] = useState<string>(
    typeof window !== "undefined" && localStorage.getItem("lang") === "ar"
      ? "ltr"
      : "rtl"
  );
  useEffect(() => {
    setdirection(
      typeof window !== "undefined" && localStorage.getItem("lang") === "ar"
        ? "ltr"
        : "rtl"
    );
  }, [localStorage.getItem("lang")]);
  return (
    <I18nextProvider i18n={i18n}>
      <div dir={direction}>{children}</div>
    </I18nextProvider>
  );
}
