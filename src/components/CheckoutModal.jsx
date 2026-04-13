import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const CheckoutModal = ({ isOpen, onClose, onComplete, total }) => {
  const [step, setStep] = useState('form') // form, processing, success
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.address || !formData.cardNumber) {
      alert('Please fill in all fields')
      return
    }
    
    // Simulate payment processing
    setStep('processing')
    setTimeout(() => {
      setStep('success')
      setTimeout(() => {
        onComplete()
        setStep('form')
        setFormData({ name: '', email: '', address: '', cardNumber: '' })
      }, 2000)
    }, 1500)
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
            className="fixed inset-0 bg-black/60 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 overflow-hidden">
              <AnimatePresence mode="wait">
                {step === 'form' && (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <h3 className="text-2xl font-bold text-kombucha-berry mb-6">Checkout</h3>

                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-kombucha-berry mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-kombucha-berry"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-kombucha-berry mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-kombucha-berry"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Address */}
                    <div>
                      <label className="block text-sm font-semibold text-kombucha-berry mb-2">
                        Shipping Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-kombucha-berry"
                        placeholder="123 Main St, City, State"
                      />
                    </div>

                    {/* Card Number */}
                    <div>
                      <label className="block text-sm font-semibold text-kombucha-berry mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-kombucha-berry"
                        placeholder="1234 5678 9012 3456"
                        maxLength="19"
                      />
                    </div>

                    {/* Total */}
                    <div className="bg-kombucha-cream p-4 rounded-lg mb-6">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Total Amount:</span>
                        <span className="text-2xl font-bold text-kombucha-berry">
                          ${total.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 border-2 border-gray-300 text-gray-700 py-2 rounded-lg font-semibold hover:border-gray-400 transition"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-kombucha-berry text-white py-2 rounded-lg font-semibold hover:bg-kombucha-green transition"
                      >
                        Pay Now
                      </button>
                    </div>
                  </motion.form>
                )}

                {step === 'processing' && (
                  <motion.div
                    key="processing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 space-y-4"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      className="text-5xl mb-4"
                    >
                      ⏳
                    </motion.div>
                    <p className="text-gray-600 font-semibold">Processing Payment...</p>
                  </motion.div>
                )}

                {step === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center py-12 space-y-4"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6 }}
                      className="text-6xl mb-4"
                    >
                      ✅
                    </motion.div>
                    <h3 className="text-2xl font-bold text-kombucha-green">Payment Successful!</h3>
                    <p className="text-gray-600">Thank you for your order. Get ready to punch up your wellness! 🍇</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
