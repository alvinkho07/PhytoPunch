import React from 'react'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import GummyImage from '../img/Kombucha-based Gummy.png'

export const ProductStore = () => {
  const { addToCart } = useCart()

  const products = [
    {
      id: 1,
      name: 'Grape Kombucha Gummy',
      description: 'Functional gummies with natural probiotics and refreshing grape flavor',
      image: GummyImage,
      isImageFile: true,
      price: 24.99,
      available: true,
    },
    {
      id: 2,
      name: 'Orange Vitality',
      description: 'Zesty orange with vitamin C boost and immune support',
      image: '🍊',
      isImageFile: false,
      price: 24.99,
      available: false,
      releaseDate: 'Q2 2026',
    },
    {
      id: 3,
      name: 'Tropical Fusion',
      description: 'Mango, pineapple & passion fruit blend with electrolytes',
      image: '🥭',
      isImageFile: false,
      price: 24.99,
      available: false,
      releaseDate: 'Q3 2026',
    },
    {
      id: 4,
      name: 'Strawberry Bliss',
      description: 'Tangy strawberry with kombucha cultures and vitamin C boost',
      image: '🍓',
      isImageFile: false,
      price: 24.99,
      available: false,
      releaseDate: 'Q3 2026',
    },
    {
      id: 5,
      name: 'Herbal Zen',
      description: 'Green tea, ginger & honey with calming chamomile notes',
      image: '🌿',
      isImageFile: false,
      price: 24.99,
      available: false,
      releaseDate: 'Q4 2026',
    },
    {
      id: 6,
      name: 'Citrus Energy',
      description: 'Lemon, orange & lime with natural B-vitamins',
      image: '🍋',
      isImageFile: false,
      price: 24.99,
      available: false,
      releaseDate: 'Q4 2026',
    },
  ]

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      description: `${product.description} - 60 gummies`,
      image: product.image,
      isImageFile: product.isImageFile,
    })
    alert('Added to cart!')
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
            Choose your favorite fermented flavor. Each pack contains 60 delicious gummies.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className={`relative p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all w-full min-h-min flex flex-col ${
                product.available
                  ? 'bg-white'
                  : 'bg-gradient-to-br from-gray-50 to-gray-100 opacity-90'
              }`}
            >
              {/* Coming Soon Badge */}
              {!product.available && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-4 right-4 bg-kombucha-gold text-white px-3 py-1 rounded-full text-xs font-bold z-10"
                >
                  Coming Soon
                </motion.div>
              )}

              {/* Product Image Container - Fixed Aspect Ratio */}
              <motion.div
                animate={
                  product.available
                    ? { scale: [1, 1.05, 1] }
                    : { opacity: [1, 0.7, 1] }
                }
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-6 w-full aspect-square rounded-xl overflow-hidden flex items-center justify-center"
              >
                {product.isImageFile ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center rounded-xl">
                    <span className="text-6xl drop-shadow-sm">{product.image}</span>
                  </div>
                )}
              </motion.div>

              <h3
                className={`text-2xl font-bold mb-2 line-clamp-2 ${
                  product.available
                    ? 'text-kombucha-berry'
                    : 'text-gray-600'
                }`}
              >
                {product.name}
              </h3>
              <p className={`mb-6 text-sm leading-relaxed flex-grow min-h-20 ${product.available ? 'text-gray-600' : 'text-gray-500'}`}>
                {product.description}
              </p>

              {/* Price & Release Date */}
              <div className="mb-6">
                {product.available ? (
                  <div className="text-3xl font-bold text-kombucha-green">
                    RM{product.price.toFixed(2)}
                  </div>
                ) : (
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">
                      Coming <span className="font-bold text-kombucha-gold">{product.releaseDate}</span>
                    </p>
                    <p className="text-2xl font-bold text-gray-400">
                      RM{product.price.toFixed(2)}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Button */}
              {product.available ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-kombucha-berry text-white py-3 rounded-lg font-semibold hover:bg-kombucha-green transition"
                >
                  Add to Cart
                </motion.button>
              ) : (
                <motion.button
                  disabled
                  className="w-full bg-gray-300 text-gray-600 py-3 rounded-lg font-semibold cursor-not-allowed"
                >
                  Coming Soon
                </motion.button>
              )}

              {/* Coming Soon Message */}
              {!product.available && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xs text-gray-500 text-center mt-4"
                >
                  🚀 Part of our exciting future projects lineup
                </motion.p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Future Projects Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-white rounded-2xl shadow-lg border-2 border-kombucha-gold/30"
        >
          <h3 className="text-2xl font-bold text-kombucha-berry mb-4">🌟 Future Innovations</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            We're constantly innovating and expanding our product line. Our pipeline includes exciting new flavors, functional blends, and wellness-focused formulations designed to meet diverse health goals.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block bg-kombucha-cream text-kombucha-berry px-4 py-2 rounded-full text-sm font-semibold">
              ✨ New Flavors
            </span>
            <span className="inline-block bg-kombucha-cream text-kombucha-berry px-4 py-2 rounded-full text-sm font-semibold">
              🧬 Science-Backed
            </span>
            <span className="inline-block bg-kombucha-cream text-kombucha-berry px-4 py-2 rounded-full text-sm font-semibold">
              💪 Functional Benefits
            </span>
            <span className="inline-block bg-kombucha-cream text-kombucha-berry px-4 py-2 rounded-full text-sm font-semibold">
              🌱 Sustainable
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
