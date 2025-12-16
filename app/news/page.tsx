import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, ArrowRight, Newspaper, Building2, Trophy, CalendarDays, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'News & Events - NILE.COM',
  description: 'Latest news, events, and announcements from NILE.COM - Egypt\'s leading IT solutions provider.',
}

const newsItems = [
  {
    id: 'azure-specialization-2025',
    title: 'NILE.COM Achieves Microsoft Azure Advanced Specialization',
    date: '2025-07-15',
    excerpt: 'We are proud to announce our achievement of the Microsoft Azure Advanced Specialization, recognizing our expertise in cloud solutions and strengthening our position as a leading cloud partner in the MENA region.',
    category: 'Company News',
    icon: Building2,
    featured: true,
  },
  {
    id: 'cybersecurity-summit-2025',
    title: 'Cybersecurity Summit 2025 Partnership',
    date: '2025-06-22',
    excerpt: 'NILE.COM partners with the annual Cybersecurity Summit to present cutting-edge security solutions for enterprises, featuring live demonstrations and expert panels.',
    category: 'Events',
    icon: CalendarDays,
    featured: true,
  },
  {
    id: 'new-cairo-office',
    title: 'New Office Opening in New Cairo',
    date: '2025-05-30',
    excerpt: 'We are expanding our operations with a new state-of-the-art office in New Cairo to better serve our growing client base across Egypt and the Middle East.',
    category: 'Company News',
    icon: MapPin,
  },
  {
    id: 'top-it-provider-award',
    title: 'Recognition as Top IT Solutions Provider',
    date: '2025-04-18',
    excerpt: 'NILE.COM named among the top IT solutions providers in Egypt for the third consecutive year by the Egyptian Technology Association.',
    category: 'Awards',
    icon: Trophy,
  },
  {
    id: 'aws-partnership-expansion',
    title: 'AWS Partnership Expansion',
    date: '2025-03-10',
    excerpt: 'Our expanded partnership with Amazon Web Services enables us to offer more comprehensive cloud solutions and enhanced support for enterprise clients.',
    category: 'Company News',
    icon: Building2,
  },
  {
    id: 'tech-training-workshop',
    title: 'IT Leadership Workshop Series',
    date: '2025-02-25',
    excerpt: 'Join our exclusive workshop series designed for IT leaders and executives, covering digital transformation strategies and emerging technologies.',
    category: 'Events',
    icon: CalendarDays,
  },
]

const upcomingEvents = [
  {
    id: 'cloud-summit-2025',
    title: 'Cloud Innovation Summit 2025',
    date: '2025-09-15',
    location: 'Cairo Conference Center',
    time: '9:00 AM - 5:00 PM',
  },
  {
    id: 'security-workshop',
    title: 'Enterprise Security Workshop',
    date: '2025-08-20',
    location: 'NILE.COM Training Center',
    time: '10:00 AM - 3:00 PM',
  },
];
import { WorldMapBackground } from '@/components/ui/world-map-background'

export default function NewsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center bg-gradient-to-b from-primary/5 to-background relative overflow-hidden">
        <WorldMapBackground />
        <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
          <div className="absolute top-20 left-20 w-64 h-64 border border-primary/30 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-primary/30 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20 text-center relative z-10">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 mb-6">
            <Newspaper className="w-4 h-4 mr-2" />
            Stay Updated
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
            <span className="text-foreground">News &</span>
            <br />
            <span className="text-gradient">Events</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest news, events, and announcements from NILE.COM.
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Featured Stories</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {newsItems.filter(n => n.featured).map((news) => {
              const IconComponent = news.icon
              return (
                <Link
                  key={news.id}
                  href={`/news/${news.id}`}
                  className="block group"
                >
                  <Card className="h-full border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-card">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 p-3 shadow-lg group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          {news.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mt-4 group-hover:text-primary transition-colors">
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
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{news.excerpt}</p>
                      <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                        Read Full Story
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">All News & Announcements</h2>
          <div className="grid gap-6">
            {newsItems.filter(n => !n.featured).map((news) => {
              const IconComponent = news.icon
              return (
                <Link
                  key={news.id}
                  href={`/news/${news.id}`}
                  className="block group"
                >
                  <Card className="border-2 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 p-3 shadow-lg group-hover:scale-110 transition-transform flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <Badge variant="outline" className="border-primary/30 text-primary text-xs">
                              {news.category}
                            </Badge>
                            <span className="text-xs text-muted-foreground flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {new Date(news.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold group-hover:text-primary transition-colors mb-2">
                            {news.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">{news.excerpt}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <Link
                key={event.id}
                href={`/news/${event.id}`}
                className="block group"
              >
                <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-gradient-to-r from-primary/5 to-primary/10">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-center bg-primary text-white rounded-lg p-3 min-w-[60px]">
                        <div className="text-2xl font-black">
                          {new Date(event.date).getDate()}
                        </div>
                        <div className="text-xs uppercase">
                          {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors mb-2">
                          {event.title}
                        </h3>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {event.location}
                          </p>
                          <p className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {event.time}
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5">
            <CardContent className="p-8 sm:p-12">
              <h3 className="text-2xl sm:text-3xl font-black text-gradient mb-4">
                Stay Informed
              </h3>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter for the latest updates, industry insights, and exclusive event invitations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="btn-primary px-8 py-4 font-bold rounded-xl">
                  <Link href="/contact">
                    Subscribe to Newsletter
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}