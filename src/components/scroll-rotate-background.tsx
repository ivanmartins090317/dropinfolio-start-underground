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
  opacity = 0.3,
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
        className="scroll-bg-image shrink-0 will-change-transform"
        style={{
          rotate: prefersReducedMotion ? 0 : rotate,
          backgroundImage: `url(${src})`,
          opacity,
        }}
      />

      {/* Camadas de contraste: mantém texto legível e adiciona profundidade.
          Tamanho e intensidade são ajustados por breakpoint em globals.css. */}
      <div className="scroll-bg-radial absolute inset-0" />
      <div className="scroll-bg-linear absolute inset-0" />
    </div>
  )
}
