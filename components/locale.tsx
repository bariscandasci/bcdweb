"use client";

import { messages, type Copy, type Locale } from "@/lib/messages";
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

type LocaleValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: Copy;
};

const LocaleContext = createContext<LocaleValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("tr");

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = messages[locale].title;
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, copy: messages[locale] }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useCopy() {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useCopy must be used within LocaleProvider");
  return value;
}

export function SkipLink() {
  const { copy } = useCopy();
  return (
    <a href="#icerik" className="skip-link">
      {copy.skip}
    </a>
  );
}
