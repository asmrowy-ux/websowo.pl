'use client'

import { motion } from 'framer-motion'
import styles from './Hero.module.css'
import Link from 'next/link'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  }

  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className={styles.badge}>
            <span className={styles.badgePulse}></span>
            <span>Nowy standard tworzenia stron</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className={styles.title}>
            Tworzymy <br/> <span className="gradient-text">Cyfrowe Doświadczenia</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className={styles.subtitle}>
            Wyprzedź konkurencję z nowatorskim designem i pełną kontrolą dzięki <strong>Sanity CMS</strong>. 
            Budujemy marki, które zostają w pamięci.
          </motion.p>
          
          <motion.div variants={itemVariants} className={styles.buttons}>
            <Link href="#kontakt" className={styles.primaryButton}>
              Zacznij Projekt
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <Link href="#portfolio" className={styles.secondaryButton}>Zobacz Portfolio</Link>
          </motion.div>
        </motion.div>
        
        {/* Animated decorative elements */}
        <motion.div 
          className={styles.blob1}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className={styles.blob2}
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0] 
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div 
          className={styles.scrollMouse}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>
    </section>
  )
}
