import React from 'react'
import { motion } from 'framer-motion'
import './Portfolio.css'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Pizza Ordering App',
      description: 'Pizza Customization and Ordering App for Android Platforms.',
      image: '/img/project1.png',
      github: true,
      website: false,
      tags: ['Android', 'Java', 'Mobile']
    },
    {
      id: 2,
      title: 'AI Image Generator',
      description: 'AI-Powered Image Generation with DALL-E API',
      image: '/img/project2-1.png',
      github: true,
      website: true,
      tags: ['AI', 'React', 'API']
    },
    {
      id: 3,
      title: 'Banking App',
      description: 'Banking application for Windows platforms',
      image: '/img/project3.png',
      github: true,
      website: false,
      tags: ['Windows', 'C#', 'Desktop']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="portfolio-section" id="projects">
      <motion.div
        className="portfolio-header"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>
          My <span className="highlight">Portfolio</span>
        </h2>
        <div className="header-underline"></div>
      </motion.div>

      <motion.div
        className="portfolio-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={cardVariants}
            whileHover={{
              y: -10,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="card-image-container">
              <img src={project.image} alt={project.title} />
              <div className="image-overlay">
                <div className="overlay-icons">
                  {project.github && (
                    <motion.i
                      className="fab fa-github"
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                  {project.website && (
                    <motion.i
                      className="fa-solid fa-earth-americas"
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="card-content">
              <div className="card-header">
                <h4>{project.title}</h4>
                <div className="card-icons">
                  {project.github && <i className="fab fa-github" />}
                  {project.website && <i className="fa-solid fa-earth-americas" />}
                </div>
              </div>
              <h5>{project.description}</h5>
              <div className="tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="card-glow"></div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Portfolio
