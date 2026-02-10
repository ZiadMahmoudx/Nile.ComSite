import type { Metadata } from 'next'
import CareersHero from '@/components/sections/careers-hero'
import CareersBenefits from '@/components/sections/careers-benefits'
import CareersOpenings from '@/components/sections/careers-openings'

export const metadata: Metadata = {
  title: 'Careers - NILE.COM',
  description: 'Join the NILE.COM team and build your career in IT. Explore our open positions and benefits.',
}

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CareersBenefits />
      <CareersOpenings />
    </>
  )
}