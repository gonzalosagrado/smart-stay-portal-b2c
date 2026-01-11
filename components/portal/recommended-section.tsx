'use client'

import { motion } from 'framer-motion'
import { Activity } from '@/types/portal'
import { LinkCard } from './link-card'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function RecommendedSection({ activities }: { activities: Activity[] }) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-gray-900">
          Recomendado Hoy
        </h2>
        <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-medium">
          Ideal para hoy
        </span>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-3"
      >
        {activities.map((activity) => (
          <motion.div key={activity.id} variants={item}>
            <LinkCard
              link={{
                id: activity.id,
                title: activity.title,
                description: activity.description,
                url: activity.url,
                icon: activity.icon,
                category: 'activities',
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
