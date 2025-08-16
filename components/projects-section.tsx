"use client"

import { useState, useEffect } from "react"
import { ExternalLink, Github, Bot, Zap } from "lucide-react"

const projects = [
  {
    title: "AI Task Teller",
    description:
      "An AI-powered task automation tool that uses intelligent agents to process, organize, and execute tasks efficiently.",
    icon: Bot,
    codeUrl: "https://github.com/aimanshahid800/Ai-Task-Runner",
    demoUrl: null,
  },
  {
    title: "Nyra Chatbot",
    description:
      "A personalized AI chatbot assistant designed for study help, answering questions, and managing learning resources.",
    icon: Zap,
    codeUrl: "https://github.com/aimanshahid800/Personal_Study_Assistant",
    demoUrl: "https://nyra-frontend.vercel.app/",
  },
]

export default function ProjectsSection() {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setVisibleProjects((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 },
    )

    const elements = document.querySelectorAll("[data-index]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0">
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

      {/* Floating gradient lines (About style) */}
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

      <div className="relative max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-4 text-white">
            My{" "}
            <span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#06B6D4] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
            Showcasing innovative AI solutions and technical expertise
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 h-full bg-[#06B6D4] rounded-full shadow-lg shadow-[#06B6D4]/50"></div>

          <div className="space-y-12 sm:space-y-16">
            {projects.map((project, index) => {
              const IconComponent = project.icon
              const isVisible = visibleProjects.includes(index)
              const isLeft = index % 2 === 0

              return (
                <div
                  key={index}
                  data-index={index}
                  className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"} ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  } transition-all duration-700 ease-out`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Project Card - Responsive sizing and spacing */}
                  <div className={`w-full sm:w-5/12 ${isLeft ? "sm:pr-8" : "sm:pl-8"} px-4 sm:px-0`}>
                    <div className="bg-black/30 backdrop-blur-sm border border-[#8B5CF6]/30 rounded-lg p-4 sm:p-6 hover:bg-black/50 hover:border-[#EC4899]/50 transition-all duration-300 shadow-xl shadow-[#8B5CF6]/20 hover:shadow-[#EC4899]/30">
                      <h3 className="text-base sm:text-lg font-semibold font-heading text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-4">{project.description}</p>
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#06B6D4] rounded-full text-white text-xs sm:text-sm font-medium hover:shadow-lg hover:shadow-[#8B5CF6]/25 hover:scale-105 transition-all duration-300"
                        >
                          <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                          Code
                        </a>
                        {project.demoUrl ? (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#06B6D4] rounded-full text-white text-xs sm:text-sm font-medium hover:shadow-lg hover:shadow-[#8B5CF6]/25 hover:scale-105 transition-all duration-300"
                          >
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                            Demo
                          </a>
                        ) : (
                          <div className="flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/50 text-xs sm:text-sm font-medium cursor-not-allowed">
                            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                            Demo
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Icon node - Responsive icon sizing */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className="relative group">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#8B5CF6] via-[#EC4899] to-[#06B6D4] p-1 shadow-lg shadow-[#8B5CF6]/50 hover:shadow-[#EC4899]/70 transition-all duration-300">
                        <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center group-hover:bg-[#121212] transition-colors duration-300">
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform duration-300" />
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
