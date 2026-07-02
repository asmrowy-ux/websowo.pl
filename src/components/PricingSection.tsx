'use client'

import AnimatedSection from './AnimatedSection'
import Link from 'next/link'

interface PricingData {
  subtitle: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export default function PricingSection({ data }: { data?: PricingData }) {
  const displayData = data || {
    subtitle: 'Cennik',
    title: 'Indywidualna Wycena',
    description: 'Każdy biznes jest inny, dlatego nie posiadamy sztywnego cennika. Skontaktuj się z nami, opowiedz o swoich potrzebach, a my przygotujemy bezpłatną wycenę skrojoną na miarę Twojego sukcesu.',
    buttonText: 'Skontaktuj się z nami',
    buttonLink: '#kontakt'
  }

  return (
    <div id="cennik" className="container" style={{ textAlign: 'center', paddingBottom: '6rem' }}>
      <AnimatedSection>
        <div className="glass" style={{ 
          padding: '5rem 2rem', 
          borderRadius: '32px', 
          position: 'relative',
          overflow: 'hidden',
          background: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.05)'
        }}>
          <div style={{ position: 'absolute', top: '0', left: '50%', transform: 'translateX(-50%)', width: '80%', height: '100%', background: 'radial-gradient(ellipse at top, rgba(249, 115, 22, 0.15), transparent 70%)', zIndex: 0 }}></div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              {displayData.subtitle}
            </span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, margin: '1rem 0 2rem' }}>
              {displayData.title}
            </h2>
            <p style={{ color: 'var(--color-gray)', fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '650px', margin: '0 auto 3rem auto', lineHeight: 1.6 }}>
              {displayData.description}
            </p>
            <Link href={displayData.buttonLink} style={{ 
              background: 'var(--color-primary)', 
              color: '#fff', 
              padding: '1.25rem 3rem', 
              borderRadius: '8px', 
              fontSize: '1.1rem', 
              fontWeight: 700,
              border: 'none',
              cursor: 'pointer',
              display: 'inline-block',
              transition: 'all 0.3s ease'
            }}>
              {displayData.buttonText}
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}
