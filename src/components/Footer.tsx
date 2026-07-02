import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <div className={styles.brand}>
          <h2 className={styles.logo}>websowo.</h2>
          <p className={styles.desc}>Nowoczesne i edytowalne aplikacje webowe.</p>
        </div>
        
        <div className={styles.links}>
          <div className={styles.column}>
            <h3>Nawigacja</h3>
            <Link href="#uslugi">Usługi</Link>
            <Link href="#portfolio">Portfolio</Link>
            <Link href="#o-nas">O nas</Link>
          </div>
          <div className={styles.column}>
            <h3>Kontakt</h3>
            <a href="mailto:kontakt@websowo.pl">kontakt@websowo.pl</a>
            <p>SEO i Marketing</p>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} websowo.pl. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  )
}
