"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  targetTimestamp: number
}

interface TimeLeft {
  hours:        number
  minutes:      number
  seconds:      number
  centiseconds: number
}

function calculateTimeLeft(targetTimestamp: number): TimeLeft {
  const diff = Math.max(0, targetTimestamp - Date.now())

  const hours        = Math.floor(diff / (1000 * 60 * 60))
  const minutes      = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds      = Math.floor((diff % (1000 * 60)) / 1000)
  const centiseconds = Math.floor((diff % 1000) / 10)

  return { hours, minutes, seconds, centiseconds }
}

function pad(n: number): string {
  return n.toString().padStart(2, "0")
}

const PLACEHOLDER = "00:00:00:00"

export function CountdownTimer({ targetTimestamp }: CountdownTimerProps) {
  // Inicia como null para evitar hydration mismatch (SSR vs client têm valores distintos)
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTimeLeft(calculateTimeLeft(targetTimestamp))

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetTimestamp))
    }, 10)

    return () => clearInterval(interval)
  }, [targetTimestamp])

  const display = timeLeft
    ? `${pad(timeLeft.hours)}:${pad(timeLeft.minutes)}:${pad(timeLeft.seconds)}:${pad(timeLeft.centiseconds)}`
    : PLACEHOLDER

  return (
    <div
      className="font-headline text-neon leading-none tabular-nums"
      style={{ fontSize: "clamp(1.4rem, 3.8vw, 2.8rem)" }}
      aria-live="polite"
      aria-label={
        timeLeft
          ? `Tempo para a próxima corrida: ${timeLeft.hours} horas, ${timeLeft.minutes} minutos e ${timeLeft.seconds} segundos`
          : "Carregando countdown"
      }
    >
      {display}
    </div>
  )
}
