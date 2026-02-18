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
import { ArrowLeft, ArrowRight, CheckCircle, Cloud, Shield, Server, Smartphone, Database, Network } from 'lucide-react'

const solutions = [
    {
        slug: 'cloud-migration',
        icon: Cloud,
        title: 'Cloud Migration',
        tagline: 'Seamless transition to cloud infrastructure',
        description: 'Our cloud migration services ensure a smooth transition from on-premise infrastructure to cloud platforms with minimal downtime and maximum efficiency.',
        features: [
            'AWS & Azure Certified',
            '99.9% Uptime SLA',
            '24/7 Monitoring',
            'Cost Optimization',
            'Security-First Approach',
            'Hybrid Cloud Support'
        ],
        benefits: [
            { title: 'Reduce Costs', desc: 'Cut infrastructure costs by up to 40%' },
            { title: 'Scale Easily', desc: 'Scale resources up or down instantly' },
            { title: 'Improve Security', desc: 'Enterprise-grade cloud security' },
        ],
        process: [
            { step: 1, title: 'Assessment', desc: 'Analyze current infrastructure and applications' },
            { step: 2, title: 'Planning', desc: 'Design migration strategy and timeline' },
            { step: 3, title: 'Migration', desc: 'Execute migration with minimal downtime' },
            { step: 4, title: 'Optimization', desc: 'Fine-tune for performance and cost' },
        ],
    },
    {
        slug: 'cybersecurity',
        icon: Shield,
        title: 'Cybersecurity',
        tagline: 'Advanced threat protection for your digital assets',
        description: 'Comprehensive cybersecurity solutions to protect your organization from evolving threats with advanced threat detection, incident response, and compliance management.',
        features: [
            'Zero Trust Architecture',
            'SOC 2 Compliance',
            'Threat Intelligence',
            'Incident Response',
            '24/7 SOC Monitoring',
            'Penetration Testing'
        ],
        benefits: [
            { title: 'Threat Prevention', desc: 'Block 99.9% of threats before they reach you' },
            { title: 'Compliance', desc: 'Meet industry compliance requirements' },
            { title: 'Peace of Mind', desc: 'Expert team monitoring your systems 24/7' },
        ],
        process: [
            { step: 1, title: 'Security Audit', desc: 'Comprehensive vulnerability assessment' },
            { step: 2, title: 'Strategy Design', desc: 'Custom security framework development' },
            { step: 3, title: 'Implementation', desc: 'Deploy security controls and monitoring' },
            { step: 4, title: 'Continuous Protection', desc: 'Ongoing monitoring and threat response' },
        ],
    },
    {
        slug: 'infrastructure',
        icon: Server,
        title: 'Infrastructure',
        tagline: 'Robust IT infrastructure for scalability and performance',
        description: 'Design and implement enterprise-grade IT infrastructure solutions that provide the foundation for your digital operations with high availability and performance.',
        features: [
            'Hybrid Cloud Setup',
            'Load Balancing',
            'Disaster Recovery',
            'Performance Tuning',
            'High Availability',
            'Backup Solutions'
        ],
        benefits: [
            { title: 'Reliability', desc: '99.99% uptime guarantee' },
            { title: 'Performance', desc: 'Optimized for speed and efficiency' },
            { title: 'Scalability', desc: 'Grow without infrastructure limits' },
        ],
        process: [
            { step: 1, title: 'Requirements', desc: 'Understand your infrastructure needs' },
            { step: 2, title: 'Architecture', desc: 'Design scalable infrastructure' },
            { step: 3, title: 'Deployment', desc: 'Implement with best practices' },
            { step: 4, title: 'Management', desc: 'Ongoing maintenance and optimization' },
        ],
    },
    {
        slug: 'digital-transformation',
        icon: Smartphone,
        title: 'Digital Transformation',
        tagline: 'Modernize your business processes',
        description: 'Transform your business operations with cutting-edge digital solutions that streamline processes, enhance customer experiences, and drive innovation.',
        features: [
            'Process Automation',
            'API Integration',
            'Mobile Solutions',
            'Analytics Dashboard',
            'Customer Experience',
            'Workflow Optimization'
        ],
        benefits: [
            { title: 'Efficiency', desc: 'Automate 80% of manual processes' },
            { title: 'Insights', desc: 'Data-driven decision making' },
            { title: 'Innovation', desc: 'Stay ahead of competition' },
        ],
        process: [
            { step: 1, title: 'Discovery', desc: 'Identify transformation opportunities' },
            { step: 2, title: 'Roadmap', desc: 'Create phased transformation plan' },
            { step: 3, title: 'Implementation', desc: 'Deploy digital solutions' },
            { step: 4, title: 'Adoption', desc: 'Training and change management' },
        ],
    },
    {
        slug: 'data-management',
        icon: Database,
        title: 'Data Management',
        tagline: 'Comprehensive data solutions for your business',
        description: 'Unlock the power of your data with comprehensive data management solutions including storage, analytics, and business intelligence capabilities.',
        features: [
            'Big Data Analytics',
            'Data Warehousing',
            'Real-time Processing',
            'ML Integration',
            'Data Governance',
            'BI Dashboards'
        ],
        benefits: [
            { title: 'Insights', desc: 'Turn data into actionable insights' },
            { title: 'Compliance', desc: 'Meet data governance requirements' },
            { title: 'Intelligence', desc: 'AI-powered analytics' },
        ],
        process: [
            { step: 1, title: 'Data Audit', desc: 'Assess current data landscape' },
            { step: 2, title: 'Architecture', desc: 'Design data infrastructure' },
            { step: 3, title: 'Integration', desc: 'Connect and unify data sources' },
            { step: 4, title: 'Analytics', desc: 'Deploy BI and analytics tools' },
        ],
    },
    {
        slug: 'network-solutions',
        icon: Network,
        title: 'Network Solutions',
        tagline: 'High-performance networking for seamless connectivity',
        description: 'Design and implement high-performance networking solutions that provide seamless connectivity, security, and reliability for your organization.',
        features: [
            'SD-WAN Implementation',
            'Network Security',
            '5G Integration',
            'IoT Connectivity',
            'WiFi Solutions',
            'Network Monitoring'
        ],
        benefits: [
            { title: 'Connectivity', desc: 'Reliable connections everywhere' },
            { title: 'Performance', desc: 'Low latency, high bandwidth' },
            { title: 'Security', desc: 'Encrypted, secure networking' },
        ],
        process: [
            { step: 1, title: 'Assessment', desc: 'Evaluate network requirements' },
            { step: 2, title: 'Design', desc: 'Architect optimal network topology' },
            { step: 3, title: 'Deployment', desc: 'Implement network infrastructure' },
            { step: 4, title: 'Management', desc: 'Monitor and optimize performance' },
        ],
    },
]

