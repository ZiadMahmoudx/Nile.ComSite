'use client'

import { Badge } from '@/components/ui/badge'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { ParticleNetwork } from '@/components/ui/particle-network'
import { ScrollAnimation } from '@/components/ui/scroll-animation'
import { HelpCircle } from 'lucide-react'

const faqItems = [
    {
        question: "What IT services does NILE.COM offer?",
        answer: "We offer comprehensive IT solutions including cloud services (Azure, AWS, Google Cloud), cybersecurity, digital transformation, enterprise networking, data center solutions, managed services, and 24/7 technical support."
    },
    {
        question: "How long has NILE.COM been in business?",
        answer: "NILE.COM has been a trusted IT partner for over 25 years since 1999. We've served over 1,750 satisfied clients and completed more than 2,500 projects across Egypt and the MENA region."
    },
    {
        question: "What industries do you specialize in?",
        answer: "We serve diverse industries including Banking & Finance, Healthcare, Government, Retail, Oil & Gas, Telecommunications, and Manufacturing. Our solutions are tailored to meet specific industry requirements and compliance standards."
    },
    {
        question: "Do you offer 24/7 support?",
        answer: "Yes! We provide round-the-clock technical support with our dedicated helpdesk team. Our support includes remote assistance, on-site visits when needed, incident management, and SLA-based response times."
    },
    {
        question: "What certifications does your team hold?",
        answer: "Our team holds 200+ certifications including Microsoft Gold Partner, AWS Advanced Partner, Cisco Premier Partner, VMware Partner, and ISO 27001 certification. We continuously invest in training to stay at the forefront of technology."
    },
    {
        question: "How do I get started with NILE.COM?",
        answer: "Getting started is easy! Contact us through our website, call us at +20 2 2735 3333, or email info@nilecom.com.eg. We'll schedule a free consultation to understand your needs and propose a tailored solution."
    },
    {
        question: "What is your project implementation process?",
        answer: "Our proven methodology includes 4 phases: Discovery & Assessment (analyzing your needs), Strategy & Planning (developing a tailored plan), Implementation & Deployment (executing with minimal disruption), and Support & Optimization (ongoing maintenance and improvement)."
    },
    {
        question: "Do you provide training for the solutions you implement?",
        answer: "Absolutely! We offer comprehensive training programs for all solutions we implement. This includes hands-on workshops, documentation, video tutorials, and ongoing knowledge transfer to ensure your team can effectively use the new systems."
    }
]

export default function FAQPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-background">
                <ParticleNetwork
                    particleCount={50}
                    particleColor="rgba(159, 34, 32, 0.5)"
                    lineColor="rgba(159, 34, 32, 0.08)"
                    maxDistance={120}
                    speed={0.2}
                />

                <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
                    <ScrollAnimation animation="fade-up">
                        <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 mb-6">
                            <HelpCircle className="w-4 h-4 mr-2" />
                            Support Center
                        </Badge>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade-up" delay={0.1}>
                        <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
                            <span className="text-foreground">Frequently Asked</span>
                            <br />
                            <span className="text-gradient">Questions</span>
                        </h1>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade-up" delay={0.2}>
                        <p className="text-xl text-muted-foreground">
                            Find answers to common questions about our services, solutions, and company.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20">
                <div className="max-w-3xl mx-auto px-4">
                    <ScrollAnimation animation="fade-up">
                        <FAQAccordion items={faqItems} />
                    </ScrollAnimation>
                </div>
            </section>
        </>
    )
}
