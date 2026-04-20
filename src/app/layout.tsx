import type { Metadata, Viewport } from "next"
import "./globals.css"
import { SmoothScroll } from "@/components/ui/smooth-scroll"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
}

export const metadata: Metadata = {
  title: {
    default: "The Barber Co. Sydney | Premium CBD Barbershop",
    template: "%s | The Barber Co. Sydney",
  },
  description: "Experience Sydney's finest boutique barbering at Barrack Place. Specialising in precision fades, traditional hot towel shaves, and premium men's grooming. Book your ritual today.",
  keywords: [
    "barber shop Sydney",
    "barber Sydney CBD",
    "best barber Sydney",
    "men's haircut Sydney",
    "beard trim Sydney CBD",
    "skin fade Sydney",
    "hot towel shave Sydney",
    "barber Barrack Place",
    "barber Kent Street",
    "Sydney barbershop premium"
  ],
  authors: [{ name: "The Barber Co. Sydney" }],
  creator: "The Barber Co. Sydney",
  publisher: "The Barber Co. Sydney",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://thebarbercosydney.com.au",
  },
  openGraph: {
    title: "The Barber Co. Sydney | Luxury CBD Barbershop",
    description: "More than a haircut. A statement. Experience premium grooming at Sydney's freshest boutique barber.",
    url: "https://thebarbercosydney.com.au",
    siteName: "The Barber Co. Sydney",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "The Barber Co. Sydney - Premium Barbershop",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Barber Co. Sydney | Luxury CBD Barbershop",
    description: "More than a haircut. A statement. Sydney's finest grooming destination.",
    images: ["/image.png"],
    creator: "@thebarbercosydney",
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "business",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  "name": "The Barber Co. Sydney",
  "image": "https://thebarbercosydney.com.au/image.png",
  "@id": "https://thebarbercosydney.com.au",
  "url": "https://thebarbercosydney.com.au",
  "telephone": "0292901033",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop 2, 268 Kent Street, Barrack Place",
    "addressLocality": "Sydney",
    "addressRegion": "NSW",
    "postalCode": "2000",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -33.8675,
    "longitude": 151.2048
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/thebarbercosydney/"
  ]
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://videos.pexels.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Gentleman's Cut" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased bg-[#0a0a0a] text-[#fafafa] overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
