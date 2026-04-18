import React from 'react'
import { motion } from 'framer-motion'
import GummyImage from '../img/gummy.png'

export const Hero = ({ onShopClick, onLearnMoreClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-kombucha-cream via-white to-kombucha-light pt-20 flex items-center justify-center overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Content */}
        <motion.div variants={itemVariants} className="space-y-6">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold leading-tight"
          >
            <span className="text-kombucha-berry">Phyto Punch</span>
            <br />
            <span className="text-kombucha-green">Kombucha Gummies</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Harness the power of fermented kombucha in delicious, chewable gummies. Packed with probiotics, antioxidants, and natural energy to elevate your wellness routine.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4 pt-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onShopClick}
              className="bg-kombucha-berry text-white px-8 py-3 rounded-lg font-semibold hover:bg-kombucha-green transition transform">
              Shop Now
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onLearnMoreClick}
              className="border-2 border-kombucha-berry text-kombucha-berry px-8 py-3 rounded-lg font-semibold hover:bg-kombucha-berry hover:text-white transition">
              Learn More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          variants={itemVariants}
          className="relative h-96 md:h-full flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative w-64 h-64 md:w-80 md:h-80"
          >
            {/* Gummy Bottle Visual */}
            <div className="w-full h-full bg-gradient-to-br from-kombucha-berry to-kombucha-green rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              <div className="text-center">
                <img src={GummyImage} alt="Premium Gummies" className="w-32 h-32 object-contain mx-auto mb-2" />
                <p className="text-white font-bold text-lg">Premium Gummies</p>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-10 -right-10 text-5xl opacity-50"
            >
              ✨
            </motion.div>
            <motion.div
              animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-10 -left-10 text-5xl opacity-50"
            >
              🌿
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