export async function generateStaticParams() {
    return solutions.map((solution) => ({
        slug: solution.slug,
    }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const solution = solutions.find((s) => s.slug === slug)

    if (!solution) {
        return { title: 'Solution Not Found - NILE.COM' }
    }

    return {
        title: `${solution.title} - NILE.COM`,
        description: solution.description,
    }
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const solution = solutions.find((s) => s.slug === slug)

    if (!solution) {
        notFound()
    }

    const Icon = solution.icon

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
                        <Link href="/solutions" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Solutions
                        </Link>

                        <ScrollAnimation animation="fade-up">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-4 rounded-2xl bg-primary/10">
                                    <Icon className="w-10 h-10 text-primary" />
                                </div>
                                <Badge className="bg-primary/10 text-primary border-primary/20">
                                    Enterprise Solution
                                </Badge>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animation="fade-up" delay={0.1}>
                            <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-4">
                                {solution.title}
                            </h1>
                            <p className="text-xl text-muted-foreground max-w-2xl">
                                {solution.tagline}
                            </p>
                        </ScrollAnimation>
                    </div>
                </section>

                {/* Description & Features */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12">
                            <ScrollAnimation animation="fade-up">
                                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                    {solution.description}
                                </p>
                                <Button asChild className="btn-primary">
                                    <Link href="/contact">Get Started</Link>
                                </Button>
                            </ScrollAnimation>

                            <ScrollAnimation animation="fade-up" delay={0.1}>
                                <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    {solution.features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="py-20 bg-primary/5">
                    <div className="max-w-7xl mx-auto px-4">
                        <ScrollAnimation animation="fade-up">
                            <h2 className="text-3xl font-bold text-center mb-12">Benefits</h2>
                        </ScrollAnimation>
                        <div className="grid md:grid-cols-3 gap-8">
                            {solution.benefits.map((benefit, index) => (
                                <ScrollAnimation key={index} animation="fade-up" delay={index * 0.1}>
                                    <Card className="border-2 border-border text-center p-8">
                                        <CardContent className="p-0">
                                            <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                                            <p className="text-muted-foreground">{benefit.desc}</p>
                                        </CardContent>
                                    </Card>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4">
                        <ScrollAnimation animation="fade-up">
                            <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
                        </ScrollAnimation>
                        <div className="grid md:grid-cols-4 gap-8">
                            {solution.process.map((step, index) => (
                                <ScrollAnimation key={index} animation="fade-up" delay={index * 0.1}>
                                    <div className="text-center">
                                        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                                            {step.step}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                        <p className="text-muted-foreground text-sm">{step.desc}</p>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 bg-primary/5">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <ScrollAnimation animation="fade-up">
                            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Contact our experts today to learn how {solution.title.toLowerCase()} can transform your business.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button asChild size="lg" className="btn-primary">
                                    <Link href="/contact">
                                        Schedule Consultation
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <Link href="/solutions">View All Solutions</Link>
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
