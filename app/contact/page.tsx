import type { Metadata } from 'next'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import ContactPageContent from '@/components/sections/contact-page-content'

export const metadata: Metadata = {
  title: 'Contact Us - NILE.COM',
  description: 'Get in touch with NILE.COM for your IT solutions needs. Contact our expert team for consultation and support.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <ContactPageContent />
      </main>
      <Footer />
    </div>
  )
}
