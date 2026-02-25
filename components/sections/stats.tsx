'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { AnimatedCounter } from '@/components/ui/animated-counter'

const stats = [
    {
        label: 'Happy Clients',
        value: 1750,
        suffix: '+',
        description: 'Enterprise clients who trust our IT solutions',
        image: '/img/800x800_card-image-01.webp',
        colSpan: 'md:col-span-6 lg:col-span-4',
        bg: 'bg-primary text-white shadow-xl shadow-primary/20 hover:shadow-primary/30',
        contentPos: 'items-end text-right ml-auto',
        imgClasses: '-left-4 md:-left-8 bottom-0 w-[45%] md:w-[50%] h-[60%] md:h-[70%] scale-110 translate-y-2 md:translate-y-4',
        btnText: 'About Us',
        btnLink: '/about',
    },
    {
        label: 'Clients Return',
        value: 99,
        suffix: '%',
        description: 'Client satisfaction rate across all our projects',
        image: '/img/customer.png',
        colSpan: 'md:col-span-6 lg:col-span-4',
        bg: 'bg-card border border-border/50 text-foreground hover:border-primary/50',
        contentPos: 'items-end text-right ml-auto',
        imgClasses: '-left-2 bottom-0 w-[45%] md:w-[48%] h-full',
    },
    {
        label: 'Years Experience',
        value: 27,
        suffix: '+',
        description: 'Years of professional experience delivering IT solutions',
        image: '/img/27.png',
        colSpan: 'md:col-span-6 lg:col-span-4',
        bg: 'bg-muted border border-border/50 text-foreground hover:border-primary/50',
        contentPos: 'items-start text-left mr-auto',
        imgClasses: 'right-0 -bottom-2 w-[45%] md:w-[48%] h-[70%] md:h-[80%] scale-90 origin-bottom-right',
        btnText: 'Start Project',
        btnLink: '/contact',
    },
    {
        label: 'Successful Projects',
        value: 2500,
        suffix: '+',
        description: 'Successfully completed enterprise IT projects',
        image: '/img/projects.png',
        colSpan: 'md:col-span-6 lg:col-span-4',
        bg: 'bg-card border border-border/50 text-foreground hover:border-primary/50',
        contentPos: 'items-start text-left mr-auto',
        imgClasses: 'right-0 -bottom-4 w-[45%] md:w-[50%] h-[55%] md:h-[65%]',
        btnText: 'Case Studies',
        btnLink: '/case-studies',
    },
    {
        label: 'Team Certifications',
        value: 200,
        suffix: '+',
        description: 'Industry certifications held by our expert engineers',
        image: '/img/cloud22.png',
        colSpan: 'md:col-span-6 lg:col-span-4',
        bg: 'bg-muted border border-border/50 text-foreground hover:border-primary/50',
        contentPos: 'items-end text-right ml-auto',
        imgClasses: '-left-2 bottom-0 w-[45%] md:w-[50%] h-[55%] md:h-[65%]',
    },
    {
        label: 'Tech Partners',
        value: 50,
        suffix: '+',
        description: 'Strategic partnerships with Microsoft, AWS, Cisco & VMware',
        image: '/img/partners.png',
        colSpan: 'md:col-span-6 lg:col-span-4',
        bg: 'bg-card border border-border/50 text-foreground hover:border-primary/50',
        contentPos: 'items-end text-right ml-auto',
        imgClasses: '-left-2 md:left-2 bottom-0 w-[40%] md:w-[45%] h-[75%] md:h-[85%]',
        btnText: 'Our Partners',
        btnLink: '/partners',
    }
]

export default function Stats() {
    return (
        <section className="mxd-section padding-default relative overflow-hidden bg-muted/30">
            <div className="mxd-container relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 mb-10 md:mb-16 pb-6 md:pb-8 border-b border-border/50 anim-uni-in-up">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight m-0 leading-[1.1]">
                            By the Numbers
                        </h2>
                    </div>
                    <div className="w-full md:w-1/2 text-muted-foreground text-sm sm:text-base md:text-[1.05rem] lg:pl-12">
                        <p className="leading-relaxed">
                            Delivering consistent excellence and measurable impact across every IT initiative we undertake.
                        </p>
                    </div>
                </div>

                {/* Grid Layout - 2 Rows (3 Col on Desktop) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`group relative h-[210px] sm:h-[240px] md:h-[300px] lg:h-[320px] p-5 sm:p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg anim-uni-in-up ${stat.colSpan} ${stat.bg}`}
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            {/* Image Background Element */}
                            <img
                                src={stat.image}
                                alt={stat.label}
                                className={`absolute object-contain object-bottom pointer-events-none transition-transform duration-700 group-hover:scale-[1.05] z-0 ${stat.imgClasses}`}
                            />

                            {/* Data Content */}
                            <div className={`relative z-10 flex flex-col h-full w-[60%] sm:w-[55%] lg:w-[60%] xl:w-[55%] shrink-0 ${stat.contentPos}`}>

                                <div className="mb-2 w-full">
                                    <div className={`flex items-baseline justify-[inherit] font-display text-5xl sm:text-6xl md:text-5xl lg:text-[4.5rem] xl:text-[5.5rem] font-bold tracking-tight mb-2 leading-[0.85] ${stat.bg.includes('bg-primary') ? 'text-white' : 'text-foreground'}`}>
                                        <AnimatedCounter value={stat.value} suffix={stat.suffix} separator="," />
                                    </div>
                                    <h3 className={`text-base font-bold mb-1 opacity-0 h-0 hidden`}>
                                        {stat.label}
                                    </h3>
                                    <p className={`text-xs sm:text-sm md:text-[0.8rem] lg:text-[0.85rem] xl:text-[0.95rem] leading-snug font-medium mt-3 ${stat.bg.includes('bg-primary') ? 'text-white/90' : 'text-muted-foreground'}`}>
                                        {stat.description}
                                    </p>
                                </div>

                                {/* Optional Push to Bottom */}
                                <div className="flex-grow"></div>

                                {stat.btnText && stat.btnLink && (
                                    <div className="mt-4 pt-4 shrink-0">
                                        <Link
                                            href={stat.btnLink}
                                            className={`inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border-2 text-[0.7rem] sm:text-xs xl:text-sm font-bold tracking-wider transition-all group/btn ${stat.bg.includes('bg-primary')
                                                ? 'border-white/30 text-white hover:bg-white/10'
                                                : 'border-primary/20 text-foreground hover:bg-primary/5 hover:border-primary/50'
                                                }`}
                                        >
                                            {stat.btnText}
                                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
