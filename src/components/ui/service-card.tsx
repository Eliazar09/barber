"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ServiceCardProps {
  title: string
  price: string
  duration: string
  description: string
  image: string
  badge?: string
  href?: string
}

export function ServiceCard({
  title,
  price,
  duration,
  description,
  image,
  badge,
  href = "/booking",
}: ServiceCardProps) {
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
            scale: 1.03,
          },
        }}
        className="relative h-[360px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-5 cursor-pointer group flex flex-col"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover opacity-30 group-hover:opacity-20 transition-opacity duration-700 scale-105 group-hover:scale-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
        </div>


        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Badge area - fixed height */}
          <div className="h-8 mb-2">
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
                className="block w-fit rounded-full bg-[#c9a961]/20 border border-[#c9a961]/50 px-3 py-1 text-xs font-medium text-[#c9a961] backdrop-blur-sm"
              >
                {badge}
              </motion.span>
            )}
          </div>

          {/* Spacer to push content to bottom */}
          <div className="flex-1" />

          {/* Content at bottom */}
          <motion.div
            initial={{ scale: 0.95, y: 10 }}
            variants={{
              hover: {
                scale: 1,
                y: 0,
              },
            }}
            transition={{
              duration: 0.6,
              ease: "backInOut",
            }}
            className="origin-bottom-left"
          >
            <h3 className="font-serif text-xl md:text-2xl text-[#fafafa] mb-2">{title}</h3>
            
            <div className="my-1">
              <span className="font-serif text-4xl md:text-5xl font-bold text-[#c9a961]">
                {price}
              </span>
              <span className="text-[#a3a3a3] text-sm ml-2">/ {duration}</span>
            </div>
            
            <p className="text-[#a3a3a3] text-sm leading-relaxed mb-4 line-clamp-2">
              {description}
            </p>
          </motion.div>

          {/* CTA Button */}
          <div className="w-full mt-auto">
            <Button
              variant="gold"
              className="w-full rounded-full py-5 text-center font-medium uppercase text-[#0a0a0a] transition-all duration-500 group-hover:bg-[#fafafa] group-hover:text-[#0a0a0a] shadow-xl group-hover:shadow-[#c9a961]/20"
            >
              Book Now
            </Button>
          </div>
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
                scale: 1.5,
                opacity: 0.2,
              },
            }}
            transition={{
              duration: 1.2,
              ease: [0.33, 1, 0.68, 1] as [number, number, number, number],
            }}
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full bg-[#c9a961] blur-3xl opacity-10"
          />
        </motion.div>
      </motion.div>
    </Link>
  )
}
