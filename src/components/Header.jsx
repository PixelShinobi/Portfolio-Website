import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Header.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className={`header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="logo-container"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img src="/img/planet-logo-Graphics-9678041-1-removebg.png" alt="logo" className="logo" />
      </motion.div>

      <ul className="nav-menu">
        {['About Me', 'Projects', 'Contact'].map((item, index) => (
          <motion.li
            key={item}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <a
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(item.toLowerCase().replace(' ', '-'))
              }}
            >
              {item}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  )
}

export default Header
