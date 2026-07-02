'use client'

import { motion } from 'framer-motion'
import styles from './Hero.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.2, delayChildren: 0.1 } 
    },
  }

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 } 
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        
        <motion.div 
          className={styles.leftColumn}
          variants={leftVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className={styles.subtitleWrapper}>
            <span className={styles.subtitleLine}></span>
            <span className={styles.subtitleText}>TWORZENIE STRON INTERNETOWYCH</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className={styles.title}>
            Tworzymy strony internetowe, które <span className={styles.highlight}>sprzedają!</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className={styles.description}>
            Projektujemy nowoczesne strony WWW, które przyciągają klientów i zwiększają Twoją sprzedaż w internecie.
          </motion.p>
          
          <motion.div variants={itemVariants} className={styles.buttons}>
            <Link href="#kontakt" className={styles.primaryButton}>
              Bezpłatna wycena
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft: '8px'}}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
            <Link href="#portfolio" className={styles.secondaryButton}>
              Zobacz nasze realizacje
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.rightColumn}
          variants={rightVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            animate={{ y: [-15, 15, -15] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className={styles.imageWrapper}
          >
            <Image 
              src="/hero-mockup.png" 
              alt="Websowo.pl Portfolio Mockup" 
              width={700} 
              height={500} 
              className={styles.mockupImage}
              priority
            />
            {/* Soft glow behind the image */}
            <div className={styles.glow}></div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
