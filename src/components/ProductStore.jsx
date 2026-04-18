import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { Modal } from './Modal'
import GummyImage from '../img/Kombucha-based Gummy.png'

export const ProductStore = () => {
  const { addToCart } = useCart()
  const [selectedSizes, setSelectedSizes] = useState({})
  const [showDetailsDrawer, setShowDetailsDrawer] = useState(false)

  const products = [
    {
      id: 1,
      name: 'Grape Kombucha Gummy',
      description: 'Functional gummies with natural probiotics and refreshing grape flavor',
      image: GummyImage,
      isImageFile: true,
      instagram: 'https://www.instagram.com/p/DWLLLmeE43P/?igsh=MXJ3NTIzaG04eDlkcQ==',
    },
  ]

  const sizes = [
    { label: 'Small', value: 'small', price: 9.99, description: '30 gummies' },
    { label: 'Medium', value: 'medium', price: 16.99, description: '60 gummies' },
    { label: 'Large', value: 'large', price: 24.99, description: '100 gummies' },
  ]

  const grapeAntioxidantsBenefits = [
    {
      title: 'Resveratrol',
      description: 'Powerful polyphenol found in grape skins',
      benefits: ['Anti-aging properties', 'Heart health support', 'Cognitive function boost'],
      amount: '50mg+ per serving',
    },
    {
      title: 'Anthocyanins',
      description: 'Purple compound giving grapes their color',
      benefits: ['Reduces inflammation', 'Supports eye health', 'Enhances antioxidant power'],
      amount: '80mg+ per serving',
    },
    {
      title: 'Proanthocyanidins',
      description: 'Concentrated in grape seeds and skins',
      benefits: ['Improves blood circulation', 'Strengthens blood vessels', 'Supports vascular health'],
      amount: '120mg+ per serving',
    },
  ]

  const handleAddToCart = (product, size) => {
    if (!size) {
      alert('Please select a size')
      return
    }
    const sizeInfo = sizes.find((s) => s.value === size)
    addToCart({
      ...product,
      size,
      price: sizeInfo.price,
      description: sizeInfo.description,
    })
    setSelectedSizes({ ...selectedSizes, [product.id]: null })
    alert('Added to cart!')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-6 bg-kombucha-cream">
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
            <span className="text-kombucha-berry">The Goods</span>
            <span className="text-kombucha-green"> Flavors</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Choose your favorite fermented flavor and pack size.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className={`grid grid-cols-1 ${products.length === 1 ? 'justify-items-center md:grid-cols-1' : 'md:grid-cols-3'} gap-8`}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow w-full max-w-md"
            >
              {/* Product Image */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-6 text-center"
              >
                {product.isImageFile ? (
                  <img src={product.image} alt={product.name} className="w-full h-auto max-w-xs mx-auto" />
                ) : (
                  <div className="text-7xl">{product.image}</div>
                )}
              </motion.div>

              <h3 className="text-2xl font-bold text-kombucha-berry mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Size Selection */}
              <div className="space-y-3 mb-6">
                <label className="block text-sm font-semibold text-kombucha-berry">Size</label>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <motion.button
                      key={size.value}
                      onClick={() => setSelectedSizes({ ...selectedSizes, [product.id]: size.value })}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-lg transition font-medium text-sm ${
                        selectedSizes[product.id] === size.value
                          ? 'bg-kombucha-berry text-white'
                          : 'bg-kombucha-light text-kombucha-berry border border-kombucha-berry/30'
                      }`}
                    >
                      <div>{size.label}</div>
                      <div className="text-xs mt-1">RM{size.price}</div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAddToCart(product, selectedSizes[product.id])}
                  className="w-full bg-kombucha-berry text-white py-3 rounded-lg font-semibold hover:bg-kombucha-green transition"
                >
                  Add to Cart
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowDetailsDrawer(true)}
                  className="w-full border-2 border-kombucha-berry text-kombucha-berry py-3 rounded-lg font-semibold hover:bg-kombucha-berry hover:text-white transition"
                >
                  Learn More About Antioxidants
                </motion.button>
                {product.instagram && (
                  <motion.a
                    href={product.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2"
                  >
                    📷 Instagram
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Grape Antioxidants Details Drawer/Modal */}
      <Modal
        isOpen={showDetailsDrawer}
        onClose={() => setShowDetailsDrawer(false)}
        title="🍇 Grape Antioxidants & Health Benefits"
        size="lg"
      >
        <div className="space-y-6">
          {/* Intro */}
          <p className="text-gray-700 leading-relaxed">
            Our Grape Kombucha Gummies combine the probiotics of fermented kombucha with the powerful antioxidants found in purple grapes. This dynamic duo creates a premium health supplement that targets multiple aspects of wellness.
          </p>

          {/* Benefits Overview */}
          <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
            <h3 className="font-bold text-kombucha-berry mb-3">Why Grapes + Kombucha?</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-lg">✨</span>
                <span>Synergistic antioxidant effect for enhanced benefits</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">💪</span>
                <span>Complete support for heart, brain, and immunity</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-lg">🧬</span>
                <span>Natural fermentation activates bio-available nutrients</span>
              </li>
            </ul>
          </div>

          {/* Detailed Antioxidants */}
          <div>
            <h3 className="font-bold text-kombucha-berry mb-4">Antioxidant Powerhouses</h3>
            <div className="space-y-4">
              {grapeAntioxidantsBenefits.map((antioxidant, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  className="border-l-4 border-purple-400 pl-4 py-2"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-kombucha-berry">{antioxidant.title}</h4>
                    <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">
                      {antioxidant.amount}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{antioxidant.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {antioxidant.benefits.map((benefit, bidx) => (
                      <span
                        key={bidx}
                        className="inline-block bg-green-50 text-green-700 text-xs px-2 py-1 rounded"
                      >
                        ✓ {benefit}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Health Benefits */}
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-kombucha-berry mb-3">Combined Health Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                '🫀 Cardiovascular health',
                '🧠 Cognitive enhancement',
                '🛡️ Immune system support',
                '⚡ Energy & vitality',
                '👁️ Vision clarity',
                '🧬 Cellular regeneration',
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-2 p-2"
                >
                  <span className="text-lg">{benefit.split(' ')[0]}</span>
                  <span className="text-gray-700">{benefit.split(' ').slice(1).join(' ')}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-kombucha-berry to-kombucha-green text-white py-3 rounded-lg font-bold hover:shadow-lg transition"
          >
            Add to Cart & Start Your Journey
          </motion.button>
        </div>
      </Modal>
    </section>
  )
}
