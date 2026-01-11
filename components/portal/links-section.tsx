'use client'

import { motion } from 'framer-motion'
import { Link } from '@/types/portal'
import { LinkCard } from './link-card'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function LinksSection({
  title,
  links
}: {
  title: string
  links: Link[]
}) {
  return (
    <section>
      <h2 className="text-lg font-medium text-gray-900 mb-4">
        {title}
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-3"
      >
        {links.map((link) => (
          <motion.div key={link.id} variants={item}>
            <LinkCard link={link} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
