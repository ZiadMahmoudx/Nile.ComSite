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
        <section id="openings" className="mxd-section overflow-hidden padding-default">
            <div className="mxd-container grid-container">

                {/* Section Title */}
                <div className="mxd-block">
                    <div className="mxd-section-title">
                        <div className="container-fluid p-0">
                            <div className="row g-0">
                                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                                    <div className="mxd-section-title__hrtitle">
                                        <h2 className="reveal-type" style={{ fontSize: 'clamp(2.4rem, 4vw, 4rem)' }}>Department <br />& Open Roles</h2>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                                    <div className="mxd-section-title__hrdescr">
                                        <p className="anim-uni-in-up">
                                            Explore our current job openings and find the perfect role for your skills and passion.
                                            We offer competitive salaries, comprehensive benefits, and a culture of continuous learning.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Jobs List */}
                <div className="mxd-block">
                    {positions.length > 0 ? (
                        <div className="mxd-services-list grid-top hover-reveal">
                            {positions.map((job, index) => (
                                <div key={index} className="mxd-services-list__item hover-reveal__item group">
                                    <div className="mxd-services-list__border anim-uni-in-up"></div>

                                    {/* Hover Content */}
                                    <div className="hover-reveal__content hover-reveal-360x440 flex items-center justify-center" style={{ backgroundColor: 'var(--base-opp)', opacity: 0.95 }}>
                                        <Link
                                            href={`/contact?role=${encodeURIComponent(job.title)}`}
                                            aria-label={`Apply for ${job.title}`}
                                            className="w-full h-full flex flex-col items-center justify-center"
                                            style={{ color: 'var(--t-opp-bright)' }}
                                        >
                                            <Briefcase className="w-16 h-16 mb-4" />
                                            <span className="font-bold" style={{ fontSize: '1.25rem' }}>Apply Now</span>
                                        </Link>
                                    </div>

                                    <div className="mxd-services-list__inner">
                                        <div className="container-fluid px-0">
                                            <div className="row gx-0 align-items-center">
                                                <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                                                    <div className="mxd-services-list__title anim-uni-in-up">
                                                        <p className="group-hover:text-primary transition-colors" style={{ fontSize: 'clamp(1.4rem, 2vw, 2rem)', lineHeight: '1.3' }}>{job.title}</p>
                                                        <span className="block font-normal" style={{ fontSize: '0.875rem', color: 'var(--t-medium)', marginTop: '0.25rem' }}>{job.department}</span>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                                                    <div className="mxd-services-list__descr anim-uni-in-up flex flex-col gap-2">
                                                        <div className="flex items-center" style={{ fontSize: '0.875rem', color: 'var(--t-medium)' }}>
                                                            <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                                                            {job.location}
                                                        </div>
                                                        <div className="flex items-center" style={{ fontSize: '0.875rem', color: 'var(--t-medium)' }}>
                                                            <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                                                            {job.type}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-xl-2 mxd-grid-item no-margin flex justify-end">
                                                    <div className="mxd-services-list__tagslist">
                                                        <Link
                                                            href={`/contact?role=${encodeURIComponent(job.title)}`}
                                                            aria-label={`Apply for ${job.title}`}
                                                            className="btn btn-anim btn-default btn-outline slide-right-up"
                                                        >
                                                            <span className="btn-caption">Apply</span>
                                                            <ArrowRight className="w-4 h-4 ml-2" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mxd-services-list__border anim-uni-in-up"></div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <Briefcase className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--t-medium)' }} />
                            <p className="font-bold mb-2" style={{ fontSize: '1.25rem', color: 'var(--t-bright)' }}>No open positions right now</p>
                            <p style={{ fontSize: '0.875rem', color: 'var(--t-medium)' }}>
                                Check back soon or <Link href="/contact" className="text-primary underline">send us your CV</Link> for future opportunities.
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </section>
    )
}
