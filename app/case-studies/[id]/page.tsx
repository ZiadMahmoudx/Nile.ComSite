import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle, Building, Globe, Users } from 'lucide-react'

const caseStudies = [
    {
        id: 'bank-digital-transformation',
        title: 'Bank Digital Transformation',
        client: 'Major Egyptian Bank',
        industry: 'Banking & Finance',
        challenge: 'Legacy systems were hindering the bank\'s ability to compete with fintech startups. Customer experience was poor, and operational costs were high due to manual processes.',
        solution: 'Implemented a comprehensive digital transformation program including core banking modernization, mobile app development, and process automation across 150+ branches.',
        results: [
            { metric: '65%', label: 'Reduction in processing time' },
            { metric: '40%', label: 'Decrease in operational costs' },
            { metric: '85%', label: 'Customer satisfaction increase' },
            { metric: '2M+', label: 'Mobile app downloads' },
        ],
        technologies: ['Azure Cloud', 'Kubernetes', 'React Native', 'Power Automate', 'AI/ML'],
        testimonial: 'NILE.COM transformed our banking operations and helped us deliver a world-class digital experience to our customers.',
        testimonialAuthor: 'Chief Technology Officer',
    },
    {
        id: 'healthcare-cloud-migration',
        title: 'Healthcare Cloud Migration',
        client: 'Healthcare Network',
        industry: 'Healthcare',
        challenge: 'Managing patient data across multiple facilities was complex and inefficient. Compliance requirements were becoming harder to meet with on-premise infrastructure.',
        solution: 'Migrated entire healthcare infrastructure to a HIPAA-compliant cloud environment with enhanced security, data analytics, and telemedicine capabilities.',
        results: [
            { metric: '99.99%', label: 'System uptime achieved' },
            { metric: '50%', label: 'Storage cost reduction' },
            { metric: '100%', label: 'Compliance maintained' },
            { metric: '30%', label: 'Faster patient processing' },
        ],
        technologies: ['AWS Cloud', 'Docker', 'Terraform', 'Elasticsearch', 'Telemedicine SDK'],
        testimonial: 'The migration was seamless. Our staff and patients noticed immediate improvements in system performance and accessibility.',
        testimonialAuthor: 'Director of IT',
    },
    {
        id: 'retail-security-overhaul',
        title: 'Retail Security Overhaul',
        client: 'National Retail Chain',
        industry: 'Retail',
        challenge: 'A major security breach exposed customer data, damaging brand reputation. The company needed to completely rebuild their security infrastructure.',
        solution: 'Implemented Zero Trust architecture, 24/7 SOC monitoring, employee security training, and PCI DSS compliance across all payment systems.',
        results: [
            { metric: '0', label: 'Security incidents post-implementation' },
            { metric: '100%', label: 'PCI DSS compliance' },
            { metric: '10M+', label: 'Transactions secured daily' },
            { metric: '95%', label: 'Employee security awareness' },
        ],
        technologies: ['CrowdStrike', 'Palo Alto Networks', 'SIEM', 'MFA', 'Encryption'],
        testimonial: 'NILE.COM rebuilt our security from the ground up. We now have complete confidence in our ability to protect customer data.',
        testimonialAuthor: 'VP of Information Security',
    },
    {
        id: 'telecom-network-upgrade',
        title: 'Telecom Network Upgrade',
        client: 'Telecom Provider',
        industry: 'Telecommunications',
        challenge: 'Growing demand for data services strained the existing network infrastructure. 5G rollout required significant network modernization.',
        solution: 'Designed and deployed next-generation network infrastructure with SD-WAN, 5G integration, and intelligent traffic management.',
        results: [
            { metric: '10x', label: 'Network capacity increase' },
            { metric: '40%', label: 'Latency reduction' },
            { metric: '5G', label: 'Ready infrastructure' },
            { metric: '99.9%', label: 'Network availability' },
        ],
        technologies: ['Cisco SD-WAN', 'Nokia 5G', 'Network Automation', 'AI Traffic Management'],
        testimonial: 'The network upgrade positioned us as a leader in 5G services and significantly improved customer experience.',
        testimonialAuthor: 'Chief Network Officer',
    },
]

