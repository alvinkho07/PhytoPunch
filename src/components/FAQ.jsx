import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: '🛒 Where can I buy our gummies?',
      answer: 'Our gummies are available through multiple channels for your convenience: our official website, Shopee, Lazada, TikTok Shop, Watsons Malaysia, and Guardian Malaysia. Find the option that works best for you!',
    },
    {
      question: '📦 What are the shipping and delivery times?',
      answer: 'Delivery fees are calculated at checkout based on your location. Local delivery in Malaysia typically takes 2–5 business days, while international orders take 5–10 business days. We ensure your gummies arrive fresh and intact.',
    },
    {
      question: '💳 What payment methods do you accept?',
      answer: 'We accept multiple payment options for your convenience: Credit/Debit cards, Online Banking, and E-wallets. Choose whichever payment method is most convenient for you at checkout.',
    },
    {
      question: '🏠 How should I store our gummies?',
      answer: 'Store our gummies in a cool, dry place away from direct sunlight. This ensures optimal freshness and potency. While they don\'t require refrigeration, keeping them in a cool environment extends shelf life.',
    },
    {
      question: '⚠️ Are there any side effects I should know about?',
      answer: 'Our gummies are safe as directed. Excessive intake may cause mild digestive discomfort in some individuals. If you are pregnant or have specific health concerns, we recommend consulting a healthcare professional before use.',
    },
    {
      question: '💊 Can I take our gummies with other supplements?',
      answer: 'Yes, our gummies can generally be taken with other supplements. However, be mindful of overlapping ingredients to avoid exceeding recommended daily values. When in doubt, consult your healthcare provider or contact us for specific guidance.',
    },
    {
      question: '📞 How can I contact customer support?',
      answer: 'We\'re here to help! Reach out to us via Email at support@phytopunch.com or connect with us on Instagram @PhytoPunchCo. Our wellness team is ready to answer any questions about our gummies.',
    },
    {
      question: '❓ Do you have a FAQ for product details?',
      answer: 'Absolutely! Each product page includes detailed ingredient lists, usage instructions, and nutritional information. For questions not covered here, feel free to contact our support team via email or Instagram.',
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
            Got questions? We've got answers. Here's everything you need to know about our gummies.
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
          <p className="mb-2 text-white/90">Reach out to our wellness team:</p>
          <div className="space-y-2">
            <p className="text-lg font-semibold">📧 support@phytopunch.com</p>
            <p className="text-white/80">or connect with us on Instagram</p>
          </div>
          <div className="mt-6">
            <a
              href="https://www.instagram.com/PhytoPunchCo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-kombucha-berry px-8 py-2 rounded-lg font-bold hover:bg-kombucha-light transition"
            >
              @PhytoPunchCo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
