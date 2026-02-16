import type { Metadata } from 'next'
import AboutContent from '@/components/sections/about-content'

export const metadata: Metadata = {
  title: 'About Us - NILE.COM',
  description: 'Learn about NILE.COM\'s 25+ years of excellence in providing cutting-edge IT solutions and services to enterprises worldwide.',
}

export default function AboutPage() {
  return (
    <AboutContent />
  )
}
