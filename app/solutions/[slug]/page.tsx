import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, CheckCircle, Cloud, Shield, Server, Smartphone, Database, Network, Zap, Lock, BarChart, Settings, Users, ArrowUpRight } from 'lucide-react'

const solutions = [
    {
        slug: 'cloud-migration',
        icon: Cloud,
        title: 'Cloud Migration',
        tagline: 'Seamless transition to cloud infrastructure',
        description: 'Our cloud migration services ensure a smooth transition from on-premise infrastructure to cloud platforms with minimal downtime and maximum efficiency.',
        heroImage: '/img/cloud-1.png',
        detailImage: '/img/cloud-2.png',
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
        heroImage: '/img/security-1.png',
        detailImage: '/img/security-2.png',
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
        heroImage: '/img/800-400-1.png',
        detailImage: '/img/800-400-2.png',
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
        heroImage: '/img/productivity-1.png',
        detailImage: '/img/productivity-2.png',
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
        heroImage: '/img/business-1.png',
        detailImage: '/img/business-2.png',
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
        heroImage: '/img/service-1.jpg',
        detailImage: '/img/service-2.jpg',
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
        <div className="bg-background text-foreground overflow-hidden">
            <main>
                {/* Hero Section */}
                <section className="mxd-section mxd-section-inner-headline padding-default min-h-[0px] pb-24 relative">
                    <div className="mxd-container grid-container relative z-10">
                        <div className="mxd-block">
                            <div className="container-fluid px-0">
                                <div className="row gx-0 items-center">
                                    {/* Left Content */}
                                    <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                                        <div className="mxd-block__content pr-0 md:pr-12">
                                            <div className="inner-headline">
                                                <Link href="/solutions" className="tag tag-default mb-8 inline-flex items-center gap-2 hover:bg-white/10 transition-colors">
                                                    <ArrowLeft className="w-4 h-4" />
                                                    Back to Solutions
                                                </Link>

                                                <div className="flex items-center gap-4 mb-8 anim-uni-in-up">
                                                    <div className="p-3 radius-m bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                                                        <Icon className="w-8 h-8" />
                                                    </div>
                                                    <span className="text-sm font-bold tracking-widest uppercase text-primary">
                                                        Enterprise Solution
                                                    </span>
                                                </div>

                                                <h1 className="reveal-type anim-uni-in-up font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
                                                    {solution.title}
                                                </h1>
                                                <p className="reveal-type anim-uni-in-up inner-headline__subtitle text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
                                                    {solution.tagline}
                                                </p>

                                                <div className="mt-10 flex flex-wrap gap-4 anim-uni-in-up">
                                                    <Link className="btn btn-anim btn-default btn-primary px-8 py-4" href="/contact">
                                                        <span className="btn-caption font-bold">Start Transformation</span>
                                                        <ArrowRight className="w-5 h-5 ml-2" />
                                                    </Link>
                                                    <Link className="btn btn-anim btn-default btn-outline px-8 py-4" href="#overview">
                                                        <span className="btn-caption font-medium">Explore Features</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Visual */}
                                    <div className="col-12 col-xl-6 mxd-grid-item no-margin mt-12 md:mt-0">
                                        <div className="relative anim-zoom-in-container rounded-[2rem] overflow-hidden aspect-[4/3] md:aspect-square shadow-2xl border border-white/10 group">
                                            <Image
                                                src={solution.heroImage}
                                                alt={solution.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                priority
                                            />
                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
                </section>

                {/* Overview Section */}
                <section id="overview" className="mxd-section padding-default bg-muted">
                    <div className="mxd-container">
                        <div className="mxd-block">
                            <div className="row g-5 items-center">
                                <div className="col-12 col-lg-6 order-2 lg:order-1 anim-uni-in-up">
                                    <div className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-video border border-border/50">
                                        <Image
                                            src={solution.detailImage}
                                            alt="Overview"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 order-1 lg:order-2 anim-uni-in-up">
                                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Overview & Impact</h2>
                                    <p className="t-large leading-relaxed mb-8 text-foreground/80">
                                        {solution.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {solution.features.map((feature, index) => (
                                            <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border/50 shadow-sm hover:border-primary/30 transition-colors">
                                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle className="w-4 h-4 text-primary" />
                                                </div>
                                                <span className="font-medium text-sm md:text-base">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Grid */}
                <section className="mxd-section padding-default">
                    <div className="mxd-container">
                        <div className="mxd-block mb-16 text-center anim-uni-in-up">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Why Choose US</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold">Key Benefits</h2>
                        </div>
                        <div className="mxd-block">
                            <div className="row g-4">
                                {solution.benefits.map((benefit, index) => (
                                    <div key={index} className="col-12 col-lg-4 anim-uni-in-up">
                                        <div className="group h-full p-8 rounded-[2rem] bg-card border border-border/50 shadow-sm hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
                                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                                                <Zap className="w-7 h-7 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{benefit.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Steps */}
                <section className="mxd-section padding-default bg-muted">
                    <div className="mxd-container">
                        <div className="mxd-block mb-16 anim-uni-in-up flex flex-col md:flex-row justify-between items-end gap-6">
                            <div>
                                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Methodology</span>
                                <h2 className="text-4xl md:text-5xl font-display font-bold">Implementation Process</h2>
                            </div>
                            <p className="text-muted-foreground max-w-md text-lg">
                                A proven, structured approach to ensure seamless execution and measurable results.
                            </p>
                        </div>
                        <div className="mxd-block">
                            <div className="row g-4">
                                {solution.process.map((step, index) => (
                                    <div key={index} className="col-12 col-md-3 anim-uni-in-up">
                                        <div className="relative p-6 pt-12 md:pt-6">
                                            {/* Line Connector (Desktop) */}
                                            {index < solution.process.length - 1 && (
                                                <div className="hidden md:block absolute top-[2.5rem] right-[-50%] w-full h-[2px] bg-gradient-to-r from-primary/50 to-transparent z-0"></div>
                                            )}

                                            <div className="relative z-10 w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center text-xl font-bold text-primary mb-6 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]">
                                                {step.step}
                                            </div>
                                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA / Next Steps */}
                <section className="mxd-section padding-default">
                    <div className="mxd-container">
                        <div className="mxd-block">
                            <div className="relative rounded-[3rem] overflow-hidden bg-primary px-6 py-20 md:p-24 text-center anim-uni-in-up">
                                {/* Background Patterns */}
                                <div className="absolute inset-0 bg-[url('/img/background.png')] opacity-10 mix-blend-overlay"></div>
                                <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>

                                <div className="relative z-10 max-w-3xl mx-auto">
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                                        Ready to Transform?
                                    </h2>
                                    <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
                                        Let's discuss directly how our {solution.title} services can drive growth for your business.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                        <Link className="btn btn-anim !bg-white text-primary hover:!bg-white/90 px-10 py-4 rounded-full shadow-xl shadow-black/10 transition-all hover:-translate-y-1" href="/contact">
                                            <span className="btn-caption font-bold text-lg">Schedule Consultation</span>
                                            <ArrowRight className="w-5 h-5 ml-2" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
