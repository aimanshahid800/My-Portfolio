"use client"

import { useState, useEffect } from "react"
import { Code, Brain, Trophy } from "lucide-react"

const skillCards = [
  {
    title: "Programming Skills",
    icon: Code,
    description: "Python, TypeScript, C++, HTML5, Tailwind CSS.",
  },
  {
    title: "AI & Development Expertise",
    icon: Brain,
    description: "Agentic AI, multi-agent orchestration, advanced prompt engineering, backend with FastAPI.",
  },
  {
    title: "Achievements",
    icon: Trophy,
    description: "Built AI Task Teller, Nyra AI Application, cleared 2 OpenAI Challenge Quizzes.",
  },
]

export default function SkillsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = Number.parseInt(entry.target.getAttribute("data-card") || "0")
            setVisibleCards((prev) => [...new Set([...prev, cardId])])
          }
        })
      },
      { threshold: 0.3 },
    )

    const cardElements = document.querySelectorAll("[data-card]")
    cardElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-[#8B5CF6]/30 via-[#EC4899]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-[#06B6D4]/30 via-[#8B5CF6]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-radial from-[#EC4899]/20 via-[#06B6D4]/10 to-transparent rounded-full blur-3xl"></div>
      </div>

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

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-center lg:text-left">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading mb-4 text-white">
                Skills &{" "}
                <span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#06B6D4] bg-clip-text text-transparent">
                  Expertise
                </span>
              </h2>
            </div>
            <p className="text-xl text-white/70 leading-relaxed text-center lg:text-left">
              I specialize in AI-powered applications, backend development, and modern web technologies. My focus is on
              creating intelligent systems that combine innovation with simplicity.
            </p>
          </div>

          <div className="space-y-6">
            {skillCards.map((card, index) => {
              const IconComponent = card.icon
              const isVisible = visibleCards.includes(index)

              return (
                <div
                  key={index}
                  data-card={index}
                  className={`${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  } transition-all duration-700 ease-out`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="bg-black/30 backdrop-blur-sm border border-[#8B5CF6]/30 rounded-lg p-6 hover:bg-black/50 hover:border-[#EC4899]/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#EC4899]/30 transition-all duration-300 shadow-xl shadow-[#8B5CF6]/20 group">
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6] via-[#EC4899] to-[#06B6D4] p-1 shadow-lg shadow-[#8B5CF6]/50 group-hover:shadow-[#EC4899]/70 transition-all duration-300">
                          <div className="w-full h-full rounded-lg bg-[#0a0a0a] flex items-center justify-center group-hover:bg-[#121212] transition-colors duration-300">
                            <IconComponent className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        </div>
                        <div className="absolute inset-0 rounded-xl bg-gradient-radial from-[#8B5CF6] via-[#EC4899] to-transparent opacity-0 group-hover:opacity-40 group-hover:animate-ping transition-opacity duration-300"></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold font-heading text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8B5CF6] group-hover:to-[#06B6D4] transition-all duration-300">
                          {card.title}
                        </h3>
                        <p className="text-white/70 text-sm leading-relaxed">{card.description}</p>
                      </div>
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
