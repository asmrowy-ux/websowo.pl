import Hero from '@/components/Hero'
import AnimatedSection from '@/components/AnimatedSection'
import FeatureCard from '@/components/FeatureCard'
import Link from 'next/link'
import PortfolioSection from '@/components/PortfolioSection'
import PricingSection from '@/components/PricingSection'
import { client } from '../../sanity/lib/client'

// Simple SVG Icons
const GlobeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
)
const ChartIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
)
const AdsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
)
const SocialIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
)

export const revalidate = 60 // Revalidate every 60 seconds

export default async function Home() {
  // Fetch data from Sanity
  const portfolioItems = await client.fetch(`*[_type == "portfolioItem" && showOnHomepage == true] | order(_createdAt desc)`)
  const pricingDataList = await client.fetch(`*[_type == "pricingSection"]`)
  const pricingData = pricingDataList.length > 0 ? pricingDataList[0] : null
  
  // We can fetch Hero and Services data here in the same way, but keeping it simple for now
  // with fallback hardcoded data inside the components if Sanity returns empty.

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Hero />
      
      {/* Light Services Section */}
      <section id="uslugi" className="light-section">
        <AnimatedSection className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Co robimy?
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginTop: '1rem', color: '#111827' }}>
              Kompleksowe usługi dla <span className="text-orange">Twojej firmy</span>
            </h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
            {[
              {
                title: 'Strony internetowe',
                desc: 'Tworzymy nowoczesne i responsywne strony WWW dopasowane do Twoich potrzeb.',
                icon: <GlobeIcon />
              },
              {
                title: 'Pozycjonowanie SEO',
                desc: 'Zwiększamy widoczność Twojej strony w Google i przyciągamy wartościowy ruch.',
                icon: <ChartIcon />
              },
              {
                title: 'Google Ads',
                desc: 'Skuteczne kampanie reklamowe, które generują leady i zwiększają sprzedaż.',
                icon: <AdsIcon />
              },
              {
                title: 'Social Media',
                desc: 'Prowadzimy profile w social mediach, budujemy markę i angażujemy odbiorców.',
                icon: <SocialIcon />
              }
            ].map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <FeatureCard feature={feature} />
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>
      
      <PortfolioSection items={portfolioItems} />

      <PricingSection data={pricingData} />

    </div>
  )
}
