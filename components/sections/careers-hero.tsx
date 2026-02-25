'use client'

import React from 'react'

const CareersHero = () => {
    return (
        <section className="mxd-section mxd-section-inner-headline padding-s-headline-pre-grid relative overflow-hidden">
            <div className="mxd-container grid-container relative z-10">
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
                                <div className="mxd-block__content py-12 md:py-24">
                                    <div className="mxd-block__inner-headline">
                                        <h1 className="inner-headline__title font-display text-[2.8rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-8">
                                            Build the Future of <br className="hidden lg:block" />
                                            <span className="text-primary">Enterprise Tech</span>
                                        </h1>
                                        <div className="inner-headline__descr text-xl md:text-2xl text-muted-foreground border-l-2 border-primary/20 pl-6 py-2 max-w-3xl mb-12">
                                            <p>
                                                Be part of Egypt&apos;s leading IT solutions provider. We are always looking for passionate
                                                professionals to help us shape the future of technology.
                                            </p>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-4 anim-uni-in-up">
                                            <a href="#openings" className="btn btn-anim btn-default btn-primary px-8 py-4 slide-right-up">
                                                <span className="btn-caption font-bold">View Open Positions</span>
                                            </a>
                                            <a href="#benefits" className="btn btn-anim btn-default btn-outline px-8 py-4 slide-right-up">
                                                <span className="btn-caption font-medium">Discover Benefits</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        </section>
    )
}

export default CareersHero
