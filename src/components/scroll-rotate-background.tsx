"use client"

import { motion, useScroll, useSpring, useTransform, useReducedMotion } from "framer-motion"

interface ScrollRotateBackgroundProps {
  src?: string
  // Ângulo total de rotação (graus) ao longo de `rotationDistance` de scroll.
  rotationDegrees?: number
  // Distância de scroll (px) que completa `rotationDegrees`.
  rotationDistance?: number
  // Opacidade base da imagem (contraste suave sobre o preto do site).
  opacity?: number
}

export function ScrollRotateBackground({
  src = "/bg_underground_full_abstract.png",
  rotationDegrees = 300,
  rotationDistance = 7000,
  opacity = 0.28,
}: ScrollRotateBackgroundProps) {
  const prefersReducedMotion = useReducedMotion()
  const { scrollY } = useScroll()

  // Mapeia o scroll da página em rotação lenta e contínua.
  const rotateRaw = useTransform(scrollY, [0, rotationDistance], [0, rotationDegrees])
  const rotate = useSpring(rotateRaw, { stiffness: 32, damping: 22, mass: 0.6 })

  return (
    <div
      className="fixed inset-0 -z-10 flex items-center justify-center overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <motion.div
        className="will-change-transform"
        style={{
          width: "140vmax",
          height: "140vmax",
          rotate: prefersReducedMotion ? 0 : rotate,
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity,
        }}
      />

      {/* Camadas de contraste: mantém texto legível e adiciona profundidade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 42%, transparent 0%, transparent 42%, rgba(0,0,0,0.55) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.15) 22%, rgba(0,0,0,0.15) 78%, rgba(0,0,0,0.75) 100%)",
        }}
      />
    </div>
  )
}
