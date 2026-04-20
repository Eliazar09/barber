"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface FlowingMenuItem {
  link: string
  text: string
  image: string
}

interface FlowingMenuProps {
  items: FlowingMenuItem[]
  speed?: number
  textColor?: string
  bgColor?: string
  marqueeBgColor?: string
  marqueeTextColor?: string
  borderColor?: string
}

export function FlowingMenu({
  items,
  speed = 15,
  textColor = "#ffffff",
  bgColor = "#120F17",
  marqueeBgColor = "#ffffff",
  marqueeTextColor = "#120F17",
  borderColor = "#ffffff",
}: FlowingMenuProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >
      {/* Floating Image */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="absolute pointer-events-none z-20 w-64 h-48 rounded-lg overflow-hidden shadow-2xl"
            style={{
              left: mousePosition.x - 128,
              top: mousePosition.y - 96,
            }}
          >
            <img
              src={items[hoveredIndex].image}
              alt={items[hoveredIndex].text}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Menu Items */}
      <div className="relative z-10 flex flex-col h-full">
        {items.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            className="flex-1 flex items-center justify-center relative border-b transition-all duration-300"
            style={{
              borderColor: borderColor,
              color: hoveredIndex === index ? marqueeTextColor : textColor,
              backgroundColor: hoveredIndex === index ? marqueeBgColor : "transparent",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {/* Marquee Text */}
            <div className="overflow-hidden w-full">
              <motion.div
                className="flex whitespace-nowrap"
                animate={{
                  x: hoveredIndex === index ? [0, -1000] : 0,
                }}
                transition={{
                  x: {
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                <span className="text-4xl md:text-6xl lg:text-7xl font-bold px-8">
                  {item.text}
                </span>
                <span className="text-4xl md:text-6xl lg:text-7xl font-bold px-8">
                  {item.text}
                </span>
                <span className="text-4xl md:text-6xl lg:text-7xl font-bold px-8">
                  {item.text}
                </span>
              </motion.div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}
