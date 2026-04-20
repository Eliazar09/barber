"use client"

import { motion } from "framer-motion"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Wine, MessageCircle, Scissors, Sparkles } from "lucide-react"
import { barbershopImages } from "@/services/pexels"

const steps = [
  {
    icon: Wine,
    number: "01",
    title: "Welcome Drink",
    description: "Begin your journey with a premium whisky or craft beverage, setting the tone for what awaits.",
  },
  {
    icon: MessageCircle,
    number: "02",
    title: "Consultation",
    description: "Your master barber listens, analyzes, and crafts a vision tailored to your unique features.",
  },
  {
    icon: Scissors,
    number: "03",
    title: "Precision Cut",
    description: "Every stroke is deliberate. Every detail is intentional. This is where art meets expertise.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Final Styling",
    description: "Leave not just looking different, but feeling transformed. The final touch of excellence.",
  },
]

export function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    let st: ScrollTrigger | null = null
    
    if (ref.current) {
      st = ScrollTrigger.create({
        trigger: ref.current,
        start: "top 70%",
        onEnter: () => {
          gsap.fromTo(ref.current?.querySelectorAll(".experience-step") || [], 
            { opacity: 0, y: 50 },
            { 
              opacity: 1, 
              y: 0, 
              stagger: 0.2,
              duration: 1,
              ease: "power3.out",
            }
          )
        },
        once: true
      })
    }
    
    return () => {
      if (st) st.kill()
    }
  }, [])

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/videos/7426387-uhd_2560_1080_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#0a0a0a]/80" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className="text-center mb-16 lg:mb-24"
        >
          <p className="text-[#c9a961] text-sm tracking-[0.3em] uppercase mb-4">
            The Experience
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#fafafa]">
            Your <span className="font-serif italic text-[#c9a961]">Ritual</span> Awaits
          </h2>
        </div>

        {/* Steps Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="experience-step group relative"
            >
              <div className="relative p-8 lg:p-6 border border-[#262626] bg-[#141414]/50 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-500 hover:border-[#c9a961]/30 hover:bg-[#141414]">
                {/* Number */}
                <span className="absolute top-4 right-4 font-serif text-6xl text-[#262626] group-hover:text-[#c9a961]/10 transition-colors duration-500">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#1a1a1a] border border-[#262626] flex items-center justify-center mb-6 group-hover:border-[#c9a961]/50 group-hover:bg-[#c9a961]/10 transition-all duration-500">
                  <step.icon className="w-5 h-5 text-[#c9a961]" />
                </div>

                {/* Content */}
                <h3 className="relative z-10 text-xl font-medium text-[#fafafa] mb-3">
                  {step.title}
                </h3>
                <p className="relative z-10 text-sm text-[#a3a3a3] leading-relaxed">
                  {step.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#c9a961]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Connector Line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-[#262626]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
