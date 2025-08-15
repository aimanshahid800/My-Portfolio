"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [activeSection, setActiveSection] = useState("about")
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    console.log("[v0] Header component mounted, navItems:", navItems)
    console.log("[v0] Window width:", window.innerWidth)
  }, [])

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150
      navItems.forEach((item) => {
        const section = document.querySelector(item.href) as HTMLElement
        if (section) {
          const { offsetTop, offsetHeight } = section
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(item.href.substring(1))
          }
        }
      })
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (href: string) => {
    console.log("[v0] Clicked navigation link:", href)
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <nav className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 shadow-2xl flex items-center justify-between">
        {/* Logo */}
        <div>
          <h1 className="text-xl font-bold">
            <span className="text-white">aimi</span>
            <span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#06B6D4] bg-clip-text text-transparent">
              TECH
            </span>
          </h1>
        </div>

        <div className="flex items-center space-x-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1)
            console.log("[v0] Rendering nav item:", item.name, "isActive:", isActive)
            return (
              <button
                key={item.name}
                onClick={() => handleClick(item.href)}
                className={`relative text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? "bg-clip-text text-transparent bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#06B6D4]"
                    : "text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#06B6D4]"
                }`}
                style={{ border: "1px solid transparent" }} // Added red border for debugging visibility
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#06B6D4] rounded-full animate-pulse"></span>
                )}
              </button>
            )
          })}
        </div>

      

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white hover:text-[#8B5CF6] hover:bg-white/10 rounded-full p-2 transition-colors"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-2 bg-black/20 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-4 space-y-2 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleClick(item.href)}
              className="block w-full text-left px-4 py-2 rounded-lg text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#06B6D4] transition-all duration-200"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
