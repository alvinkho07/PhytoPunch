import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const Toast = ({ isOpen, message, type = 'info', duration = 4000, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, duration)
      return () => clearTimeout(timer)
    }
  }, [isOpen, duration, onClose])

  const bgColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-kombucha-berry',
    warning: 'bg-yellow-500',
  }

  const icon = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
    warning: '⚠',
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100, y: -20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100, y: -20 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className={`fixed bottom-6 right-6 ${bgColor[type]} text-white px-6 py-4 rounded-lg shadow-xl z-50 flex items-center gap-3 max-w-sm`}
        >
          <span className="text-xl font-bold flex-shrink-0">{icon[type]}</span>
          <p className="font-medium">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
