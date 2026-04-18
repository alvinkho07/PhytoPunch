import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import Logo from '../img/Logo.png'

export const Navbar = ({ onCartClick, onNavClick }) => {
  const { getTotalItems } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['Hero', 'Benefits', 'Products', 'About', 'FAQ']

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <img src={Logo} alt="Phyto Punch Logo" className="h-10 w-auto" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onNavClick(item)}
              className="text-sm font-medium text-gray-700 hover:text-kombucha-berry transition"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Cart Button */}
        <button
          onClick={onCartClick}
          className="relative bg-kombucha-berry text-white px-4 py-2 rounded-lg hover:bg-kombucha-green transition font-medium text-sm flex items-center gap-2"
        >
          🛒 Cart
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-kombucha-gold text-kombucha-berry w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
              {getTotalItems()}
            </span>
          )}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-kombucha-berry"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-gray-200 bg-white p-4 space-y-3"
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                onNavClick(item)
                setIsOpen(false)
              }}
              className="block w-full text-left text-sm font-medium text-gray-700 hover:text-kombucha-berry transition p-2"
            >
              {item}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}
