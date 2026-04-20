"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import { MovingDotCard } from "@/components/ui/moving-dot-card"

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    let st: ScrollTrigger | null = null
    
    if (ref.current) {
      st = ScrollTrigger.create({
        trigger: ref.current,
        start: "top 70%",
        onEnter: () => {
          gsap.fromTo(ref.current?.querySelectorAll(".stat-card") || [], 
            { opacity: 0, x: 50 },
            { 
              opacity: 1, 
              x: 0, 
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
    <section ref={ref} className="py-20 px-4 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#fafafa] mb-4">
            Trusted by <span className="font-serif italic text-[#c9a961]">Thousands</span>
          </h2>
          <p className="text-[#a3a3a3] max-w-xl mx-auto">
            Sydney&apos;s premier destination for men&apos;s grooming excellence
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <div className="stat-card">
            <MovingDotCard target={15000} duration={2500} label="Happy Clients" />
          </div>
          <div className="stat-card">
            <MovingDotCard target={25} duration={2000} label="Years Experience" />
          </div>
          <div className="stat-card">
            <MovingDotCard target={50} duration={2000} label="Expert Barbers" />
          </div>
        </div>
      </div>
    </section>
  )
}
