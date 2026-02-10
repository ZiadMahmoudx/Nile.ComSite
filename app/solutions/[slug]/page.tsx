import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
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
                                                <span>Solution</span>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Main Content */}
                                    <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                                        <div className="mxd-block__content">
                                            <div className="inner-headline">
                                                <Link href="/solutions" className="tag tag-default mb-8 inline-flex items-center gap-2">
                                                    <ArrowLeft className="w-4 h-4" />
                                                    Back to Solutions
                                                </Link>

                                                <div className="flex items-center gap-4 mb-6 anim-uni-in-up">
                                                    <div className="p-4 radius-m bg-primary/10">
                                                        <Icon className="w-10 h-10 text-primary" />
                                                    </div>
                                                    <span className="tag tag-default bg-primary/10 text-primary border-primary/20">
                                                        Enterprise Solution
                                                    </span>
                                                </div>

                                                <h1 className="inner-headline__title anim-uni-in-up">
                                                    {solution.title}
                                                </h1>
                                                <p className="inner-headline__subtitle anim-uni-in-up">
                                                    {solution.tagline}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Overview & Features */}
                <section className="mxd-section padding-default">
                    <div className="mxd-container">
                        <div className="mxd-block">
                            <div className="row g-5">
                                <div className="col-12 col-lg-6 anim-uni-in-up">
                                    <h2 className="text-3xl font-bold mb-6">Overview</h2>
                                    <p className="t-bright t-large leading-relaxed mb-8">
                                        {solution.description}
                                    </p>
                                    <Link className="btn btn-anim btn-default" href="/contact">
                                        <span className="btn-caption">Get Started</span>
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </div>

                                <div className="col-12 col-lg-6 anim-uni-in-up">
                                    <h2 className="text-3xl font-bold mb-6">Key Features</h2>
                                    <div className="row g-4">
                                        {solution.features.map((feature, index) => (
                                            <div key={index} className="col-12 col-md-6 flex items-center gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                                <span className="t-bright">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className="mxd-section padding-default bg-secondary/5">
                    <div className="mxd-container">
                        <div className="mxd-block mb-12 text-center anim-uni-in-up">
                            <h2 className="text-4xl font-bold">Benefits</h2>
                        </div>
                        <div className="mxd-block">
                            <div className="row g-4">
                                {solution.benefits.map((benefit, index) => (
                                    <div key={index} className="col-12 col-md-4 anim-uni-in-up">
                                        <div className="radius-m border-2 border-border text-center p-8 h-full flex flex-col justify-center bg-background hover:border-primary/50 transition-colors">
                                            <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                                            <p className="text-muted-foreground">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process */}
                <section className="mxd-section padding-default">
                    <div className="mxd-container">
                        <div className="mxd-block mb-12 text-center anim-uni-in-up">
                            <h2 className="text-4xl font-bold">Our Process</h2>
                        </div>
                        <div className="mxd-block">
                            <div className="row g-5">
                                {solution.process.map((step, index) => (
                                    <div key={index} className="col-6 col-md-3 text-center anim-uni-in-up">
                                        <div className="w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                                            {step.step}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                        <p className="text-muted-foreground text-sm">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="mxd-section padding-default bg-secondary/5">
                    <div className="mxd-container">
                        <div className="mxd-block text-center max-w-4xl mx-auto anim-uni-in-up">
                            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
                            <p className="t-bright t-large mb-8">
                                Contact our experts today to learn how {solution.title.toLowerCase()} can transform your business.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link className="btn btn-anim btn-default" href="/contact">
                                    <span className="btn-caption">Schedule Consultation</span>
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Link>
                                <Link className="btn btn-anim btn-default btn-outline" href="/solutions">
                                    <span className="btn-caption">View All Solutions</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
