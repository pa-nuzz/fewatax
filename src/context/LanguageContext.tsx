"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "@/translations/en.json";
import np from "@/translations/np.json";

type Language = "en" | "np";

const translations = { en, np };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  // Load from locale storage if exists
  useEffect(() => {
    const saved = localStorage.getItem("fewa-lang") as Language;
    if (saved && (saved === "en" || saved === "np")) {
      setLanguage(saved);
    }
  }, []);

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("fewa-lang", lang);
  };

  const t = (path: string): string => {
    const keys = path.split(".");
    let result: any = translations[language];
    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        return path; // Fallback to path if not found
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
}
