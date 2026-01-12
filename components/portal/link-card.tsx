'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Copy, Check, Wifi, Phone, Link as LinkIcon, Instagram, Facebook, Mail, MapPin, Utensils, Car, Ticket, Globe } from 'lucide-react'
import { Link } from '@/types/portal'

const IconMap: Record<string, any> = {
  Wifi,
  Phone,
  Link: LinkIcon,
  Instagram,
  Facebook,
  Mail,
  MapPin,
  Utensils,
  Car,
  Ticket,
  Globe
}

export function LinkCard({ link }: { link: Link }) {
  const isExternal = link.url.startsWith('http') || link.url.startsWith('mailto:') || link.url.startsWith('tel:')
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(link.url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const Container = isExternal ? motion.a : motion.button

  const containerProps = isExternal
    ? {
      href: link.url,
      target: '_blank',
      rel: 'noopener noreferrer'
    }
    : {
      onClick: handleCopy,
      type: 'button' as const
    }

  const IconComponent = typeof link.icon === 'string' ? IconMap[link.icon] : null

  return (
    <Container
      {...containerProps}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow min-h-[44px] w-full text-left"
    >
      <div className="flex items-center gap-3 flex-1">
        <span className="text-2xl flex-shrink-0 text-blue-600" aria-hidden="true">
          {IconComponent ? <IconComponent className="w-6 h-6" /> : link.icon}
        </span>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-gray-900 truncate">
            {link.title}
          </p>
          {link.description && (
            <p className="text-sm text-gray-500 truncate">
              {link.description}
            </p>
          )}
        </div>
      </div>

      {isExternal ? (
        <ExternalLink
          className="w-5 h-5 text-gray-400 flex-shrink-0 ml-2"
          aria-label="Opens in new tab"
        />
      ) : (
        copied ? (
          <Check
            className="w-5 h-5 text-green-500 flex-shrink-0 ml-2"
            aria-label="Copied"
          />
        ) : (
          <Copy
            className="w-5 h-5 text-gray-400 flex-shrink-0 ml-2"
            aria-label="Copy to clipboard"
          />
        )
      )}
    </Container>
  )
}
