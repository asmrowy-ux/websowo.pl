'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`container ${styles.headerInner}`}>
        <Link href="/" className={styles.logoWrapper}>
          {/* Nowoczesne logo */}
          <motion.div 
            className={styles.logoIcon}
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 22 22 22"></polygon>
            </svg>
          </motion.div>
          <span className={styles.logoText}>websowo<span className={styles.logoDot}>.</span></span>
        </Link>
        
        <nav className={styles.nav}>
          {['Usługi', 'Portfolio', 'Zespół'].map((item, i) => (
            <motion.div key={item} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link href={`#${item.toLowerCase()}`} className={styles.navLink}>
                {item}
              </Link>
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="#kontakt" className={styles.ctaButton}>Współpraca</Link>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  )
}
