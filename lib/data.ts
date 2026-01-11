import { Hotel, WeatherData, Activity, Link } from '@/types/portal'

export async function getHotel(slug: string): Promise<Hotel> {
  // This will be replaced with Supabase call
  return {
    name: 'Hotel Vista Lago',
    slug: 'vista-lago',
    logoUrl: null,
    primaryColor: '#3B82F6',
    locationLat: -41.1335,
    locationLon: -71.3103,
    city: 'Bariloche',
  }
}

export async function getWeather(lat: number, lon: number): Promise<WeatherData | null> {
  try {
    // Simulate API call - replace with OpenWeatherMap later
    return {
      temp: 18,
      condition: 'cloudy',
      icon: '04d',
      description: 'Parcialmente nublado',
      updatedAt: new Date().toISOString(),
    }
  } catch (error) {
    console.error('Weather fetch failed:', error)
    return null
  }
}

export async function getRecommendedActivities(weather: WeatherData | null): Promise<Activity[]> {
  const allActivities: Activity[] = [
    {
      id: '1',
      title: 'City Tour Centro Cívico',
      description: 'Recorrido guiado por el centro histórico',
      url: 'https://example.com/city-tour',
      icon: '🚶',
      weatherCondition: 'cloudy',
      priority: 1,
    },
    {
      id: '2',
      title: 'Almorzar en Restaurante Vista',
      description: 'Cocina patagónica con vista al lago',
      url: 'https://example.com/restaurant',
      icon: '🍽️',
      weatherCondition: 'cloudy',
      priority: 2,
    },
    {
      id: '3',
      title: 'Museo de la Patagonia',
      description: 'Historia y cultura regional',
      url: 'https://example.com/museum',
      icon: '🏛️',
      weatherCondition: 'cloudy',
      priority: 3,
    },
    {
      id: '4',
      title: 'Trekking Cerro Campanario',
      description: 'Vista panorámica 360° de la región',
      url: 'https://example.com/trekking',
      icon: '🥾',
      weatherCondition: 'sunny',
      priority: 1,
    },
    {
      id: '5',
      title: 'Playa Bonita',
      description: 'Relax junto al lago Nahuel Huapi',
      url: 'https://example.com/beach',
      icon: '🏖️',
      weatherCondition: 'sunny',
      priority: 2,
    },
    {
      id: '6',
      title: 'Spa & Wellness',
      description: 'Masajes y tratamientos relajantes',
      url: 'https://example.com/spa',
      icon: '💆',
      weatherCondition: 'rainy',
      priority: 1,
    },
    {
      id: '7',
      title: 'Tour de Cervecerías',
      description: 'Degustación de cervezas artesanales',
      url: 'https://example.com/beer-tour',
      icon: '🍺',
      weatherCondition: 'rainy',
      priority: 2,
    },
    {
      id: '8',
      title: 'Esquí Cerro Catedral',
      description: 'Temporada de nieve en el mejor centro',
      url: 'https://example.com/ski',
      icon: '⛷️',
      weatherCondition: 'snowy',
      priority: 1,
    },
  ]

  if (!weather) return allActivities.slice(0, 3)

  return allActivities
    .filter(a => a.weatherCondition === weather.condition)
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 3)
}

export async function getHotelLinks(): Promise<Link[]> {
  return [
    {
      id: '1',
      title: 'WiFi Password',
      description: 'Red: VistaLago_Guests | Clave: vista2024',
      url: '#',
      icon: '📶',
      category: 'hotel',
    },
    {
      id: '2',
      title: 'Menú del Restaurant',
      description: 'Ver carta completa',
      url: 'https://example.com/menu',
      icon: '🍴',
      category: 'hotel',
    },
    {
      id: '3',
      title: 'Reservar Spa',
      description: 'Turnos disponibles',
      url: 'https://example.com/spa-booking',
      icon: '💆',
      category: 'hotel',
    },
  ]
}

export async function getContactLinks(): Promise<Link[]> {
  return [
    {
      id: '1',
      title: 'WhatsApp Hotel',
      description: '+54 294 1234567',
      url: 'https://wa.me/5492941234567',
      icon: '💬',
      category: 'contact',
    },
    {
      id: '2',
      title: 'Email',
      description: 'info@vistalago.com.ar',
      url: 'mailto:info@vistalago.com.ar',
      icon: '📧',
      category: 'contact',
    },
    {
      id: '3',
      title: 'Instagram',
      description: '@hotelvistlago',
      url: 'https://instagram.com/hotelvistlago',
      icon: '📸',
      category: 'contact',
    },
  ]
}
