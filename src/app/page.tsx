import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PoeticStory } from "@/components/poetic-story"
import { ExperienceSection } from "@/components/experience-section"
import { ImageComparison } from "@/components/image-comparison"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CountdownSection } from "@/components/countdown-section"
import { GalleryPreview } from "@/components/gallery-preview"
import { FinalCTA } from "@/components/final-cta"
import { SocialNavbar } from "@/components/social-navbar"
import { Footer } from "@/components/footer"
import { StatsSection } from "@/components/stats-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <PoeticStory />
      <ExperienceSection />
      <ImageComparison />
      <TestimonialsSection />
      <CountdownSection />
      <GalleryPreview />
      <FinalCTA />
      <Footer />
      <SocialNavbar />
    </main>
  )
}
