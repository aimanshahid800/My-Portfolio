"use client"

import { useEffect, useRef, useState } from "react"

interface TypingTextProps {
  pre: string
  highlight: string
  classNamePre?: string
  classNameHighlight?: string
  minSpeedMs?: number
  maxSpeedMs?: number
  pauseMs?: number
}

export default function TypingText({
  pre,
  highlight,
  classNamePre,
  classNameHighlight,
  minSpeedMs = 60,
  maxSpeedMs = 120,
  pauseMs = 1200,
}: TypingTextProps) {
  const total = pre.length + highlight.length
  const [typed, setTyped] = useState(0)
  const indexRef = useRef(0)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    const randomDelay = () => Math.floor(Math.random() * (maxSpeedMs - minSpeedMs + 1)) + minSpeedMs

    let cancelled = false

    const tick = () => {
      if (cancelled) return

      if (indexRef.current < total) {
        setTyped((t) => t + 1)
        indexRef.current += 1
        timeoutRef.current = window.setTimeout(tick, randomDelay())
      } else {
        timeoutRef.current = window.setTimeout(() => {
          indexRef.current = 0
          setTyped(0)
          tick()
        }, pauseMs)
      }
    }

    // slight initial delay for more natural feel
    timeoutRef.current = window.setTimeout(tick, 300)

    return () => {
      cancelled = true
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [total, minSpeedMs, maxSpeedMs, pauseMs])

  const preLen = pre.length
  const typedPre = pre.slice(0, Math.min(typed, preLen))
  const typedHighlight = typed > preLen ? highlight.slice(0, Math.min(typed - preLen, highlight.length)) : ""

  return (
    <>
      {preLen > 0 ? (
        <span className="inline-flex flex-col items-start">
          <span className={`whitespace-pre ${classNamePre}`}>{typedPre}</span>
          <span className="inline-flex items-baseline">
            <span className={`whitespace-pre ${classNameHighlight}`}>{typedHighlight}</span>
            <span
              aria-hidden="true"
              className="type-cursor inline-block w-[2px] bg-white/90 align-middle ml-[1px]"
              style={{ height: "1em" }}
            />
          </span>
        </span>
      ) : (
        <span className="inline-flex items-baseline">
          <span className={`whitespace-pre ${classNameHighlight}`}>{typedHighlight}</span>
          <span
            aria-hidden="true"
            className="type-cursor inline-block w-[2px] bg-white/90 align-middle ml-[1px]"
            style={{ height: "1em" }}
          />
        </span>
      )}
    </>
  )
}
