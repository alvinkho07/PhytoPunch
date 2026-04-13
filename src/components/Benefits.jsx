import React from 'react'
import { motion } from 'framer-motion'

export const Benefits = () => {
  const benefits = [
    {
      icon: '🦠',
      title: 'Probiotics',
      description: 'Live cultures to support gut health and digestion',
    },
    {
      icon: '⚡',
      title: 'Natural Energy',
      description: 'B vitamins and natural caffeine from kombucha',
    },
    {
      icon: '🛡️',
      title: 'Antioxidants',
      description: 'Powerful antioxidants to combat oxidative stress',
    },
    {
      icon: '🍃',
      title: 'Organic Ingredients',
      description: 'Pure, natural, and sustainably sourced ingredients',
    },
    {
      icon: '❤️',
      title: 'Immune Support',
      description: 'Fermented blend to boost your immune system',
    },
    {
      icon: '✨',
      title: 'Better Digestion',
      description: 'Aids in nutrient absorption and gut wellness',
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-kombucha-cream p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-kombucha-berry mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
