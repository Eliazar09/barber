"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"

import { barbershopImages } from "@/services/pexels"

const galleryImages = barbershopImages.preview

export function GalleryPreview() {
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const triggers: ScrollTrigger[] = []
    
    if (ref.current) {
      // Header reveal
      const headerTrigger = ScrollTrigger.create({
        trigger: ref.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(ref.current?.querySelector(".header-content") || null,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
            }
          )
        },
        once: true
      })
      triggers.push(headerTrigger)

      // Images reveal
      const imagesTrigger = ScrollTrigger.create({
        trigger: ref.current,
        start: "top 70%",
        onEnter: () => {
          const images = ref.current?.querySelectorAll(".gallery-item") || []
          gsap.fromTo(images, 
            { opacity: 0, y: 50, scale: 0.9 },
            { 
              opacity: 1, 
              y: 0, 
              scale: 1, 
              stagger: 0.1,
              duration: 1,
              ease: "power3.out",
            }
          )
        },
        once: true
      })
      triggers.push(imagesTrigger)

      // CTA reveal
      const ctaTrigger = ScrollTrigger.create({
        trigger: ref.current,
        start: "bottom 95%",
        onEnter: () => {
          gsap.fromTo(ref.current?.querySelector(".cta-reveal") || null,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: 0.4,
              ease: "power3.out",
            }
          )
        },
        once: true
      })
      triggers.push(ctaTrigger)
    }
    
    return () => {
      triggers.forEach(t => t.kill())
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  }

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className="header-content text-center mb-16"
        >
          <p className="text-[#c9a961] text-sm tracking-[0.3em] uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl lg:text-5xl font-semibold text-[#fafafa] mb-6">
            The <span className="font-serif italic text-[#c9a961]">Gallery</span>
          </h2>
          <p className="text-[#a3a3a3] max-w-[500px] mx-auto">
            A collection of our finest work. Each image tells a story of transformation.
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12"
        >
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="gallery-item group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Text Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-xs text-[#c9a961] uppercase tracking-wider mb-1">
                  {image.category}
                </p>
                <h3 className="text-lg font-medium text-[#fafafa]">{image.title}</h3>
              </div>

              {/* Border glow on hover */}
              <div className="absolute inset-0 border border-transparent group-hover:border-[#c9a961]/30 rounded-xl transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="cta-reveal text-center"
        >
          <Link href="/gallery">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-[#262626] hover:border-[#c9a961] hover:bg-[#c9a961]/5 group"
            >
              View Full Gallery
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
