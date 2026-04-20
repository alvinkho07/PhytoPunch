import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Modal } from './Modal'

export const Benefits = () => {
  const [selectedBenefit, setSelectedBenefit] = useState(null)

  const benefits = [
    {
      icon: '🦠',
      title: 'Probiotics',
      description: 'Live cultures to support gut health and digestion',
      details: {
        fullTitle: 'Probiotics & Gut Health',
        breakdown: [
          { label: 'CFU Count', value: '2 Billion +', description: 'Live probiotic cultures per serving' },
          { label: 'Strain Types', value: '5+', description: 'Diverse bacterial strains for optimal benefits' },
          { label: 'Shelf Stability', value: '12 Months', description: 'Maintained potency with proper storage' },
        ],
        benefits: ['Improves digestion', 'Enhances nutrient absorption', 'Supports immune function', 'Reduces bloating'],
      },
    },
    {
      icon: '🛡️',
      title: 'Antioxidants',
      description: 'Powerful antioxidants to combat oxidative stress',
      details: {
        fullTitle: 'Antioxidant Power',
        breakdown: [
          { label: 'ORAC Score', value: '2,400+', description: 'Oxygen Radical Absorbance Capacity' },
          { label: 'Polyphenols', value: '150mg+', description: 'From fermented tea and added fruits' },
          { label: 'Free Radical', value: '95%+ Neutralized', description: 'Neutralization capacity per serving' },
        ],
        benefits: ['Reduces oxidative stress', 'Supports cellular health', 'Slows aging process', 'Boosts skin radiance'],
      },
    },
    {
      icon: '🍃',
      title: 'Natural Ingredients',
      description: 'Pure, natural, and sustainably sourced ingredients',
      details: {
        fullTitle: 'Certified Natural Sourcing',
        breakdown: [
          { label: 'Certification', value: 'USDA Organic', description: 'Third-party verified organic ingredients' },
          { label: 'Sugar Content', value: '3g per serving', description: 'Low glycemic impact gummies' },
          { label: 'GMO-Free', value: '100%', description: 'No genetically modified organisms' },
        ],
        benefits: ['No artificial preservatives', 'No synthetic additives', 'Eco-friendly farming', 'Ethical sourcing'],
      },
    },
    {
      icon: '❤️',
      title: 'Immune Support',
      description: 'Fermented blend to boost your immune system',
      details: {
        fullTitle: 'Immune System Boost',
        breakdown: [
          { label: 'Vitamin C', value: '50%+ DV', description: 'Supports immune cell production' },
          { label: 'Fermented Tea', value: 'SCOBY-derived', description: 'Symbiotic culture compounds' },
          { label: 'Zinc', value: '15% DV', description: 'Essential mineral for immune response' },
        ],
        benefits: ['Strengthens immune response', 'Reduces inflammation', 'Faster recovery from illness', 'Year-round protection'],
      },
    },
    {
      icon: '✨',
      title: 'Better Digestion',
      description: 'Aids in nutrient absorption and gut wellness',
      details: {
        fullTitle: 'Digestive Wellness',
        breakdown: [
          { label: 'Acetic Acid', value: '0.5%', description: 'Aids stomach acid balance' },
          { label: 'Enzymes', value: 'Active', description: 'Supports natural digestion process' },
          { label: 'Fiber', value: '2g per serving', description: 'Prebiotic support for good bacteria' },
        ],
        benefits: ['Eases bloating and gas', 'Improves nutrient absorption', 'Supports regular digestion', 'Reduces food intolerances'],
      },
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-kombucha-berry">Benefits</span>
            <span className="text-kombucha-green"> of Fermented Goodness</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the power of traditional fermentation combined with modern convenience.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:auto-rows-max justify-items-center"
        >
          {benefits.slice(0, 3).map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-kombucha-cream p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow w-full max-w-sm"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-kombucha-berry mb-2">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedBenefit(index)}
                className="text-kombucha-berry font-semibold hover:text-kombucha-green transition"
              >
                Learn More →
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Second Row - Centered */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mt-8 md:mx-auto md:max-w-2xl"
        >
          {benefits.slice(3).map((benefit, index) => (
            <motion.div
              key={index + 3}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-kombucha-cream p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow w-full max-w-sm"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-kombucha-berry mb-2">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedBenefit(index + 3)}
                className="text-kombucha-berry font-semibold hover:text-kombucha-green transition"
              >
                Learn More →
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Benefit Details Modal */}
      {selectedBenefit !== null && (
        <Modal
          isOpen={true}
          onClose={() => setSelectedBenefit(null)}
          title={benefits[selectedBenefit].details.fullTitle}
          size="lg"
        >
          <div className="space-y-6">
            {/* Nutritional Breakdown */}
            <div>
              <h3 className="text-lg font-bold text-kombucha-berry mb-4">Nutritional Breakdown</h3>
              <div className="space-y-3">
                {benefits[selectedBenefit].details.breakdown.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-3 bg-kombucha-cream rounded-lg"
                  >
                    <div className="text-2xl">
                      {['🦠', '⚡', '🛡️', '🍃', '❤️', '✨'][selectedBenefit]}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-kombucha-berry">{item.label}</p>
                      <p className="text-lg font-semibold text-kombucha-green">{item.value}</p>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div>
              <h3 className="text-lg font-bold text-kombucha-berry mb-4">Key Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {benefits[selectedBenefit].details.benefits.map((ben, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-2 p-2 bg-green-50 rounded-lg"
                  >
                    <span className="text-xl">✓</span>
                    <span className="text-gray-700">{ben}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedBenefit(null)}
              className="w-full bg-kombucha-berry text-white py-3 rounded-lg font-semibold hover:bg-kombucha-green transition mt-4"
            >
              Ready to Experience These Benefits?
            </motion.button>
          </div>
        </Modal>
      )}
    </section>
  )
}
