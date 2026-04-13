import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Are your gummies vegan?',
      answer: 'Yes! Our gummies are 100% vegan and made with pectin instead of gelatin. They\'re also free from artificial colors and flavors.',
    },
    {
      question: 'How many probiotics are in each gummy?',
      answer: 'Each gummy contains 1 billion CFUs of live probiotic cultures. We recommend taking 2-3 gummies daily for optimal digestive benefits.',
    },
    {
      question: 'Do they contain sugar?',
      answer: 'Our gummies are sweetened with organic cane sugar and stevia. Each serving (3 gummies) contains 3g of sugar—significantly lower than most gummy supplements.',
    },
    {
      question: 'What\'s the shipping time?',
      answer: 'Orders ship within 1-2 business days. Standard shipping takes 5-7 business days. We offer free shipping on orders over $50!',
    },
    {
      question: 'Do they need to be refrigerated?',
      answer: 'While our gummies can be stored at room temperature, refrigeration extends shelf life. Store in a cool, dry place away from direct sunlight.',
    },
    {
      question: 'What if I\'m allergic to certain ingredients?',
      answer: 'All our products are allergen-friendly and free from common allergens. Check the ingredient list on each package or contact us for detailed allergy information.',
    },
    {
      question: 'Can I return my order?',
      answer: 'Yes! We offer a 30-day money-back guarantee on all orders. If you\'re not satisfied, we\'ll refund you no questions asked.',
    },
    {
      question: 'Are there any side effects?',
      answer: 'As with any probiotic supplement, some users may experience minor digestive adjustments initially. These typically subside within a few days as your gut adapts.',
    },
  ]

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-6 bg-kombucha-cream">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-kombucha-berry">Frequently Asked</span>
            <br />
            <span className="text-kombucha-green">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Got questions? We've got answers. Here's everything you need to know about Phyto Punch.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="border-2 border-kombucha-gold/30 rounded-lg overflow-hidden bg-white"
            >
              {/* Question Button */}
              <motion.button
                onClick={() => toggleAccordion(index)}
                whileHover={{ backgroundColor: '#FAF7F2' }}
                className="w-full p-5 flex items-center justify-between transition text-left"
              >
                <h3 className="font-bold text-kombucha-berry text-lg">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl text-kombucha-gold flex-shrink-0 ml-4"
                >
                  ▼
                </motion.div>
              </motion.button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t-2 border-kombucha-gold/30"
                  >
                    <p className="p-5 text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-kombucha-berry text-white p-8 rounded-xl"
        >
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="mb-6">Reach out to our wellness team at support@phytopunch.com</p>
          <button className="bg-white text-kombucha-berry px-8 py-2 rounded-lg font-bold hover:bg-kombucha-light transition">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  )
}
