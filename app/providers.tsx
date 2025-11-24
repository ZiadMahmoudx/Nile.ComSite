'use client'

import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Toaster } from '@/components/ui/toaster'
import { AppWrapper } from '@/components/layout/app-wrapper'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      <AppWrapper>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </AppWrapper>
    </ThemeProvider>
  )
}