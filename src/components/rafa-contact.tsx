"use client"

import { useLang } from "./language-context"

const CONTENT = {
  pt: {
    eyebrow: "VAMOS CONSTRUIR ALGO",
    heading: "FALA",
    subheading: "comigo",
    body: "Se você é marca, loja ou produtora e quer construir algo junto, me chama.",
    whatsapp: "Chamar no WhatsApp",
    email: "rafadias@email.com",
    instagram: "@rafadias.surf",
    footer: "© 2026 Rafa Dias · Guarujá, SP · Todos os direitos reservados",
  },
  en: {
    eyebrow: "LET'S BUILD SOMETHING",
    heading: "GET IN",
    subheading: "touch",
    body: "If you're a brand, shop, or production company looking to build something together, hit me up.",
    whatsapp: "Message on WhatsApp",
    email: "rafadias@email.com",
    instagram: "@rafadias.surf",
    footer: "© 2026 Rafa Dias · Guarujá, SP · All rights reserved",
  },
}

export function RafaContact() {
  const { lang } = useLang()
  const c = CONTENT[lang]

  return (
    <section
      id="contato"
      className="relative py-20 md:py-32 overflow-hidden"
      aria-label={lang === "pt" ? "Contato" : "Contact"}
    >
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: "clamp(400px, 100vw, 900px)", height: "clamp(400px, 100vw, 900px)",
          background: "radial-gradient(circle at 50% 50%, #ff006e 0%, #e8001c 25%, #6b0010 55%, #000 100%)",
          filter: "blur(90px)", opacity: 0.13, borderRadius: "50%",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 px-4 md:px-8 lg:px-12 max-w-[1200px] mx-auto w-full">
        <p className="font-sans text-white/40 font-semibold tracking-[0.22em] uppercase mb-4" style={{ fontSize: "clamp(0.6rem, 1.1vw, 0.75rem)" }}>
          {c.eyebrow}
        </p>
        <h2 className="font-headline text-brand uppercase leading-[0.88] mb-2" style={{ fontSize: "clamp(3.5rem, 12vw, 9rem)" }}>
          {c.heading}
        </h2>
        <h3 className="font-headline text-white uppercase leading-[0.88] mb-8" style={{ fontSize: "clamp(3rem, 10.5vw, 8rem)" }}>
          {c.subheading}
        </h3>

        <p className="font-sans text-white/65 mb-12 max-w-lg" style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)", lineHeight: 1.65 }}>
          {c.body}
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-14">
          <a
            href="https://wa.me/5513999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-7 py-4 rounded-full bg-brand text-white font-sans font-semibold tracking-[0.15em] uppercase hover:brightness-90 active:scale-95 transition-all duration-200"
            style={{ fontSize: "clamp(0.75rem, 1.1vw, 0.85rem)" }}
            aria-label={c.whatsapp}
          >
            <WhatsAppIcon />
            {c.whatsapp}
          </a>
          <a
            href="mailto:rafadias@email.com"
            className="font-sans font-medium text-white/55 hover:text-white tracking-wide transition-colors duration-150 underline-offset-4 hover:underline"
            style={{ fontSize: "clamp(0.85rem, 1.2vw, 0.95rem)" }}
          >
            {c.email}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/rafadias.surf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 font-sans font-semibold tracking-[0.15em] uppercase transition-colors duration-150"
            style={{ fontSize: "clamp(0.75rem, 1.1vw, 0.85rem)", color: "var(--color-neon)" }}
            aria-label={`Instagram: ${c.instagram}`}
          >
            <InstagramIcon />
            {c.instagram}
            <ArrowRightIcon />
          </a>
        </div>

        <div className="mt-20 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-sans text-white/20" style={{ fontSize: "clamp(0.6rem, 0.9vw, 0.7rem)" }}>{c.footer}</p>
          <p className="font-sans text-white/15 tracking-widest uppercase" style={{ fontSize: "clamp(0.55rem, 0.8vw, 0.65rem)" }}>BUILT BY DROPINFOLIO</p>
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 13 13" fill="none" aria-hidden="true">
      <path d="M1 6.5H12M12 6.5L6.5 1M12 6.5L6.5 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
