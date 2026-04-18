import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const ExpandableTimeline = ({ milestones }) => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  return (
    <div className="space-y-6">
      {milestones.map((milestone, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`flex gap-6 items-start ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
        >
          <div className="flex-1">
            <motion.div
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className="cursor-pointer group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-right group-hover:text-kombucha-green transition">
                <p className="text-lg font-bold text-kombucha-gold">{milestone.year}</p>
                <p className="text-gray-600 font-semibold group-hover:text-kombucha-berry transition">
                  {milestone.event}
                </p>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 text-right"
                  >
                    <div className="bg-kombucha-cream p-4 rounded-lg">
                      <p className="text-sm text-gray-600 mb-3">{milestone.storyDescription}</p>
                      <div className="flex justify-end gap-2 flex-wrap">
                        {milestone.highlights?.map((highlight, i) => (
                          <span
                            key={i}
                            className="inline-block bg-kombucha-berry/10 text-kombucha-berry px-3 py-1 rounded-full text-xs font-semibold"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Timeline Dot */}
          <motion.div
            whileHover={{ scale: 1.3 }}
            className="w-6 h-6 bg-kombucha-berry rounded-full flex-shrink-0 mt-2 cursor-pointer shadow-md"
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          />

          <div className="flex-1" />
        </motion.div>
      ))}
    </div>
  )
}
