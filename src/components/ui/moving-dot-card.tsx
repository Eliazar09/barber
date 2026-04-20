"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface MovingDotCardProps {
  target?: number
  duration?: number
  label?: string
}

export function MovingDotCard({ target = 777000, duration = 2000, label = "Happy Clients" }: MovingDotCardProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = target
    const range = end - start
    if (range <= 0) return
    const increment = Math.ceil(end / (duration / 50))
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        start = end
        clearInterval(timer)
      }
      setCount(start)
    }, 50)
    return () => clearInterval(timer)
  }, [target, duration])

  const display = count < 1000 ? count : `${Math.floor(count / 1000)}k`

  return (
    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
      {/* Moving Dot */}
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-[#c9a961] z-20 shadow-lg shadow-[#c9a961]/50"
        animate={{
          top: ["8%", "8%", "calc(100% - 32px)", "calc(100% - 32px)", "8%"],
          right: ["8%", "calc(100% - 32px)", "calc(100% - 32px)", "8%", "8%"],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Card */}
      <div className="relative w-full h-full bg-[#1a1a1a] rounded-2xl border border-[#262626] overflow-hidden group">
        {/* Ray Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-[#c9a961]/30 to-transparent" />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#c9a961]/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-6">
          <motion.div
            className="text-4xl sm:text-5xl font-bold text-[#fafafa] mb-2"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {display}
          </motion.div>
          <div className="text-[#a3a3a3] text-xs uppercase tracking-widest text-center">{label}</div>
        </div>

        {/* Corner Lines */}
        <div className="absolute top-3 left-3 w-6 h-px bg-[#c9a961]/50" />
        <div className="absolute top-3 left-3 w-px h-6 bg-[#c9a961]/50" />
        <div className="absolute top-3 right-3 w-6 h-px bg-[#c9a961]/50" />
        <div className="absolute top-3 right-3 w-px h-6 bg-[#c9a961]/50" />
        <div className="absolute bottom-3 left-3 w-6 h-px bg-[#c9a961]/50" />
        <div className="absolute bottom-3 left-3 w-px h-6 bg-[#c9a961]/50" />
        <div className="absolute bottom-3 right-3 w-6 h-px bg-[#c9a961]/50" />
        <div className="absolute bottom-3 right-3 w-px h-6 bg-[#c9a961]/50" />
      </div>
    </div>
  )
}
