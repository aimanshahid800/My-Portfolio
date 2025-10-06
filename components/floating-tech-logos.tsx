"use client"

import { useEffect, useRef } from "react"

export default function FloatingTechLogos() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateTransforms = (mx = 0, my = 0) => {
      if (!containerRef.current) return
      const icons = containerRef.current.querySelectorAll<HTMLElement>(".tech-icon")
      icons.forEach((el) => {
        const bx = Number.parseFloat(el.dataset.x || "0")
        const by = Number.parseFloat(el.dataset.y || "0")
        const scale = Number.parseFloat(el.dataset.scale || "1")
        const depth = Number.parseFloat(el.dataset.depth || "30")
        const speed = Number.parseFloat(el.dataset.speed || "0.02")
        const px = mx * speed
        const py = my * speed

        el.style.transform = `translate(calc(-50% + ${bx + px}px), calc(-50% + ${by + py}px)) scale(${scale}) translateZ(${depth}px)`
      })
    }

    const handleMouseMove = (e: MouseEvent) => {
      const mx = e.clientX - window.innerWidth / 2
      const my = e.clientY - window.innerHeight / 2
      updateTransforms(mx, my)
    }

    updateTransforms(0, 0) // initialize
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // NOTE: these are placeholders (emoji/letters) until official assets are provided.
  // Colors/glow match each brand and the neon circle.
  const logos = [
    {
      name: "Python",
      icon: "🐍",
      color: "#3776AB",
      glow: "#FFD43B",
      position: { x: -140, y: -82 },
      scale: 1.15,
      depth: 50,
      speed: 0.02,
      delay: 0.0,
    },
    {
      name: "React",
      icon: "⚛️",
      color: "#61DAFB",
      glow: "#61DAFB",
      position: { x: 118, y: -108 },
      scale: 1.0,
      depth: 45,
      speed: 0.018,
      delay: 0.2,
    },
    {
      name: "TypeScript",
      icon: "TS",
      color: "#3178C6",
      glow: "#3178C6",
      position: { x: -166, y: 58 },
      scale: 0.9,
      depth: 40,
      speed: 0.017,
      delay: 0.4,
    },
    {
      name: "VS Code",
      icon: "💻",
      color: "#007ACC",
      glow: "#007ACC",
      position: { x: 148, y: 72 },
      scale: 1.05,
      depth: 55,
      speed: 0.021,
      delay: 0.6,
    },
    {
      name: "Node.js",
      icon: "☘️",
      color: "#339933",
      glow: "#339933",
      position: { x: -70, y: -136 },
      scale: 0.85,
      depth: 42,
      speed: 0.016,
      delay: 0.8,
    },
    {
      name: "AI",
      icon: "🧠",
      color: "#8B5CF6",
      glow: "#EC4899",
      position: { x: 166, y: -18 },
      scale: 1.18,
      depth: 60,
      speed: 0.022,
      delay: 1.0,
    },
    {
      name: "n8n",
      icon: "🔗",
      color: "#EA4B71",
      glow: "#EA4B71",
      position: { x: -112, y: -6 },
      scale: 0.9,
      depth: 38,
      speed: 0.017,
      delay: 1.2,
    },
    {
      name: "OpenAI",
      icon: "✳️",
      color: "#10A37F",
      glow: "#10A37F",
      position: { x: 78, y: 132 },
      scale: 0.95,
      depth: 48,
      speed: 0.019,
      delay: 1.4,
    },
  ]

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none" style={{ perspective: "1000px" }}>
      {logos.map((logo, index) => (
        <div
          key={logo.name}
          className="tech-icon absolute top-1/2 left-1/2 will-change-transform"
          data-x={logo.position.x}
          data-y={logo.position.y}
          data-scale={logo.scale}
          data-depth={logo.depth}
          data-speed={logo.speed}
          style={{
            transform: `translate(calc(-50% + ${logo.position.x}px), calc(-50% + ${logo.position.y}px)) scale(${logo.scale}) translateZ(${logo.depth}px)`,
            zIndex: 100 + Math.round(logo.depth),
          }}
        >
          <div
            className="float-wrapper"
            style={{
              animation: `float-tech ${7 + index}s ease-in-out infinite`,
              animationDelay: `${logo.delay}s`,
              transformStyle: "preserve-3d",
              willChange: "transform",
            }}
          >
            {/* Glassmorphic tile */}
            <div
              className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/15"
              style={{
                background: `linear-gradient(135deg, ${logo.color}22, ${logo.glow}14)`,
                boxShadow: `
                  0 8px 32px rgba(0,0,0,0.35),
                  inset 0 1px 0 rgba(255,255,255,0.10),
                  inset 0 -1px 0 rgba(0,0,0,0.10),
                  0 0 18px ${logo.glow}40
                `,
                transform: "translateZ(40px) rotateX(10deg)",
              }}
            >
              {/* glossy highlight */}
              <div
                className="absolute inset-0 rounded-2xl opacity-35"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.35), transparent 58%)" }}
              />

              {/* Placeholder icon; replace with official brand SVGs when available */}
              <div
                className="relative text-xl sm:text-2xl font-bold z-10 select-none"
                style={{
                  color: logo.color,
                  textShadow: `0 0 10px ${logo.glow}, 0 2px 4px rgba(0,0,0,0.45)`,
                  transform: "translateZ(6px)",
                }}
                aria-label={logo.name}
                role="img"
              >
                {logo.icon}
              </div>

              {/* neon rim */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  border: `2px solid ${logo.color}40`,
                  boxShadow: `0 0 18px ${logo.glow}55, inset 0 0 18px ${logo.glow}22`,
                }}
              />
            </div>

            {/* depth shadow */}
            <div
              className="absolute inset-0 -z-10 rounded-2xl blur-xl opacity-60"
              style={{
                background: `radial-gradient(40% 40% at 50% 50%, ${logo.glow}55, transparent 70%)`,
                transform: "translateY(12px) scale(0.9)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
