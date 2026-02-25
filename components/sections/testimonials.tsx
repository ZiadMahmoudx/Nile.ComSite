'use client'

import React from 'react'
import Image from 'next/image'
import { Marquee } from '@/components/ui/marquee'

const testimonials = [
    {
        name: 'Ahmed Hassan',
        role: 'CTO',
        content: 'NILE.COM transformed our entire IT infrastructure. Their expertise in cloud migration saved us millions and improved our operational efficiency by 40%.',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        logo: '/img/microsoft-logo-300x300.png'
    },
    {
        name: 'Sarah Mitchell',
        role: 'IT Director',
        content: 'The cybersecurity solutions implemented by NILE.COM have been exceptional. We haven\'t had a single security incident since partnering with them.',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        logo: '/img/Fortinet-300x300.png'
    },
    {
        name: 'Omar Khalid',
        role: 'Managing Director',
        content: 'Their 24/7 support team is phenomenal. Any issue we\'ve had was resolved within hours, not days. True enterprise-grade service.',
        avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
        logo: '/img/Dell-Emc-e1588863410145-367x367.png'
    },
    {
        name: 'Lisa Chen',
        role: 'VP of Operations',
        content: 'We\'ve worked with many IT providers, but NILE.COM stands out for their strategic approach. They don\'t just solve problems—they anticipate them.',
        avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
        logo: '/img/Vmware-logo-300x300.png'
    }
]

export default function Testimonials() {
    return (
        <div className="mxd-section overflow-hidden padding-default mt-24 md:mt-32">
            <div className="mxd-container grid-container">

                {/* Section Title */}
                <div className="mxd-block">
                    <div className="mxd-section-title pre-grid">
                        <div className="container-fluid p-0">
                            <div className="row g-0">
                                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                                    <div className="mxd-section-title__hrtitle">
                                        <h2 className="reveal-type anim-uni-in-up" style={{ fontSize: 'clamp(2.4rem, 4vw, 4rem)' }}>
                                            What Our<br />Clients Say
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                                    <div className="mxd-section-title__hrdescr">
                                        <p className="anim-uni-in-up">
                                            Don't just take our word for it. Hear from industry leaders who trust NILE.COM for their technology needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials Marquee */}
                <div className="mxd-block">
                    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                        <Marquee pauseOnHover className="[--duration:40s]">
                            {testimonials.map((item, index) => (
                                <div key={index} className="mx-4 w-[400px] md:w-[500px]">
                                    <div className="mxd-testimonials-card bg-white rounded-3xl p-8 shadow-sm border border-neutral-100 hover:shadow-md hover:border-neutral-200 transition-all duration-300 h-auto flex flex-col justify-between group">

                                        {/* Decorative Quote & Text content */}
                                        <div className="flex flex-col">
                                            <div className="text-6xl text-neutral-200 font-serif leading-none h-6 group-hover:text-primary/20 transition-colors duration-300">
                                                "
                                            </div>
                                            <div className="mt-4">
                                                <p className="text-xl md:text-2xl text-neutral-800 leading-relaxed font-medium">
                                                    {item.content}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Author Info */}
                                        <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-col">
                                            <h4 className="text-lg font-bold text-black tracking-tight">{item.name}</h4>
                                            <span className="text-sm font-medium text-neutral-500 uppercase tracking-widest mt-1">{item.role}</span>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </Marquee>
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background dark:from-background"></div>
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background dark:from-background"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}
