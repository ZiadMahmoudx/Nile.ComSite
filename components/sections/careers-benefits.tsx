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
        <section id="benefits" className="mxd-section padding-default bg-muted/30">
            <div className="mxd-container">
                <div className="mxd-block mb-16 text-center anim-uni-in-up">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Life at NILE.COM</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold">Why Join Us?</h2>
                </div>
                <div className="mxd-block">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                        {/* Office Image */}
                        <div className="lg:col-span-5 order-2 lg:order-1 relative anim-zoom-in-container rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl border border-border/50 group">
                            <Image
                                src="/media/real/tech_workspace.jpg"
                                alt="NILE.COM Office Life"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8 text-white z-10">
                                <h3 className="font-bold text-2xl mb-2">Modern Workspace</h3>
                                <p className="text-white/80">A collaborative environment designed for innovation.</p>
                            </div>
                        </div>

                        {/* Description and Benefits Grid */}
                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {benefits.map((b, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex flex-col gap-4 p-8 rounded-3xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                            <b.icon className="w-7 h-7 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-2">{b.title}</h4>
                                            <p className="text-muted-foreground leading-relaxed">{b.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
