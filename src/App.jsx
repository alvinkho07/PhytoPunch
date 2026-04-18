import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { CartProvider } from './context/CartContext'
import {
  Navbar,
  Hero,
  Benefits,
  ProductStore,
  Cart,
  About,
  FAQ,
  Footer,
} from './components'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [highlightSection, setHighlightSection] = useState(null)
  
  // Section refs for smooth scrolling
  const heroRef = useRef(null)
  const benefitsRef = useRef(null)
  const productsRef = useRef(null)
  const aboutRef = useRef(null)
  const faqRef = useRef(null)

  const scrollToSection = (section) => {
    const refs = {
      Hero: heroRef,
      Benefits: benefitsRef,
      Products: productsRef,
      About: aboutRef,
      FAQ: faqRef,
    }

    const targetRef = refs[section]
    if (targetRef && targetRef.current) {
      // Trigger highlight animation
      setHighlightSection(section)
      setTimeout(() => setHighlightSection(null), 2000)
      
      targetRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <CartProvider>
      <div className="bg-kombucha-cream min-h-screen">
        {/* Navbar */}
        <Navbar
          onCartClick={() => setIsCartOpen(true)}
          onNavClick={scrollToSection}
        />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <div ref={heroRef}>
            <Hero 
              onShopClick={() => scrollToSection('Products')}
              onLearnMoreClick={() => scrollToSection('About')}
            />
          </div>

          {/* Benefits Section */}
          <div ref={benefitsRef}>
            <Benefits />
          </div>

          {/* Product Store Section */}
          <div ref={productsRef}>
            <ProductStore />
          </div>

          {/* About Section with Highlight */}
          <motion.div
            ref={aboutRef}
            animate={
              highlightSection === 'About'
                ? {
                    boxShadow: [
                      'inset 0 0 0 0px rgba(206, 84, 156, 0)',
                      'inset 0 0 0 3px rgba(206, 84, 156, 0.5)',
                      'inset 0 0 0 0px rgba(206, 84, 156, 0)',
                    ],
                  }
                : {}
            }
            transition={{
              duration: 2,
              ease: 'easeInOut',
            }}
          >
            <About />
          </motion.div>

          {/* FAQ Section */}
          <div ref={faqRef}>
            <FAQ />
          </div>
        </main>

        {/* Footer */}
        <Footer />

        {/* Cart Sidebar */}
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  )
}

export default App
