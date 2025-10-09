import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"
import FloatingBlobs from "@/components/floating-blobs"
import FixedCvButton from "@/components/fixed-cv-button" // import fixed CV button

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <FloatingBlobs />
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <FixedCvButton />
    </main>
  )
}
