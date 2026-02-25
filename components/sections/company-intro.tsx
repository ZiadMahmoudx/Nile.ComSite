'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function CompanyIntro() {
    return (
        <div className="mxd-section padding-grid-pre-mtext">
            <div className="mxd-container grid-container">
                <div className="mxd-block">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch h-full">
                        <div className="w-full">
                            <div className="relative w-full aspect-video h-full rounded-2xl overflow-hidden shadow-sm bg-neutral-100 border border-neutral-200">
                                <video
                                    controls
                                    playsInline
                                    preload="metadata"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    poster="/images/thumb.jpg"
                                >
                                    <source src="/intro.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-between h-full lg:py-2 lg:pl-6">
                            <div className="mxd-block__content">
                                <div className="mxd-block__name mb-6">
                                    <h2 className="reveal-type anim-uni-in-up font-bold" style={{ fontSize: '4.5rem', lineHeight: '1.15' }}>About Us</h2>
                                </div>
                                <div className="mxd-block__paragraph">
                                    <p className="t-large reveal-type anim-uni-in-up font-medium mb-6" style={{ fontSize: '1.75rem', lineHeight: '1.3' }}>
                                        We don't do miracles, but we do amazing things.
                                        Established in 1999, <strong className="font-bold">NILE.COM</strong> is a private joint stock company based in Cairo, Egypt.
                                    </p>
                                    <p className="reveal-type anim-uni-in-up opacity-90" style={{ fontSize: '1.45rem', lineHeight: '1.8' }}>
                                        NILE.COM has successfully prospered in the rapidly evolving and highly
                                        demanding fields of communication and information technology.
                                        <br /><br />
                                        Over 90% of our engineers have been successfully awarded with the most prestigious industry and products branded certifications and many of them are still pursuing higher self education goals in the aim of obtaining additional certifications.
                                        <br /><br />
                                        Our engineers receive rigorous training that enable them to stand out in their work and ultimately exceed our customers' expectations.
                                    </p>
                                </div>
                            </div>
                            <div className="mxd-paragraph__controls flex justify-end mt-4">
                                <Link className="btn btn-anim btn-default btn-outline slide-right-up mt-8" href="/about">
                                    <span className="btn-caption font-bold">More About Us</span>
                                    <ArrowUpRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
