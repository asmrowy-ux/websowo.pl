'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Feature {
  title: string
  desc: string
  color: string
}

export default function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <motion.div 
      className="glass" 
      style={{ 
        padding: '3rem 2.5rem', 
        borderRadius: '24px',
        height: '100%',
        cursor: 'pointer'
      }}
      whileHover={{ 
        y: -10, 
        boxShadow: `0 20px 40px -10px ${feature.color}55`
      }}
      transition={{ duration: 0.3 }}
    >
      <div style={{ 
        width: '50px', height: '50px', borderRadius: '12px', 
        background: `${feature.color}22`, display: 'flex', 
        alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' 
      }}>
        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: feature.color }}></div>
      </div>
      <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', fontWeight: 700 }}>{feature.title}</h3>
      <p style={{ color: 'var(--color-gray)', fontSize: '1.1rem', lineHeight: 1.6 }}>{feature.desc}</p>
    </motion.div>
  )
}
