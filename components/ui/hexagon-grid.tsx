'use client'

import { useEffect, useState } from 'react'

export const HexagonGrid = () => {
    // Use a fixed set of "active" hexagons to animate
    // Reduced count for performance
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    // Interactive pulse effect using pure CSS
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            {/* Base Grid Pattern (Static SVG) */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='104' viewBox='0 0 60 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-opacity='1' fill='%239f2220' fill-rule='evenodd'/%3E%3Cpath d='M30 104l25.98-15V59L30 44 4.02 59v30z' fill-opacity='1' fill='%239f2220' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 104px'
                }}
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />

            {/* Animated Hexagons (CSS Animation) */}
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute animate-pulse-slow"
                        style={{
                            left: `${(i * 17) % 90 + 5}%`,
                            top: `${(i * 13) % 80 + 10}%`,
                            animationDelay: `${i * 0.5}s`,
                            width: '40px',
                            height: '46px', // Proportions for hex
                        }}
                    >
                        {/* CSS Hexagon */}
                        <div className="w-full h-full bg-primary/5 backdrop-blur-[1px] border border-primary/20 flex items-center justify-center"
                            style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
                        >
                            <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .animate-pulse-slow {
          animation: pulse-fade 4s ease-in-out infinite;
        }
        @keyframes pulse-fade {
          0%, 100% { opacity: 0; transform: scale(0.9); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
      `}</style>
        </div>
    )
}
