"use client";

import { useLang } from "./language-context";

export function RafaNavbar() {
  const { lang } = useLang();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
      <nav
        className="nav-glass mx-auto flex h-[52px] w-full max-w-[1000px] items-center justify-between gap-3 rounded-full px-3 sm:gap-4 sm:px-5 md:px-6"
        role="navigation"
        aria-label="Navegação principal"
      >
        <a
          href="#sobre"
          className="flex min-w-0 items-center gap-2 sm:gap-2.5"
          aria-label="Rafa Dias — Página inicial"
        >
          <span
            className="truncate font-headline uppercase leading-none text-brand"
            style={{ fontSize: "clamp(0.72rem, 1.4vw, 0.95rem)" }}
          >
            RAFA DIAS SURF ©2026
          </span>
          {/* <SurfBadge /> */}
        </a>

        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          {/* <button
            type="button"
            className="flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-brand backdrop-blur-md transition-all duration-200 hover:border-brand/60 hover:bg-white/[0.1] sm:px-4 md:px-5"
            aria-label="Abrir menu"
          >
            MENU
            <HamburgerIcon />
          </button> */}

          <a
            href="#contato"
            className="flex items-center gap-2 rounded-full bg-brand px-3 py-2 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-black transition-all duration-200 hover:brightness-110 sm:px-4 md:px-5"
            aria-label={lang === "pt" ? "Fale comigo" : "Contact me"}
          >
            {lang === "pt" ? "FALE COMIGO" : "CONTACT ME"}
            <ArrowRightIcon />
          </a>
        </div>
      </nav>
    </header>
  );
}

function SurfBadge() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-[2px] w-[42px] h-[34px] bg-brand rounded-[3px]"
      aria-hidden="true"
    >
      {/* Onda estilizada */}
      <svg width="26" height="10" viewBox="0 0 26 10" fill="none">
        <path
          d="M1 7 C3 2, 6 1, 8.5 3.5 C11 6, 14 1, 17 3 C20 5, 23 2.5, 25 1.5"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-white font-sans text-[7px] font-black tracking-[0.3em] leading-none">
        SURF
      </span>
    </div>
  );
}

function HamburgerIcon() {
  return (
    <svg
      width="15"
      height="11"
      viewBox="0 0 15 11"
      fill="currentColor"
      aria-hidden="true"
    >
      <rect y="0" width="15" height="1.5" rx="0.75" />
      <rect y="4.75" width="15" height="1.5" rx="0.75" />
      <rect y="9.5" width="15" height="1.5" rx="0.75" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 6.5H12M12 6.5L6.5 1M12 6.5L6.5 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
