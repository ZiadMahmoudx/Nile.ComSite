'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Play, Pause, ChevronRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const galleryImages = [
    { src: "/media/1763752491089.jpeg", alt: "Team Collaboration" },
    { src: "/media/1763752490924.jpeg", alt: "Innovation Lab" },
    { src: "/media/1763752507941.jpeg", alt: "Client Success" },
    { src: "/media/1763752473223.jpeg", alt: "Training" },
    { src: "/media/1763752466980.jpeg", alt: "Community" },
    { src: "/media/1763752459305.jpeg", alt: "Office Life" },
    { src: "/media/1763752469471.jpeg", alt: "Events" },
    { src: "/media/1763752495881.jpeg", alt: "Workplace" },
]

export default function CompanyIntro() {
    const [isPlaying, setIsPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, -50])

    const handlePlay = () => {
        setIsPlaying(true)
        setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play()
            }
        }, 100)
    }

    return (
        <section ref={containerRef} className="py-24 bg-background relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent skew-x-12 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent -skew-x-12 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Discover NILE.COM
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
                            Innovating for a <br />
                            <span className="text-primary">Digital Future</span>
                        </h2>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            For over 25 years, we've been at the forefront of technological evolution in Egypt.
                            Our journey is defined by a relentless pursuit of excellence and a passion for
                            empowering businesses through cutting-edge IT solutions.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                "Award-winning technical expertise",
                                "24/7 dedicated support center",
                                "Strategic partnerships with global tech giants"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Button asChild size="lg" className="btn-primary group">
                            <Link href="/about">
                                About Our Company
                                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Inline Video Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ y }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black group-video">
                            {/* Video Player */}
                            <AnimatePresence mode="wait">
                                {isPlaying ? (
                                    <motion.div
                                        key="video"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="absolute inset-0 z-20"
                                    >
                                        <video
                                            ref={videoRef}
                                            width="100%"
                                            height="100%"
                                            controls
                                            className="w-full h-full object-cover"
                                            poster="/images/thumb.jpg"
                                            autoPlay
                                        >
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
                                        className="absolute inset-0 cursor-pointer group"
                                        onClick={handlePlay}
                                    >
                                        <Image
                                            src="/images/thumb.jpg"
                                            alt="Video Thumbnail"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30 shadow-xl">
                                                <Play className="w-8 h-8 text-white fill-current ml-1" />
                                            </div>
                                        </div>
                                        <div className="absolute bottom-6 left-6 text-white z-10">
                                            <p className="font-bold text-xl">We Are NILE.COM</p>
                                            <p className="text-white/80 text-sm">2:15 • Corporate Intro</p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Decor */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
                    </motion.div>
                </div>

                {/* Modern Infinite Marquee Gallery */}
                <div className="mt-8">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold mb-2">Inside NILE.COM</h3>
                        <p className="text-muted-foreground">A glimpse into our daily life and culture</p>
                    </div>

                    <div className="relative w-full overflow-hidden mask-gradient-x">
                        {/* Gradient Masks */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

                        <div className="flex gap-6 animate-scroll-left py-4 hover:[animation-play-state:paused]">
                            {[...galleryImages, ...galleryImages].map((img, idx) => (
                                <div
                                    key={idx}
                                    className="relative flex-none w-[300px] h-[200px] rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <p className="text-white font-medium text-sm">{img.alt}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll-left {
                    animation: scroll-left 40s linear infinite;
                    width: max-content;
                }
            `}</style>
        </section>
    )
}
