import React from 'react'
import { motion } from 'framer-motion'
import instaLogo from '../img/insta.png'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-kombucha-berry text-white py-16 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span>Phyto</span>
              <span className="text-kombucha-gold"> Punch</span>
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Kombucha-based gummies for a healthier, happier you.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#products" className="hover:text-kombucha-gold transition">Shop</a></li>
              <li><a href="#about" className="hover:text-kombucha-gold transition">About Us</a></li>
              <li><a href="#faq" className="hover:text-kombucha-gold transition">FAQ</a></li>
              <li><a href="#" className="hover:text-kombucha-gold transition">Blog</a></li>
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#" className="hover:text-kombucha-gold transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-kombucha-gold transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-kombucha-gold transition">Returns</a></li>
              <li><a href="#" className="hover:text-kombucha-gold transition">Track Order</a></li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-sm text-white/80 mb-4">Get wellness tips & discounts delivered to your inbox.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg text-kombucha-berry text-sm focus:outline-none"
              />
              <button className="bg-kombucha-gold text-kombucha-berry px-4 py-2 rounded-lg font-bold hover:bg-white transition">
                Join
              </button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 py-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
            <p>&copy; {currentYear} Phyto Punch Co. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-kombucha-gold transition">Privacy Policy</a>
              <a href="#" className="hover:text-kombucha-gold transition">Terms of Service</a>
              <div className="flex gap-3">
                <a href="#" className="text-lg hover:text-kombucha-gold transition">f</a>
                <a href="#" className="text-lg hover:text-kombucha-gold transition">𝕏</a>
                <a href="https://www.instagram.com/p/DWLLLmeE43P/?igsh=MXJ3NTIzaG04eDlkcQ==" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
                  <img src={instaLogo} alt="Instagram" className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
