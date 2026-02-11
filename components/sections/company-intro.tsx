'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Play, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function CompanyIntro() {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    const handlePlay = () => {
        setIsPlaying(true)
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play()
            }
        }, 100)
    }

    return (
        <>
            {/* Section - Inner Page Headline Start */}
            <div className="mxd-section mxd-section-inner-headline padding-headline-pre-block">
                <div className="mxd-container grid-container">
                    <div className="mxd-block loading-wrap">
                        <div className="container-fluid px-0">
                            <div className="row gx-0">
                                <div className="col-12 col-xl-2 mxd-grid-item no-margin">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="mxd-block__name name-inner-headline"
                                    >
                                        <p className="mxd-point-subtitle">
                                            <span className="relative flex h-3 w-3 mr-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                            </span>
                                            <span>Discover</span>
                                        </p>
                                    </motion.div>
                                </div>
                                <div className="col-12 col-xl-10 mxd-grid-item no-margin">
                                    <div className="mxd-block__content">
                                        <div className="mxd-block__inner-headline">
                                            <h1 className="inner-headline__title reveal-type">
                                                Innovating for a <span className="text-primary">Digital Future</span>
                                            </h1>
                                            <p className="inner-headline__text text-lg sm:text-xl text-muted-foreground leading-relaxed mt-6 reveal-type">
                                                For over 25 years, we've been at the forefront of technological evolution in Egypt.
                                                Our journey is defined by a relentless pursuit of excellence and a passion for
                                                empowering businesses through cutting-edge IT solutions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section - Inner Page Headline End */}

            {/* Section - Culture & Values Start */}
            <div className="mxd-section padding-grid-pre-mtext">
                <div className="mxd-container grid-container">
                    <div className="mxd-block">
                        <div className="mxd-values">
                            <div className="container-fluid p-0">
                                <div className="row g-0 d-flex">

                                    {/* Lists Column */}
                                    <div className="col-12 col-xl-2 mxd-values__item order-2 order-xl-1 mxd-grid-item no-margin">
                                        <div className="mxd-values__lists fullheight-xl">
                                            <div className="container-fluid p-0 fullheight-xl">
                                                <div className="row g-0 fullheight-xl d-xl-flex flex-xl-column justify-content-xl-between">
                                                    <div className="col-12 mxd-values__lists-item">
                                                        <ul>
                                                            <li><p className="t-small">Award-winning expertise</p></li>
                                                            <li><p className="t-small">24/7 Support Center</p></li>
                                                            <li><p className="t-small">Global Partnerships</p></li>
                                                            <li><p className="t-small">Cloud Solutions</p></li>
                                                            <li><p className="t-small">Cybersecurity</p></li>
                                                            <li><p className="t-small">Digital Transformation</p></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description Column (Swapped to Left/Middle) */}
                                    <div className="col-12 col-xl-4 mxd-values__item order-3 order-xl-2 mobile-reverse mxd-grid-item no-margin">
                                        <div className="mxd-values__image image-small-desktop h-[300px] w-full relative overflow-hidden rounded-2xl mb-8">
                                            <Image
                                                src="/media/real/office_interior.jpg"
                                                alt="Office Interior"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="mxd-values__descr has-top-list">
                                            <p className="t-bright t-large">
                                                We are a trusted IT solutions provider specializing in enterprise infrastructure, cybersecurity, and digital transformation.
                                                We help businesses scale and thrive in the modern technology landscape.
                                            </p>
                                            <div className="mt-8">
                                                <Link href="/about" className="btn btn-anim btn-default btn-outline slide-right">
                                                    <span className="btn-caption">About Our Company</span>
                                                    <ChevronRight className="ml-2 w-4 h-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Video/Image Column (Swapped to Right) */}
                                    <div className="col-12 col-xl-6 mxd-values__item order-1 order-xl-3 mxd-grid-item no-margin">
                                        <div className="mxd-values__image image-large-desktop relative overflow-hidden group w-full rounded-2xl aspect-video shadow-2xl">
                                            {/* Video Player Overlay */}
                                            <AnimatePresence mode="wait">
                                                {isPlaying ? (
                                                    <motion.div
                                                        key="video"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        className="absolute inset-0 z-20 bg-black"
                                                    >
                                                        <video
                                                            ref={videoRef}
                                                            width="100%"
                                                            height="100%"
                                                            controls
                                                            className="w-full h-full object-contain"
                                                            autoPlay
                                                        >
                                                            {/* Use existing video path */}
                                                            <source src="/media/intro.mp4" type="video/mp4" />
                                                            Your browser does not support the video tag.
                                                        </video>
                                                    </motion.div>
                                                ) : (
                                                    <motion.div
                                                        key="thumbnail"
                                                        initial={{ opacity: 0 }}
                                                        animate={{ opacity: 1 }}
                                                        exit={{ opacity: 0 }}
                                                        className="absolute inset-0 cursor-pointer h-full w-full"
                                                        onClick={handlePlay}
                                                    >
                                                        <Image
                                                            src="/media/real/team_collaboration.jpg"
                                                            alt="NILE.COM Team"
                                                            fill
                                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                        />
                                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                                                        <div className="absolute inset-0 flex items-center justify-center">
                                                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30">
                                                                <Play className="w-8 h-8 text-white fill-current ml-1" />
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Section - Culture & Values End */}
        </>
    )
}
