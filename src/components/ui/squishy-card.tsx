"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface SquishyCardProps {
  title: string
  price: string
  duration: string
  description: string
  image: string
  badge?: string
  href?: string
}

export function SquishyCard({
  title,
  price,
  duration,
  description,
  image,
  badge,
  href = "/booking",
}: SquishyCardProps) {
  return (
    <Link href={href} className="block">
      <motion.div
        whileHover="hover"
        transition={{
          duration: 0.8,
          ease: "backInOut",
        }}
        variants={{
          hover: {
            scale: 1.05,
          },
        }}
        className="relative h-[420px] w-full max-w-[320px] shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-6 cursor-pointer group"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
        </div>

        {/* Badge */}
        {badge && (
          <motion.span
            initial={{ scale: 0.85 }}
            variants={{
              hover: {
                scale: 1,
              },
            }}
            transition={{
              duration: 0.8,
              ease: "backInOut",
            }}
            className="relative z-10 mb-3 block w-fit rounded-full bg-[#c9a961]/20 border border-[#c9a961]/50 px-3 py-1 text-xs font-medium text-[#c9a961] backdrop-blur-sm"
          >
            {badge}
          </motion.span>
        )}

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          <motion.div
            initial={{ scale: 0.85, y: 10 }}
            variants={{
              hover: {
                scale: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.8,
              ease: "backInOut",
            }}
            className="mt-auto origin-bottom-left"
          >
            <h3 className="font-serif text-2xl text-[#fafafa] mb-2">{title}</h3>
            
            <div className="my-3">
              <span className="font-serif text-5xl font-bold text-[#c9a961]">
                ${price}
              </span>
              <span className="text-[#a3a3a3] text-sm ml-2">/ {duration}</span>
            </div>
            
            <p className="text-[#a3a3a3] text-sm leading-relaxed mb-4">
              {description}
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            variants={{
              hover: {
                y: 0,
                opacity: 1,
              },
            }}
            transition={{
              duration: 0.5,
              ease: "backInOut",
            }}
            className="relative z-20 w-full rounded-full border-2 border-[#c9a961] bg-[#c9a961] py-3 text-center font-medium uppercase text-[#0a0a0a] backdrop-blur transition-colors hover:bg-transparent hover:text-[#c9a961]"
          >
            Book Now
          </motion.button>
        </div>

        {/* Animated Background Shape */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none"
          variants={{
            hover: {
              scale: 1.2,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
        >
          <motion.div
            variants={{
              hover: {
                scaleY: 0.5,
                y: -30,
                opacity: 0.3,
              },
            }}
            transition={{
              duration: 0.8,
              ease: "backInOut",
              delay: 0.1,
            }}
            className="absolute top-20 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-[#c9a961] blur-3xl"
          />
          <motion.div
            variants={{
              hover: {
                scaleY: 2,
                y: -20,
                opacity: 0.2,
              },
            }}
            transition={{
              duration: 0.8,
              ease: "backInOut",
              delay: 0.1,
            }}
            className="absolute bottom-32 left-1/2 -translate-x-1/2 w-64 h-24 rounded-full bg-[#c9a961] blur-3xl"
          />
        </motion.div>
      </motion.div>
    </Link>
  )
}
