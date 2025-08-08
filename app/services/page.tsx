import type { Metadata } from 'next'
import ServicesHero from '@/components/sections/services-hero'
import ServicesGrid from '@/components/sections/services-grid'

export const metadata: Metadata = {
  title: 'Services - NILE.COM',
  description: 'Professional IT services including managed services, consulting, support, and implementation services for enterprises.',
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
    </>
  )
}
