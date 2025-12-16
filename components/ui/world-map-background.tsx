'use client'

import { useEffect, useState } from 'react'

export const WorldMapBackground = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            {/* Subtle Grid Background - Enhanced for Dark Mode */}
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] dark:opacity-[0.1]" />

            {/* World Map SVG */}
            <div className="absolute inset-0 flex items-center justify-center opacity-40 dark:opacity-60">
                <svg viewBox="0 0 1000 500" className="w-full h-full lg:w-[90%] lg:h-[90%] fill-primary dark:fill-white/80">
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: 'transparent', stopOpacity: 0 }} />
                            <stop offset="50%" style={{ stopColor: 'var(--primary)', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: 'transparent', stopOpacity: 0 }} />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Simplified World Dots with Twinkle Animation */}
                    <g className="map-dots">
                        {/* North America */}
                        <circle cx="150" cy="150" r="3" className="animate-twinkle delay-1" />
                        <circle cx="170" cy="140" r="3" />
                        <circle cx="190" cy="150" r="3" className="animate-twinkle delay-2" />
                        <circle cx="160" cy="170" r="3" />
                        <circle cx="180" cy="180" r="3" />
                        <circle cx="210" cy="160" r="3" className="animate-twinkle delay-3" />
                        <circle cx="230" cy="140" r="3" />
                        <circle cx="90" cy="120" r="3" className="animate-twinkle" />
                        <circle cx="110" cy="140" r="3" />

                        {/* South America */}
                        <circle cx="280" cy="280" r="3" className="animate-twinkle delay-2" />
                        <circle cx="300" cy="300" r="3" />
                        <circle cx="290" cy="340" r="3" />
                        <circle cx="310" cy="320" r="3" className="animate-twinkle delay-1" />
                        <circle cx="330" cy="290" r="3" />
                        <circle cx="270" cy="260" r="3" />

                        {/* Europe/Africa */}
                        <circle cx="500" cy="160" r="3" className="animate-twinkle" />
                        <circle cx="520" cy="150" r="3" />
                        <circle cx="540" cy="160" r="3" className="animate-twinkle delay-3" />
                        <circle cx="530" cy="180" r="3" />
                        <circle cx="490" cy="170" r="3" />
                        <circle cx="510" cy="190" r="3" className="animate-twinkle delay-1" />

                        {/* CAIRO/EGYPT HUB - Pulsing Core */}
                        <circle cx="550" cy="200" r="8" className="animate-pulse fill-primary dark:fill-red-500" filter="url(#glow)" />

                        <circle cx="530" cy="230" r="3" />
                        <circle cx="550" cy="250" r="3" className="animate-twinkle delay-2" />
                        <circle cx="570" cy="280" r="3" />
                        <circle cx="590" cy="300" r="3" className="animate-twinkle delay-3" />
                        <circle cx="540" cy="320" r="3" />
                        <circle cx="560" cy="350" r="3" />

                        {/* Asia */}
                        <circle cx="700" cy="160" r="3" className="animate-twinkle delay-1" />
                        <circle cx="730" cy="150" r="3" />
                        <circle cx="760" cy="170" r="3" className="animate-twinkle" />
                        <circle cx="720" cy="190" r="3" />
                        <circle cx="750" cy="210" r="3" className="animate-twinkle delay-2" />
                        <circle cx="780" cy="190" r="3" />
                        <circle cx="820" cy="160" r="3" className="animate-twinkle delay-3" />
                        <circle cx="850" cy="180" r="3" />
                        <circle cx="800" cy="230" r="3" />

                        {/* Australia */}
                        <circle cx="850" cy="350" r="3" className="animate-twinkle delay-1" />
                        <circle cx="880" cy="360" r="3" />
                        <circle cx="900" cy="340" r="3" className="animate-twinkle delay-2" />

                        {/* Cloud Nodes */}
                        <circle cx="400" cy="100" r="2" className="opacity-50" />
                        <circle cx="600" cy="400" r="2" className="opacity-50" />
                        <circle cx="300" cy="400" r="2" className="opacity-50" />
                        <circle cx="800" cy="100" r="2" className="opacity-50" />
                    </g>

                    {/* Connecting Beams with High Contrast Stroke */}
                    <g className="beams" filter="url(#glow)">
                        <path d="M550,200 Q350,100 230,140" fill="none" stroke="url(#grad1)" strokeWidth="2" className="animate-dash" />
                        <path d="M550,200 Q530,150 500,160" fill="none" stroke="url(#grad1)" strokeWidth="2" className="animate-dash animation-delay-500" />
                        <path d="M550,200 Q650,150 750,210" fill="none" stroke="url(#grad1)" strokeWidth="2" className="animate-dash animation-delay-1000" />
                        <path d="M550,200 Q560,300 560,350" fill="none" stroke="url(#grad1)" strokeWidth="2" className="animate-dash animation-delay-1500" />
                        <path d="M550,200 Q700,400 850,350" fill="none" stroke="url(#grad1)" strokeWidth="2" className="animate-dash animation-delay-2000" />
                    </g>
                </svg>
            </div>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />

            {/* CSS Animations */}
            <style jsx>{`
                .animate-dash {
                    stroke-dasharray: 10;
                    stroke-dashoffset: 1000;
                    animation: dash 3s linear infinite;
                }
                .animation-delay-500 { animation-delay: 0.5s; }
                .animation-delay-1000 { animation-delay: 1.0s; }
                .animation-delay-1500 { animation-delay: 1.5s; }
                .animation-delay-2000 { animation-delay: 2.0s; }
                
                .animate-twinkle {
                    animation: twinkle 4s ease-in-out infinite;
                }
                .delay-1 { animation-delay: 1s; }
                .delay-2 { animation-delay: 2s; }
                .delay-3 { animation-delay: 3s; }

                @keyframes dash {
                    to { stroke-dashoffset: 0; }
                }

                @keyframes twinkle {
                    0%, 100% { opacity: 0.3; r: 3px; }
                    50% { opacity: 1; r: 5px; fill: var(--primary); }
                }
            `}</style>
        </div>
    )
}
