'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import Link from 'next/link'

interface PortfolioItem {
  _id: string
  title: string
  client: string
  description: string
  tags: string[]
}

const placeholderItems: PortfolioItem[] = [
  { _id: '1', title: 'Sklep E-commerce', client: 'Moda.pl', description: 'Nowoczesny sklep z odzieżą zwiększający konwersję o 150%.', tags: ['Next.js', 'Sanity', 'Stripe'] },
  { _id: '2', title: 'Aplikacja SaaS', client: 'TechFlow', description: 'Platforma do zarządzania projektami dla zespołów IT.', tags: ['React', 'Node.js', 'PostgreSQL'] },
  { _id: '3', title: 'Strona Korporacyjna', client: 'Nova Solutions', description: 'Elegancka witryna B2B z panelem CMS.', tags: ['Gatsby', 'Contentful', 'GraphQL'] },
]

export default function PortfolioSection({ items = [], isMainPage = true }: { items?: PortfolioItem[], isMainPage?: boolean }) {
  const displayItems = items.length > 0 ? items : placeholderItems
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)

  return (
    <>
      <div id="portfolio" className={isMainPage ? "container" : ""} style={{ textAlign: 'center', paddingTop: isMainPage ? '6rem' : '0', paddingBottom: '2rem' }}>
        <AnimatedSection>
          {isMainPage && (
            <>
              <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Nasze Realizacje
              </span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, marginTop: '1rem', marginBottom: '1rem', letterSpacing: '-0.03em' }}>
                Projekty, z których jesteśmy dumni
              </h2>
              <p style={{ color: 'var(--color-gray)', fontSize: '1.1rem', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
                Wybrane projekty, które zrewolucjonizowały biznes naszych klientów.
              </p>
            </>
          )}
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem' }}>
            {(isMainPage ? displayItems.slice(0, 3) : displayItems).map((item, index) => (
              <AnimatedSection key={item._id} delay={index * 0.1}>
                <motion.div 
                  style={{ 
                    height: '350px', 
                    borderRadius: '24px', 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    background: 'rgba(255,255,255,0.02)', 
                    border: '1px solid rgba(255,255,255,0.05)', 
                    cursor: 'pointer',
                    padding: '2rem'
                  }}
                  whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.2)' }}
                  onClick={() => setSelectedItem(item)}
                >
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--color-gray)', fontSize: '0.95rem' }}>{item.client}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
          
          {isMainPage && (
            <div style={{ marginTop: '4rem' }}>
              <Link href="/realizacje" style={{ 
                background: 'transparent', 
                color: 'var(--color-primary)', 
                padding: '1rem 2.5rem', 
                borderRadius: '8px', 
                fontSize: '1.05rem', 
                fontWeight: 600,
                border: '1px solid var(--color-primary)',
                cursor: 'pointer',
                display: 'inline-block',
                transition: 'all 0.3s ease'
              }}>
                Zobacz wszystkie realizacje
              </Link>
            </div>
          )}
        </AnimatedSection>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              onClick={() => setSelectedItem(null)}
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(5px)' }}
            />
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              style={{ 
                position: 'relative', 
                background: 'var(--background)', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '24px', 
                width: '90%', 
                maxWidth: '800px', 
                padding: '3rem',
                zIndex: 10000,
                maxHeight: '90vh',
                overflowY: 'auto'
              }}
            >
              <button 
                onClick={() => setSelectedItem(null)}
                style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer' }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              
              <span style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '0.9rem' }}>{selectedItem.client}</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0.5rem 0 1.5rem' }}>{selectedItem.title}</h2>
              <p style={{ color: 'var(--color-gray)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                {selectedItem.description}
              </p>
              
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {selectedItem.tags?.map(tag => (
                  <span key={tag} style={{ background: 'rgba(255,255,255,0.05)', padding: '0.4rem 1rem', borderRadius: '999px', fontSize: '0.85rem', color: '#d1d5db' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
