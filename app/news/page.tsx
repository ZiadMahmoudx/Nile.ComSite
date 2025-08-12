import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'News & Events - NILE.COM',
  description: 'Latest news, events, and announcements from NILE.COM.',
}

const newsItems = [
  {
    title: 'NILE.COM Achieves Microsoft Azure Advanced Specialization',
    date: '2025-07-15',
    excerpt: 'We are proud to announce our achievement of the Microsoft Azure Advanced Specialization, recognizing our expertise in cloud solutions.',
    category: 'Company News'
  },
  {
    title: 'Cybersecurity Summit 2025 Partnership',
    date: '2025-06-22',
    excerpt: 'NILE.COM partners with the annual Cybersecurity Summit to present cutting-edge security solutions for enterprises.',
    category: 'Events'
  },
  {
    title: 'New Office Opening in New Cairo',
    date: '2025-05-30',
    excerpt: 'We are expanding our operations with a new office in New Cairo to better serve our growing client base.',
    category: 'Company News'
  },
  {
    title: 'Recognition as Top IT Solutions Provider',
    date: '2025-04-18',
    excerpt: 'NILE.COM named among the top IT solutions providers in Egypt for the third consecutive year.',
    category: 'Awards'
  }
]

export default function NewsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-20 left-20 w-64 h-64 border border-primary/30 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-secondary/30 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-foreground">News &</span>
            <br />
            <span className="text-gradient">Events</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest news, events, and announcements from NILE.COM.
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8">
            {newsItems.map((news, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
                <CardHeader>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {news.title}
                      </CardTitle>
                      <CardDescription className="flex items-center mt-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(news.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      {news.category}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{news.excerpt}</p>
                  <Button variant="ghost" className="p-0 text-primary hover:text-primary/80">
                    Read more
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="btn-primary px-8 py-4 font-bold rounded-xl">
              <Link href="/contact">
                Subscribe to Newsletter
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}