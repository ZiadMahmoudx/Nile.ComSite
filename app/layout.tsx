import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'NILE.COM - Premier IT Solutions & Technology Services',
    template: '%s | NILE.COM'
  },
  description: 'Leading IT solutions provider with 25+ years of experience. Specializing in cloud services, cybersecurity, infrastructure, and digital transformation for enterprises.',
  keywords: ['IT solutions', 'cloud services', 'cybersecurity', 'digital transformation', 'enterprise technology', 'managed services'],
  authors: [{ name: 'NILE.COM' }],
  creator: 'NILE.COM',
  publisher: 'NILE.COM',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nile.com'),
  alternates: {
    canonical: '/',
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NILE.COM - Premier IT Solutions & Technology Services',
    description: 'Leading IT solutions provider with 25+ years of experience in enterprise technology.',
    images: ['/og-image.png'],
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
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
