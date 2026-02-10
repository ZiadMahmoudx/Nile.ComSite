import type { Metadata } from 'next'
import SolutionsHero from '@/components/sections/solutions-hero'
import Solutions from '@/components/sections/solutions'

export const metadata: Metadata = {
  title: 'IT Solutions - NILE.COM',
  description: 'Comprehensive IT solutions including cloud services, cybersecurity, infrastructure management, and digital transformation services.',
  keywords: [
    'datacenter solutions',
    'cloud computing',
    'cybersecurity',
    'IT management',
    'business continuity',
    'productivity solutions'
  ],
  openGraph: {
    title: 'IT Solutions - NILE.COM',
    description: 'Comprehensive IT solutions including datacenter, cloud, security, and managed services.',
    url: 'https://nilecom.com.eg/solutions',
  },
}

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <Solutions />
    </>
  )
}
