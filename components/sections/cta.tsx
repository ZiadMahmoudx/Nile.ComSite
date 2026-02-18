import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, MessageSquare } from 'lucide-react'

// Fallback images if specific CTA ones are missing
const CTA_IMG_1 = '/img/cta-img-01.webp'
const CTA_IMG_2 = '/img/cta-img-02.webp'
const CTA_ICON = '/img/300x300_obj-cta-01.webp'

export default function CTA() {
    return (
        <div className="mxd-section overflow-hidden">
            <div className="mxd-container">

                {/* Block - CTA Start */}
                <div className="mxd-block">
                    <div className="mxd-promo">
                        <div className="mxd-promo__inner relative overflow-hidden !bg-[#111] dark:!bg-black rounded-[3rem] px-6 py-20 md:py-32 flex flex-col items-center justify-center text-center">

                            {/* Decorative Background Images */}
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[400px] md:h-[400px] opacity-40 rotate-12 hidden md:block grayscale">
                                    <Image src={CTA_IMG_1} alt="Decoration" fill className="object-cover rounded-2xl" />
                                </div>
                                <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[400px] md:h-[400px] opacity-40 -rotate-12 hidden md:block grayscale">
                                    <Image src={CTA_IMG_2} alt="Decoration" fill className="object-cover rounded-2xl" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 max-w-3xl mx-auto">
                                <div className="mb-8 flex justify-center">
                                    <div className="w-32 h-32 md:w-40 md:h-40 relative flex items-center justify-center">
                                        <Image src={CTA_ICON} alt="Icon" fill className="object-contain" />
                                    </div>
                                </div>

                                <h2 className="anim-uni-in-up text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-10 leading-[1.1]">
                                    Let's talk about <br /><span className="text-white/80">your project!</span>
                                </h2>

                                <div className="flex justify-center anim-uni-in-up">
                                    <Link className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold text-lg transition-transform hover:scale-105 hover:brightness-110" href="/contact">
                                        <span>Contact Us</span>
                                        <ArrowUpRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Block - CTA End */}

            </div>
        </div>
    )
}
