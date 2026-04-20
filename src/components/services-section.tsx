"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/ui/service-card"

const services = [
  {
    name: "Haircut & Finish",
    description: "Haircut with scissors & clippers and finished off with styling.",
    price: "$69",
    duration: "30 min",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=800&fit=crop",
  },
  {
    name: "Wash, Haircut & Style",
    description: "Cleansed, moisturised, cut and styled.",
    price: "$74",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=800&fit=crop",
    badge: "Popular",
  },
  {
    name: "Skin Fade",
    description: "Haircut blends to skin on back and sides.",
    price: "$74",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&h=800&fit=crop",
    badge: "Trending",
  },
  {
    name: "Beard Trim",
    description: "Defining and shortening your beard with precision by using clippers, finished with a hot towel.",
    price: "$41",
    duration: "20 min",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=800&fit=crop",
  },
]

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    let st: ScrollTrigger | null = null
    
    if (ref.current) {
      st = ScrollTrigger.create({
        trigger: ref.current,
        start: "top 70%",
        onEnter: () => {
          gsap.fromTo(ref.current?.querySelectorAll(".service-item") || [], 
            { opacity: 0, y: 50 },
            { 
              opacity: 1, 
              y: 0, 
              stagger: 0.1,
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
          <h2 className="text-3xl md:text-5xl font-semibold text-[#fafafa] mb-4">
            Our <span className="font-serif italic text-[#c9a961]">Services</span>
          </h2>
          <p className="text-[#a3a3a3] max-w-xl mx-auto">
            Premium grooming services tailored for the modern gentleman
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.name}
              className="service-item"
            >
              <ServiceCard
                title={service.name}
                price={service.price}
                duration={service.duration}
                description={service.description}
                image={service.image}
                badge={service.badge}
              />
            </div>
          ))}
        </div>

        <div
          className="text-center"
        >
          <Link href="/services">
            <Button variant="outline" className="mr-4 border-[#262626] text-[#fafafa] hover:bg-[#1a1a1a]">
              View All Services
            </Button>
          </Link>
          <Link href="/booking">
            <Button variant="gold" className="premium-shadow group">
              Book Now
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
