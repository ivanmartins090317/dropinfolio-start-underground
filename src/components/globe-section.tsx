import { CountdownTimer } from "./countdown-timer"

interface CityPin {
  name:      string
  x:         number
  y:         number
  labelSide: "left" | "right"
}

const CITY_PINS: CityPin[] = [
  { name: "SHANGHAI",    x: 68,  y: 20,  labelSide: "left"  },
  { name: "MUMBAI",      x: 80,  y: 17,  labelSide: "left"  },
  { name: "MANILA",      x: 12,  y: 33,  labelSide: "right" },
  { name: "LOS ANGELES", x: 36,  y: 28,  labelSide: "right" },
  { name: "MEXICO CITY", x: 44,  y: 41,  labelSide: "right" },
  { name: "LONDON",      x: 62,  y: 13,  labelSide: "left"  },
  { name: "SYDNEY",      x: 30,  y: 74,  labelSide: "right" },
]

// Próxima corrida: Sydney — 29 de junho de 2026
const NEXT_RACE_TIMESTAMP = new Date("2026-06-29T23:59:59Z").getTime()

export function GlobeSection() {
  return (
    <section
      className="relative h-screen bg-black flex items-center justify-center overflow-hidden"
      aria-label="Locais das corridas no mundo"
      id="globe"
    >
      {/* Globo */}
      <div
        className="relative flex-shrink-0"
        style={{
          width:  "clamp(280px, 88vw, 700px)",
          height: "clamp(280px, 88vw, 700px)",
        }}
      >
        {/* Esfera */}
        <div
          className="globe-sphere w-full h-full rounded-full"
          aria-hidden="true"
        />

        {/* Pins das cidades */}
        {CITY_PINS.map((pin) => (
          <CityPinMarker key={pin.name} pin={pin} />
        ))}
      </div>

      {/* Barra inferior */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-4 md:px-8 pb-6 md:pb-10">
        {/* Label esquerda */}
        <p
          className="font-headline text-brand leading-[0.9] uppercase"
          style={{ fontSize: "clamp(1.1rem, 3vw, 2.2rem)" }}
        >
          AFTER DARK
          <br />
          TOUR ©2026
        </p>

        {/* Próxima corrida + countdown */}
        <div className="text-right flex flex-col items-end gap-0.5">
          <span
            className="font-sans text-neon font-bold tracking-[0.22em] uppercase"
            style={{ fontSize: "clamp(0.55rem, 1.1vw, 0.8rem)" }}
          >
            NEXT RACE
          </span>
          <p
            className="font-headline text-brand leading-none uppercase"
            style={{ fontSize: "clamp(1.4rem, 3.8vw, 2.8rem)" }}
          >
            SYDNEY
          </p>
          <CountdownTimer targetTimestamp={NEXT_RACE_TIMESTAMP} />
        </div>
      </div>
    </section>
  )
}

function CityPinMarker({ pin }: { pin: CityPin }) {
  const isLeft = pin.labelSide === "left"

  return (
    <div
      className="absolute cursor-pointer group"
      style={{
        left:      `${pin.x}%`,
        top:       `${pin.y}%`,
        transform: "translate(-50%, -50%)",
      }}
      role="button"
      tabIndex={0}
      aria-label={`Corrida em ${pin.name}`}
    >
      <div className={`flex items-center gap-1.5 ${isLeft ? "flex-row-reverse" : ""}`}>
        {/* Ícone do pin */}
        <div className="relative animate-pin-beat">
          <div className="w-[18px] h-[18px] rounded-full border-[1.5px] border-white/90 flex items-center justify-center group-hover:border-neon transition-colors duration-150">
            <div className="w-[5px] h-[5px] rounded-full bg-white group-hover:bg-neon transition-colors duration-150" />
          </div>
        </div>

        {/* Label */}
        <span className="font-sans text-white font-bold tracking-[0.14em] uppercase whitespace-nowrap group-hover:text-neon transition-colors duration-150 select-none"
          style={{ fontSize: "clamp(8px, 1.1vw, 12px)" }}
        >
          {pin.name}
        </span>
      </div>
    </div>
  )
}
