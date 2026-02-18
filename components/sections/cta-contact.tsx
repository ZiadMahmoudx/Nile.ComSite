'use client'

import React from 'react'
import Link from 'next/link'

export default function CtaContact() {
    return (
        <>
            {/* Section - CTA Start */}
            <div className="mxd-section overflow-hidden mt-12 md:mt-24">
                <div className="mxd-container grid-container">

                    {/* Block - CTA Start */}
                    <div className="mxd-block">
                        <div className="mxd-promo">
                            <div className="mxd-promo__inner anim-zoom-out-container rounded-[3.5rem] border border-border/40 shadow-xl overflow-hidden">
                                {/* background */}
                                <div className="mxd-promo__bg bg-gradient-to-br from-base-opp/90 to-base-opp backdrop-blur-sm"></div>
                                {/* caption */}
                                <div className="mxd-promo__content relative z-10">
                                    <p className="mxd-promo__title anim-uni-in-up">
                                        <span className="mxd-promo__icon">
                                            <img src="/img/300x300_obj-cta-01.webp" alt="Icon" className="rounded-full shadow-lg" />
                                        </span>
                                        <span className="mxd-promo__caption reveal-type text-white font-bold">Let&apos;s talk about your project!</span>
                                    </p>
                                    <div className="mxd-promo__controls anim-uni-in-up">
                                        <Link className="btn btn-anim btn-default btn-large btn-additional slide-right-up shadow-lg hover:shadow-primary/20 transition-all duration-500" href="#contact-form">
                                            <span className="btn-caption">Contact Us</span>
                                            <i className="ph-bold ph-arrow-up-right"></i>
                                        </Link>
                                    </div>
                                </div>
                                {/* parallax images */}
                                <div className="mxd-promo__images">
                                    <img className="promo-image promo-image-1 rounded-full shadow-2xl border-4 border-white/10" src="/img/cta-img-01.webp" alt="Image" data-speed="0.85" />
                                    <img className="promo-image promo-image-2 rounded-full shadow-2xl border-4 border-white/10" src="/img/cta-img-02.webp" alt="Image" data-speed="1.15" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Block - CTA End */}

                </div>
            </div>
            {/* Section - CTA End */}

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
