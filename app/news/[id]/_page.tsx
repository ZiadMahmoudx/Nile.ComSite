import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Share2, Linkedin, Twitter, Facebook, ArrowRight } from 'lucide-react'

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
    },
    {
        id: 'cloud-summit-2025',
        title: 'Cloud Innovation Summit 2025',
        date: '2025-09-15',
        category: 'Events',
        image: '/images/news/event1.jpg',
        content: `
      <p>Join us for the premier cloud technology event of the year. The Cloud Innovation Summit 2025 brings together industry leaders, tech experts, and innovators to discuss the future of cloud computing.</p>
      
      <h2>Event Highlights</h2>
      <ul>
        <li>Keynote speeches from global tech leaders</li>
        <li>Hands-on workshops and live demos</li>
        <li>Networking opportunities with 500+ professionals</li>
        <li>Exclusive insights into future cloud trends</li>
      </ul>
      
      <h2>Location & Time</h2>
      <p>Cairo Conference Center, 9:00 AM - 5:00 PM</p>
    `
    },
    {
        id: 'security-workshop',
        title: 'Enterprise Security Workshop',
        date: '2025-08-20',
        category: 'Events',
        image: '/images/news/event2.jpg',
        content: `
      <p>A deep dive into modern enterprise security strategies. This hands-on workshop is designed for security professionals looking to enhance their organization's defense posture.</p>
      
      <h2>What You Will Learn</h2>
      <ul>
        <li>Advanced threat detection techniques</li>
        <li>Zero Trust architecture implementation</li>
        <li>Incident response best practices</li>
        <li>Compliance and regulatory requirements</li>
      </ul>
      
      <h2>Location & Time</h2>
      <p>NILE.COM Training Center, 10:00 AM - 3:00 PM</p>
    `
    },
    {
        id: 'tech-training-workshop',
        title: 'IT Leadership Workshop Series',
        date: '2025-02-25',
        category: 'Events',
        image: '/images/news/event3.jpg',
        content: `
      <p>Our exclusive workshop series for IT leaders focuses on strategic decision-making in the digital age.</p>
      
      <h2>Workshop Agenda</h2>
      <ul>
        <li>Digital transformation roadmap planning</li>
        <li>Managing technical debt</li>
        <li>Building high-performance tech teams</li>
        <li>ROI analysis for emerging technologies</li>
      </ul>
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
        <div className="bg-background text-foreground">
            <main>
                {/* Article Header / Hero */}
                <section className="mxd-section mxd-section-inner-headline padding-default">
                    <div className="mxd-container grid-container">
                        <div className="mxd-block">
                            <div className="container-fluid px-0">
                                <div className="row gx-0">
                                    {/* Sidebar Spacing */}
                                    <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                                        <div className="mxd-block__name name-inner-headline">
                                            <p className="mxd-point-subtitle">
                                                <span>Article</span>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Main Content */}
                                    <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                                        <div className="mxd-block__content">
                                            <div className="inner-headline">
                                                <Link href="/news" className="tag tag-default mb-8 inline-flex items-center gap-2">
                                                    <ArrowLeft className="w-4 h-4" />
                                                    Back to News
                                                </Link>

                                                <div className="flex flex-wrap items-center gap-3 mb-6 anim-uni-in-up">
                                                    <span className="tag tag-default bg-primary/10 text-primary border-primary/20">
                                                        {news.category}
                                                    </span>
                                                    <div className="flex items-center gap-2 text-muted-foreground ml-4">
                                                        <Calendar className="w-4 h-4" />
                                                        <span className="t-small t-bright">{formatDate(news.date)}</span>
                                                    </div>
                                                </div>

                                                <h1 className="inner-headline__title anim-uni-in-up">
                                                    {news.title}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Article Content */}
                <section className="mxd-section padding-default pt-0">
                    <div className="mxd-container">
                        <div className="mxd-block max-w-5xl mx-auto">
                            <div className="radius-m border-2 border-border p-8 lg:p-12 bg-background anim-uni-in-up">
                                <article
                                    className="prose prose-lg dark:prose-invert max-w-none
                                    prose-headings:font-bold prose-headings:text-foreground
                                    prose-p:text-muted-foreground prose-p:leading-relaxed
                                    prose-li:text-muted-foreground
                                    prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:p-6 prose-blockquote:rounded-lg prose-blockquote:not-italic
                                    prose-ul:space-y-2 prose-h2:mt-12 prose-h2:mb-6"
                                    dangerouslySetInnerHTML={{ __html: news.content }}
                                />

                                {/* Share Section */}
                                <div className="mt-16 pt-8 border-t border-border flex items-center justify-between flex-wrap gap-4">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Share2 className="w-4 h-4" />
                                        <span className="font-bold">Share this article:</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button className="btn btn-anim btn-default btn-outline btn-mobile-icon rounded-full p-3">
                                            <Linkedin className="w-5 h-5 text-foreground" />
                                        </button>
                                        <button className="btn btn-anim btn-default btn-outline btn-mobile-icon rounded-full p-3">
                                            <Twitter className="w-5 h-5 text-foreground" />
                                        </button>
                                        <button className="btn btn-anim btn-default btn-outline btn-mobile-icon rounded-full p-3">
                                            <Facebook className="w-5 h-5 text-foreground" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="mxd-section padding-default bg-secondary/5">
                    <div className="mxd-container">
                        <div className="mxd-block text-center max-w-4xl mx-auto anim-uni-in-up">
                            <h2 className="text-4xl font-bold mb-4">Stay Informed</h2>
                            <p className="t-bright t-large mb-8">
                                Subscribe to our newsletter for the latest news and technology updates from NILE.COM.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link className="btn btn-anim btn-default" href="/contact">
                                    <span className="btn-caption">Contact Our Team</span>
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                                <Link className="btn btn-anim btn-default btn-outline" href="/news">
                                    <span className="btn-caption">View All News</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
