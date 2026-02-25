'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Briefcase, MapPin, Clock } from 'lucide-react'

const positions = [
    { title: 'Senior Cloud Solutions Architect', department: 'Cloud Services', location: 'Cairo, EG', type: 'Full-time' },
    { title: 'Cybersecurity Specialist', department: 'Security', location: 'Maadi, Cairo', type: 'Full-time' },
    { title: 'IT Project Manager', department: 'Project Delivery', location: 'Remote / Hybrid', type: 'Contract' },
    { title: 'DevOps Engineer', department: 'Infrastructure', location: 'Cairo, EG', type: 'Full-time' },
    { title: 'Frontend Developer', department: 'Digital', location: 'Cairo, EG', type: 'Full-time' },
]

export default function CareersOpenings() {
    return (
        <section id="openings" className="mxd-section overflow-hidden padding-default relative">
            <div className="mxd-container relative z-10">

                {/* Section Title */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-border/50 pb-8">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block anim-uni-in-up">We're Hiring</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold anim-uni-in-up tracking-tight">Open Roles</h2>
                    </div>
                    <div className="mt-8 md:mt-0 max-w-md anim-uni-in-up">
                        <p className="text-lg text-muted-foreground">
                            Explore our current openings. If you don't see a perfect fit, you can still send us your resume.
                        </p>
                    </div>
                </div>

                {/* Jobs List */}
                <div className="mxd-block">
                    {positions.length > 0 ? (
                        <div className="grid grid-cols-1 gap-4">
                            {positions.map((job, index) => (
                                <Link
                                    href={`/contact?role=${encodeURIComponent(job.title)}`}
                                    key={index}
                                    className="group block p-6 md:p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 anim-uni-in-up"
                                >
                                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">

                                        {/* Left Side: Title & Dept */}
                                        <div className="flex-1">
                                            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider group-hover:bg-primary group-hover:!text-white transition-colors duration-300">
                                                {job.department}
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold font-display group-hover:translate-x-3 transition-transform duration-300">
                                                {job.title}
                                            </h3>
                                        </div>

                                        {/* Right Side: Meta Data & Button */}
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                                            <div className="flex flex-col gap-2 border-l border-border/50 pl-6 transition-colors duration-300 group-hover:border-primary/30">
                                                <div className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium text-sm">
                                                    <MapPin className="w-4 h-4 mr-2 text-primary/70 group-hover:text-primary transition-colors duration-300" />
                                                    {job.location}
                                                </div>
                                                <div className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-medium text-sm">
                                                    <Clock className="w-4 h-4 mr-2 text-primary/70 group-hover:text-primary transition-colors duration-300" />
                                                    {job.type}
                                                </div>
                                            </div>
                                            <div className="ml-0 sm:ml-4">
                                                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:!text-white transition-all transform group-hover:scale-110 shadow-sm group-hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]">
                                                    <ArrowRight className="w-5 h-5 group-hover:-rotate-45 group-hover:text-white transition-transform duration-300" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24 bg-card rounded-3xl border border-border/50">
                            <Briefcase className="w-16 h-16 mx-auto mb-6 text-muted-foreground" />
                            <h3 className="text-3xl font-bold font-display mb-4">No open positions right now</h3>
                            <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-8">
                                Check back soon or send us your CV for future opportunities. We're always looking for great talent.
                            </p>
                            <Link href="/contact" className="btn btn-anim btn-default btn-outline">
                                <span className="btn-caption font-medium">Send General Application</span>
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </div>
                    )}
                </div>

            </div>
        </section>
    )
}
