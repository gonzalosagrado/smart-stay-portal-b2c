'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { Link } from '@/types/portal'

export function LinkCard({ link }: { link: Link }) {
  const isExternal = link.url.startsWith('http')

  return (
    <motion.a
      href={link.url}
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow min-h-[44px]"
    >
      <div className="flex items-center gap-3 flex-1">
        <span className="text-2xl flex-shrink-0" aria-hidden="true">
          {link.icon}
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
      {isExternal && (
        <ExternalLink
          className="w-5 h-5 text-gray-400 flex-shrink-0 ml-2"
          aria-label="Opens in new tab"
        />
      )}
    </motion.a>
  )
}
