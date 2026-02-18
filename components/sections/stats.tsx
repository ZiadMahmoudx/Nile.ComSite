'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'
import { AnimatedCounter } from '@/components/ui/animated-counter'

const stats = [
    {
        label: 'Happy Clients',
        value: 1750,
        suffix: '+',
        description: 'Enterprise clients who trust our IT solutions',
        image: '/img/800x800_card-image-01.webp',
        colClass: 'col-12 col-xl-5',
        bgClass: 'bg-primary',
        textClass: 'text-primary-foreground',
        btnText: 'About Us',
        btnLink: '/about',
        anim: 'anim-uni-scale-in-right'
    },
    {
        label: 'Clients Return',
        value: 99,
        suffix: '%',
        description: 'Client satisfaction rate across all our projects',
        image: '/img/customer.png',
        colClass: 'col-12 col-xl-7',
        bgClass: '',
        bgStyle: { backgroundColor: 'var(--base-tint)' },
        textClass: '',
        textStyle: { color: 'var(--t-bright)' },
        anim: 'anim-uni-scale-in-left'
    },
    {
        label: 'Years Experience',
        value: 25,
        suffix: '+',
        description: 'Years of professional experience delivering IT solutions',
        image: '/img/27.png',
        colClass: 'col-12 col-xl-7',
        bgClass: '',
        bgStyle: { backgroundColor: 'var(--base-tint)' },
        textClass: '',
        textStyle: { color: 'var(--t-bright)' },
        btnText: 'Start New Project',
        btnLink: '/contact',
        btnIcon: ArrowDownRight,
        anim: 'anim-uni-scale-in-right'
    },
    {
        label: 'Successful Projects',
        value: 2500,
        suffix: '+',
        description: 'Successfully completed IT projects',
        image: '/img/projects.png',
        colClass: 'col-12 col-xl-5',
        bgClass: '',
        bgStyle: { backgroundColor: 'var(--base-tint)' },
        textClass: '',
        textStyle: { color: 'var(--t-bright)' },
        btnText: 'Case Studies',
        btnLink: '/case-studies',
        anim: 'anim-uni-scale-in-left'
    },
    {
        label: 'Team Certifications',
        value: 200,
        suffix: '+',
        description: 'Industry certifications held by our expert engineers',
        image: '/img/cloud22.png',
        colClass: 'col-12 col-xl-5',
        bgClass: '',
        bgStyle: { backgroundColor: 'var(--base-tint)' },
        textClass: '',
        textStyle: { color: 'var(--t-bright)' },
        anim: 'anim-uni-scale-in-left'
    },
    {
        label: 'Technology Partners',
        value: 50,
        suffix: '+',
        description: 'Strategic technology partnerships including Microsoft, AWS, Cisco & VMware',
        image: '/img/partners.png',
        colClass: 'col-12 col-xl-7',
        bgClass: '',
        bgStyle: { backgroundColor: 'var(--base-tint)' },
        textClass: '',
        textStyle: { color: 'var(--t-bright)' },
        btnText: 'Our Partners',
        btnLink: '/partners',
        anim: 'anim-uni-scale-in-right'
    }
]

export default function Stats() {
    return (
        <div className="mxd-section overflow-hidden padding-pre-title">
            <div className="mxd-container grid-container">

                {/* Block - Statistics Cards Start */}
                <div className="mxd-block">
                    <div className="mxd-stats-cards">
                        <div className="container-fluid px-0">
                            <div className="row gx-0">
                                {stats.map((stat, index) => (
                                    <div key={index} className={`${stat.colClass} mxd-stats-cards__item mxd-grid-item ${stat.anim}`}>
                                        <div className={`mxd-stats-cards__inner relative h-[450px] ${stat.bgClass} rounded-[2.5rem] overflow-hidden transition-transform hover:-translate-y-1 duration-300`} style={stat.bgStyle || {}}>
                                            {/* Text Content - Top Right */}
                                            <div className="absolute top-8 right-8 z-10 flex flex-col items-end text-right">
                                                <div className={`mxd-counter__number mxd-stats-number anim-uni-in-up ${stat.textClass} flex items-baseline font-display text-[5rem] md:text-[7rem] lg:text-[8rem] font-bold leading-[0.8] tracking-tight`} style={stat.textStyle || {}}>
                                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} separator="," />
                                                </div>
                                                <p className={`mxd-counter__descr anim-uni-in-up !text-lg md:!text-xl font-medium opacity-90 max-w-[280px] leading-snug mt-4 ${stat.textClass}`} style={stat.textStyle || {}}>
                                                    {stat.description}
                                                </p>
                                            </div>

                                            {/* Button - Bottom Right */}
                                            {stat.btnText && (
                                                <div className="absolute bottom-8 right-8 z-20">
                                                    <Link className={`btn btn-anim btn-default btn-outline rounded-full px-8 py-3 bg-transparent border-2 slide-right-up`} href={stat.btnLink || '#'} style={{ borderColor: stat.textStyle?.color || 'currentColor', color: stat.textStyle?.color || 'currentColor' }}>
                                                        <span className="btn-caption font-bold text-lg">{stat.btnText}</span>
                                                        {stat.btnIcon ? <stat.btnIcon className="w-5 h-5 ml-2" /> : <ArrowUpRight className="w-5 h-5 ml-2" />}
                                                    </Link>
                                                </div>
                                            )}

                                            {/* Image - Bottom Left / Background */}
                                            <div className={`mxd-stats-cards__image mxd-stats-cards-image-${index + 1} absolute bottom-0 left-0 w-full h-full z-0 pointer-events-none`}>
                                                <img
                                                    src={stat.image}
                                                    alt={stat.label}
                                                    className={`object-contain object-bottom w-full h-full ${index === 0 ? 'scale-110 -translate-x-10 translate-y-10' : ''} ${index === 2 ? 'scale-90 origin-bottom-left' : ''}`}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Block - Statistics Cards End */}

            </div>
        </div>
    )
}
