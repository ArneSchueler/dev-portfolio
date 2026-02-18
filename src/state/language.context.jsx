import { createContext, useContext, useMemo, useState } from "react";
import { getData } from "../data/index.js";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "en");

  function changeLanguage(nextLang) {
    setLang(nextLang);
    localStorage.setItem("lang", nextLang);
  }

  const value = useMemo(() => {
    return { lang, setLang: changeLanguage, data: getData(lang) };
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
