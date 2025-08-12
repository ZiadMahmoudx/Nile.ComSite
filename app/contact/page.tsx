import type { Metadata } from 'next'
import ContactHero from '@/components/sections/contact-hero'
import ContactForm from '@/components/sections/contact-form'
import ContactInfo from '@/components/sections/contact-info'

export const metadata: Metadata = {
  title: 'Contact Us - NILE.COM',
  description: 'Get in touch with NILE.COM for your IT solutions needs. Contact our expert team for consultation and support.',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </>
  )
}
