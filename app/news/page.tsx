import type { Metadata } from 'next'
import NewsHero from '@/components/sections/news-hero'
import NewsList from '@/components/sections/news-list'
import NewsEvents from '@/components/sections/news-events'

export const metadata: Metadata = {
  title: 'News & Events - NILE.COM',
  description: 'Latest news, events, and announcements from NILE.COM - Egypt\'s leading IT solutions provider.',
}

export default function NewsPage() {
  return (
    <>
      <NewsHero />
      <NewsList />
      <NewsEvents />
    </>
  )
}