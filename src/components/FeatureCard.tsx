'use client'

import { motion } from 'framer-motion'

interface Feature {
  title: string
  desc: string
  icon: React.ReactNode
}

export default function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <motion.div 
      className="feature-card"
      style={{ 
        padding: '2rem', 
        borderRadius: '16px',
        background: '#fff',
        border: '1px solid #f3f4f6',
        display: 'flex',
        gap: '1.5rem',
        cursor: 'pointer',
        alignItems: 'flex-start'
      }}
      whileHover={{ 
        y: -5, 
        boxShadow: '0 20px 40px -15px rgba(0,0,0,0.05)'
      }}
      transition={{ duration: 0.3 }}
    >
      <div style={{ 
        width: '60px', 
        height: '60px', 
        borderRadius: '16px', 
        background: 'rgba(249, 115, 22, 0.1)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        flexShrink: 0,
        color: 'var(--color-primary)'
      }}>
        {feature.icon}
      </div>
      
      <div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', fontWeight: 700, color: '#111827' }}>
          {feature.title}
        </h3>
        <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          {feature.desc}
        </p>
        <div style={{ 
          color: 'var(--color-primary)', 
          fontWeight: 600, 
          fontSize: '0.9rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          Dowiedz się więcej 
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </motion.div>
  )
}
