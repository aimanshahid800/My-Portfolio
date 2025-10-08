"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type Props = {
  phrases: string[]
  className?: string
  // durations in ms
  enterMs?: number
  pauseMs?: number
  exitMs?: number
}

export default function RotatingSubtitle({ phrases, className, enterMs = 400, pauseMs = 1200, exitMs = 350 }: Props) {
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<"in" | "show" | "out">("in")

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>

    if (phase === "in") {
      t = setTimeout(() => setPhase("show"), enterMs)
    } else if (phase === "show") {
      t = setTimeout(() => setPhase("out"), pauseMs)
    } else {
      t = setTimeout(() => {
        setIndex((i) => (i + 1) % phrases.length)
        setPhase("in")
      }, exitMs)
    }

    return () => clearTimeout(t)
  }, [phase, enterMs, pauseMs, exitMs, phrases.length])

  // Reserve line height space so layout stays identical
  return (
    <span className={cn("relative inline-block", className)} aria-live="polite" aria-atomic="true">
      <span
        key={`${index}-${phase}`}
        className={cn(
          "absolute left-0 top-0 inline-block will-change-transform whitespace-nowrap",
          phase === "in" && "animate-subtitle-in",
          phase === "out" && "animate-subtitle-out",
        )}
      >
        {phrases[index]}
      </span>
      <span className="invisible whitespace-nowrap">{phrases[0]}</span>
    </span>
  )
}
