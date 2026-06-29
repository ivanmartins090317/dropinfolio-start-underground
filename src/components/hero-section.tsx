interface City {
  name: string
  distance: string
  href: string
}

const CITIES: City[] = [
  { name: "SHANGHAI",    distance: "10K",   href: "#shanghai" },
  { name: "SYDNEY",      distance: "21K",   href: "#sydney" },
  { name: "LONDON",      distance: "10K",   href: "#london" },
  { name: "MEXICO CITY", distance: "21.1K", href: "#mexico-city" },
  { name: "LOS ANGELES", distance: "13.1",  href: "#los-angeles" },
  { name: "MANILA",      distance: "10K",   href: "#manila" },
  { name: "MUMBAI",      distance: "10K",   href: "#mumbai" },
]

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen pt-[56px] flex flex-col justify-between overflow-hidden"
      aria-label="After Dark Tour 2026 — Visão geral das corridas"
    >
      {/* Glow orb de fundo */}
      <div
        className="absolute right-[-15%] top-[5%] pointer-events-none"
        style={{
          width:  "clamp(300px, 90vw, 780px)",
          height: "clamp(300px, 90vw, 780px)",
          background:
            "radial-gradient(circle at 38% 35%, #ff006e 0%, #ff0040 20%, #e8001c 45%, #6b0010 70%, #000 100%)",
          filter:  "blur(55px)",
          opacity: 0.28,
          borderRadius: "50%",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 px-3 md:px-6 lg:px-10 py-6 md:py-10 flex flex-col">
        {/* Título principal */}
        <h1
          className="font-headline text-brand leading-[0.88] uppercase"
          style={{ fontSize: "clamp(3rem, 13.5vw, 9.5rem)" }}
        >
          AFTER DARK
          <br />
          TOUR ©2026
        </h1>

        {/* Lista de cidades */}
        <ul
          className="pl-[5vw] md:pl-[7vw] flex flex-col"
          aria-label="Cidades da corrida"
        >
          {CITIES.map((city, index) => (
            <li
              key={city.name}
              className="animate-text-appear"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <a
                href={city.href}
                className="group flex items-baseline gap-1.5 md:gap-2.5 hover:opacity-60 transition-opacity duration-150 focus:outline-none focus-visible:opacity-60"
                aria-label={`${city.name} — ${city.distance}`}
              >
                <span
                  className="font-headline text-brand leading-[0.88] uppercase"
                  style={{ fontSize: "clamp(2.5rem, 11.5vw, 8rem)" }}
                >
                  {city.name}
                </span>
                <sup
                  className="font-sans text-brand/70 font-semibold tracking-widest uppercase translate-y-1"
                  style={{ fontSize: "clamp(0.5rem, 1.1vw, 0.8rem)" }}
                >
                  {city.distance}
                </sup>
              </a>
            </li>
          ))}
        </ul>

        {/* Tagline final */}
        <h2
          className="font-headline text-brand leading-[0.88] uppercase mt-1"
          style={{ fontSize: "clamp(3rem, 13.5vw, 9.5rem)" }}
        >
          RACE THE
          <br />
          NIGHT AWAY
        </h2>
      </div>
    </section>
  )
}
