'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ArrowRight, BarChart3, Globe, ShieldCheck, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { AnimatedCaption } from '@/components/ui/animated-caption'

const caseStudies = [
    {
        id: 'bank-digital-transformation',
        title: 'Digital Transformation for EgyptBank',
        client: 'EgyptBank',
        desc: 'Revolutionizing banking operations with a secure, cloud-native infrastructure.',
        results: ['300% Scaling', '50% Faster'],
        icon: BarChart3,
        image: '/media/real/digital_transformation.jpg',
    },
    {
        id: 'telecom-network-upgrade',
        title: 'Network Modernization for Telecom Egypt',
        client: 'Telecom Egypt',
        desc: 'Deploying next-generation 5G readiness and SD-WAN infrastructure.',
        results: ['10x Capacity', '40% Lower Latency'],
        icon: Globe,
        image: '/media/real/cloud_migration.jpg',
    },
    {
        id: 'healthcare-cloud-migration',
        title: 'Healthcare Cloud Migration',
        client: 'Healthcare Network',
        desc: 'Migrating critical healthcare systems to a secure, compliant cloud infrastructure with zero downtime.',
        results: ['99.99% Uptime', '60% Cost Reduction'],
        icon: ShieldCheck,
        image: '/media/real/cybersecurity.jpg',
    },
    {
        id: 'retail-security-overhaul',
        title: 'Retail Security Overhaul',
        client: 'National Retail Chain',
        desc: 'Comprehensive cybersecurity transformation protecting 200+ retail locations and customer data.',
        results: ['Zero Breaches', '100% PCI Compliant'],
        icon: Zap,
        image: '/media/real/hero_business_1.jpg',
    }
]

export default function CaseStudiesContent() {
    return (
        <>
            {/* Hero Section (Copied style from AboutContent/TeamContent) */}
            <section className="mxd-section mxd-section-inner-headline padding-s-headline-pre-grid">
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
                                            <span>Case Studies</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                                    <div className="mxd-block__content">
                                        <div className="mxd-block__inner-headline">
                                            <h1 className="inner-headline__title">
                                                Proven Results & <span className="text-primary">Success Stories</span>
                                            </h1>
                                            <p className="inner-headline__text t-large t-bright mt-6">
                                                Discover how we help leading enterprises solve complex challenges and achieve digital excellence through technology.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content - Case Studies List (Styled like Milestones/Values list) */}
            <section className="mxd-section padding-default">
                <div className="mxd-container grid-container">
                    <div className="mxd-block">
                        <div className="mxd-section-title pre-grid">
                            <div className="container-fluid p-0">
                                <div className="row g-0">
                                    <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                                        <div className="mxd-section-title__hrtitle">
                                            <h2 className="reveal-type anim-uni-in-up" style={{ fontSize: 'clamp(2.4rem, 4vw, 4rem)' }}>
                                                Featured<br />Projects
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                                        <div className="mxd-section-title__hrdescr">
                                            <p className="anim-uni-in-up">
                                                We take pride in delivering measurable value and impactful solutions for our clients.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mxd-block">
                        <div className="mxd-awards-list hover-reveal">
                            {caseStudies.map((study, idx) => (
                                <Link key={idx} href={`/case-studies/${study.id}`} className="mxd-awards-list__item hover-reveal__item cursor-pointer block group">
                                    <div className="mxd-awards-list__border anim-uni-in-up"></div>

                                    {/* Hover Image Reveal */}
                                    <div className="hover-reveal__content overflow-visible hover-reveal-400x300">
                                        <Image
                                            className="hover-reveal__image object-cover"
                                            src={study.image}
                                            alt={study.title}
                                            width={400}
                                            height={300}
                                        />
                                    </div>

                                    <div className="mxd-awards-list__inner py-8">
                                        <div className="container-fluid px-0">
                                            <div className="row gx-0 align-items-center">
                                                {/* Client Name */}
                                                <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                                                    <div className="anim-uni-in-up mb-2 xl:mb-0">
                                                        <p className="font-bold text-muted-foreground group-hover:text-primary transition-colors duration-300" style={{ fontSize: '1.1rem' }}>
                                                            {study.client}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Title & Icon */}
                                                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                                                    <div className="anim-uni-in-up flex items-center gap-4">
                                                        <div className="p-3 rounded-full bg-secondary/10 group-hover:bg-primary/10 transition-colors shrink-0">
                                                            <study.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                                                        </div>
                                                        <p className="font-bold group-hover:text-primary transition-colors duration-300" style={{ fontSize: 'clamp(1.4rem, 2vw, 1.8rem)' }}>
                                                            {study.title}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Results Tags */}
                                                <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                                                    <div className="flex flex-wrap gap-2 justify-start xl:justify-end mt-4 xl:mt-0 anim-uni-in-up">
                                                        {study.results.map((res, i) => (
                                                            <span key={i} className="tag tag-default tag-outline bg-background/50">
                                                                {res}
                                                            </span>
                                                        ))}
                                                        <ArrowUpRight className="w-5 h-5 ml-2 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mxd-awards-list__border anim-uni-in-up"></div>
                                </Link>
                            ))}
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
                                            <p className="anim-uni-in-up" style={{ fontSize: 'clamp(2.4rem, 4vw, 4rem)', fontWeight: 'var(--fw-medium)', fontFamily: 'var(--_font-accent)', color: 'var(--t-bright)', lineHeight: '1.1' }}>
                                                Have a Project in Mind?
                                            </p>
                                            <p className="t-large t-bright mt-6 anim-uni-in-up">
                                                Let's build your next success story together.
                                            </p>
                                            <div className="flex justify-center mt-10 anim-uni-in-up">
                                                <Link className="btn btn-anim btn-default btn-opposite slide-right-up" href="/contact">
                                                    <AnimatedCaption text="Start a Conversation" />
                                                    <ArrowRight className="w-5 h-5 ml-2" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
