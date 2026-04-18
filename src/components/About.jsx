import React from 'react'
import { motion } from 'framer-motion'

export const About = () => {
  const milestones = [
    { year: '2023', event: 'Company founded by a group of university students' },
    { year: '2024', event: 'Official product release' },
    { year: '2025', event: 'Won a regional food innovation award' },
    { year: '2026', event: 'Expanding flavor varieties and new product launches' },
  ]

  const upcomingEvents = [
    {
      date: 'June 1',
      title: 'Flagship Product Launch',
      description: 'Introducing our expanded flavor lineup',
    },
    {
      date: 'Q3 2026',
      title: 'Retail Expansion',
      description: 'New retail partnerships & distribution',
    },
    {
      date: 'Q4 2026',
      title: 'Innovation Series',
      description: 'Exciting new functional confectionery products',
    },
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* About Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-kombucha-berry">Our Story</span>
            </h2>
            <div className="space-y-4 mb-4">
              <div>
                <p className="text-sm font-bold text-kombucha-gold mb-2">Background</p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Phyto Punch Co. is a Malaysia-based food manufacturing startup founded by university students with a passion for food innovation and nutrition.
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-kombucha-gold mb-2">Our Mission</p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Making functional nutrition convenient, enjoyable, and part of everyday life through innovative functional confectionery.
                </p>
              </div>
              <div>
                <p className="text-sm font-bold text-kombucha-gold mb-2">Our Vision</p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Redefining snacking through science and flavor—delivering portable snacks with genuine health benefits while establishing a premium brand with continuous flavor innovation.
                </p>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-9xl text-center opacity-50"
          >
            🌿
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-kombucha-berry mb-12 text-center">Our Journey</h3>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex gap-6 items-center ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className="text-right">
                    <p className="text-lg font-bold text-kombucha-gold">{milestone.year}</p>
                    <p className="text-gray-600">{milestone.event}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-kombucha-berry rounded-full flex-shrink-0"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-kombucha-berry mb-12 text-center">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-kombucha-cream p-8 rounded-xl border-2 border-kombucha-gold/50"
              >
                <p className="text-sm font-bold text-kombucha-gold mb-2">{event.date}</p>
                <h4 className="text-xl font-bold text-kombucha-berry mb-3">{event.title}</h4>
                <p className="text-gray-600">{event.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
