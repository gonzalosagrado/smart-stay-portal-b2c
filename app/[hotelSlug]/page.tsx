import { Suspense } from 'react'
import { Metadata } from 'next'
import { HotelHeader } from '@/components/portal/hotel-header'
import { WeatherWidget } from '@/components/portal/weather-widget'
import { WeatherSkeleton } from '@/components/portal/weather-skeleton'
import { RecommendedSection } from '@/components/portal/recommended-section'
import { LinksSection } from '@/components/portal/links-section'
import { Footer } from '@/components/portal/footer'
import {
  getHotel,
  getWeather,
  getRecommendedActivities,
  getHotelLinks,
  getContactLinks
} from '@/lib/data'

export const revalidate = 1800 // 30 minutes ISR

interface PageProps {
  params: Promise<{ hotelSlug: string }>
}

export default async function PortalPage({ params }: PageProps) {
  const { hotelSlug } = await params
  const hotel = await getHotel(hotelSlug)
  const weather = await getWeather(hotel.locationLat, hotel.locationLon)
  const activities = await getRecommendedActivities(weather)
  const hotelLinks = await getHotelLinks()
  const contactLinks = await getContactLinks()

  return (
    <main
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
      style={{
        '--primary-color': hotel.primaryColor
      } as React.CSSProperties}
    >
      <div className="max-w-md mx-auto px-4 py-8 space-y-6">
        {/* Hotel Header */}
        <HotelHeader hotel={hotel} />

        {/* Weather Widget */}
        <Suspense fallback={<WeatherSkeleton />}>
          {weather && <WeatherWidget weather={weather} />}
        </Suspense>

        {/* Recommended Activities */}
        {activities.length > 0 && (
          <RecommendedSection activities={activities} />
        )}

        {/* Hotel Services */}
        <LinksSection
          title="Servicios del Hotel"
          links={hotelLinks}
        />

        {/* Contact */}
        <LinksSection
          title="Contacto"
          links={contactLinks}
        />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}

// Generate static params for known hotels
export async function generateStaticParams() {
  return [
    { hotelSlug: 'vista-lago' },
  ]
}

// Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { hotelSlug } = await params
  const hotel = await getHotel(hotelSlug)

  return {
    title: `${hotel.name} - Guest Portal`,
    description: `${hotel.name} smart guest portal with weather and personalized recommendations`,
    openGraph: {
      title: hotel.name,
      description: 'Your digital concierge',
      images: [hotel.logoUrl || '/og-image.png'],
    },
  }
}
