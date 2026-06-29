"use client"

import { useLang } from "./language-context"

interface UpcomingEvent {
  namePt: string
  nameEn: string
  locationPt: string
  locationEn: string
  dayStart: number
  dayEnd: number
  monthPt: string
  monthEn: string
  monthShortPt: string
  monthShortEn: string
  year: number
  isNext?: boolean
  statusPt?: string
  statusEn?: string
}

const EVENTS: UpcomingEvent[] = [
  {
    namePt: "Circuito Paulista de Surf — Etapa Bertioga",
    nameEn: "São Paulo Surf Circuit — Bertioga Stage",
    locationPt: "Bertioga, SP",
    locationEn: "Bertioga, SP",
    dayStart: 12,
    dayEnd: 14,
    monthPt: "Julho",
    monthEn: "July",
    monthShortPt: "JUL",
    monthShortEn: "JUL",
    year: 2026,
    isNext: true,
    statusPt: "Próxima",
    statusEn: "Next Up",
  },
  {
    namePt: "Open Surf Litoral Norte",
    nameEn: "North Coast Surf Open",
    locationPt: "Ubatuba, SP",
    locationEn: "Ubatuba, SP",
    dayStart: 2,
    dayEnd: 4,
    monthPt: "Agosto",
    monthEn: "August",
    monthShortPt: "AGO",
    monthShortEn: "AUG",
    year: 2026,
  },
  {
    namePt: "Brasileiro de Surf Sub-23",
    nameEn: "Under-23 National Surf Championship",
    locationPt: "Maresias, SP",
    locationEn: "Maresias, SP",
    dayStart: 15,
    dayEnd: 20,
    monthPt: "Setembro",
    monthEn: "September",
    monthShortPt: "SET",
    monthShortEn: "SEP",
    year: 2026,
  },
  {
    namePt: "Copa SP de Surf Open",
    nameEn: "São Paulo Surf Open Cup",
    locationPt: "Praia Grande, SP",
    locationEn: "Praia Grande, SP",
    dayStart: 11,
    dayEnd: 13,
    monthPt: "Outubro",
    monthEn: "October",
    monthShortPt: "OUT",
    monthShortEn: "OCT",
    year: 2026,
  },
]

const CONTENT = {
  pt: {
    eyebrow: "CALENDÁRIO · 2026",
    heading: "PRÓXIMAS",
    subheading: "etapas",
    subtitle: "Campeonatos confirmados na temporada 2026.",
    days: "dias",
  },
  en: {
    eyebrow: "CALENDAR · 2026",
    heading: "UPCOMING",
    subheading: "events",
    subtitle: "Confirmed competitions for the 2026 season.",
    days: "days",
  },
}

