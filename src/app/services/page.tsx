"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Scissors, Sparkles, Crown, Clock, ChevronRight, ArrowRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SocialNavbar } from "@/components/social-navbar"
import { Button } from "@/components/ui/button"
import { barbershopImages } from "@/services/pexels"
import { AnimatedText } from "@/components/ui/animated-shiny-text"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { SquishyCard } from "@/components/ui/squishy-card"
import { ServiceCard } from "@/components/ui/service-card"
import { MovingDotCard } from "@/components/ui/moving-dot-card"
import { FlowingMenu } from "@/components/ui/flowing-menu"

const hairServices = [
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
    name: "Long Hair",
    description: "For hair that is shoulder length or longer. Wash, cut and styled.",
    price: "$110",
    duration: "60 min",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=800&fit=crop",
  },
  {
    name: "Clipper Cut",
    description: "Using electric clippers to cut your hair instead of using scissors.",
    price: "$40",
    duration: "20 min",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=800&fit=crop",
  },
  {
    name: "Zero Fade",
    description: "Haircut down to the minimal length leaving a slight shadow.",
    price: "$74",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?w=600&h=800&fit=crop",
  },
  {
    name: "Skin Fade",
    description: "Haircut blends to skin on back and sides.",
    price: "$74",
    duration: "45 min",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&h=800&fit=crop",
    badge: "Trending",
  },
]

const shaveServices = [
  {
    name: "Hot Towel Head Shave",
    description: "Using shaving products on your head followed by a hot towel cleanse and moisturiser leaving your head smoothed and refreshed.",
    price: "$70",
    duration: "30 min",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=800&fit=crop",
  },
  {
    name: "Traditional Hot Face Shave",
    description: "Ultimate shaving experience using a single razor blade finished off with moisturiser.",
    price: "$70",
    duration: "30 min",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=800&fit=crop",
    badge: "Classic",
  },
]

const popularServices = [
  {
    title: "Haircut & Style",
    price: "69",
    duration: "30 min",
    description: "Precision haircut with scissors & clippers, finished with premium styling products.",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=800&fit=crop",
    badge: "Most Popular",
  },
  {
    title: "Skin Fade",
    price: "74",
    duration: "45 min",
    description: "Expert fade that blends seamlessly to skin on back and sides with precision detailing.",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=800&fit=crop",
    badge: "Trending",
  },
  {
    title: "Beard Sculpting",
    price: "52",
    duration: "30 min",
    description: "Complete beard transformation with straight razor finish and hot towel treatment.",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=800&fit=crop",
    badge: "Premium",
  },
]

