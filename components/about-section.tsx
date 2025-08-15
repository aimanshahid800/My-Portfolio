"use client"

import { useState, useEffect } from "react"
import { GraduationCap, Code, Bot } from "lucide-react"

const timelineSteps = [
  {
    id: 1,
    title: "Curiosity Sparks the Journey",
    description:
      "Began BSCS at Lahore College for Women University (LCWU), now in my 5th semester, with a deep passion for Artificial Intelligence and future-ready technologies.",
    icon: GraduationCap,
    year: "2023",
  },
  {
    id: 2,
    title: "Exploring AI Frontiers",
    description:
      "Diving into Agentic AI and multi-agent systems, driven by the challenge of turning complex ideas into impactful solutions.",
    icon: Code,
    year: "2024",
  },
  {
    id: 3,
    title: "Vision for Tomorrow",
    description:
      "Aiming to grow into a software engineering role in a leading software house, building intelligent systems that shape the future.",
    icon: Bot,
    year: "2026",
  },
]

export default function AboutSection() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = Number.parseInt(entry.target.getAttribute("data-step") || "0")
            setVisibleSteps((prev) => [...new Set([...prev, stepId])])
          }
        })
      },
      { threshold: 0.3 },
    )

    const stepElements = document.querySelectorAll("[data-step]")
    stepElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Large atmospheric glows */}
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-gradient-radial from-[#8B5CF6]/30 via-[#EC4899]/15 to-transparent rounded-full blur-[100px] animate-pulse-slow"></div>
        <div
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-radial from-[#06B6D4]/25 via-[#8B5CF6]/15 to-transparent rounded-full blur-[80px] animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-[#EC4899]/20 via-[#06B6D4]/10 to-transparent rounded-full blur-[60px] animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Additional smaller glows for depth */}
        <div
          className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-gradient-radial from-[#8B5CF6]/15 to-transparent rounded-full blur-[40px] animate-pulse-slow"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-[250px] h-[250px] bg-gradient-radial from-[#EC4899]/15 to-transparent rounded-full blur-[50px] animate-pulse-slow"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Floating gradient lines */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent animate-pulse shadow-lg shadow-[#8B5CF6]/50"></div>
        <div
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#EC4899] to-transparent animate-pulse shadow-lg shadow-[#EC4899]/50"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#06B6D4] to-transparent animate-pulse shadow-lg shadow-[#06B6D4]/50"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute right-1/3 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#8B5CF6] to-transparent animate-pulse shadow-lg shadow-[#8B5CF6]/50"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4 text-white">
            About{" "}
            <span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#06B6D4] bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">My journey in computer science and AI development</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#06B6D4] rounded-full shadow-lg shadow-[#06B6D4]/50"></div>

          <div className="space-y-16">
            {timelineSteps.map((step, index) => {
              const IconComponent = step.icon
              const isVisible = visibleSteps.includes(step.id)
              const isLeft = index % 2 === 0

              return (
                <div
                  key={step.id}
                  data-step={step.id}
                  className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"} ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  } transition-all duration-700 ease-out`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`w-5/12 ${isLeft ? "pr-8" : "pl-8"}`}>
                    <div className="bg-white/5 backdrop-blur-md border border-[#8B5CF6]/30 rounded-lg p-6 hover:bg-white/10 hover:border-[#EC4899]/50 transition-all duration-300 shadow-xl shadow-[#8B5CF6]/20 hover:shadow-[#EC4899]/30">
                      <div className="flex items-center mb-3">
                        <span className="text-sm font-semibold text-white bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#06B6D4] px-3 py-1 rounded-full">
                          {step.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold font-heading text-white mb-2">{step.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="relative group">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8B5CF6] via-[#EC4899] to-[#06B6D4] p-1 shadow-lg shadow-[#8B5CF6]/50 hover:shadow-[#EC4899]/70 transition-all duration-300">
                        <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center group-hover:bg-[#121212] transition-colors duration-300">
                          <IconComponent className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8B5CF6] via-[#EC4899] to-[#06B6D4] opacity-0 group-hover:opacity-40 group-hover:animate-ping transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
