'use client'

import React from 'react'
import Image from 'next/image'
import { Award, Heart, DollarSign, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

const benefits = [
    { icon: DollarSign, title: 'Competitive Salary', description: 'Attractive compensation with performance bonuses and annual reviews.' },
    { icon: Award, title: 'Professional Growth', description: 'Continuous learning, training, and certification opportunities.' },
    { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive health insurance covering you and your family.' },
    { icon: Calendar, title: 'Work-Life Balance', description: 'Flexible working arrangements and generous time off.' }
]

export default function CareersBenefits() {
    return (
        <section className="mxd-section padding-grid-pre-mtext">
            <div className="mxd-container grid-container">
                <div className="mxd-block">
                    <div className="mxd-values">
                        <div className="container-fluid p-0">
                            <div className="row g-0 d-flex">

                                {/* Office Image */}
                                <div className="col-12 col-xl-5 mxd-values__item order-1 mxd-grid-item no-margin">
                                    <div className="mxd-values__image image-large-desktop relative overflow-hidden">
                                        <Image
                                            src="/media/real/tech_workspace.jpg"
                                            alt="NILE.COM Office Life"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    </div>
                                </div>

                                {/* Description and Benefits Grid */}
                                <div className="col-12 col-xl-7 mxd-values__item order-2 mobile-reverse mxd-grid-item no-margin">
                                    <div className="mxd-values__descr has-top-list anim-uni-in-up">
                                        <h3 className="font-bold mb-6" style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', color: 'var(--t-bright)' }}>Why Join NILE.COM?</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {benefits.map((b, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="flex flex-col gap-3 group"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className="p-2.5 rounded-xl flex-shrink-0 group-hover:border-primary/30 transition-colors"
                                                            style={{ backgroundColor: 'var(--base-opp)', border: '1px solid var(--st-bright)' }}>
                                                            <b.icon className="w-5 h-5" style={{ color: 'var(--t-opp-bright)' }} />
                                                        </div>
                                                        <h4 className="font-bold" style={{ fontSize: '1rem', color: 'var(--t-bright)' }}>{b.title}</h4>
                                                    </div>
                                                    <p style={{ fontSize: '0.875rem', color: 'var(--t-medium)', paddingLeft: 'calc(2.5rem + 0.75rem)' }}>{b.description}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
