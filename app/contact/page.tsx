import type { Metadata } from 'next'
import ContactHero from '@/components/sections/contact-hero'
import ContactMain from '@/components/sections/contact-main'

export const metadata: Metadata = {
  title: 'Contact Us - NILE.COM',
  description: 'Get in touch with NILE.COM for your IT solutions needs. Contact our expert team for consultation and support.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMain />
    </>
  )
}
