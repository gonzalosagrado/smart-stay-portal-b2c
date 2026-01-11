export interface Hotel {
  name: string
  slug: string
  logoUrl: string | null
  primaryColor: string
  locationLat: number
  locationLon: number
  city: string
}

export interface WeatherData {
  temp: number
  condition: 'sunny' | 'cloudy' | 'rainy' | 'snowy'
  icon: string
  description: string
  updatedAt: string
}

export interface Link {
  id: string
  title: string
  description?: string
  url: string
  icon: string
  category: 'hotel' | 'activities' | 'contact'
}

export interface Activity {
  id: string
  title: string
  description: string
  url: string
  icon: string
  weatherCondition: 'sunny' | 'cloudy' | 'rainy' | 'snowy'
  priority: number
}
