'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'

interface Logo {
    name: string
    src?: string
    icon?: React.ReactNode
}

interface LogoMarqueeProps {
    logos: Logo[]
    className?: string
    speed?: 'slow' | 'normal' | 'fast'
    pauseOnHover?: boolean
    direction?: 'left' | 'right'
}

export function LogoMarquee({
    logos,
    className,
    speed = 'normal',
    pauseOnHover = true,
    direction = 'left',
}: LogoMarqueeProps) {
    const speedMap = {
        slow: '60s',
        normal: '40s',
        fast: '20s',
    }

    return (
        <div
            className={cn(
                'relative flex overflow-hidden',
                pauseOnHover && '[&:hover_.marquee-content]:pause',
                className
            )}
        >
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

            {/* Marquee content - duplicated for seamless loop */}
            {[0, 1].map((i) => (
                <div
                    key={i}
                    className="marquee-content flex shrink-0 items-center gap-16 px-8"
                    style={{
                        animation: `marquee-${direction} ${speedMap[speed]} linear infinite`,
                    }}
                >
                    {logos.map((logo, index) => (
                        <div
                            key={`${logo.name}-${index}`}
                            className="flex items-center justify-center min-w-[120px] h-16 px-4 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                        >
                            {logo.icon ? (
                                <div className="text-4xl font-bold text-muted-foreground">{logo.icon}</div>
                            ) : logo.src ? (
                                <Image
                                    src={logo.src}
                                    alt={logo.name}
                                    width={120}
                                    height={40}
                                    className="object-contain"
                                />
                            ) : (
                                <span className="text-lg font-semibold text-muted-foreground whitespace-nowrap">
                                    {logo.name}
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            ))}

            <style jsx>{`
        @keyframes marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
        @keyframes marquee-right {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .pause {
          animation-play-state: paused !important;
        }
      `}</style>
        </div>
    )
}
