import Hero from '@/components/Hero'
import AnimatedSection from '@/components/AnimatedSection'
import FeatureCard from '@/components/FeatureCard'
import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem', overflow: 'hidden' }}>
      <Hero />
      
      <div id="o-nas">
        <AnimatedSection className="container" delay={0.2}>
          <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto', padding: '2rem 0' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '2rem', letterSpacing: '-0.03em' }}>
              Twoja Strona. <span className="gradient-text">Twoje Zasady.</span>
            </h2>
            <p style={{ color: 'var(--color-gray)', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', lineHeight: 1.6 }}>
              Zintegrowany panel <strong>Sanity CMS</strong> pozwala na pełną swobodę w edycji. Zmieniaj obrazy, teksty i sekcje na bieżąco, bez pisania linijki kodu. 
              To system szyty na miarę, a nie szablon, który Cię ogranicza.
            </p>
          </div>
        </AnimatedSection>
      </div>
      
      <div id="uslugi" className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            {
              title: 'Fenomenalny Design',
              desc: 'Tworzymy animacje i mikro-interakcje, które sprawiają, że użytkownicy zakochują się w Twojej marce.',
              color: 'var(--color-primary)'
            },
            {
              title: 'Dominacja SEO',
              desc: 'Optymalizacja kodu, Lighthouse 100/100, szybkie ładowanie - to gwarancja pierwszych pozycji w Google.',
              color: 'var(--color-secondary)'
            },
            {
              title: 'Błyskawiczne Wdrożenie',
              desc: 'Pracujemy na nowoczesnym stosie: Next.js + Cloudflare. Czas ładowania poniżej sekundy.',
              color: '#3b82f6'
            }
          ].map((feature, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <FeatureCard feature={feature} />
            </AnimatedSection>
          ))}
        </div>
      </div>
      
      <div id="portfolio" className="container" style={{ textAlign: 'center', paddingTop: '4rem' }}>
        <AnimatedSection>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, marginBottom: '1rem', letterSpacing: '-0.03em' }}>
            Nasze Realizacje
          </h2>
          <p style={{ color: 'var(--color-gray)', fontSize: '1.1rem', marginBottom: '4rem' }}>
            Wybrane projekty, które zrewolucjonizowały biznes naszych klientów.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Placeholder Portfolio Items */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="glass" style={{ height: '300px', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-gray)' }}>
                Projekt {item}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* CTA Section */}
      <div id="kontakt">
        <AnimatedSection className="container">
          <div className="glass" style={{ 
            padding: '6rem 2rem', 
            borderRadius: '32px', 
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)', width: '80%', height: '100%', background: 'radial-gradient(ellipse at bottom, rgba(139, 92, 246, 0.4), transparent 70%)', zIndex: 0 }}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 800, marginBottom: '2rem' }}>
                Gotowy na zmianę?
              </h2>
              <p style={{ color: 'var(--color-gray)', fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                Przejdź na wyższy poziom z innowacyjną stroną i autorskim CMS. 
              </p>
              <Link href="mailto:kontakt@websowo.pl" style={{ 
                background: 'var(--foreground)', 
                color: 'var(--background)', 
                padding: '1.25rem 3rem', 
                borderRadius: '9999px', 
                fontSize: '1.1rem', 
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}>
                Skontaktuj się z nami
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <div style={{ paddingBottom: '2rem' }}></div>
    </div>
  )
}
