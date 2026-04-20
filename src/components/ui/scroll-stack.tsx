"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollStack({ children, className }: ScrollStackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div 
      ref={containerRef}
      className={cn("relative h-[300vh]", className)}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-full max-w-4xl mx-auto px-4">
          {React.Children.map(children, (child, index) => (
            <ScrollStackItem index={index} total={React.Children.count(children)}>
              {child}
            </ScrollStackItem>
          ))}
        </div>
      </div>
    </div>
  );
}

interface ScrollStackItemProps {
  children: React.ReactNode;
  index: number;
  total: number;
}

function ScrollStackItem({ children, index, total }: ScrollStackItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [100, 0, -100 * (total - index)]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1, 0.9]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [20, 0, -10]
  );

  const zIndex = total - index;

  return (
    <motion.div
      ref={ref}
      style={{ 
        y, 
        scale, 
        opacity, 
        rotateX,
        zIndex,
        perspective: 1000,
      }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="w-full bg-[#141414] border border-[#262626] rounded-2xl p-8 shadow-2xl">
        {children}
      </div>
    </motion.div>
  );
}

export { ScrollStackItem };
