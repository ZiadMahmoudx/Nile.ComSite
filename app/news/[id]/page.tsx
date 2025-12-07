import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Calendar, Building2, Trophy, CalendarDays, MapPin, Share2, Linkedin, Twitter, Facebook } from 'lucide-react'

// News data stored here for the dynamic route
const newsItems = [
    {
        id: 'azure-specialization-2025',
        title: 'NILE.COM Achieves Microsoft Azure Advanced Specialization',
        date: '2025-07-15',
        category: 'Company News',
        image: '/images/news/azure.jpg',
        content: `
      <p>NILE.COM is proud to announce our achievement of the Microsoft Azure Advanced Specialization, a prestigious recognition that highlights our deep expertise in cloud solutions.</p>
      
      <h2>What This Means for Our Clients</h2>
      <p>This certification demonstrates our proven capabilities in designing, deploying, and managing complex Azure environments. Our clients can now benefit from:</p>
      <ul>
        <li>Expert-level Azure architecture and implementation</li>
        <li>Advanced hybrid cloud solutions</li>
        <li>Enterprise-grade security and compliance</li>
        <li>Optimized cloud cost management</li>
      </ul>
      
      <h2>Our Commitment to Excellence</h2>
      <p>This achievement reflects our continuous investment in training and certification for our technical teams. We now have over 50 certified Azure professionals ready to help your organization leverage the full power of Microsoft's cloud platform.</p>
      
      <blockquote>"This specialization positions NILE.COM as a premier Azure partner in the MENA region, enabling us to deliver even more value to our clients." - Ahmed Hassan, CEO</blockquote>
    `
    },
    {
        id: 'cybersecurity-summit-2025',
        title: 'Cybersecurity Summit 2025 Partnership',
        date: '2025-06-22',
        category: 'Events',
        image: '/images/news/cybersecurity.jpg',
        content: `
      <p>NILE.COM is excited to announce our partnership with the annual Cybersecurity Summit 2025, the largest cybersecurity conference in the Middle East and North Africa region.</p>
      
      <h2>Our Participation</h2>
      <p>At this year's summit, NILE.COM will:</p>
      <ul>
        <li>Present cutting-edge security solutions for enterprises</li>
        <li>Lead expert panels on threat detection and response</li>
        <li>Showcase live demonstrations of our SOC capabilities</li>
        <li>Offer exclusive consultations with our security experts</li>
      </ul>
      
      <h2>Event Details</h2>
      <p>Join us at the Cairo International Convention Center on September 15-17, 2025. Register early to secure your spot at our exclusive workshops.</p>
    `
    },
    {
        id: 'new-cairo-office',
        title: 'New Office Opening in New Cairo',
        date: '2025-05-30',
        category: 'Company News',
        image: '/images/news/office.jpg',
        content: `
      <p>We are thrilled to announce the opening of our new state-of-the-art office in New Cairo, marking a significant milestone in our expansion strategy.</p>
      
      <h2>About the New Facility</h2>
      <p>Our new office features:</p>
      <ul>
        <li>Modern collaborative workspaces</li>
        <li>Dedicated training center for client workshops</li>
        <li>Advanced demo lab for solution showcases</li>
        <li>Meeting rooms with video conferencing capabilities</li>
      </ul>
      
      <h2>Better Serving Our Clients</h2>
      <p>This expansion allows us to better serve our growing client base across Egypt and the Middle East, providing faster response times and enhanced support services.</p>
    `
    },
    {
        id: 'top-it-provider-award',
        title: 'Recognition as Top IT Solutions Provider',
        date: '2025-04-18',
        category: 'Awards',
        image: '/images/news/award.jpg',
        content: `
      <p>NILE.COM has been named among the top IT solutions providers in Egypt for the third consecutive year by the Egyptian Technology Association.</p>
      
      <h2>Recognition Criteria</h2>
      <p>This award recognizes companies that demonstrate:</p>
      <ul>
        <li>Excellence in service delivery</li>
        <li>Innovation in technology solutions</li>
        <li>Strong customer satisfaction ratings</li>
        <li>Positive impact on the local tech ecosystem</li>
      </ul>
      
      <h2>Thank You to Our Team and Clients</h2>
      <p>This recognition would not be possible without our dedicated team and the trust of our valued clients. We remain committed to delivering excellence in everything we do.</p>
    `
    },
    {
        id: 'aws-partnership-expansion',
        title: 'AWS Partnership Expansion',
        date: '2025-03-10',
        category: 'Partnerships',
        image: '/images/news/aws.jpg',
        content: `
      <p>NILE.COM is proud to announce the expansion of our partnership with Amazon Web Services (AWS), elevating our status to Advanced Consulting Partner.</p>
      
      <h2>Enhanced Capabilities</h2>
      <p>This expanded partnership brings new capabilities to our clients:</p>
      <ul>
        <li>Direct access to AWS technical resources</li>
        <li>Priority support for complex implementations</li>
        <li>Exclusive training and certification programs</li>
        <li>Co-marketing opportunities</li>
      </ul>
      
      <h2>Comprehensive Cloud Solutions</h2>
      <p>With advanced partnerships across AWS, Azure, and Google Cloud, NILE.COM offers truly multi-cloud expertise to help organizations choose the right platform for their needs.</p>
    `
    },
    {
        id: 'data-center-upgrade',
        title: 'Data Center Infrastructure Upgrade',
        date: '2025-02-28',
        category: 'Company News',
        image: '/images/news/datacenter.jpg',
        content: `
      <p>NILE.COM has completed a major upgrade to our data center infrastructure, enhancing performance, security, and reliability for all our managed services clients.</p>
      
      <h2>Upgrade Highlights</h2>
      <ul>
        <li>New generation server hardware with 40% performance improvement</li>
        <li>Enhanced DDoS protection systems</li>
        <li>Upgraded cooling systems for improved efficiency</li>
        <li>Additional redundancy in network connectivity</li>
      </ul>
      
      <h2>Commitment to Excellence</h2>
      <p>This investment demonstrates our ongoing commitment to providing world-class infrastructure services to our clients.</p>
    `
    }
]

