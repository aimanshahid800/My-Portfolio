"use client"

export default function FixedCvButton() {
  return (
    <a
      href="/Aiman-Shahid-CV.txt"
      download="Aiman-Shahid-CV.txt"
      aria-label="Download CV"
      className="
        fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-50
        inline-flex rounded-full p-[1.5px]
        bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#06B6D4]
        shadow-[0_0_10px_rgba(139,92,246,0.35),0_0_16px_rgba(236,72,153,0.28),0_0_22px_rgba(6,182,212,0.22)]
        hover:shadow-[0_0_14px_rgba(139,92,246,0.5),0_0_22px_rgba(236,72,153,0.4),0_0_30px_rgba(6,182,212,0.35)]
        transition-shadow
      "
    >
      <span
        className="
          rounded-full px-4 py-2 sm:px-5 sm:py-2.5
          bg-white/5 backdrop-blur-md
          text-transparent bg-clip-text
          bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#06B6D4]
        "
      >
        Download CV
      </span>
    </a>
  )
}
