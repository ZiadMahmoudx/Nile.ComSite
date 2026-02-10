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
                                        <h2 className="reveal-type">Department <br />& Open Roles</h2>
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
                    <div className="mxd-services-list grid-top hover-reveal">
                        {positions.map((job, index) => (
                            <div key={index} className="mxd-services-list__item hover-reveal__item group">
                                <div className="mxd-services-list__border anim-uni-in-up"></div>

                                {/* Simplified Hover Content - Maybe an Icon or Apply call to action */}
                                <div className="hover-reveal__content hover-reveal-360x440 flex items-center justify-center bg-secondary/80 backdrop-blur-sm">
                                    <Link href="/contact" className="w-full h-full flex flex-col items-center justify-center text-primary-foreground">
                                        <Briefcase className="w-16 h-16 mb-4" />
                                        <span className="text-xl font-bold">Apply Now</span>
                                    </Link>
                                </div>

                                <div className="mxd-services-list__inner">
                                    <div className="container-fluid px-0">
                                        <div className="row gx-0 align-items-center">
                                            <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                                                <div className="mxd-services-list__title anim-uni-in-up">
                                                    <p className="group-hover:text-primary transition-colors">{job.title}</p>
                                                    <span className="text-sm text-muted-foreground mt-1 block font-normal">{job.department}</span>
                                                </div>
                                            </div>
                                            <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                                                <div className="mxd-services-list__descr anim-uni-in-up flex flex-col gap-2">
                                                    <div className="flex items-center text-sm text-muted-foreground">
                                                        <MapPin className="w-4 h-4 mr-2" />
                                                        {job.location}
                                                    </div>
                                                    <div className="flex items-center text-sm text-muted-foreground">
                                                        <Clock className="w-4 h-4 mr-2" />
                                                        {job.type}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-xl-2 mxd-grid-item no-margin flex justify-end">
                                                <div className="mxd-services-list__tagslist">
                                                    <Link href="/contact" className="btn btn-anim btn-default btn-outline slide-right-up">
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
                </div>

            </div>
        </section>
    )
}