function MapPinIcon() {
  return (
    <svg width="11" height="13" viewBox="0 0 11 13" fill="none" aria-hidden="true">
      <path
        d="M5.5 0C3.015 0 1 2.015 1 4.5c0 3.375 4.5 8.5 4.5 8.5S10 7.875 10 4.5C10 2.015 7.985 0 5.5 0Zm0 6.125A1.625 1.625 0 1 1 5.5 2.875a1.625 1.625 0 0 1 0 3.25Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function RafaUpcoming() {
  const { lang } = useLang()
  const c = CONTENT[lang]

  return (
    <section
      id="calendario"
      className="relative py-20 md:py-28 overflow-hidden"
      aria-label={lang === "pt" ? "Próximas etapas" : "Upcoming events"}
    >
      {/* Background glow */}
      <div
        className="absolute left-[60%] top-[30%] pointer-events-none"
        style={{
          width: "clamp(250px, 55vw, 550px)",
          height: "clamp(250px, 55vw, 550px)",
          background: "radial-gradient(circle at 50% 50%, #7FFF00 0%, #3a8000 35%, #0a2000 70%, #000 100%)",
          filter: "blur(90px)",
          opacity: 0.07,
          borderRadius: "50%",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 px-4 md:px-8 lg:px-12 max-w-[1200px] mx-auto w-full">
        {/* Section header */}
        <p
          className="font-sans text-white/40 font-semibold tracking-[0.22em] uppercase mb-4"
          style={{ fontSize: "clamp(0.6rem, 1.1vw, 0.75rem)" }}
        >
          {c.eyebrow}
        </p>
        <h2
          className="font-headline text-brand uppercase leading-[0.88] mb-2"
          style={{ fontSize: "clamp(3rem, 10vw, 7.5rem)" }}
        >
          {c.heading}
        </h2>
        <h3
          className="font-headline text-white uppercase leading-[0.88] mb-4"
          style={{ fontSize: "clamp(2.5rem, 8.5vw, 6.5rem)" }}
        >
          {c.subheading}
        </h3>
        <p
          className="font-sans text-white/50 mb-12"
          style={{ fontSize: "clamp(0.85rem, 1.3vw, 0.95rem)" }}
        >
          {c.subtitle}
        </p>

        {/* Events list */}
        <ol className="flex flex-col gap-3" aria-label={lang === "pt" ? "Lista de eventos" : "Events list"}>
          {EVENTS.map((event, i) => {
            const name = lang === "pt" ? event.namePt : event.nameEn
            const location = lang === "pt" ? event.locationPt : event.locationEn
            const month = lang === "pt" ? event.monthPt : event.monthEn
            const monthShort = lang === "pt" ? event.monthShortPt : event.monthShortEn
            const status = lang === "pt" ? event.statusPt : event.statusEn
            const daysRange =
              event.dayStart === event.dayEnd
                ? `${event.dayStart}`
                : `${event.dayStart}–${event.dayEnd}`

            return (
              <li
                key={i}
                className="group relative flex items-stretch gap-0 border rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/20"
                style={{
                  borderColor: event.isNext ? "rgba(127,255,0,0.25)" : "rgba(255,255,255,0.07)",
                  animationDelay: `${i * 0.06}s`,
                }}
                aria-label={`${name} — ${location}, ${daysRange} ${month} ${event.year}`}
              >
                {/* Neon left accent for next event */}
                {event.isNext && (
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px]"
                    style={{ background: "linear-gradient(180deg, #7FFF00 0%, #3a8000 100%)" }}
                    aria-hidden="true"
                  />
                )}

                {/* Date block */}
                <div
                  className="flex flex-col items-center justify-center shrink-0 px-5 py-5 md:px-7 md:py-6"
                  style={{
                    minWidth: "clamp(72px, 12vw, 96px)",
                    background: event.isNext
                      ? "rgba(127,255,0,0.05)"
                      : "rgba(255,255,255,0.02)",
                    borderRight: event.isNext
                      ? "1px solid rgba(127,255,0,0.12)"
                      : "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <span
                    className="font-headline leading-none"
                    style={{
                      fontSize: "clamp(2rem, 4.5vw, 3rem)",
                      color: event.isNext ? "var(--color-neon)" : "var(--color-brand)",
                      display: "block",
                    }}
                  >
                    {daysRange}
                  </span>
                  <span
                    className="font-sans font-semibold tracking-[0.18em] uppercase mt-0.5"
                    style={{
                      fontSize: "clamp(0.55rem, 0.9vw, 0.65rem)",
                      color: event.isNext ? "rgba(127,255,0,0.6)" : "rgba(255,255,255,0.3)",
                    }}
                  >
                    {monthShort}
                  </span>
                </div>

                {/* Event info */}
                <div className="flex flex-1 flex-col sm:flex-row sm:items-center justify-between gap-2 px-5 py-4 md:px-7 md:py-5">
                  <div className="flex flex-col gap-1.5">
                    {event.isNext && status && (
                      <span
                        className="font-sans font-semibold tracking-[0.18em] uppercase"
                        style={{ fontSize: "0.58rem", color: "var(--color-neon)" }}
                      >
                        ● {status}
                      </span>
                    )}
                    <h4
                      className="font-headline text-white uppercase leading-tight group-hover:text-brand transition-colors duration-200"
                      style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
                    >
                      {name}
                    </h4>
                    <span
                      className="flex items-center gap-1.5 font-sans text-white/40"
                      style={{ fontSize: "clamp(0.72rem, 1vw, 0.82rem)" }}
                    >
                      <MapPinIcon />
                      {location}
                    </span>
                  </div>

                  {/* Date info — right side */}
                  <div className="flex sm:flex-col items-center sm:items-end gap-2 sm:gap-0.5 shrink-0">
                    <span
                      className="font-sans text-white/25 font-medium"
                      style={{ fontSize: "clamp(0.68rem, 1vw, 0.78rem)" }}
                    >
                      {month}
                    </span>
                    <span
                      className="font-headline leading-none"
                      style={{
                        fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                        color: "rgba(255,255,255,0.12)",
                      }}
                    >
                      {event.year}
                    </span>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-4 right-4 h-px bg-brand/15" aria-hidden="true" />
    </section>
  )
}
