"use client"

import { useLang } from "./language-context"

interface Result {
  year: string
  competition: string
  location: string
  position: string
  highlight?: boolean
}

const RESULTS: Result[] = [
  { year: "2024", competition: "Circuito Paulista de Surf — Etapa Guarujá", location: "Guarujá, SP",     position: "1°", highlight: true },
  { year: "2024", competition: "Copa SP de Surf Open",                       location: "Praia Grande, SP", position: "3°" },
  { year: "2023", competition: "Brasileiro de Surf Sub-23",                  location: "Maresias, SP",     position: "5°" },
  { year: "2023", competition: "Circuito Interno Guarujá — Final",           location: "Guarujá, SP",      position: "1°", highlight: true },
  { year: "2022", competition: "Open Surf Baixada Santista",                 location: "Santos, SP",       position: "2°" },
  { year: "2022", competition: "Festival de Surf Litoral Sul",               location: "Peruíbe, SP",      position: "4°" },
]

const CONTENT = {
  pt: {
    eyebrow: "TRAJETÓRIA",
    heading: "RESULTADOS",
    subheading: "em campeonatos",
    subtitle: "Alguns dos principais resultados nos últimos anos.",
    colYear: "Ano", colCompetition: "Campeonato", colLocation: "Local", colPosition: "Posição",
  },
  en: {
    eyebrow: "TRACK RECORD",
    heading: "COMPETITION",
    subheading: "results",
    subtitle: "Some of the key results from the past few years.",
    colYear: "Year", colCompetition: "Competition", colLocation: "Location", colPosition: "Place",
  },
}

export function RafaResults() {
  const { lang } = useLang()
  const c = CONTENT[lang]

  return (
    <section
      id="resultados"
      className="relative py-20 md:py-28 overflow-hidden"
      aria-label={lang === "pt" ? "Resultados em campeonatos" : "Competition results"}
    >
      <div
        className="absolute right-[-5%] top-[20%] pointer-events-none"
        style={{
          width: "clamp(200px, 50vw, 500px)", height: "clamp(200px, 50vw, 500px)",
          background: "radial-gradient(circle at 40% 40%, #e8001c 0%, #6b0010 50%, #000 100%)",
          filter: "blur(80px)", opacity: 0.12, borderRadius: "50%",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 px-4 md:px-8 lg:px-12 max-w-[1200px] mx-auto w-full">
        <p className="font-sans text-white/40 font-semibold tracking-[0.22em] uppercase mb-4" style={{ fontSize: "clamp(0.6rem, 1.1vw, 0.75rem)" }}>
          {c.eyebrow}
        </p>
        <h2 className="font-headline text-brand uppercase leading-[0.88] mb-2" style={{ fontSize: "clamp(3rem, 10vw, 7.5rem)" }}>
          {c.heading}
        </h2>
        <h3 className="font-headline text-white uppercase leading-[0.88] mb-4" style={{ fontSize: "clamp(2.5rem, 8.5vw, 6.5rem)" }}>
          {c.subheading}
        </h3>
        <p className="font-sans text-white/50 mb-12" style={{ fontSize: "clamp(0.85rem, 1.3vw, 0.95rem)" }}>
          {c.subtitle}
        </p>

        {/* Tabela desktop */}
        <div className="hidden md:block">
          <table className="w-full border-collapse" role="table">
            <thead>
              <tr className="border-b border-white/10">
                {[c.colYear, c.colCompetition, c.colLocation, c.colPosition].map((col) => (
                  <th key={col} className="font-sans text-white/30 font-semibold tracking-[0.18em] uppercase text-left pb-3 pr-6" style={{ fontSize: "0.65rem" }}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {RESULTS.map((r, i) => (
                <tr key={i} className="border-b border-white/5 group hover:bg-white/2 transition-colors duration-150">
                  <td className="py-4 pr-6">
                    <span className="font-headline text-white/50 group-hover:text-white/80 transition-colors" style={{ fontSize: "clamp(1rem, 1.6vw, 1.15rem)" }}>
                      {r.year}
                    </span>
                  </td>
                  <td className="py-4 pr-6">
                    <span className="font-sans text-white/80 font-medium" style={{ fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)" }}>
                      {r.competition}
                    </span>
                  </td>
                  <td className="py-4 pr-6">
                    <span className="font-sans text-white/40" style={{ fontSize: "clamp(0.8rem, 1.1vw, 0.9rem)" }}>
                      {r.location}
                    </span>
                  </td>
                  <td className="py-4">
                    <span className="font-headline leading-none" style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.7rem)", color: r.highlight ? "var(--color-neon)" : "var(--color-brand)" }}>
                      {r.position}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards mobile */}
        <div className="flex flex-col gap-3 md:hidden">
          {RESULTS.map((r, i) => (
            <div key={i} className="border border-white/8 rounded-lg p-4 flex items-start justify-between gap-3">
              <div className="flex flex-col gap-1">
                <span className="font-headline text-white/50 leading-none" style={{ fontSize: "0.9rem" }}>{r.year}</span>
                <span className="font-sans text-white/80 font-medium leading-snug" style={{ fontSize: "0.85rem" }}>{r.competition}</span>
                <span className="font-sans text-white/35" style={{ fontSize: "0.75rem" }}>{r.location}</span>
              </div>
              <span className="font-headline leading-none shrink-0" style={{ fontSize: "1.8rem", color: r.highlight ? "var(--color-neon)" : "var(--color-brand)" }}>
                {r.position}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-4 right-4 h-px bg-brand/15" aria-hidden="true" />
    </section>
  )
}