export async function generateStaticParams() {
    return newsItems.map((item) => ({
        id: item.id,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params
    const news = newsItems.find((item) => item.id === id)

    if (!news) {
        return {
            title: 'Article Not Found - NILE.COM',
        }
    }

    return {
        title: `${news.title} - NILE.COM`,
        description: news.content.substring(0, 160).replace(/<[^>]*>/g, ''),
    }
}

export default async function NewsArticlePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const news = newsItems.find((item) => item.id === id)

    if (!news) {
        notFound()
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main>
                {/* Article Header */}
                <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
                    <div className="max-w-4xl mx-auto px-4">
                        <Link href="/news" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
                            <ArrowLeft className="w-4 h-4" />
                            Back to News
                        </Link>

                        <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                            {news.category}
                        </Badge>

                        <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-6">
                            {news.title}
                        </h1>

                        <div className="flex items-center gap-4 text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {formatDate(news.date)}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <section className="py-12">
                    <div className="max-w-4xl mx-auto px-4">
                        <Card className="border-2 border-border">
                            <CardContent className="p-8 lg:p-12">
                                <article
                                    className="prose prose-lg dark:prose-invert max-w-none
                    prose-headings:font-bold prose-headings:text-foreground
                    prose-p:text-muted-foreground prose-p:leading-relaxed
                    prose-li:text-muted-foreground
                    prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:p-4 prose-blockquote:rounded-lg prose-blockquote:not-italic
                    prose-ul:space-y-2"
                                    dangerouslySetInnerHTML={{ __html: news.content }}
                                />
                            </CardContent>
                        </Card>

                        {/* Share Section */}
                        <div className="mt-8 flex items-center justify-between flex-wrap gap-4">
                            <div className="flex items-center gap-2 text-muted-foreground">
                                <Share2 className="w-4 h-4" />
                                <span>Share this article:</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="icon" className="rounded-full">
                                    <Linkedin className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="icon" className="rounded-full">
                                    <Twitter className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="icon" className="rounded-full">
                                    <Facebook className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>

                        {/* CTA */}
                        <Card className="mt-12 border-2 border-primary/20 bg-primary/5">
                            <CardContent className="p-8 text-center">
                                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                                <p className="text-muted-foreground mb-6">
                                    Subscribe to our newsletter for the latest news and updates from NILE.COM
                                </p>
                                <Button asChild className="btn-primary">
                                    <Link href="/contact">Contact Us</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
