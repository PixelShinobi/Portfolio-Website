import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = "Hi there, I'm Jizhou Yang."
  const [showSubtext, setShowSubtext] = useState(false)

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
        setShowSubtext(true)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  const skills = [
    { icon: 'fab fa-html5', name: 'HTML5', color: '#E34F26' },
    { icon: 'fab fa-css3-alt', name: 'CSS3', color: '#1572B6' },
    { icon: 'fab fa-js', name: 'JavaScript', color: '#F7DF1E' },
    { icon: 'fa-brands fa-python', name: 'Python', color: '#3776AB' },
    { icon: 'fa-brands fa-java', name: 'Java', color: '#007396' },
    { icon: 'fa-solid fa-c', name: 'C', color: '#A8B9CC' },
    { icon: 'fa-solid fa-database', name: 'Database', color: '#4DB33D' },
    { icon: 'fab fa-git', name: 'Git', color: '#F05032' },
    { icon: 'fa-brands fa-android', name: 'Android', color: '#3DDC84' },
  ]

  return (
    <section className="hero" id="about-me">
      <div className="hero-content">
        <motion.div
          className="hero-text-container"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="typing-container">
            <motion.i
              className="fa-solid fa-arrow-right arrow-icon"
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            <h1 className="typing-text">
              {text}
              <span className="cursor">|</span>
            </h1>
          </div>

          {showSubtext && (
            <motion.p
              className="subtext"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              I'm a computer science student at Rutgers University-New Brunswick.
            </motion.p>
          )}
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="image-wrapper">
            <motion.img
              src="/src/img/My project-1.png"
              alt="Jizhou Yang"
              className="profile-image"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className="glow-effect"></div>
          </div>
        </motion.div>
      </div>

      <div className="skills-section">
        <motion.hr
          className="skills-divider"
          initial={{ width: 0 }}
          animate={{ width: '50%' }}
          transition={{ duration: 1, delay: 1 }}
        />

        <motion.div
          className="skills-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{
                scale: 1.2,
                rotate: 360,
                transition: { duration: 0.5 }
              }}
            >
              <i className={skill.icon} style={{ color: skill.color }}></i>
              <span className="skill-tooltip">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