const flowingMenuItems = [
  { link: "#hair", text: "Haircuts", image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=400&fit=crop" },
  { link: "#shave", text: "Shaves", image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=400&fit=crop" },
  { link: "#beard", text: "Beards", image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=400&fit=crop" },
  { link: "#packages", text: "Packages", image: "https://images.unsplash.com/photo-1633681926035-ec1ac984418a?w=600&h=400&fit=crop" },
]

const beardServices = [
  {
    name: "Beard Trim",
    description: "Defining and shortening your beard with precision by using clippers, finished with a hot towel.",
    price: "$41",
    duration: "20 min",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=800&fit=crop",
  },
  {
    name: "Bespoke Beard Trim",
    description: "For longer beards, using clippers or scissors and razor finish on the cheeks finished with hot towel and beard product.",
    price: "$52",
    duration: "30 min",
    image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&h=800&fit=crop",
    badge: "Premium",
  },
  {
    name: "Beard Trim & Line It Up",
    description: "Bringing out the straight razor for an even sharper line-up to compliment your beard trim.",
    price: "$62",
    duration: "35 min",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=800&fit=crop",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero with Video */}
      <div className="relative h-[60vh] overflow-hidden mt-16">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          poster={barbershopImages.gallery[2].srcLarge}
        >
          <source src={barbershopImages.videos.hero} type="video/mp4" />
          <source src={barbershopImages.videos.heroHD} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/50 to-[#0a0a0a]" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="flex items-center gap-2 text-[#a3a3a3] text-xs tracking-widest mb-4">
            <Link href="/" className="hover:text-[#fafafa] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#fafafa]">Services</span>
          </div>
          <AnimatedText 
            text="Our Services" 
            gradientColors="linear-gradient(90deg, #c9a961, #fff, #c9a961)"
            textClassName="text-[3rem] md:text-[5rem] font-bold"
          />
          <p className="text-[#a3a3a3] text-lg mt-4 max-w-xl">
            Premium grooming services tailored for the modern gentleman
          </p>
        </div>
      </div>

      {/* Container Scroll Animation Section */}
      <ContainerScroll
        titleComponent={
          <div className="mb-8">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#fafafa] mb-4">
              The <span className="font-serif italic text-[#c9a961]">Experience</span>
            </h2>
            <p className="text-[#a3a3a3] max-w-md mx-auto">
              Step into our world of premium grooming and relaxation
            </p>
          </div>
        }
      >
        <div className="relative h-full w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={barbershopImages.videos.booking} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#0a0a0a]/60 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl md:text-4xl font-semibold text-[#fafafa] mb-2">
                Where <span className="font-serif italic text-[#c9a961]">style</span> meets sophistication
              </h3>
              <p className="text-[#a3a3a3]">Every detail crafted for the discerning gentleman</p>
            </div>
          </div>
        </div>
      </ContainerScroll>

      {/* Popular Services - Squishy Cards */}
      <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#fafafa] mb-4">
            Most <span className="font-serif italic text-[#c9a961]">Popular</span> Services
          </h2>
          <p className="text-[#a3a3a3] max-w-xl mx-auto">
            Our signature services loved by Sydney&apos;s discerning gentlemen
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {popularServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <SquishyCard {...service} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Flowing Menu Navigation */}
      <section className="py-12 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="h-[300px] md:h-[350px] rounded-2xl overflow-hidden">
          <FlowingMenu
            items={flowingMenuItems}
            speed={12}
            textColor="#a3a3a3"
            bgColor="#0a0a0a"
            marqueeBgColor="#c9a961"
            marqueeTextColor="#0a0a0a"
            borderColor="#262626"
          />
        </div>
      </section>

      {/* Stats Section - Moving Dot Card */}
      <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <MovingDotCard target={15000} duration={2500} label="Happy Clients" />
          <MovingDotCard target={25} duration={2000} label="Years Experience" />
          <MovingDotCard target={50} duration={2000} label="Expert Barbers" />
        </div>
      </section>

      {/* Hair Services */}
      <section id="hair" className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#fafafa] mb-4">
            <span className="font-serif italic text-[#c9a961]">Hair</span> Services
          </h2>
          <p className="text-[#a3a3a3] max-w-xl">
            Precision cuts tailored to your individual style and preferences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hairServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={service.name}
                price={service.price}
                duration={service.duration}
                description={service.description}
                image={service.image}
                badge={service.badge}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Shave Services */}
      <section id="shave" className="py-20 px-4 md:px-12 max-w-7xl mx-auto bg-[#0f0f0f]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#fafafa] mb-4">
            <span className="font-serif italic text-[#c9a961]">Shaves</span>
          </h2>
          <p className="text-[#a3a3a3] max-w-xl">
            Traditional hot towel shaves for the ultimate grooming experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {shaveServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={service.name}
                price={service.price}
                duration={service.duration}
                description={service.description}
                image={service.image}
                badge={service.badge}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Beard Services */}
      <section id="beard" className="py-20 px-4 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-[#fafafa] mb-4">
            <span className="font-serif italic text-[#c9a961]">Beards</span>
          </h2>
          <p className="text-[#a3a3a3] max-w-xl">
            Expert beard grooming and sculpting for the perfect look
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {beardServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                title={service.name}
                price={service.price}
                duration={service.duration}
                description={service.description}
                image={service.image}
                badge={service.badge}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Opening Hours */}
      <section className="py-20 px-4 md:px-12 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#141414] border border-[#262626] rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[#fafafa] mb-8">
            Opening <span className="font-serif italic text-[#c9a961]">Hours</span>
          </h2>
          <div className="space-y-4 max-w-sm mx-auto">
            <div className="flex justify-between py-3 border-b border-[#262626]">
              <span className="text-[#a3a3a3]">Monday - Friday</span>
              <span className="text-[#fafafa] font-medium">8am - 8pm</span>
            </div>
            <div className="flex justify-between py-3 border-b border-[#262626]">
              <span className="text-[#a3a3a3]">Saturday</span>
              <span className="text-[#fafafa] font-medium">8am - 5pm</span>
            </div>
            <div className="flex justify-between py-3">
              <span className="text-[#a3a3a3]">Sunday</span>
              <span className="text-[#ef4444] font-medium">Closed</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-semibold text-[#fafafa] mb-6">
            Ready to look your <span className="font-serif italic text-[#c9a961]">best</span>?
          </h2>
          <p className="text-[#a3a3a3] text-lg mb-8 max-w-xl mx-auto">
            Book your appointment today and experience Sydney&apos;s finest barbershop
          </p>
          <Link href="/booking">
            <Button variant="gold" size="lg" className="h-14 px-10 rounded-full text-lg">
              Book Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </section>

      <Footer />
      <SocialNavbar />
    </main>
  )
}
