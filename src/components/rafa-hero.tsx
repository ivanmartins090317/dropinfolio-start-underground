"use client"

import { useLang } from "./language-context"

const CONTENT = {
  pt: {
    eyebrow: "SURFISTA PROFISSIONAL · GUARUJÁ, SP",
    heading1: "QUEM",
    heading2: "É O RAFA",
    bio: [
      "Rafael Dias caiu no mar com 7 anos e nunca mais saiu. Criado na beira da Praia do Tombo, Guarujá, Rafa construiu seu estilo nas ondas mais pesadas do litoral paulista — backside aéreo, snaps radicais e batidas de lip que marcam quem assiste.",
      "Aos 21 anos, já acumula pódios no circuito estadual e deixou sua marca em sessions de madrugada em swells que a maioria evita. Para ele, surfar não é só esporte: é linguagem, presença e negócio.",
      "Se você é uma marca que quer se comunicar de forma autêntica com quem realmente está na água, o Rafa é o rosto certo.",
    ],
    tagsTitle: "PERFIL RÁPIDO",
    tags: [
      { label: "Idade",           value: "21 anos" },
      { label: "Cidade",          value: "Guarujá, SP" },
      { label: "Modalidade",      value: "Shortboard" },
      { label: "Picos favoritos", value: "Tombo · Enseada · Pico do Maluf" },
      { label: "Estilo",          value: "Aéreo / Power Surf" },
      { label: "Desde",           value: "2010 (7 anos)" },
    ],
  },
  en: {
    eyebrow: "PROFESSIONAL SURFER · GUARUJÁ, SP",
    heading1: "WHO",
    heading2: "IS RAFA",
    bio: [
      "Rafael Dias hit the water at age 7 and never looked back. Raised by the sea at Praia do Tombo in Guarujá, Rafa built his style on the heaviest waves of the São Paulo coastline — backside airs, radical snaps and lip bashes that leave a mark on anyone watching.",
      "At 21, he already has podiums in the state circuit and has proven himself in late-night sessions on swells most surfers avoid. For him, surfing is more than sport — it's language, presence, and business.",
      "If you're a brand looking to connect authentically with people who are actually in the water, Rafa is the right face.",
    ],
    tagsTitle: "QUICK FACTS",
    tags: [
      { label: "Age",             value: "21 years old" },
      { label: "City",            value: "Guarujá, SP" },
      { label: "Discipline",      value: "Shortboard" },
      { label: "Favourite spots", value: "Tombo · Enseada · Pico do Maluf" },
      { label: "Style",           value: "Aerial / Power Surf" },
      { label: "Surfing since",   value: "2010 (age 7)" },
    ],
  },
}

export function RafaHero() {
  const { lang } = useLang()
  const c = CONTENT[lang]

  return (
    <section
      id="sobre"
      className="relative min-h-screen pt-[72px] flex flex-col justify-center overflow-hidden"
      aria-label={lang === "pt" ? "Sobre o Rafa" : "About Rafa"}
    >
      <div
        className="absolute left-[-10%] top-[10%] pointer-events-none"
        style={{
          width: "clamp(300px, 80vw, 700px)",
          height: "clamp(300px, 80vw, 700px)",
          background: "radial-gradient(circle at 60% 38%, #0055ff 0%, #002299 30%, #000766 60%, #000 100%)",
          filter: "blur(70px)",
          opacity: 0.18,
          borderRadius: "50%",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 px-4 md:px-8 lg:px-12 py-16 md:py-20 max-w-[1200px] mx-auto w-full">
        <p
          className="font-sans text-white/40 font-semibold tracking-[0.22em] uppercase mb-4 animate-text-appear"
          style={{ fontSize: "clamp(0.6rem, 1.1vw, 0.75rem)" }}
        >
          {c.eyebrow}
        </p>

        <h1
          className="font-headline text-brand uppercase leading-[0.88] mb-10 animate-text-appear"
          style={{ fontSize: "clamp(4rem, 14vw, 10rem)", animationDelay: "0.05s" }}
        >
          {c.heading1}
          <br />
          <span className="text-white">{c.heading2}</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="flex flex-col gap-5">
            {c.bio.map((paragraph, i) => (
              <p
                key={i}
                className="font-sans text-white/75 leading-relaxed animate-text-appear"
                style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)", animationDelay: `${0.1 + i * 0.07}s` }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="animate-text-appear" style={{ animationDelay: "0.28s" }}>
            <p
              className="font-sans text-neon font-semibold tracking-[0.22em] uppercase mb-5"
              style={{ fontSize: "clamp(0.6rem, 1vw, 0.72rem)" }}
            >
              {c.tagsTitle}
            </p>
            <ul className="flex flex-col divide-y divide-white/8">
              {c.tags.map((tag) => (
                <li key={tag.label} className="flex items-baseline justify-between py-3.5 gap-4">
                  <span
                    className="font-sans text-white/40 font-medium tracking-wider uppercase shrink-0"
                    style={{ fontSize: "clamp(0.65rem, 0.9vw, 0.72rem)" }}
                  >
                    {tag.label}
                  </span>
                  <span
                    className="font-headline text-white uppercase tracking-wide text-right"
                    style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)" }}
                  >
                    {tag.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-4 right-4 h-px bg-brand/15" aria-hidden="true" />
    </section>
  )
}
