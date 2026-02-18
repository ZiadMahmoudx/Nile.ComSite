'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function CompanyIntro() {
    return (
        <div className="mxd-section padding-grid-pre-mtext">
            <div className="mxd-container grid-container">
                <div className="mxd-block">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-neutral-100">
                                <video
                                    controls
                                    playsInline
                                    preload="metadata"
                                    className="w-full h-full object-contain"
                                    poster="/images/thumb.jpg"
                                >
                                    <source src="/intro.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="mxd-block__content" style={{ paddingLeft: '2rem' }}>
                                <div className="mxd-block__name">
                                    <h2 className="reveal-type anim-uni-in-up">About Us</h2><br />
                                </div>
                                <div className="mxd-block__paragraph">
                                    <p className="t-large t-bright anim-uni-in-up">We don't do miracles, but we do amazing things.
                                        Established in 1999, NILE.COM is a private joint stock company based in Cairo, Egypt.</p>
                                    <p className="anim-uni-in-up">NILE.COM has successfully prospered in the rapidly evolving and highly
                                        demanding fields of communication and information technology.
                                        <br />
                                        Over 90% of our engineers have been successfully awarded with the most prestigious industry and products branded certifications and many of them are still pursuing higher self education goals in the aim of obtaining additional certifications.
                                        <br />
                                        Our engineers receive rigorous training that enable them to stand out in their work and ultimately exceed our customers' expectations.
                                    </p>
                                    <div className="mxd-paragraph__controls anim-uni-in-up mt-8">
                                        <Link className="btn btn-anim btn-default btn-outline slide-right-up" href="/about">
                                            <span className="btn-caption">More About Us</span>
                                            <ArrowUpRight className="w-4 h-4 ml-2" />
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
