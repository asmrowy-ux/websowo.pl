import AnimatedSection from '@/components/AnimatedSection'
import Link from 'next/link'

export default function RealizacjePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '150px', minHeight: '100vh' }}>
      <div className="container" style={{ textAlign: 'center', paddingBottom: '4rem' }}>
        <AnimatedSection>
          <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Nasze portfolio
          </span>
          <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 800, marginTop: '1rem', marginBottom: '2rem' }}>
            Projekty, z których jesteśmy dumni
          </h1>
          <p style={{ color: 'var(--color-gray)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
            Przejrzyj nasze najnowsze realizacje i przekonaj się, jak zmieniamy wizje w działające maszyny sprzedażowe.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem' }}>
            {/* Placeholder Portfolio Items */}
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <AnimatedSection key={item} delay={index * 0.1}>
                <div style={{ 
                  height: '350px', 
                  borderRadius: '24px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  background: 'rgba(255,255,255,0.03)', 
                  border: '1px solid rgba(255,255,255,0.05)', 
                  color: 'var(--color-gray)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  cursor: 'pointer'
                }}>
                  Realizacja {item}
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div style={{ marginTop: '5rem', paddingBottom: '4rem' }}>
            <Link href="/" style={{ 
              background: 'transparent', 
              color: 'var(--color-gray)', 
              padding: '1rem 2.5rem', 
              borderRadius: '8px', 
              fontSize: '1.05rem', 
              fontWeight: 600,
              border: '1px solid rgba(255,255,255,0.2)',
              cursor: 'pointer',
              display: 'inline-block',
              transition: 'all 0.3s ease'
            }}>
              Wróć do strony głównej
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
