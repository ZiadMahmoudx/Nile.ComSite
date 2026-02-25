'use client'

import React, { useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Volume2, VolumeX, Play, Pause } from 'lucide-react'

export default function CompanyIntro() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(!isMuted);
        }
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="mxd-section padding-grid-pre-mtext">
            <div className="mxd-container grid-container">
                <div className="mxd-block">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch h-full">
                        <div className="w-full">
                            <div className="relative w-full aspect-video h-full rounded-2xl overflow-hidden shadow-2xl bg-black border border-border/50 group">
                                <video
                                    ref={videoRef}
                                    autoPlay
                                    muted={isMuted}
                                    loop
                                    playsInline
                                    preload="metadata"
                                    controlsList="nodownload"
                                    onContextMenu={(e) => e.preventDefault()}
                                    onClick={togglePlay}
                                    className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 cursor-pointer"
                                    poster="/images/thumb.jpg"
                                >
                                    <source src="/intro.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {/* Custom Video Controls */}
                                <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 opacity-60 hover:opacity-100 group-hover:opacity-100 transition-all duration-300">
                                    <button
                                        onClick={togglePlay}
                                        className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
                                        aria-label={isPlaying ? "Pause video" : "Play video"}
                                    >
                                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                                    </button>
                                    <button
                                        onClick={toggleMute}
                                        className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-colors"
                                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                                    >
                                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-between h-full lg:py-2 lg:pl-6">
                            <div className="mxd-block__content">
                                <div className="mxd-block__name mb-6">
                                    <h2 className="reveal-type anim-uni-in-up font-bold" style={{ fontSize: '4.5rem', lineHeight: '1.15' }}>About Us</h2>
                                </div>
                                <div className="mxd-block__paragraph">
                                    <p className="t-large reveal-type anim-uni-in-up font-medium mb-6" style={{ fontSize: '1.75rem', lineHeight: '1.3' }}>
                                        We don't do miracles, but we do amazing things.
                                        Established in 1999, <strong className="font-bold">NILE.COM</strong> is a private joint stock company based in Cairo, Egypt.
                                    </p>
                                    <p className="reveal-type anim-uni-in-up opacity-90" style={{ fontSize: '1.45rem', lineHeight: '1.8' }}>
                                        NILE.COM has successfully prospered in the rapidly evolving and highly
                                        demanding fields of communication and information technology.
                                        <br /><br />
                                        Over 90% of our engineers have been successfully awarded with the most prestigious industry and products branded certifications and many of them are still pursuing higher self education goals in the aim of obtaining additional certifications.
                                        <br /><br />
                                        Our engineers receive rigorous training that enable them to stand out in their work and ultimately exceed our customers' expectations.
                                    </p>
                                </div>
                            </div>
                            <div className="mxd-paragraph__controls flex justify-end mt-4">
                                <Link className="btn btn-anim btn-default btn-outline slide-right-up mt-8" href="/about">
                                    <span className="btn-caption font-bold">More About Us</span>
                                    <ArrowUpRight className="w-4 h-4 ml-2" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
