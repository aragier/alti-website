"use client";

import { useState, type ReactNode } from "react";
import { I18nContext, dictionaries, type Locale } from "@/lib/i18n";

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt");

  return (
    <I18nContext.Provider
      value={{
        locale,
        t: dictionaries[locale],
        setLocale,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}
