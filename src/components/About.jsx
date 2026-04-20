import React from 'react'
import { motion } from 'framer-motion'
import { ExpandableTimeline } from './ExpandableTimeline'
import Logo from '../img/Logo.png'

export const About = () => {
  const milestones = [
    {
      year: '2023',
      event: 'Company founded by a group of university students',
      storyDescription: 'A passion project born in a university lab where four food science students discovered the perfect formula for fermented gummies. Working late nights between classes, they perfected their first batch of kombucha-based gummies.',
      highlights: ['Lab Discovery', 'First Recipe', 'Founder Team'],
    },
    {
      year: '2024',
      event: 'Official product release',
      storyDescription: 'After months of rigorous testing and refinement, Phyto Punch officially launched their flagship Grape Kombucha Gummies to the market. The initial production run sold out in just 3 weeks!',
      highlights: ['Market Launch', 'Sold Out', 'First Customers'],
    },
    {
      year: '2025',
      event: 'Won a regional food innovation award',
      storyDescription: 'Recognized for their innovative approach to functional confectionery, the team received prestigious awards from multiple regional organizations. This validation sparked expansion plans and attracted industry partnerships.',
      highlights: ['Award Winner', 'Industry Recognition', 'New Partnerships'],
    },
    {
      year: '2026',
      event: 'Expanding flavor varieties and new product launches',
      storyDescription: 'Building on their success, Phyto Punch is expanding with new flavors and complementary products. The team is now working on tropical, berry, and herbal blends to meet growing demand.',
      highlights: ['New Flavors', 'Product Line', 'Growth Phase'],
    },
  ]

  const upcomingEvents = [
    {
      date: 'July 15, 2026',
      title: 'Malaysian International Food & Beverage Trade Fair (MIFB)',
      description: 'Showcasing our Kombucha Gummies to industry professionals and retailers',
    },
    {
      date: 'July 21-23, 2026',
      title: 'Food & Drinks Malaysia by SIAL',
      description: 'Largest food & beverage trade show in Southeast Asia',
    },
    {
      date: 'Sept 10-12, 2026',
      title: 'ASEAN Food & Beverage Exhibition',
      description: 'Connecting with regional distributors and B2B partners',
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
                  Phyto Punch Co. is a Malaysia-based food manufacturing startup founded by TARUMT food science students with a passion for food innovation and nutrition.
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
                  Redefining snacking through science and flavour, delivering portable snacks with genuine health benefits while establishing a premium brand with continuous flavour innovation.
                </p>
              </div>
            </div>
          </div>
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="flex items-center justify-center"
          >
            <img src={Logo} alt="Phyto Punch" className="w-64 h-auto" />
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
          <p className="text-center text-gray-600 mb-8">Click on each milestone to discover our story</p>
          <ExpandableTimeline milestones={milestones} />
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
