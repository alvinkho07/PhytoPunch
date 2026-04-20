import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { CheckoutModal } from './CheckoutModal'

export const Cart = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart()
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  const handleProceedToCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!')
      return
    }
    setIsCheckoutOpen(true)
  }

  const handleCheckoutComplete = () => {
    setIsCheckoutOpen(false)
    clearCart()
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ type: 'spring', damping: 20 }}
            className="fixed right-0 top-0 h-full w-full md:w-96 bg-white z-50 overflow-y-auto shadow-2xl"
          >
            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-kombucha-berry">Your Cart</h2>
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-kombucha-berry transition text-xl"
                >
                  ✕
                </button>
              </div>

              {/* Cart Items */}
              {!cart || cart.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-12 text-center text-gray-500"
                >
                  <div className="text-4xl mb-4">🛒</div>
                  <p>Your cart is empty</p>
                </motion.div>
              ) : (
                <motion.div className="space-y-4">
                  {(cart || []).map((item, index) => (
                    <motion.div
                      key={`${item?.id}-${item?.size}-${index}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="bg-kombucha-cream p-4 rounded-lg border border-kombucha-gold/30"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-bold text-kombucha-berry">{item?.name || 'Product'}</h4>
                          {item?.size && <p className="text-sm text-gray-600">{item.size.charAt(0).toUpperCase() + item.size.slice(1)}</p>}
                          <p className="text-xs text-gray-500 mt-1">{item?.description || ''}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item?.id, item?.size)}
                          className="text-gray-400 hover:text-red-500 transition"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item?.id, item?.size, (item?.quantity || 1) - 1)}
                            className="w-6 h-6 bg-kombucha-light rounded hover:bg-kombucha-berry hover:text-white transition"
                          >
                            −
                          </button>
                          <span className="w-8 text-center font-semibold">{item?.quantity || 1}</span>
                          <button
                            onClick={() => updateQuantity(item?.id, item?.size, (item?.quantity || 1) + 1)}
                            className="w-6 h-6 bg-kombucha-light rounded hover:bg-kombucha-berry hover:text-white transition"
                          >
                            +
                          </button>
                        </div>
                        <p className="font-bold text-kombucha-berry">RM{((item?.price || 0) * (item?.quantity || 1)).toFixed(2)}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Divider */}
              {cart?.length > 0 && <div className="border-t-2 border-gray-200"></div>}

              {/* Total */}
              {cart?.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <div className="flex justify-between items-center text-lg font-bold">
                    <span>Total:</span>
                    <span className="text-kombucha-berry">RM{(getTotalPrice() || 0).toFixed(2)}</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleProceedToCheckout}
                    className="w-full bg-kombucha-berry text-white py-3 rounded-lg font-bold hover:bg-kombucha-green transition"
                  >
                    Proceed to Checkout
                  </motion.button>
                </motion.div>
              )}

              {/* Back to Shop Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="w-full mt-4 border-2 border-kombucha-berry text-kombucha-berry py-2 rounded-lg font-semibold hover:bg-kombucha-berry hover:text-white transition"
              >
                Back to Shop
              </motion.button>
            </div>
          </motion.div>

          {/* Checkout Modal */}
          <CheckoutModal
            isOpen={isCheckoutOpen}
            onClose={() => setIsCheckoutOpen(false)}
            onComplete={handleCheckoutComplete}
            total={getTotalPrice()}
          />
        </>
      )}
    </AnimatePresence>
  )
}
