import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'

export const ProductStore = () => {
  const { addToCart } = useCart()
  const [selectedSizes, setSelectedSizes] = useState({})

  const products = [
    {
      id: 1,
      name: 'Fruitypunch Kombucha Gummy',
      description: 'Functional gummies with natural probiotics and fruity flavor',
      image: '🍬',
      instagram: 'https://www.instagram.com/p/DWLLLmeE43P/?igsh=MXJ3NTIzaG04eDlkcQ==',
    },
  ]

  const sizes = [
    { label: 'Small', value: 'small', price: 9.99, description: '30 gummies' },
    { label: 'Medium', value: 'medium', price: 16.99, description: '60 gummies' },
    { label: 'Large', value: 'large', price: 24.99, description: '100 gummies' },
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              {/* Product Image */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-7xl mb-6 text-center"
              >
                {product.image}
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
                      <div className="text-xs mt-1">${size.price}</div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAddToCart(product, selectedSizes[product.id])}
                  className="w-full bg-kombucha-berry text-white py-3 rounded-lg font-semibold hover:bg-kombucha-green transition"
                >
                  Add to Cart
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
    </section>
  )
}
