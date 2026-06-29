"use client"

import { useLang } from "./language-context"

interface MediaCard {
  titlePt: string
  titleEn: string
  descPt: string
  descEn: string
  tagPt: string
  tagEn: string
  accentColor: string
}

const CARDS: MediaCard[] = [
  {
    titlePt: "Highlights no Guarujá",    titleEn: "Guarujá Highlights",
    descPt: "Sequência de manobras no Tombo — snaps, aéreos e batidas de lip numa swell de 1.5m.",
    descEn: "A set of maneuvers at Tombo — snaps, aerials and lip bashes on a 1.5m swell.",
    tagPt: "Vídeo · 2 min", tagEn: "Video · 2 min", accentColor: "#E8001C",
  },
  {
    titlePt: "Final — Copa SP 2024",     titleEn: "Final — Copa SP 2024",
    descPt: "Descida decisiva na Praia Grande. Backside aéreo que fechou o campeonato em 3° lugar.",
    descEn: "Decisive run at Praia Grande. Backside aerial that sealed 3rd place at the championship.",
    tagPt: "Vídeo · 3 min", tagEn: "Video · 3 min", accentColor: "#7FFF00",
  },
  {
    titlePt: "Madrugada — Swell Pesado", titleEn: "Late Night — Heavy Swell",
    descPt: "Free surf de madrugada no Pico do Maluf. Ondas de 2m+ sem ninguém na água. Puro instinto.",
    descEn: "Late-night free surf at Pico do Maluf. 2m+ waves with no one else in the water. Pure instinct.",
    tagPt: "Vídeo · 4 min", tagEn: "Video · 4 min", accentColor: "#E8001C",
  },
]

const CONTENT = {
  pt: { eyebrow: "CONTEÚDO", heading: "MÍDIA &", subheading: "destaques", subtitle: "Surfando forte nas redes e nas ondas.", comingSoon: "Em breve" },
  en: { eyebrow: "CONTENT",  heading: "MEDIA &",  subheading: "highlights", subtitle: "Ripping online and in the water.",    comingSoon: "Coming soon" },
}

export function RafaMedia() {
  const { lang } = useLang()
  const c = CONTENT[lang]

  return (
    <section
      id="midia"
      className="relative py-20 md:py-28 overflow-hidden"
      aria-label={lang === "pt" ? "Mídia e destaques" : "Media and highlights"}
    >
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CARDS.map((card, i) => (
            <article
              key={i}
              className="group flex flex-col border border-white/8 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 cursor-pointer"
              aria-label={lang === "pt" ? card.titlePt : card.titleEn}
            >
              <div className="relative flex items-center justify-center bg-white/3 overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 50% 50%, ${card.accentColor}22 0%, transparent 70%)` }}
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.5) 3px, rgba(255,255,255,0.5) 4px)" }}
                  aria-hidden="true"
                />
                <div
                  className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full border-2 transition-transform duration-200 group-hover:scale-110"
                  style={{ borderColor: card.accentColor + "80" }}
                >
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" aria-hidden="true">
                    <path d="M1 1.5L17 10L1 18.5V1.5Z" fill={card.accentColor} fillOpacity="0.85" stroke={card.accentColor} strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
                <span
                  className="absolute bottom-3 right-3 font-sans font-semibold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full"
                  style={{ fontSize: "0.6rem", color: card.accentColor, backgroundColor: card.accentColor + "18", border: `1px solid ${card.accentColor}35` }}
                >
                  {lang === "pt" ? card.tagPt : card.tagEn}
                </span>
                <span
                  className="absolute top-3 left-3 font-sans font-semibold tracking-[0.15em] uppercase px-2 py-0.5 rounded bg-white/8 text-white/40 border border-white/10"
                  style={{ fontSize: "0.55rem" }}
                >
                  {c.comingSoon}
                </span>
              </div>

              <div className="flex flex-col gap-2 p-4 md:p-5 flex-1">
                <h4
                  className="font-headline text-white uppercase leading-tight group-hover:text-brand transition-colors duration-200"
                  style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)" }}
                >
                  {lang === "pt" ? card.titlePt : card.titleEn}
                </h4>
                <p className="font-sans text-white/50 leading-relaxed" style={{ fontSize: "clamp(0.78rem, 1.1vw, 0.87rem)" }}>
                  {lang === "pt" ? card.descPt : card.descEn}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-4 right-4 h-px bg-brand/15" aria-hidden="true" />
    </section>
  )
}
