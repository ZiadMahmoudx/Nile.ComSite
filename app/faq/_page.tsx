'use client'

import Link from 'next/link'
import { FAQAccordion } from '@/components/ui/faq-accordion'
import { ArrowUpRight } from 'lucide-react'

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
            <div className="mxd-section mxd-section-inner-headline padding-s-headline-pre-grid">
                <div className="mxd-container grid-container">
                    <div className="mxd-block loading-wrap">
                        <div className="container-fluid px-0">
                            <div className="row gx-0">
                                <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                                    <div className="mxd-block__name name-inner-headline">
                                        <p className="mxd-point-subtitle">
                                            <span className="relative flex h-3 w-3 mr-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                            </span>
                                            <span>FAQ</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                                    <div className="mxd-block__content">
                                        <div className="mxd-block__inner-headline">
                                            <h1 className="inner-headline__title">
                                                Frequently Asked <span className="text-primary">Questions</span>
                                            </h1>
                                            <p className="inner-headline__text t-large t-bright mt-6">
                                                Find answers to common questions about our services, solutions, and company.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Content */}
            <div className="mxd-section padding-default">
                <div className="mxd-container grid-container">
                    <div className="mxd-block">
                        <div className="container-fluid px-0">
                            <div className="row gx-0">
                                <div className="col-12 col-xl-2 mxd-grid-item no-margin"></div>
                                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                                    <FAQAccordion items={faqItems} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mxd-block">
                        <div className="container-fluid p-0">
                            <div className="row g-0">
                                <div className="col-12 col-xl-2 mxd-grid-item no-margin"></div>
                                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                                    <div className="mxd-block__content text-center">
                                        <div className="mxd-block__inner-headline">
                                            <h2 className="inner-headline__title anim-uni-in-up">
                                                Still have questions?
                                            </h2>
                                            <p className="inner-headline__text t-large t-bright mt-6 anim-uni-in-up">
                                                Our team is here to help. Reach out and we'll get back to you within 24 hours.
                                            </p>
                                            <div className="flex justify-center mt-10 anim-uni-in-up">
                                                <Link className="btn btn-anim btn-default btn-opposite slide-right-up" href="/contact">
                                                    <span className="btn-caption">Contact Us</span>
                                                    <ArrowUpRight className="w-5 h-5 ml-2" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
