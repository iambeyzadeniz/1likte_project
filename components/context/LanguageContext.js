"use client";
import { createContext, useState, useContext } from "react";
import tr from "../../public/locales/tr/tr.json";
import en from "../../public/locales/en/en.json";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("tr");
  const translations = language === "tr" ? tr : en;

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "tr" ? "en" : "tr"));
  };

  return (
    <LanguageContext.Provider
      value={{ translations, language, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
