import type { Metadata } from "next"
import { Bebas_Neue, Inter } from "next/font/google"
import "./globals.css"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})



export const metadata: Metadata = {
  title: "Rafa Dias — Surfista Profissional | Guarujá, SP",
  description:
    "Página oficial de Rafael Dias, surfista profissional do Guarujá. Shortboard, manobras fortes e resultados nos campeonatos do litoral paulista.",
  openGraph: {
    title: "Rafa Dias — Surfista Profissional",
    description:
      "Shortboard, manobras fortes e resultados no circuito estadual. Guarujá, SP.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="bg-black text-brand antialiased">{children}</body>
    </html>
  )
}
