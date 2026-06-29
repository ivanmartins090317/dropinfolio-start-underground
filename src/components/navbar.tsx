import Link from "next/link";

export function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-7 h-[56px] bg-black/90 backdrop-blur-sm"
      role="navigation"
      aria-label="Navegação principal"
    >
      <Link href="/" aria-label="After Dark Tour - Página inicial">
        <NikeRunLogo />
      </Link>

      <div className="flex items-center gap-2 md:gap-3">
        <button
          className="flex items-center gap-2 px-4 md:px-5 py-2 rounded-full border border-brand text-brand font-sans text-[11px] font-semibold tracking-[0.18em] uppercase hover:bg-brand hover:text-black transition-all duration-200 cursor-pointer"
          aria-label="Abrir menu"
        >
          MENU
          <HamburgerIcon />
        </button>

        <button
          className="flex items-center gap-2 px-4 md:px-5 py-2 rounded-full bg-brand text-white font-sans text-[11px] font-semibold tracking-[0.18em] uppercase hover:brightness-90 transition-all duration-200 cursor-pointer"
          aria-label="Receber notificações sobre inscrições"
        >
          NOTIFY ME
          <ArrowRightIcon />
        </button>
      </div>
    </nav>
  );
}

function NikeRunLogo() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-[2px] w-[42px] h-[34px] bg-brand rounded-[3px]"
      aria-label="Nike Run"
    >
      <svg
        width="28"
        height="11"
        viewBox="0 0 28 11"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2.5 8.5 C5 1.5, 21 -0.5, 26 3.5 C20 6.5, 3.5 10.5, 2.5 8.5Z"
          fill="white"
        />
      </svg>
      <span className="text-white font-sans text-[7px] font-black tracking-[0.3em] leading-none">
        RUN
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
