import React from 'react'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import { Providers } from './providers'
import { SmoothScroll } from '@/components/ui/smooth-scroll'

export const metadata: Metadata = {
  title: {
    default: 'NILE.COM - Premier IT Solutions & Technology Services',
    template: '%s | NILE.COM'
  },
  description: 'Leading IT solutions provider with 25+ years of experience. Specializing in cloud services, cybersecurity, infrastructure, and digital transformation for enterprises.',
  keywords: ['IT solutions', 'cloud services', 'cybersecurity', 'digital transformation', 'enterprise technology', 'managed services', 'managed IT services', 'technical support', 'IT consulting', 'cloud migration', 'data management', 'network solutions'],
  authors: [{ name: 'NILE.COM', url: 'https://nile.com' }],
  creator: 'NILE.COM',
  publisher: 'NILE.COM',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nile.com'),
  alternates: {
    canonical: 'https://nile.com/',
  },
  openGraph: {
    title: 'NILE.COM - Premier IT Solutions & Technology Services',
    description: 'Leading IT solutions provider with 25+ years of experience. Specializing in cloud services, cybersecurity, infrastructure, and digital transformation.',
    url: 'https://nile.com',
    siteName: 'NILE.COM',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NILE.COM - Premier IT Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
    countryName: 'Egypt',
    emails: ['info@nilecom.com.eg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NILE.COM - Premier IT Solutions & Technology Services',
    description: 'Leading IT solutions provider with 25+ years of experience in enterprise technology.',
    images: ['/og-image.png'],
    site: '@nilecom',
    creator: '@nilecom',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  generator: 'Next.js',
  applicationName: 'NILE.COM',
  referrer: 'origin-when-cross-origin',
  appleWebApp: {
    capable: true,
    title: 'NILE.COM',
    statusBarStyle: 'default',
  },

  archives: ['https://nile.com/news'],
  bookmarks: ['https://nile.com/services'],
  classification: 'Business',
  category: 'technology',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <Providers>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  )
}
