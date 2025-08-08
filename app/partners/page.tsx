import type { Metadata } from 'next'
import PartnersHero from '@/components/sections/partners-hero'
import PartnersGrid from '@/components/sections/partners-grid'

export const metadata: Metadata = {
  title: 'Partners - NILE.COM',
  description: 'Our strategic partnerships with leading technology companies including Microsoft, AWS, VMware, Dell, and more.',
}

export default function PartnersPage() {
  return (
    <>
      <PartnersHero />
      <PartnersGrid />
    </>
  )
}
