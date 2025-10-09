"use client"

import { useState, useEffect } from "react"
import { GraduationCap, Award, Calendar, ExternalLink, X } from "lucide-react"

const educationData = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Lahore College for Women University (LCWU)",
    year: "2023–2027",
    description:
      "Focused on Software Engineering and Artificial Intelligence, building a strong foundation for modern computing solutions.",
    icon: GraduationCap,
  },
  {
    degree: "Agentic and Robotic AI Engineering",
    institution: "PIAIC",
    year: "2024",
    description:
      "Intensive program in multi-agent AI systems, robotics, and practical applications of autonomous AI agents.",
    icon: Award,
  },
]

const certificatesData = [
  {
    name: "Fundamentals of Agentic AI Level 1 Quiz",
    year: "2025",
    score: "88%",
    description: "Advanced concepts in autonomous AI agents and multi-agent systems.",
  },
  {
    name: "Fundamentals of Agentic AI Level 2 Quiz",
    year: "2025",
    score: "77%",
    description: "Complex orchestration and practical implementation of AI agents.",
  },
  {
    name: "Prompt and Context Engineering: Effective AI Communication Level 1 Certification Exam",
    year: "2025",
    score: "80%",
    description: "Covered practical and communication strategies for efficient model alignment and output control.",
  },
]

export default function EducationSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [showCertificate1, setShowCertificate1] = useState(false)
  const [showCertificate2, setShowCertificate2] = useState(false)
  const [showCertificate3, setShowCertificate3] = useState(false)

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
    <section id="education" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {showCertificate1 && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="relative max-w-4xl w-full bg-black/50 backdrop-blur-md border border-[#8B5CF6]/30 rounded-xl p-3 sm:p-6">
            <button
              onClick={() => setShowCertificate1(false)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 bg-gradient-to-r from-[#EC4899] to-[#06B6D4] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <X className="w-4 h-4 text-white" />
            </button>
            <img
              src="/level1-certificate.png"
              alt="Fundamentals of Agentic AI Level 1 Certificate"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      {showCertificate2 && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="relative max-w-4xl w-full bg-black/50 backdrop-blur-md border border-[#8B5CF6]/30 rounded-xl p-3 sm:p-6">
            <button
              onClick={() => setShowCertificate2(false)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 bg-gradient-to-r from-[#EC4899] to-[#06B6D4] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <X className="w-4 h-4 text-white" />
            </button>
            <img
              src="/level2-certificate.png"
              alt="Fundamentals of Agentic AI Level 2 Certificate"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

      {showCertificate3 && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="relative max-w-4xl w-full bg-black/50 backdrop-blur-md border border-[#8B5CF6]/30 rounded-xl p-3 sm:p-6">
            <button
              onClick={() => setShowCertificate3(false)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 bg-gradient-to-r from-[#EC4899] to-[#06B6D4] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <X className="w-4 h-4 text-white" />
            </button>
            <img
              src="/prompt-context-l1-certificate.png"
              alt="Prompt and Context Engineering: Effective AI Communication Level 1 Certification Exam"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}

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
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
            Education &{" "}
            <span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#06B6D4] bg-clip-text text-transparent">
              Certificates
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            Continuous learning and professional development in AI and computer science
          </p>
        </div>

        {/* Education & Certificates Section */}
        <div className="grid grid-cols-1 gap-8 lg:gap-12">
          <div>
            {/* Education Section */}
            <div className="flex items-center justify-center lg:justify-start mb-6 sm:mb-8">
              <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-[#8B5CF6] mr-3" />
              <h3 className="text-xl sm:text-2xl font-semibold font-heading text-white">Education</h3>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {educationData.map((edu, index) => {
                const IconComponent = edu.icon
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
                    <div className="bg-black/30 backdrop-blur-sm border border-[#8B5CF6]/30 rounded-lg p-4 sm:p-6 hover:bg-black/50 hover:border-[#EC4899]/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#EC4899]/30 transition-all duration-300 shadow-xl shadow-[#8B5CF6]/20 group">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="relative flex-shrink-0">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6] via-[#EC4899] to-[#06B6D4] p-1 shadow-lg shadow-[#8B5CF6]/50 group-hover:shadow-[#EC4899]/70 transition-all duration-300">
                            <div className="w-full h-full rounded-lg bg-[#0a0a0a] flex items-center justify-center group-hover:bg-[#121212] transition-colors duration-300">
                              <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                            <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8B5CF6] group-hover:to-[#06B6D4] transition-all duration-300">
                              {edu.degree}
                            </h4>
                            <div className="flex items-center text-xs sm:text-sm text-white/60 mt-1 sm:mt-0">
                              <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                              {edu.year}
                            </div>
                          </div>
                          <p className="text-[#EC4899] font-medium mb-2 text-sm sm:text-base">{edu.institution}</p>
                          <p className="text-sm text-white/70 leading-relaxed">{edu.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            {/* Certificates Section */}
            <div className="flex items-center justify-center lg:justify-start mb-6 sm:mb-8">
              <Award className="h-6 w-6 sm:h-8 sm:w-8 text-[#EC4899] mr-3" />
              <h3 className="text-xl sm:text-2xl font-semibold font-heading text-white">Certificates</h3>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {certificatesData.map((cert, index) => {
                const isVisible = visibleCards.includes(index + educationData.length)

                return (
                  <div
                    key={index}
                    data-card={index + educationData.length}
                    className={`${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    } transition-all duration-700 ease-out`}
                    style={{ transitionDelay: `${(index + educationData.length) * 200}ms` }}
                  >
                    <div className="bg-black/30 backdrop-blur-sm border border-[#EC4899]/30 rounded-lg p-4 sm:p-6 hover:bg-black/50 hover:border-[#06B6D4]/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#06B6D4]/30 transition-all duration-300 shadow-xl shadow-[#EC4899]/20 group">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="relative flex-shrink-0">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#EC4899] via-[#06B6D4] to-[#8B5CF6] p-1 shadow-lg shadow-[#EC4899]/50 group-hover:shadow-[#06B6D4]/70 transition-all duration-300">
                            <div className="w-full h-full rounded-lg bg-[#0a0a0a] flex items-center justify-center group-hover:bg-[#121212] transition-colors duration-300">
                              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                            <h4 className="text-base sm:text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#EC4899] group-hover:to-[#06B6D4] transition-all duration-300 pr-2">
                              {cert.name}
                            </h4>
                            <span className="text-xs sm:text-sm text-white/60 mt-1 sm:mt-0 flex-shrink-0">
                              {cert.year}
                            </span>
                          </div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-[#06B6D4] font-semibold text-base sm:text-lg">
                              Score: {cert.score}
                            </span>
                          </div>
                          <p className="text-sm text-white/70 leading-relaxed mb-4">{cert.description}</p>
                          <button
                            onClick={() => {
                              if (index === 0) setShowCertificate1(true)
                              else if (index === 1) setShowCertificate2(true)
                              else if (index === 2) setShowCertificate3(true)
                            }}
                            className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-[#EC4899] to-[#06B6D4] text-white text-xs sm:text-sm font-medium rounded-lg hover:from-[#06B6D4] hover:to-[#8B5CF6] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#EC4899]/30 hover:shadow-[#06B6D4]/50"
                          >
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                            View Certificate
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
