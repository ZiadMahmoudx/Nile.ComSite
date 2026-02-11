'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, MapPin, Mail, Phone, Clock, MessageSquare } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Contact() {
  return (
    <>
      <section id="contact" className="mxd-section mxd-section-inner-headline padding-s-text-pre-form overflow-hidden">
        <div className="mxd-container grid-container">

          {/* Headline Block */}
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
                      <span>Contact</span>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                  <div className="mxd-block__content">
                    <div className="mxd-block__inner-headline loading__item">
                      <h1 className="inner-headline__title">
                        Let's talk<br />about your project!
                      </h1>
                      <a className="btn btn-line-headline slide-right-up anim-no-delay" href="mailto:info@nilecom.com.eg">
                        <span className="btn-caption">info@nilecom.com.eg</span>
                        <ArrowUpRight className="w-5 h-5 ml-2" />
                      </a>
                      <p className="inner-headline__text t-large t-bright loading__item mt-6">
                        Have questions? We've got the answers! Here, you'll find clear and concise information about our services, process, and what to expect when working with us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Form Section */}
      <section className="mxd-section mxd-section-inner-form padding-default">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 col-xl-2 mxd-grid-item no-margin"></div>
                <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                  <div className="mxd-block__content contact">
                    <div className="mxd-block__inner-form loading__fade">
                      <div className="form-container">
                        <form className="form contact-form">
                          <div className="container-fluid p-0">
                            <div className="row gx-0">
                              <div className="col-12 col-md-6 mxd-grid-item">
                                <input type="text" name="Name" placeholder="Your name*" required className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-primary transition-colors" />
                              </div>
                              <div className="col-12 col-md-6 mxd-grid-item">
                                <input type="text" name="Company" placeholder="Company name" className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-primary transition-colors" />
                              </div>
                              <div className="col-12 col-md-6 mxd-grid-item">
                                <input type="email" name="E-mail" placeholder="Email*" required className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-primary transition-colors" />
                              </div>
                              <div className="col-12 col-md-6 mxd-grid-item">
                                <input type="tel" name="Phone" placeholder="Phone" className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-primary transition-colors" />
                              </div>
                              <div className="col-12 mxd-grid-item">
                                <textarea name="Message" placeholder="A few words about your project*" required className="w-full bg-transparent border-b border-border py-4 focus:outline-none focus:border-primary transition-colors min-h-[100px]"></textarea>
                              </div>
                              <div className="col-12 mxd-grid-item">
                                <button className="btn btn-anim btn-default btn-large btn-opposite slide-right-up mt-8" type="submit">
                                  <span className="btn-caption">Submit</span>
                                  <ArrowUpRight className="w-5 h-5 ml-2" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="mxd-section padding-default">
        <div className="mxd-container grid-container">
          <div className="mxd-block">
            <div className="container-fluid px-0">
              <div className="row gx-0">
                <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                  <div className="mxd-block__name">
                    <h2 className="reveal-type anim-uni-in-up">Visit Our Office</h2>
                    <div className="mxd-values__image image-small-desktop mt-8 h-[300px] rounded-2xl overflow-hidden relative group">
                      <Image
                        src="/media/real/office_interior.jpg"
                        alt="Office"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-7 mxd-grid-item no-margin">
                  <div className="mxd-block__content">
                    <div className="mxd-block__paragraph">
                      <p className="t-large t-bright anim-uni-in-up mb-8">
                        Our doors are always open for a conversation about how technology can transform your business.
                      </p>
                      <div className="mxd-paragraph__lists">
                        <div className="container-fluid p-0">
                          <div className="row g-0">
                            <div className="col-12 col-md-6 col-xl-5 mxd-paragraph__lists-item mb-8 md:mb-0">
                              <div className="mxd-paragraph__lists-title mb-4">
                                <p className="t-large t-bright t-caption anim-uni-in-up font-bold">Cairo HQ</p>
                              </div>
                              <ul className="space-y-4">
                                <li className="anim-uni-in-up">
                                  <a href="https://maps.google.com" target="_blank" className="flex items-start hover:text-primary transition-colors">
                                    <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                    <span>Maadi, Cairo,<br />Egypt</span>
                                  </a>
                                </li>
                                <li className="anim-uni-in-up">
                                  <a href="tel:+20227353333" className="flex items-center hover:text-primary transition-colors">
                                    <Phone className="w-5 h-5 mr-3" />
                                    <span>+20 2 2735 3333</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-12 col-md-6 col-xl-5 mxd-paragraph__lists-item">
                              <div className="mxd-paragraph__lists-title mb-4">
                                <p className="t-large t-bright t-caption anim-uni-in-up font-bold">Business Hours</p>
                              </div>
                              <ul className="space-y-4">
                                <li className="anim-uni-in-up">
                                  <div className="flex items-start">
                                    <Clock className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                                    <span>Sun - Thu: 9AM - 6PM<br />Fri - Sat: Closed</span>
                                  </div>
                                </li>
                                <li className="anim-uni-in-up">
                                  <a href="mailto:info@nilecom.com.eg" className="flex items-center hover:text-primary transition-colors">
                                    <Mail className="w-5 h-5 mr-3" />
                                    <span>info@nilecom.com.eg</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
