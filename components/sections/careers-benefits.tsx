'use client'

import React from 'react'
import Image from 'next/image'
import { Award, Heart, DollarSign, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

const benefits = [
    { icon: DollarSign, title: 'Competitive Salary', description: 'Attractive compensation with performance bonuses and annual reviews.', color: 'text-emerald-400' },
    { icon: Award, title: 'Professional Growth', description: 'Continuous learning, training, and certification opportunities.', color: 'text-blue-400' },
    { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive health insurance covering you and your family.', color: 'text-rose-400' },
    { icon: Calendar, title: 'Work-Life Balance', description: 'Flexible working arrangements and generous time off.', color: 'text-amber-400' }
]

export default function CareersBenefits() {
    return (
        <section className="mxd-section padding-grid-pre-mtext">
            <div className="mxd-container grid-container">
                <div className="mxd-block">
                    <div className="mxd-values">
                        <div className="container-fluid p-0">
                            <div className="row g-0 d-flex">

                                {/* Lists Column */}
                                <div className="col-12 col-xl-2 mxd-values__item order-2 order-xl-1 mxd-grid-item no-margin">
                                    <div className="mxd-values__lists fullheight-xl">
                                        <div className="container-fluid p-0 fullheight-xl">
                                            <div className="row g-0 fullheight-xl d-xl-flex flex-xl-column justify-content-xl-between">
                                                <div className="col-12 mxd-values__lists-item">
                                                    <ul>
                                                        <li><p className="t-small">Best Compensation</p></li>
                                                        <li><p className="t-small">Career Path</p></li>
                                                        <li><p className="t-small">Global Exposure</p></li>
                                                        <li><p className="t-small">Team Events</p></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Office Image */}
                                <div className="col-12 col-xl-4 mxd-values__item order-1 order-xl-2 mxd-grid-item no-margin">
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
                                <div className="col-12 col-xl-6 mxd-values__item order-3 order-xl-3 mobile-reverse mxd-grid-item no-margin">
                                    <div className="mxd-values__descr has-top-list anim-uni-in-up">
                                        <h3 className="text-3xl font-bold mb-6">Why Join NILE.COM?</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {benefits.map((b, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.1 }}
                                                    className="flex flex-col gap-2 group"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className={`p-2.5 rounded-xl bg-primary/5 border border-black/10 dark:border-white/10 group-hover:border-primary/30 transition-colors ${b.color}`}>
                                                            <b.icon className="w-5 h-5" />
                                                        </div>
                                                        <h4 className="font-bold">{b.title}</h4>
                                                    </div>
                                                    <p className="text-sm text-muted-foreground pl-12">{b.description}</p>
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
