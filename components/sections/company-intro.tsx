'use client'

import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Play, X, ChevronRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'

export default function CompanyIntro() {
    const [isVideoOpen, setIsVideoOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    // Parallax effect for the video thumbnail
    const y = useTransform(scrollYProgress, [0, 1], [0, -50])

    return (
        <section ref={containerRef} className="py-24 bg-background relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent skew-x-12 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary/5 to-transparent -skew-x-12 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

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

                        <Button size="lg" className="btn-primary group">
                            About Our Company
                            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>

                    {/* Video Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ y }}
                        className="relative"
                    >
                        {/* Video Thumbnail Card */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer" onClick={() => setIsVideoOpen(true)}>
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10" />

                            {/* Placeholder Image (simulating video thumbnail) */}
                            <div className="aspect-video bg-muted relative">
                                <Image
                                    src="/media/1763752491089.jpeg"
                                    alt="Video Thumbnail"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {/* Overlay for better text readability */}
                                    <div className="absolute inset-0 bg-black/20" />
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center z-20 group-hover:scale-110 transition-transform duration-300 border border-white/30">
                                        <Play className="w-8 h-8 text-white fill-current ml-1" />
                                    </div>
                                </div>
                                {/* Simulated UI elements */}
                                <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end">
                                    <div>
                                        <p className="text-white font-bold text-lg">We Are NILE.COM</p>
                                        <p className="text-white/80 text-sm">2:15 • Corporate Intro</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements around video */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl -z-10" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
                    </motion.div>
                </div>

                {/* Photo Gallery / Culture Section */}
                <div className="mt-24">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold mb-4">Inside NILE.COM</h3>
                        <p className="text-muted-foreground">A glimpse into our daily life and culture</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px]">
                        {/* Photo 1 (Big) */}
                        <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
                            <Image
                                src="/media/1763752491089.jpeg"
                                alt="Team Collaboration"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                <p className="text-white font-medium">Collaborative Workspace</p>
                            </div>
                        </div>
                        {/* Photo 2 */}
                        <div className="relative rounded-2xl overflow-hidden group">
                            <Image
                                src="/media/1763752490924.jpeg"
                                alt="Innovation Lab"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="text-white font-bold">Innovation Lab</span>
                            </div>
                        </div>
                        {/* Photo 3 */}
                        <div className="relative rounded-2xl overflow-hidden group">
                            <Image
                                src="/media/1763752507941.jpeg"
                                alt="Client Success"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="text-white font-bold">Client Success</span>
                            </div>
                        </div>
                        {/* Photo 4 */}
                        <div className="relative rounded-2xl overflow-hidden group">
                            <Image
                                src="/media/1763752473223.jpeg"
                                alt="Training"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="text-white font-bold">Training</span>
                            </div>
                        </div>
                        {/* Photo 5 */}
                        <div className="relative rounded-2xl overflow-hidden group">
                            <Image
                                src="/media/1763752466980.jpeg"
                                alt="Community"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="text-white font-bold">Community</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <DialogContent className="sm:max-w-4xl p-0 bg-black border-none overflow-hidden text-white">
                    <div className="relative aspect-video w-full bg-black flex items-center justify-center">
                        <video
                            width="100%"
                            height="100%"
                            controls
                            autoPlay
                            className="w-full h-full object-contain"
                        >
                            <source src="/media/intro.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors z-20"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    )
}
