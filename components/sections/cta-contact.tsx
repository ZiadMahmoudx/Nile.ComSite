'use client'

import React from 'react'
import Link from 'next/link'

export default function CtaContact() {
    return (
        <>


            {/* Section - Inner Page Form Start */}
            <div className="mxd-section mxd-section-inner-form padding-default anim-zoom-in-container" id="contact-form">
                <div className="mxd-container grid-container">

                    {/* Block - Inner Page Headline Start */}
                    <div className="mxd-block">
                        <div className="container-fluid px-0">
                            <div className="row gx-0">

                                {/* Inner Headline Name Start */}
                                <div className="col-12 col-xl-2 mxd-grid-item no-margin"></div>
                                {/* Inner Headline Name End */}

                                {/* Inner Headline Content Start */}
                                <div className="col-12 col-xl-8">

                                    <div className="mxd-block__content contact">
                                        <div className="mxd-block__inner-form loading__fade">
                                            <div className="form-container bg-base-tint/50 backdrop-blur-md rounded-[3rem] p-8 md:p-12 border border-border/40 shadow-sm">

                                                {/* Reply Messages Start */}
                                                <div className="form__reply centered text-center">
                                                    <i className="ph-fill ph-smiley-wink reply__icon"></i>
                                                    <p className="reply__title">Done!</p>
                                                    <span className="reply__text">Thanks for your message. We&apos;ll get back as soon as possible.</span>
                                                </div>
                                                {/* Reply Messages End */}

                                                {/* Contact Form Start */}
                                                <form className="form contact-form" id="contact-form-element">
                                                    <div className="container-fluid p-0">
                                                        <div className="row gx-0">
                                                            <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                                                <input type="text" name="Name" placeholder="Your name*" required />
                                                            </div>
                                                            <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                                                <input type="text" name="Company" placeholder="Company name" />
                                                            </div>
                                                            <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                                                <input type="email" name="E-mail" placeholder="Email*" required />
                                                            </div>
                                                            <div className="col-12 col-md-6 mxd-grid-item anim-uni-in-up">
                                                                <input type="tel" name="Phone" placeholder="Phone" />
                                                            </div>
                                                            <div className="col-12 mxd-grid-item anim-uni-in-up">
                                                                <textarea name="Message" placeholder="A few words about your project*" required></textarea>
                                                            </div>
                                                            <div className="col-12 mxd-grid-item anim-uni-in-up">
                                                                <button className="btn btn-anim btn-default btn-large btn-opposite slide-right-up" type="submit">
                                                                    <span className="btn-caption">Submit</span>
                                                                    <i className="ph-bold ph-arrow-up-right"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                                {/* Contact Form End */}

                                            </div>
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
            {/* Section - Inner Page Form End */}
        </>
    )
}
