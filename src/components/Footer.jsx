import React from 'react'
import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  const contacts = [
    {
      icon: 'fa-solid fa-envelope',
      text: 'jizhouyang783@gmail.com',
      link: 'mailto:jizhouyang783@gmail.com'
    },
    {
      icon: 'fab fa-github',
      text: 'PixelShinobi',
      link: 'https://github.com/PixelShinobi'
    },
    {
      icon: 'fa-brands fa-linkedin',
      text: 'your-linkedin-id',
      link: 'https://linkedin.com/in/your-linkedin-id'
    }
  ]

  return (
    <footer className="footer" id="contact">
      <div className="footer-background">
        <div className="footer-shapes">
          <div className="footer-shape"></div>
          <div className="footer-shape"></div>
        </div>
      </div>

      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="contact-section">
          <motion.div
            className="contact-title"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>Let's Connect</h2>
            <p>Get in touch for opportunities or just to say hi!</p>
          </motion.div>

          <motion.div
            className="contact-details"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {contacts.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.link}
                className="contact-item"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  x: 10,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <motion.i
                  className={contact.icon}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                />
                <span>{contact.text}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <p>© 2024 Jizhou Yang. Crafted with passion and React.</p>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
