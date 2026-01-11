'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Cloud, Sun, CloudRain, Snowflake } from 'lucide-react'
import { WeatherData } from '@/types/portal'

const weatherIcons = {
  sunny: Sun,
  cloudy: Cloud,
  rainy: CloudRain,
  snowy: Snowflake,
}

const weatherGradients = {
  sunny: 'from-orange-400 to-yellow-300',
  cloudy: 'from-gray-400 to-gray-300',
  rainy: 'from-blue-500 to-blue-400',
  snowy: 'from-blue-200 to-white',
}

const weatherTextColors = {
  sunny: 'text-white',
  cloudy: 'text-white',
  rainy: 'text-white',
  snowy: 'text-gray-800',
}

export function WeatherWidget({ weather }: { weather: WeatherData }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const Icon = weatherIcons[weather.condition]
  const gradient = weatherGradients[weather.condition]
  const textColor = weatherTextColors[weather.condition]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`rounded-2xl p-6 bg-gradient-to-br ${gradient} shadow-lg`}
    >
      <div className={`flex items-center justify-between ${textColor}`}>
        <div>
          <p className="text-sm font-medium opacity-90">Clima Ahora</p>
          <p className="text-4xl font-bold mt-1">
            {Math.round(weather.temp)}°C
          </p>
          <p className="text-sm mt-1 opacity-90">
            {weather.description}
          </p>
        </div>
        <Icon className="w-16 h-16 opacity-80" strokeWidth={1.5} />
      </div>
      <p className={`text-xs mt-4 ${textColor} opacity-70`}>
        {mounted && `Actualizado: ${new Date(weather.updatedAt).toLocaleTimeString('es-AR', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        })}`}
      </p>
    </motion.div>
  )
}
