'use client'

import React, { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

export const BackgroundBeams = ({ className }: { className?: string }) => {
    const beamsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Simple pure CSS animation approach for better performance than complex JS canvas for now
        // We can enhance this with canvas if needed later
    }, [])

    return (
        <div
            ref={beamsRef}
            className={cn(
                'absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_center,white,transparent)]',
                className
            )}
        >
            <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 opacity-50 blur-[100px] animate-pulse-slow" />
            <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
                <div className="absolute -left-[10%] -top-[10%] h-[50%] w-[50%] rounded-full bg-[rgb(160,34,34)]/10 blur-[120px] animate-blob" />
                <div className="absolute -right-[10%] -top-[10%] h-[50%] w-[50%] rounded-full bg-purple-500/10 blur-[120px] animate-blob animation-delay-2000" />
                <div className="absolute -bottom-[20%] left-[20%] h-[60%] w-[60%] rounded-full bg-indigo-500/10 blur-[120px] animate-blob animation-delay-4000" />
            </div>
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
        </div>
    )
}
