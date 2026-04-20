"use client"

import { useState } from "react"
import { motion } from "motion/react"
import Link from "next/link"
import { ArrowLeft, Clock, Check, MessageCircle, Calendar, AlertCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SocialNavbar } from "@/components/social-navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const services = [
  {
    id: "haircut",
    name: "Signature Haircut",
    description: "Precision cut tailored to your style with hot towel finish",
    duration: "45 min",
    price: "$65",
    icon: "✂️",
  },
  {
    id: "beard",
    name: "Beard Sculpting",
    description: "Full beard trim, shape, and conditioning treatment",
    duration: "30 min",
    price: "$45",
    icon: "🧔",
  },
  {
    id: "full",
    name: "The Full Experience",
    description: "Haircut, beard sculpting, facial, and premium beverage",
    duration: "90 min",
    price: "$120",
    popular: true,
    icon: "👑",
  },
]

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
]

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const handleWhatsAppBooking = () => {
    const message = `Hello! I'd like to book an appointment at The Gentleman's Cut.$\n${selectedService ? `Service: ${services.find(s => s.id === selectedService)?.name}` : ''}$\n${selectedTime ? `Preferred time: ${selectedTime}` : ''}`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/1234567890?text=${encodedMessage}`, "_blank")
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-[800px] mx-auto">
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              className="mb-8 text-[#a3a3a3] hover:text-[#fafafa]"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <p className="text-[#c9a961] text-sm tracking-[0.3em] uppercase mb-4">
              Reservations
            </p>
            <h1 className="text-5xl lg:text-6xl font-semibold text-[#fafafa] mb-6">
              Book Your <span className="font-serif italic text-[#c9a961]">Experience</span>
            </h1>
            <p className="text-[#a3a3a3] text-lg">
              Select your service and preferred time. Only a few slots available daily.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="pb-24 px-6 lg:px-12">
        <div className="max-w-[800px] mx-auto">
          {/* Urgency Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3 p-4 bg-[#c9a961]/10 border border-[#c9a961]/20 rounded-xl mb-8"
          >
            <AlertCircle className="w-5 h-5 text-[#c9a961]" />
            <p className="text-sm text-[#fafafa]">
              <span className="text-[#c9a961] font-medium">Only 3 slots left</span> for today. Book now to secure your appointment.
            </p>
          </motion.div>

          {/* Service Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-xl font-medium text-[#fafafa] mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#c9a961]/10 flex items-center justify-center text-sm text-[#c9a961]">1</span>
              Select Service
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {services.map((service) => (
                <Card
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-6 cursor-pointer transition-all duration-300 ${
                    selectedService === service.id
                      ? "border-[#c9a961] bg-[#c9a961]/5"
                      : "border-[#262626] bg-[#141414] hover:border-[#c9a961]/30"
                  }`}
                >
                  {service.popular && (
                    <span className="inline-block px-2 py-1 bg-[#c9a961] text-[#0a0a0a] text-xs font-medium rounded-full mb-3">
                      Most Popular
                    </span>
                  )}
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-medium text-[#fafafa] mb-2">{service.name}</h3>
                  <p className="text-sm text-[#a3a3a3] mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-[#737373]">
                      <Clock className="w-4 h-4" />
                      {service.duration}
                    </div>
                    <span className="text-[#c9a961] font-medium">{service.price}</span>
                  </div>
                  {selectedService === service.id && (
                    <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#c9a961] flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#0a0a0a]" />
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Time Selection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-xl font-medium text-[#fafafa] mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#c9a961]/10 flex items-center justify-center text-sm text-[#c9a961]">2</span>
              Select Time
            </h2>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                    selectedTime === time
                      ? "bg-[#c9a961] text-[#0a0a0a]"
                      : "bg-[#141414] border border-[#262626] text-[#a3a3a3] hover:border-[#c9a961]/30 hover:text-[#fafafa]"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="xl"
              className="flex-1 rounded-full bg-[#c9a961] text-[#0a0a0a] hover:bg-[#d4b978] premium-shadow group"
              onClick={handleWhatsAppBooking}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Book via WhatsApp
            </Button>
            <Button
              size="xl"
              variant="outline"
              className="flex-1 rounded-full border-[#262626] hover:border-[#c9a961] hover:bg-[#c9a961]/5"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Online
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 pt-8 border-t border-[#262626] text-center"
          >
            <p className="text-[#737373] text-sm">
              Prefer to call? Reach us at{" "}
              <a href="tel:+1234567890" className="text-[#c9a961] hover:underline">
                +1 (234) 567-890
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
      <SocialNavbar />
    </main>
  )
}
