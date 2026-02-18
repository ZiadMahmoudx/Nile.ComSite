'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import { ArrowUpRight } from 'lucide-react'
import { AnimatedCaption } from '@/components/ui/animated-caption'

const stats = [
  { label: 'Satisfied Enterprise Clients', value: 1750, suffix: '+', id: 'stats-counter-1' },
  { label: 'Uptime SLA Guarantee', value: 99.9, suffix: '%', decimals: 1, id: 'stats-counter-2' },
  { label: 'Years of Technical Excellence', value: 25, suffix: '+', id: 'stats-counter-3' },
  { label: 'Successful IT Projects', value: 2500, suffix: '+', id: 'stats-counter-4' },
]

export default function Hero() {
  return (
    <section className="mxd-section mxd-hero-section">
      <div className="mxd-hero-00">
        <div className="mxd-hero-00__wrap">
          {/* top group */}
          <div className="mxd-hero-00__top" style={{ paddingTop: '10px', paddingBottom: '0' }}>
            <div className="mxd-hero-00__title-wrap loading-wrap">
              {/* Content moved to Services card */}
            </div>
          </div>

          {/* bottom group */}
          <div className="mxd-hero-00__bottom">
            <div className="hero-00-manifest loading__fade">
              {/* Content moved to Services card */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
