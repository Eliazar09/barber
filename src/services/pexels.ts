const PEXELS_API_KEY = "HX6lpZGO3pQmUX3XKKiI7DYLHvnu0JUSjWlIgIHe6bMiZunPISPD1l4Q"
const BASE_URL = "https://api.pexels.com/v1"
const VIDEOS_URL = "https://api.pexels.com/videos"

export interface PexelsVideo {
  id: number
  width: number
  height: number
  url: string
  image: string
  duration: number
  user: {
    id: number
    name: string
    url: string
  }
  video_files: {
    id: number
    quality: string
    file_type: string
    width: number
    height: number
    link: string
  }[]
  video_pictures: {
    id: number
    picture: string
    nr: number
  }[]
}

export interface PexelsVideoResponse {
  total_results: number
  page: number
  per_page: number
  videos: PexelsVideo[]
}

export async function searchVideos(
  query: string,
  perPage: number = 5,
  page: number = 1
): Promise<PexelsVideoResponse> {
  const response = await fetch(
    `${VIDEOS_URL}/search?query=${encodeURIComponent(query)}&per_page=${perPage}&page=${page}`,
    {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    }
  )

  if (!response.ok) {
    throw new Error(`Pexels Video API error: ${response.status}`)
  }

  return response.json()
}

export interface PexelsPhoto {
  id: number
  width: number
  height: number
  url: string
  photographer: string
  photographer_url: string
  src: {
    original: string
    large2x: string
    large: string
    medium: string
    small: string
    portrait: string
    landscape: string
    tiny: string
  }
  alt: string
}

export interface PexelsResponse {
  total_results: number
  page: number
  per_page: number
  photos: PexelsPhoto[]
  next_page?: string
}

export async function searchPhotos(
  query: string,
  perPage: number = 15,
  page: number = 1
): Promise<PexelsResponse> {
  const response = await fetch(
    `${BASE_URL}/search?query=${encodeURIComponent(query)}&per_page=${perPage}&page=${page}`,
    {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    }
  )

  if (!response.ok) {
    throw new Error(`Pexels API error: ${response.status}`)
  }

  return response.json()
}

export async function getCuratedPhotos(
  perPage: number = 15,
  page: number = 1
): Promise<PexelsResponse> {
  const response = await fetch(
    `${BASE_URL}/curated?per_page=${perPage}&page=${page}`,
    {
      headers: {
        Authorization: PEXELS_API_KEY,
      },
    }
  )

  if (!response.ok) {
    throw new Error(`Pexels API error: ${response.status}`)
  }

  return response.json()
}

// Pre-fetched barbershop images for the website
export const barbershopImages = {
  // Gallery images - fetched from Pexels "barbershop" search
  gallery: [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=800",
      srcLarge: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "The Executive",
      category: "Haircut",
      photographer: "Thgusstavo Santana",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg?auto=compress&cs=tinysrgb&w=800",
      srcLarge: "https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Royal Beard",
      category: "Beard",
      photographer: "Rochak Shukla",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/897270/pexels-photo-897270.jpeg?auto=compress&cs=tinysrgb&w=800",
      srcLarge: "https://images.pexels.com/photos/897270/pexels-photo-897270.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Modern Gentleman",
      category: "Haircut",
      photographer: "Marcus Aurelius",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/2061820/pexels-photo-2061820.jpeg?auto=compress&cs=tinysrgb&w=800",
      srcLarge: "https://images.pexels.com/photos/2061820/pexels-photo-2061820.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "The Complete Experience",
      category: "Full Service",
      photographer: "Nappy",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800",
      srcLarge: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Sharp Lines",
      category: "Haircut",
      photographer: "Naval Nurse",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=800",
      srcLarge: "https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Masterpiece",
      category: "Beard",
      photographer: "Oliver Ragfelt",
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/7195807/pexels-photo-7195807.jpeg?auto=compress&cs=tinysrgb&w=800",
      srcLarge: "https://images.pexels.com/photos/7195807/pexels-photo-7195807.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "The Classic",
      category: "Haircut",
      photographer: "Cottonbro",
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/6692941/pexels-photo-6692941.jpeg?auto=compress&cs=tinysrgb&w=800",
      srcLarge: "https://images.pexels.com/photos/6692941/pexels-photo-6692941.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Urban Edge",
      category: "Haircut",
      photographer: "Cottonbro",
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=800",
      srcLarge: "https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "The Renaissance",
      category: "Full Service",
      photographer: "Cottonbro",
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/973406/pexels-photo-973406.jpeg?auto=compress&cs=tinysrgb&w=800",
      srcLarge: "https://images.pexels.com/photos/973406/pexels-photo-973406.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Precision",
      category: "Haircut",
      photographer: "Maksim Goncharenok",
    },
    {
      id: 11,
      src: "https://images.pexels.com/photos/5490277/pexels-photo-5490277.jpeg?auto=compress&cs=tinysrgb&w=800",
      srcLarge: "https://images.pexels.com/photos/5490277/pexels-photo-5490277.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "The Scholar",
      category: "Beard",
      photographer: "Cottonbro",
    },
    {
      id: 12,
      src: "https://images.pexels.com/photos/7697394/pexels-photo-7697394.jpeg?auto=compress&cs=tinysrgb&w=800",
      srcLarge: "https://images.pexels.com/photos/7697394/pexels-photo-7697394.jpeg?auto=compress&cs=tinysrgb&w=1200",
      title: "Signature Look",
      category: "Full Service",
      photographer: "Cottonbro",
    },
  ],
  
  // Hero and CTA background images
  hero: {
    fallback: "https://images.pexels.com/photos/897270/pexels-photo-897270.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  
  // Videos from Pexels API - barbershop themed
  videos: {
    // Hero video - premium barbershop atmosphere
    hero: "https://videos.pexels.com/video-files/3998429/3998429-uhd_2560_1440_25fps.mp4",
    // CTA/Booking video - barber at work
    booking: "https://videos.pexels.com/video-files/5490276/5490276-uhd_2560_1440_25fps.mp4",
    // Alternative HD versions for fallback
    heroHD: "https://videos.pexels.com/video-files/3998429/3998429-hd_1920_1080_25fps.mp4",
    bookingHD: "https://videos.pexels.com/video-files/5490276/5490276-hd_1920_1080_25fps.mp4",
  },
  
  // Gallery preview images (first 4 from gallery)
  preview: [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Classic Fade",
      category: "Haircut",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/3998429/pexels-photo-3998429.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Beard Sculpting",
      category: "Beard",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/897270/pexels-photo-897270.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Executive Style",
      category: "Haircut",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/2061820/pexels-photo-2061820.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "The Full Experience",
      category: "Complete",
    },
  ],
}
