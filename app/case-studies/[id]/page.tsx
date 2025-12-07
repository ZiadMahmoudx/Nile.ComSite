import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { ParticleNetwork } from '@/components/ui/particle-network'
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
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main>
                {/* Hero */}
                <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-background">
                    <ParticleNetwork
                        particleCount={50}
                        particleColor="rgba(159, 34, 32, 0.5)"
                        lineColor="rgba(159, 34, 32, 0.08)"
                        maxDistance={120}
                        speed={0.2}
                    />
                    <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
                        <Link href="/case-studies" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Case Studies
                        </Link>

                        <ScrollAnimation animation="fade-up">
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <Badge className="bg-primary/10 text-primary border-primary/20">
                                    {study.industry}
                                </Badge>
                                <Badge variant="outline">Success Story</Badge>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animation="fade-up" delay={0.1}>
                            <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-4">
                                {study.title}
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                {study.client}
                            </p>
                        </ScrollAnimation>
                    </div>
                </section>

                {/* Results Grid */}
                <section className="py-12 bg-primary/5">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {study.results.map((result, index) => (
                                <ScrollAnimation key={index} animation="fade-up" delay={index * 0.1}>
                                    <Card className="text-center border-2 border-border">
                                        <CardContent className="p-6">
                                            <div className="text-4xl font-black text-primary mb-2">{result.metric}</div>
                                            <div className="text-sm text-muted-foreground">{result.label}</div>
                                        </CardContent>
                                    </Card>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Challenge & Solution */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12">
                            <ScrollAnimation animation="fade-up">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Building className="w-8 h-8 text-primary" />
                                    The Challenge
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {study.challenge}
                                </p>
                            </ScrollAnimation>

                            <ScrollAnimation animation="fade-up" delay={0.1}>
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <CheckCircle className="w-8 h-8 text-green-500" />
                                    Our Solution
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {study.solution}
                                </p>
                            </ScrollAnimation>
                        </div>
                    </div>
                </section>

                {/* Technologies */}
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4">
                        <ScrollAnimation animation="fade-up">
                            <h2 className="text-2xl font-bold mb-6 text-center">Technologies Used</h2>
                            <div className="flex flex-wrap justify-center gap-3">
                                {study.technologies.map((tech, index) => (
                                    <Badge key={index} variant="outline" className="px-4 py-2 text-base">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </ScrollAnimation>
                    </div>
                </section>

                {/* Testimonial */}
                <section className="py-20 bg-primary/5">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <ScrollAnimation animation="fade-up">
                            <blockquote className="text-2xl italic text-foreground mb-6">
                                "{study.testimonial}"
                            </blockquote>
                            <p className="text-muted-foreground">
                                — {study.testimonialAuthor}, {study.client}
                            </p>
                        </ScrollAnimation>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <ScrollAnimation animation="fade-up">
                            <h2 className="text-3xl font-bold mb-4">Ready for Similar Results?</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Let us help you achieve your business transformation goals.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="btn-primary">
                                    <Link href="/contact">
                                        Start Your Project
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link href="/case-studies">View More Case Studies</Link>
                                </Button>
                            </div>
                        </ScrollAnimation>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
