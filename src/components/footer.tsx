"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Phone, MapPin, Clock, Gift } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#262626]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/image.png"
                alt="The Barber Co. Sydney"
                width={180}
                height={60}
                className="object-contain"
              />
            </Link>
            <p className="text-[#737373] text-sm leading-relaxed mb-4">
              The Barber Co. is Sydney&apos;s premier boutique barbershop. Behind every great gentleman is an extraordinary barber. Experience true craftsmanship in the heart of the CBD.
            </p>
            <div className="flex items-center gap-2 text-[#c9a961] text-sm">
              <Gift className="w-4 h-4" />
              <span>Gift vouchers available in store</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#fafafa] font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-[#737373] hover:text-[#c9a961] transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-[#737373] hover:text-[#c9a961] transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-[#737373] hover:text-[#c9a961] transition-colors text-sm"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="text-[#737373] hover:text-[#c9a961] transition-colors text-sm"
                >
                  Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#fafafa] font-medium mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-[#737373] text-sm">
                <MapPin className="w-4 h-4 text-[#c9a961] mt-0.5 shrink-0" />
                <span>Barrack Place,<br />Shop 2, 268 Kent Street,<br />Sydney NSW 2000</span>
              </li>
              <li className="flex items-center gap-2 text-[#737373] text-sm">
                <Phone className="w-4 h-4 text-[#c9a961]" />
                <a href="tel:0292901033" className="hover:text-[#c9a961] transition-colors">
                  02 9290 1033
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#737373] text-sm">
                <Clock className="w-4 h-4 text-[#c9a961] mt-0.5 shrink-0" />
                <div>
                  <p>Mon-Fri: 8am – 8pm</p>
                  <p>Saturday: 8am – 5pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/thebarbercosydney/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#262626] flex items-center justify-center text-[#a3a3a3] hover:border-[#c9a961] hover:text-[#c9a961] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://maps.google.com/?q=Barrack+Place+Shop+2+268+Kent+Street+Sydney+NSW+2000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1a1a1a] border border-[#262626] flex items-center justify-center text-[#a3a3a3] hover:border-[#c9a961] hover:text-[#c9a961] transition-colors"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#262626] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#737373] text-sm">
            {currentYear} The Barber Co. Sydney. All rights reserved.
          </p>
          <p className="text-[#737373] text-sm">
            Crafted with precision and passion.
          </p>
        </div>
      </div>
    </footer>
  )
}
