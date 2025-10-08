"use client"

import { useEffect, useRef } from "react"

export default function FloatingTechLogos() {
  const containerRef = useRef<HTMLDivElement>(null)
  const ORBIT_FACTOR = 0.88 // reduce radius ~12%

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

        const sx = bx * ORBIT_FACTOR
        const sy = by * ORBIT_FACTOR

        el.style.transform = `translate(calc(-50% + ${sx + px}px), calc(-50% + ${sy + py}px)) scale(${scale}) translateZ(${depth}px)`
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
      name: "React",
      src: "/images/logos/react-3d.png",
      color: "#61DAFB",
      glow: "#61DAFB",
      position: { x: 126, y: -99 },
      scale: 1.08,
      depth: 46,
      speed: 0.018,
      delay: 0.1,
    },
    {
      name: "Node.js",
      src: "/images/logos/nodejs-3d.png",
      color: "#339933",
      glow: "#339933",
      position: { x: -90, y: -117 },
      scale: 1.0,
      depth: 44,
      speed: 0.016,
      delay: 0.2,
    },
    {
      name: "AI Brain",
      src: "/images/logos/ai-brain.png",
      color: "#8B5CF6",
      glow: "#EC4899",
      position: { x: 158, y: -9 },
      scale: 1.15,
      depth: 60,
      speed: 0.022,
      delay: 0.3,
    },
    {
      name: "n8n",
      src: "/images/logos/n8n.png",
      color: "#EA4B71",
      glow: "#EA4B71",
      position: { x: -135, y: -18 },
      scale: 1.05,
      depth: 40,
      speed: 0.017,
      delay: 0.4,
    },
    {
      name: "TypeScript",
      src: "/images/logos/typescript-3d.png",
      color: "#3178C6",
      glow: "#60A5FA",
      position: { x: -171, y: 72 },
      scale: 1.08,
      depth: 42,
      speed: 0.017,
      delay: 0.5,
    },
    {
      name: "VS Code",
      src: "/images/logos/vscode-3d.png",
      color: "#3BA1F3",
      glow: "#60A5FA",
      position: { x: 18, y: 126 },
      scale: 1.08,
      depth: 45,
      speed: 0.018,
      delay: 0.6,
    },
    {
      name: "ChatGPT",
      src: "/images/logos/chatgpt-3d.png",
      color: "#10BFA5",
      glow: "#34D399",
      position: { x: 180, y: 81 },
      scale: 1.1,
      depth: 48,
      speed: 0.019,
      delay: 0.7,
    },
    {
      name: "Python",
      src: "/images/logos/python-3d.png",
      color: "#3776AB",
      glow: "#F7B500",
      position: { x: -9, y: -189 },
      scale: 1.0,
      depth: 50,
      speed: 0.019,
      delay: 0.8,
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
            transform: `translate(calc(-50% + ${logo.position.x * ORBIT_FACTOR}px), calc(-50% + ${logo.position.y * ORBIT_FACTOR}px)) scale(${logo.scale}) translateZ(${logo.depth}px)`,
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
              className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl overflow-hidden backdrop-blur-md border border-white/15"
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
                className="absolute inset-0 opacity-35 rounded-xl"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.35), transparent 58%)" }}
              />

              {/* Brand icon (kept as-is, no circular crop) */}
              <img
                src={logo.src || "/placeholder.svg"}
                alt={logo.name}
                className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 object-contain object-center"
                style={{ transform: "translateZ(6px)" }}
              />

              {/* neon rim */}
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  border: `2px solid ${logo.color}40`,
                  boxShadow: `0 0 18px ${logo.glow}55, inset 0 0 18px ${logo.glow}22`,
                }}
              />
            </div>

            {/* depth shadow */}
            <div
              className="absolute inset-0 -z-10 blur-xl opacity-60"
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
