'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
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
          <svg className={styles.logoIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4L8 20L12 12L16 20L20 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className={styles.logoText}>Websowo<span className={styles.logoDot}>.pl</span></span>
        </Link>
        
        <nav className={styles.nav}>
          {['Strona główna', 'Oferta v', 'Realizacje', 'Cennik', 'O nas', 'Kontakt'].map((item) => {
            const isOffer = item.includes('v')
            const text = isOffer ? 'Oferta' : item
            return (
              <motion.div key={item} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link href={`#${text.toLowerCase().replace(' ', '-')}`} className={styles.navLink}>
                  <span className={text === 'Strona główna' ? styles.activeLink : ''}>{text}</span>
                  {isOffer && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '4px' }}>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  )}
                </Link>
              </motion.div>
            )
          })}
        </nav>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="#kontakt" className={styles.ctaButton}>Bezpłatna wycena</Link>
        </motion.div>
      </div>
    </motion.header>
  )
}
