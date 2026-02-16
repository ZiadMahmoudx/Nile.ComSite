import type { Metadata } from 'next'
import TeamContent from '@/components/sections/team-content'

export const metadata: Metadata = {
  title: 'Our Team - NILE.COM',
  description: 'Meet the NILE.COM leadership team. Decades of experience in IT solutions, digital transformation, and customer success.',
}

export default function TeamPage() {
  return <TeamContent />
}