export async function generateStaticParams() {
    return caseStudies.map((study) => ({
        id: study.id,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params
    const study = caseStudies.find((s) => s.id === id)

    if (!study) {
        return { title: 'Case Study Not Found - NILE.COM' }
    }

    return {
        title: `${study.title} - Case Study - NILE.COM`,
        description: study.challenge.substring(0, 160),
    }
}

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const study = caseStudies.find((s) => s.id === id)

    if (!study) {
        notFound()
    }

    return (
        <div className="bg-background text-foreground">
            <main>
                {/* Inner Header / Hero */}
                <section className="mxd-section mxd-section-inner-headline padding-default">
                    <div className="mxd-container grid-container">
                        <div className="mxd-block">
                            <div className="container-fluid px-0">
                                <div className="row gx-0">
                                    {/* Sidebar Spacing */}
                                    <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                                        <div className="mxd-block__name name-inner-headline">
                                            <p className="mxd-point-subtitle">
                                                <span>Case Study</span>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Main Content */}
                                    <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                                        <div className="mxd-block__content">
                                            <div className="inner-headline">
                                                <Link href="/case-studies" className="tag tag-default mb-8 inline-flex items-center gap-2">
                                                    <ArrowLeft className="w-4 h-4" />
                                                    Back to Case Studies
                                                </Link>

                                                <div className="flex flex-wrap items-center gap-3 mb-6 anim-uni-in-up">
                                                    <span className="tag tag-default bg-primary/10 text-primary border-primary/20">
                                                        {study.industry}
                                                    </span>
                                                    <span className="tag tag-default bg-secondary/10 text-foreground border-border">Success Story</span>
                                                </div>

                                                <h1 className="inner-headline__title anim-uni-in-up">
                                                    {study.title}
                                                </h1>
                                                <p className="inner-headline__subtitle anim-uni-in-up">
                                                    {study.client}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Results Grid */}
                <section className="mxd-section padding-default bg-secondary/5">
                    <div className="mxd-container">
                        <div className="mxd-block">
                            <div className="row g-4">
                                {study.results.map((result, index) => (
                                    <div key={index} className="col-6 col-md-3 anim-uni-in-up">
                                        <div className="radius-m border-2 border-border text-center p-6 bg-background">
                                            <div className="text-4xl font-black text-primary mb-2 line-height-1">{result.metric}</div>
                                            <div className="text-sm text-muted-foreground uppercase tracking-widest">{result.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Challenge & Solution */}
                <section className="mxd-section padding-default">
                    <div className="mxd-container">
                        <div className="mxd-block">
                            <div className="row g-5">
                                <div className="col-12 col-lg-6 anim-uni-in-up">
                                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                        <Building className="w-8 h-8 text-primary" />
                                        The Challenge
                                    </h2>
                                    <p className="t-bright t-large leading-relaxed">
                                        {study.challenge}
                                    </p>
                                </div>

                                <div className="col-12 col-lg-6 anim-uni-in-up">
                                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                        <CheckCircle className="w-8 h-8 text-green-500" />
                                        Our Solution
                                    </h2>
                                    <p className="t-bright t-large leading-relaxed">
                                        {study.solution}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technologies */}
                <section className="mxd-section padding-default pt-0">
                    <div className="mxd-container">
                        <div className="mxd-block text-center anim-uni-in-up">
                            <h2 className="text-2xl font-bold mb-8">Technologies Used</h2>
                            <div className="flex flex-wrap justify-center gap-3">
                                {study.technologies.map((tech, index) => (
                                    <span key={index} className="tag tag-default border-2 px-6 py-3 text-lg">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonial */}
                <section className="mxd-section padding-default bg-secondary/5">
                    <div className="mxd-container">
                        <div className="mxd-block text-center max-w-4xl mx-auto anim-uni-in-up">
                            <blockquote className="text-3xl font-bold t-bright italic mb-8">
                                "{study.testimonial}"
                            </blockquote>
                            <p className="text-muted-foreground t-large">
                                — <span className="text-foreground font-bold">{study.testimonialAuthor}</span>, {study.client}
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="mxd-section padding-default">
                    <div className="mxd-container text-center">
                        <div className="mxd-block anim-uni-in-up">
                            <h2 className="text-4xl font-bold mb-4">Ready for Similar Results?</h2>
                            <p className="t-bright t-large mb-8">
                                Let us help you achieve your business transformation goals.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link className="btn btn-anim btn-default" href="/contact">
                                    <span className="btn-caption">Start Your Project</span>
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Link>
                                <Link className="btn btn-anim btn-default btn-outline" href="/case-studies">
                                    <span className="btn-caption">View More Case Studies</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
