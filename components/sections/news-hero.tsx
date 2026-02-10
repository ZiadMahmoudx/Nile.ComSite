'use client'

import React from 'react'

const NewsHero = () => {
    return (
        <>
            {/* Section - Inner Page Headline Start */}
            <div className="mxd-section mxd-section-inner-headline padding-blog-default-pre-grid">
                <div className="mxd-container grid-container">

                    {/* Block - Inner Page Headline Start */}
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
                                            <span>News</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Inner Headline Content Start */}
                                <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                                    <div className="mxd-block__content">
                                        <div className="mxd-block__inner-headline loading__item">
                                            <h1 className="inner-headline__title headline-img-before headline-img-06">Latest Updates <span className='text-primary'>& Events</span></h1>
                                        </div>
                                    </div>
                                </div>
                                {/* Inner Headline Content End */}

                            </div>
                        </div>
                    </div>
                    {/* Block - Inner Page Headline End */}

                </div>
            </div>
            {/* Section - Inner Page Headline End */}
        </>
    )
}

export default NewsHero
