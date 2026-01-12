import { Hotel, WeatherData, Activity, Link } from '@/types/portal'
import { createClient } from '@/lib/supabase/server'

export async function getHotel(id: string): Promise<Hotel> {
  const supabase = await createClient()

  const { data: hotel, error } = await supabase
    .from('hotels')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !hotel) {
    throw new Error('Hotel not found')
  }

  return {
    name: hotel.name,
    slug: hotel.id, // Using ID as slug for now
    logoUrl: hotel.logo || null,
    primaryColor: hotel.primary_color || '#3B82F6',
    locationLat: -41.1335, // Default Bariloche for now
    locationLon: -71.3103, // Default Bariloche for now
    city: hotel.address?.split(',')[0] || 'Bariloche',
  }
}

export async function getWeather(lat: number, lon: number): Promise<WeatherData | null> {
  // Use mock weather for now
  return {
    temp: 18,
    condition: 'cloudy',
    icon: '04d',
    description: 'Parcialmente nublado',
    updatedAt: new Date().toISOString(),
  }
}

export async function getRecommendedActivities(weather: WeatherData | null): Promise<Activity[]> {
  // Return static activities for demo purposes, as we haven't migrated activities table fully yet
  return [
    {
      id: '1',
      title: 'City Tour Centro Cívico',
      description: 'Recorrido guiado por el centro histórico',
      url: '#',
      icon: '🚶',
      weatherCondition: 'cloudy',
      priority: 1,
    }
  ]
}

export async function getHotelLinks(hotelId: string): Promise<Link[]> {
  const supabase = await createClient()

  const { data: links } = await supabase
    .from('links')
    .select('*')
    .eq('hotel_id', hotelId)
    .eq('is_active', true)
    // Filter out contact links from the main list if we want them separate, 
    // or we can fetch all and filter in memory. The UI splits them.
    // Based on Page logic: LinksSection "Servicios del Hotel" uses getHotelLinks
    // and LinksSection "Contacto" uses getContactLinks.
    // So getHotelLinks should probably NOT include 'contact'.
    .neq('category', 'contact')
    .order('order_index')

  if (!links) return []

  return links.map((link: any) => ({
    id: link.id,
    title: link.title,
    description: link.description || '',
    url: link.url,
    icon: link.icon || 'Link',
    category: link.category,
    priority: link.order_index,
  }))
}

export async function getContactLinks(hotelId: string): Promise<Link[]> {
  const supabase = await createClient()

  const { data: links } = await supabase
    .from('links')
    .select('*')
    .eq('hotel_id', hotelId)
    .eq('category', 'contact')
    .eq('is_active', true)
    .order('order_index')

  if (!links) return []

  return links.map((link: any) => ({
    id: link.id,
    title: link.title,
    description: link.description || '',
    url: link.url,
    icon: link.icon || 'Phone',
    category: 'contact',
    priority: link.order_index,
  }))
}
