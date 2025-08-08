import type { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import SolutionsHero from '@/components/sections/solutions-hero'
import SolutionsGrid from '@/components/sections/solutions-grid'

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

const solutionsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'IT Solutions',
  provider: {
    '@type': 'Organization',
    name: 'NILE.COM',
  },
  serviceType: [
    'Datacenter Solutions',
    'Cloud Computing',
    'Cybersecurity',
    'IT Management',
    'Productivity Solutions',
    'Business Continuity'
  ],
  description: 'Comprehensive IT solutions for enterprise clients',
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <SolutionsHero />
        <SolutionsGrid />
      </main>
      <Footer />
    </div>
  )
}
