"use client"

import { createContext, useContext, useState } from "react"

type Lang = "pt" | "en"

interface LanguageContextValue {
  lang: Lang
  toggle: () => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "pt",
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt")
  const toggle = () => setLang((prev) => (prev === "pt" ? "en" : "pt"))
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
