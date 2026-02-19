'use client'

import React from 'react'

const CareersHero = () => {
    return (
        <section className="mxd-section mxd-section-inner-headline padding-s-headline-pre-grid">
            <div className="mxd-container grid-container">
                <div className="mxd-block loading-wrap">
                    <div className="container-fluid px-0">
                        <div className="row gx-0">
                            <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                                <div className="mxd-block__name name-inner-headline">
                                    <p className="mxd-point-subtitle">
                                        <span className="relative flex h-3 w-3 mr-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                        </span>
                                        <span>Careers</span>
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                                <div className="mxd-block__content">
                                    <div className="mxd-block__inner-headline">
                                        <h1 className="inner-headline__title text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                                            Join our team of <span className="text-primary">tech innovators</span>
                                        </h1>
                                        <div className="inner-headline__descr t-large t-bright mt-6 max-w-2xl">
                                            <p>
                                                Be part of Egypt&apos;s leading IT solutions provider. We are always looking for passionate
                                                professionals to help us shape the future of technology.
                                            </p>
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

export default CareersHero
